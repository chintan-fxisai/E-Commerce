from rest_framework import serializers
from .models import User
import re
from rest_framework.exceptions import ValidationError 
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.mail import send_mail

# Serializer for User Registraition
class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type' : 'password'}, write_only= True)

    class Meta:    
        model = User
        fields = ['name','email', 'password']
        extra_kwargs = {
            'password' : {'write_only' : True}
        }


    # Validate the name field
    def validate_name(self, value):
        if len(value) < 3:
            raise serializers.ValidationError("Name must be at least 3 characters long.")
        if not value.replace(" ", "").isalpha():
            raise serializers.ValidationError("Name must contain only alphabetic characters.")
        return value

    # Validate the email field with regex
    def validate_email(self, value):
        email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(email_regex, value):
            raise serializers.ValidationError("Invalid email.")
        return value

    # create in-built method 
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

# Serializer for login
class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)
    class Meta:
        model = User
        fields = ['email', 'password']  

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name']



class UserSendPasswordResetEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)

    def validate(self, attrs):
        email = attrs.get('email')
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uid = urlsafe_base64_encode(force_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            link = f'http://localhost:5173/reset-password/{uid}/{token}'
            send_mail(
                subject="Password Reset Request",
                message=f"Click the link below to reset your password:\n{link}",
                from_email="Test@Django.com",
                recipient_list=[email],
                fail_silently=False,
            )
            return attrs
        else:
            raise ValidationError("No user is associated with this email address.")


class UserPasswordResetSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=255, style={'input_type': 'password'}, write_only=True)
    confirm_password = serializers.CharField(max_length=255, style={'input_type': 'password'}, write_only=True)
    uid = serializers.CharField()
    token = serializers.CharField()

    def validate(self, attrs):
        try:
            uid = smart_str(urlsafe_base64_decode(attrs.get('uid')))
            user = User.objects.get(id=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            raise ValidationError("Invalid UID or user does not exist.")
        except DjangoUnicodeDecodeError:
            raise ValidationError("Invalid UID encoding.")

        token = attrs.get('token')
        if not PasswordResetTokenGenerator().check_token(user, token):
            raise ValidationError("Invalid or expired token.")

        if attrs.get('password') != attrs.get('confirm_password'):
            raise ValidationError("Passwords do not match.")

        attrs['user'] = user
        return attrs

    def save(self):
        user = self.validated_data.get('user')
        user.set_password(self.validated_data.get('password'))
        user.save()
        return user
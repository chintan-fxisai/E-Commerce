from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import UserRegistrationSerializer, UserLoginSerializer, UserProfileSerializer, UserSendPasswordResetEmailSerializer, UserPasswordResetSerializer
from django.contrib.auth import authenticate
from account.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated


# Creating JWT Tokens manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


# View For User Registration
class UserRegistrationView(APIView):

    renderer_classes = [UserRenderer]  #Helps in getting custom errors
    
    def post(self, request, format = None): #This is Method to post data
        serializer = UserRegistrationSerializer(data = request.data)   # Passing data givent by user to serializer
        if serializer.is_valid(raise_exception=True):   
            user = serializer.save()
            token = get_tokens_for_user(user)  #Token generated when user created
            return Response({"token": token, "msg": "Registrations Successfull !!!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)


# View for Login
class UserLoginview(APIView):
    def post(self,request, format = None):
        serializer = UserLoginSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            user = authenticate(email = email, password = password) #This will authenticate the credentials given by user
            token = get_tokens_for_user(user)
            if user is not None:
                return Response({"token":token, "msg":"Login SuccessFull!!"}, status=status.HTTP_200_OK)
            else:
                return Response({'errors':{'non_field_errors':['Credentials are Not valid!!']}}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


# This is User Profile View
class UserProfileView(APIView):
    renderer_classes = [UserRenderer] #Custom Renderer class
    permission_classes = [IsAuthenticated] #Persmission class to get organized ouptut
    def get(self, request, formate = None): #Get method to get data 
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

# #The View for Password Change
# class UserChangePasswordView(APIView): 
#     renderer_classes = [UserRenderer]
#     permission_classes = [IsAuthenticated]

#     def post(self, request, formate = None):
#         serializer = UserChangePasswordSerializer(data = request.data, context = {'user': request.user})
#         if serializer.is_valid(raise_exception=True):
#             return Response({'msg': 'Password Changed Succesfully!!'}, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    
# class SendPasswordResetEmailView(APIView):
#     renderer_classes = [UserRenderer]

#     def post(self, request, format=None):
#         serializer = UserSendPasswordResetEmailSerializer(data = request.data)

#         if serializer.is_valid(raise_exception=True):
#             return Response({"msg":"Password Reset Link sent in mail. Please Check your mail!!"}, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SendPasswordResetEmailView(APIView):
    def post(self, request, format=None):
        serializer = UserSendPasswordResetEmailSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            return Response({"msg": "Password reset link sent. Please check your email."}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserPasswordResetView(APIView):
    def post(self, request, format=None):
        serializer = UserPasswordResetSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({"msg": "Password reset successful!"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
from django.urls import path,include
from user.views import UserRegistrationView, UserLoginview, UserProfileView, SendPasswordResetEmailView, UserPasswordResetView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/',UserLoginview.as_view(), name='login'),
    path('profile/',UserProfileView.as_view(), name='profile'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/', UserPasswordResetView.as_view(), name='reset-password'),
]

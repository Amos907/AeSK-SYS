from django.urls import path
from .views import RegisterView, LoginView, MemberView, LogoutView, ExperienceView, LogoutView, MyTokenObtainPairView

from rest_framework_simplejwt.views import (

    TokenRefreshView,
)
urlpatterns = [
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('apply/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('details/', MemberView.as_view(), name='member'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('experience/', ExperienceView.as_view(), name='experience'),
    path('logout/', LogoutView.as_view(), name='logout'),
]

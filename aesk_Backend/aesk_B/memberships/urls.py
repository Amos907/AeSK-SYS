from django.urls import path
from .views import MembershipView

urlpatterns = [
    path('membership', MembershipView.as_View, name='membership'),
]

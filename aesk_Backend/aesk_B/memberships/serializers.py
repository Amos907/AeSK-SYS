from rest_framework import serializers
from .models import Memberships


class MembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Memberships
        fields = []
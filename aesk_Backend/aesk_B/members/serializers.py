from rest_framework import serializers
from .models import Member, Experience


class MemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = Member
        fields = ['id', 'aesk_code', 'first_name',
                  'last_name', 'email', 'alt_email', 'phone', 'alt_phone', 'dob']
        # extra_kwargs = {
        #     'password': {'write-only': False}
        # }

        # Password Hash

        # def create(self,validated_data):
        #     password = validated_data.pop('password',None)
        #     instance = self.Meta.model(**validated_data)

        #     if password is not None:
        #         instance.set_password(password)

        #     instance.save()
        #     return instance


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ['aesk_code', 'employment_status',
                  'job_title', 'department', 'business_sector', 'organization_name']

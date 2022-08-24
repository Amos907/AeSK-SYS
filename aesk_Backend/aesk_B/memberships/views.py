from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Memberships
from .serializers import MembershipSerializer
# Create your views here.


class MembershipsView(APIView):
    def get(self, request):
        aesk_code = request.data['aesk_code']
        memberships = Memberships.objects.filter(aesk_code=aesk_code).first()
        serializer = MembershipSerializer(data=memberships)
        return Response(serializer.data)

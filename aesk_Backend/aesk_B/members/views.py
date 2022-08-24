from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import MemberSerializer, ExperienceSerializer
from .models import Member, Experience
import jwt
import datetime
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.name
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(APIView):
    def post(self, request):
        serializer = MemberSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        aesk_code = request.data['aesk_code']
        member = Member.objects.filter(aesk_code=aesk_code).first()

        if member is None:
            raise AuthenticationFailed('Member not found.')

        # Password Validation
        # if not member.check_password(password):
        #     raise AuthenticationFailed('Incorect Password')

        payload = {
            'aesk_code': member.aesk_code,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        # Generate token and return it as cookie

        token = jwt.encode(payload, 'secret',
                           algorithm='HS256').decode('utf-8')

        response = Response()
        response.set_cookie(key='csrftoken', value=token,
                            httponly=True)
        response.data = {
            'jwt': token
        }
        return response


class MemberView(APIView):
    def get(self, request):
        token = request.COOKIES.get('csrftoken')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithm='HS256')

        except jwt.ExpiredSignatureError:

            raise AuthenticationFailed('Unauthenticated!')

        member = Member.objects.filter(aesk_code=payload['aesk_code']).first()
        serializer = MemberSerializer(member)

        return Response(serializer.data)


class ExperienceView(APIView):
    def post(self, request):
        serializer = ExperienceSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def get(self, request):
        aesk_code = request.data['aesk_code']
        experience = Experience.objects.filter(
            aesk_code=aesk_code).first()
        serializer = ExperienceSerializer(experience)
        return Response(serializer.data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('csrftoken')
        response.data = {
            'message': 'Success'
        }
        return response

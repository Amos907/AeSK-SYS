from django.db import models

# Create your models here.


class Member(models.Model):
    id = models.AutoField(primary_key=True)
    aesk_code = models.CharField(
        max_length=200, unique=True, null=True, blank=True)
    first_name = models.CharField(max_length=200, null=True, blank=True)
    middle_name = models.CharField(max_length=200, null=True, blank=True)
    last_name = models.CharField(max_length=200, null=True, blank=True)
    email = models.CharField(
        max_length=200, unique=True, null=True, blank=True)
    alt_email = models.CharField(
        max_length=200, unique=True, null=True, blank=True)
    phone = models.CharField(
        max_length=200, unique=True, null=True, blank=True)
    alt_phone = models.CharField(
        max_length=200, unique=True, null=True, blank=True)
    dob = models.DateField(null=True, blank=True)


class Experience(models.Model):
    aesk_code = models.OneToOneField(
        Member, on_delete=models.CASCADE, primary_key=True)
    employment_status = models.CharField(
        max_length=200, unique=True, null=True, blank=True)
    job_title = models.CharField(
        max_length=200, unique=True, null=True, blank=True)
    department = models.CharField(
        max_length=200, unique=True, null=True, blank=True)
    business_sector = models.CharField(
        max_length=200, unique=True, null=True, blank=True)
    organization_name = models.CharField(
        max_length=200, unique=True, null=True, blank=True)

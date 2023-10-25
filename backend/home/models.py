from django.conf import settings
from django.db import models


class Gahana(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=100,
    )
    description = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
    )


class OQOO(models.Model):
    "Generated Model"
    d2 = models.BigIntegerField()
    d3 = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    d4 = models.BigIntegerField(
        null=True,
        blank=True,
    )
    f2 = models.EmailField(
        max_length=254,
        null=True,
        blank=True,
    )
    f3 = models.PositiveSmallIntegerField(
        null=True,
        blank=True,
    )

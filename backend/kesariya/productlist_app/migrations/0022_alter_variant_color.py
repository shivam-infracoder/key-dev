# Generated by Django 5.0.1 on 2024-01-13 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productlist_app', '0021_variant_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='variant',
            name='color',
            field=models.CharField(max_length=15, unique=True),
        ),
    ]
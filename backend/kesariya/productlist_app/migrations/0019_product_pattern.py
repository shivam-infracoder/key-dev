# Generated by Django 5.0.1 on 2024-01-13 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productlist_app', '0018_product_occasion_variant_video'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='pattern',
            field=models.CharField(choices=[('1', 'Print'), ('2', 'Solid')], max_length=2, null=True),
        ),
    ]

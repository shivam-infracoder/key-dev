# Generated by Django 5.0.1 on 2024-02-06 07:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('productlist_app', '0033_alter_product_occasion'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='occasion',
        ),
    ]

# Generated by Django 5.0.1 on 2024-01-17 05:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productlist_app', '0023_remove_product_bottom_color_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, upload_to=''),
        ),
    ]

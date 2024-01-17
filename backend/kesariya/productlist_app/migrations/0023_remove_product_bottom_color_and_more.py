# Generated by Django 5.0.1 on 2024-01-17 02:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productlist_app', '0022_alter_variant_color'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='bottom_color',
        ),
        migrations.RemoveField(
            model_name='product',
            name='dupata_color',
        ),
        migrations.RemoveField(
            model_name='product',
            name='top_color',
        ),
        migrations.AlterField(
            model_name='variant',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='variants', to='productlist_app.product'),
        ),
    ]

# Generated by Django 5.0.1 on 2024-02-06 07:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productlist_app', '0034_remove_product_occasion'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Occasion',
        ),
        migrations.AddField(
            model_name='product',
            name='occasion',
            field=models.CharField(choices=[('1', 'Ethinic'), ('2', 'Party')], max_length=2, null=True),
        ),
    ]
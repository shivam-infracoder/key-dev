from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Product, Variant


# class SizeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model= Size
#         fields = ['name']

# class ItemSizeSerializer(serializers.ModelSerializer):
#     # size = SizeSerializer()
#     class Meta:
#         model = ItemSizeCount
#         fields = ['count ']

class VariantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variant
        fields = '__all__'
        
class ProductSerializer(serializers.ModelSerializer):
    # sizes = ItemSizeSerializer(many=True, read_only=True)
    # size = ItemSizeSerializer(read_only=True, many=True)
    variants =  VariantSerializer(many=True)
    class Meta:
        model = Product
        fields = ['_id','item_code','name','brand','category','washing','description','variants','rating','numReviews','price','image','occasion','top_fabric','top_length','bottom_fabric','bottom_length','dupata_fabric','dupata_length']
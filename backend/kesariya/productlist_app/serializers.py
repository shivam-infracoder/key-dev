from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Product


# class SizeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model= Size
#         fields = ['name']

# class ItemSizeSerializer(serializers.ModelSerializer):
#     # size = SizeSerializer()
#     class Meta:
#         model = ItemSizeCount
#         fields = ['count ']
        
class ProductSerializer(serializers.ModelSerializer):
    # sizes = ItemSizeSerializer(many=True, read_only=True)
    # size = ItemSizeSerializer(read_only=True, many=True)
    class Meta:
        model = Product
        fields = ['_id','item_code','name','brand','category','washing','description']
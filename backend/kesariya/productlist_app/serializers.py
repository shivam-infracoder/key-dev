from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Product, Variant, Category, Order, OrderItem, ShippingAddress, Occasion, Washing, Pattern


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
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class OccasionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Occasion
        fields = '__all__'


class PatternSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pattern
        fields = '__all__'
        
class WashingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Washing
        fields = '__all__'
        
class ProductSerializer(serializers.ModelSerializer):
    # sizes = ItemSizeSerializer(many=True, read_only=True)
    # size = ItemSizeSerializer(read_only=True, many=True)
    category = CategorySerializer()
    pattern = PatternSerializer()
    occasion = OccasionSerializer()
    washing = WashingSerializer()
    variants =  VariantSerializer(many=True)
    class Meta:
        model = Product
        fields = ['_id','item_code','name','brand','category','washing','description','category','variants','rating','numReviews','price','image','occasion','pattern','top_fabric','top_length','bottom_fabric','bottom_length','dupata_fabric','dupata_length','count_in_stock']
class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    orderItems = serializers.SerializerMethodField(read_only=True)
    shippingAddress = serializers.SerializerMethodField(read_only=True)
    # user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def get_orderItems(self, obj):
        items = obj.orderitem_set.all()
        serializer = OrderItemSerializer(items, many=True)
        return serializer.data

    def get_shippingAddress(self, obj):
        try:
            address = ShippingAddressSerializer(
                obj.shippingaddress, many=False).data
        except:
            address = False
        return address

    
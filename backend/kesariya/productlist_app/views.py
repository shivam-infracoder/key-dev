# Shivam Infra Coder 

from django.shortcuts import render
from productlist_app.models import Product
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ProductSerializer, CategorySerializer


# Create your views here.

# Function based view test
@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializers = ProductSerializer(products, many=True)
    # list(products.values())
    
    return Response(serializers.data)

@api_view(['GET'])
def product_details(request, pk):
    product = Product.objects.get(pk=pk)
    serializers = ProductSerializer(product)
    data = {
        'name': product.name,
        'desc': product.description,
        
    }
    return Response(serializers.data)


class ProductByCategory(APIView):
    def get(self,request,category_id):
        products = Product.objects.filter(category__id=category_id)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
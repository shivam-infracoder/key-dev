# Shivam Infra Coder 

from django.shortcuts import render
from productlist_app.models import Product
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ProductSerializer


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
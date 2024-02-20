# Shivam Infra Coder 

from django.shortcuts import render
from productlist_app.models import Product, Order, OrderItem, ShippingAddress, FeaturedProduct, Category, Pattern, Collection
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ProductSerializer, CategorySerializer, FeaturedProductSerializer, PatternSerializer, CollectionSerializer


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


class CategoryList(APIView):
    def get(self,request):
        categories=Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

class CollectionList(APIView):
    def get(self,request):
        categories=Collection.objects.all()
        serializer = CollectionSerializer(categories, many=True)
        return Response(serializer.data)
    
class PatternList(APIView):
    def get(self,request):
        patterns = Pattern.objects.all()
        # pattern=Pattern.objects.all()
        serializer = PatternSerializer(patterns,many=True)
        
        return Response(serializer.data)

class ProductByCategory(APIView):
    def get(self,request,category_id):
        products = Product.objects.filter(category__id=category_id)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    

class ProductByPattern(APIView):
    def get(self,request,pattern_id):
        products = Product.objects.filter(pattern_id=pattern_id)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
class ProductByStyleCode(APIView):
    def get(self,request,style):
        products = Product.objects.filter(style_code=style)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
    


class FeaturedProductList(APIView):
    def get(self,request):
        products = FeaturedProduct.objects.all()
        serializer = FeaturedProductSerializer(products, many=True)
        # print()
        return Response(serializer.data)
    
#order view  

@api_view(['POST'])
def addOrderItems(request):
    # user = request.user
    data = request.data 
    orderItems = data['orderItems']
    if orderItems and len(orderItems) == 0:
        return Response({'details':'No order Items','status':'400 Bad Request'})
    else:
       order = Order.objects.create(
                user=data['name'],
                payment_method=data['paymentMethod'],
                shipping_price='100',
                total_price=data['totalPrice'],
                date=data['date'],
                time=data['time'],
                name=data['name'],
                contact=data['contact']
                
              
        )
       shipping = ShippingAddress.objects.create(
                    order=order,
                    shipping_address=data['shippingAddress']['address'],
                    city=data['shippingAddress']['city'],
                    postal_code=data['shippingAddress']['postalCode']
            )
       for i in orderItems:
           product= Product.objects.get(_id=i['product'])
           
           item = OrderItem.objects.create(
               product=product,
               order=order,
               name=product.name,
               qty=i['qty'],
               price=i['price'],
               image=product.image.url
               
           )
           
           product.count_in_stock -= item.qty
           product.save()
           
    return Response('ORDER')

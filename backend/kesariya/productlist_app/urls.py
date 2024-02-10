
from django.urls import path, include
from productlist_app.views import product_list, product_details, ProductByCategory, addOrderItems

urlpatterns = [
    path('list/', product_list, name='product-list'),
    path('<int:pk>', product_details, name='product-details'),
    path('category/<int:category_id>', ProductByCategory.as_view(), name='product-by-category'),
    path('order/create',addOrderItems,name='orders-add')
]

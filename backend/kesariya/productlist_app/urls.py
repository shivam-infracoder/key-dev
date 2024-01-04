
from django.urls import path, include
from productlist_app.views import product_list, product_details

urlpatterns = [
    path('list/', product_list, name='product-list'),
    path('<int:pk>', product_details, name='product-details')
]

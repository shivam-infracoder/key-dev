from django.contrib import admin
from productlist_app.models import *
# Register your models her

# admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Review)
# admin.site.register(ShippingAddress)
admin.site.register(ShippingAddress)

@admin.register(Product)
class PersonAdmin(admin.ModelAdmin):
    list_display = ("name","item_code", "category","rating",'countInStock','price','size')
    list_filter = ("category",'item_code','washing')
    search_fields = ("name__startswith", )
# class Product(admin.ModelAdmin):
#     list_display = ["name", "category", "brand", "price"]
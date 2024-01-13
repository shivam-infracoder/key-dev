from django.contrib import admin
from productlist_app.models import *
from django.forms import TextInput, Textarea, NumberInput, FileInput
# Register your models her

# admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Review)
# admin.site.register(ShippingAddress)
admin.site.register(ShippingAddress)
# admin.site.register(Size)
# admin.site.register(ItemSizeCount)
# admin.site.register(Image)
admin.site.register(Variant)


# class ProductImageInline(admin.TabularInline):
#     model = Image
#     readonly_fields=('id',)
#     extra = 1
    
    
class ProductVariantInline(admin.TabularInline):
    model = Variant
    readonly_fields=('id','image_tag','video_tag')
    extra = 1
    formfield_overrides = {
        models.CharField: {'widget': TextInput(attrs={'size':'5'})},
        models.PositiveIntegerField: {'widget': NumberInput(attrs={'style': 'width:5ch'})},
        models.ImageField: {'widget': FileInput(attrs={'style': 'width:14ch'})},
        models.FileField: {'widget': FileInput(attrs={'style': 'width:14ch'})},
    }
    classes= ('collapse',)
    show_change_link = True
    
@admin.register(Product)
class PersonAdmin(admin.ModelAdmin):
    list_display = ("name","item_code", "category","rating",'price',)
    list_filter = ("category",'item_code','washing','occasion','pattern','brand')
    search_fields = ("name__startswith", )
    inlines = [ProductVariantInline]
# class Product(admin.ModelAdmin):
#     list_display = ["name", "category", "brand", "price"]
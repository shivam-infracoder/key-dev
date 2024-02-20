from django.db import models
from django.contrib.auth.models import User
from django.utils.safestring import mark_safe

# Create your models here.
# class Product(models.Model):
#     user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
#     name = models.CharField(max_length=200, null=True, blank=True)
#     brand = models.CharField(max_length=200, null=True, blank=True) 
#     category = models.CharField(max_length=200, null=True, blank=True) 
#     description = models.TextField(null=True, blank=True) 
#     rating = models.DecimalField(max_digits=7, decimal_places=2,null=True, blank=True) 
#     numReviews = models.IntegerField(null=True, blank=True,default=0,)
#     price = models.DecimalField(max_digits=7, decimal_places=2)  
#     countInStock = models.IntegerField( null=True, blank=True, default=0)  
#     createdAt = models.DateTimeField(auto_now_add=True)
#     # _id= models.AutoField(primary_key=True, editable=False)  
#     _id = models.AutoField(primary_key=True, editable=False)
    
#     def __str__(self):
#         return self.name

class Category(models.Model):
    name = models.CharField(max_length = 255)
    image = models.ImageField(blank=True)
    video = models.FileField(blank=True)
    
    def __str__(self):
        return self.name
    
class Occasion(models.Model):
    name = models.CharField(max_length = 255)
    image = models.ImageField(blank=True)
    video = models.FileField(blank=True)    
    def __str__(self):
        return self.name
    

class Washing(models.Model):
    name = models.CharField(max_length = 255)
    image = models.ImageField(blank=True)
    video = models.FileField(blank=True)    
    def __str__(self):
        return self.name
    
class Pattern(models.Model):
    name = models.CharField(max_length = 255)
    image = models.ImageField(blank=True)
    video = models.FileField(blank=True)    
    def __str__(self):
        return self.name
    
class Collection(models.Model):
    name = models.CharField(max_length = 255)
    image = models.ImageField(blank=True)
    video = models.FileField(blank=True)    
    def __str__(self):
        return self.name
    
class Product(models.Model):
    CATEGORY_CHOICES = (
    ('1','Stiched'),
    ('2','Unstiched'),
    )
    WASHING_CHOICES = (
    ('1', 'Dry-Clean'),
    ('2', 'Easy Wash'),
    )
    PATTERN_CHOICE = (
        ('1','Print'),
        ('2','Solid'),
    )
   
    
    
    
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    item_code = models.CharField(max_length=6,null=True,blank=True, unique=True)
    style_code = models.CharField(max_length=6,null=True,blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    # image = models.ImageField(null=True, blank=True,
                            #   default='/placeholder.png')
    brand = models.CharField(max_length=200, null=True, blank=True)
    # category = models.CharField(choices=CATEGORY_CHOICES, max_length=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, null=True, blank=True)

    pattern = models.ForeignKey(Pattern, on_delete=models.CASCADE)
    occasion = models.ForeignKey(Occasion, on_delete=models.CASCADE)
    # size=models.CharField(max_length=20, null=True,blank=True)
    # size = models.ManyToManyField('Size',through='ItemSizeCount')
    washing = models.ForeignKey(Washing, on_delete=models.CASCADE)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(
        max_digits=5, decimal_places=2, null=True, blank=True,default=0.00)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    # countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)


    top_fabric = models.CharField(max_length=20, null=True,blank=True)
    # top_color  = models.CharField(max_length=20, null=True,blank=True)
    top_length = models.IntegerField(max_length=20, null=True,blank=True)
    bottom_fabric = models.CharField(max_length=20, null=True,blank=True)
    # bottom_color = models.CharField(max_length=20, null=True,blank=True)
    bottom_length = models.IntegerField(max_length=20, null=True,blank=True)
    dupata_fabric = models.CharField(max_length=20, null=True,blank=True)
    # dupata_color = models.CharField(max_length=20, null=True,blank=True)
    dupata_length = models.IntegerField(max_length=20, null=True,blank=True)
    # size=models.CharField(max_length=20, null=True,blank=True)
    image = models.ImageField(blank=True)
    video = models.FileField(blank=True)
    count_in_stock=models.PositiveIntegerField(default =0, blank=True, null=True)
    
    
    class Meta:
        unique_together = ("name", "category", )
    
    # class Meta:
    #     verbose_name = "concert category"
    #     verbose_name_plural = "concert categories"
    #     ordering = ["-category"]
    def __str__(self):
        return self.name
    
# class Image(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
#     image = models.ImageField(blank=True, upload_to='images')
#     def __str__(self):
#         return self.product.name
#     def image_tag(self):
#         if self.image.url is not None:
#             return ma


class Variant(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='variants') 
    color=   models.CharField(max_length=15,unique=True)
    S = models.PositiveIntegerField(default=0,max_length=2)
    M = models.PositiveIntegerField(default=0)
    L = models.PositiveIntegerField(default=0)
    XL = models.PositiveIntegerField(default=0)
    XXL = models.PositiveIntegerField(default=0)
   
    # image = models.ImageField(blank=True)
    # video = models.FileField(blank=True)
    
    
    def __str__(self):
        return self.product.name
    
    def image_tag(self):
        if self.image.url is not None:
            return mark_safe('<img src="{}" height = "30"/>'.format(self.image.url)) 
        else:
            return ""   
        
    def video_tag(self):
        if self.video.url is not None:
            return mark_safe('<a  href="{}" height = "30" target="_blank"> Link</a>'.format(self.video.url)) 
        else:
            return ""   
# class Size(models.Model):
#     name = models.CharField(max_length=5)
    
# class ItemSizeCount(models.Model):
#     product_name = models.ForeignKey(Product, on_delete=models.CASCADE)
#     size = models.ForeignKey(Size,on_delete=models.CASCADE)
#     count = models.PositiveIntegerField(default=0)

# Review models

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null = True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating =  models.IntegerField(null=True,blank=True,default=0)
    comment = models.TextField(null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)

class Order(models.Model):
        # user = models.ForeignKey(User, on_delete=models.SET_NULL, null = True)
        user=models.CharField(max_length=200, null=True, blank=True)
        payment_method  = models.CharField(max_length=200, null=True, blank=True)
        tax_price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
        shipping_price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
        total_price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
        isPaid = models.BooleanField(default=False)
        paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
        isDelivered = models.BooleanField(default=False)
        deliverAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
        createdAt = models.DateTimeField(auto_now_add=True),
        date  = models.CharField(max_length=200, null=True, blank=True)
        time  = models.CharField(max_length=200, null=True, blank=True)
        name  = models.CharField(max_length=200, null=True, blank=True)
        contact  = models.CharField(max_length=200, null=True, blank=True)
        _id = models.AutoField(primary_key=True, editable=False)
   
        def __str__(self):
            return str(self.user)
        
        
class OrderItem(models.Model):
    # user
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name  = models.CharField(max_length=200, null=True, blank=True)
    qty =  models.IntegerField(null=True,blank=True,default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    product=models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    def __str__(self):
        return self.name

class ShippingAddress(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank = True)
    shipping_address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postal_code = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shipping_price  = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return (self.shipping_address)
    
    
# class ShippingAddress:

# Featured model 
class FeaturedProduct(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    
    def __str__(self):
        return self.product.name
    
    
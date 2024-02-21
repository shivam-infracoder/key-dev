
from django.urls import path, include
from productlist_app.views import product_list, product_details, ProductByCategory, addOrderItems,FeaturedProductList, PatternList, CategoryList, ProductByPattern, ProductByStyleCode, CollectionList, CollectionProduct, OccasionList, OccasionProduct

urlpatterns = [
    path('list/', product_list, name='product-list'),
    path('<int:pk>', product_details, name='product-details'),
    path('category/<int:category_id>', ProductByCategory.as_view(), name='product-by-category'),
    path('order/create',addOrderItems,name='orders-add'),
    path('featured/', FeaturedProductList.as_view(), name='product-featured'),
    path('pattern/', PatternList.as_view(), name='pattern-list'),
    path('category/', CategoryList.as_view(), name='category-list'),
    path('pattern/<int:pattern_id>', ProductByPattern.as_view(), name='product-by-pattern'),
    path('style/<str:style>', ProductByStyleCode.as_view(), name='product-by-style'),
    path('collections/', CollectionList.as_view(), name='collection-list'),
    path('collections/<int:id>', CollectionProduct.as_view(), name='collections-details'),
    path('occasions/', OccasionList.as_view(), name='occasion-list'),
    path('occasions/<int:id>', OccasionProduct.as_view(), name='occasion-details'),
]

from django.urls import path
from .views import ProductView, ProductImageView, CategoryView, SubCategoryView



urlpatterns = [
    path('products/', ProductView.as_view(), name='Products'),
]


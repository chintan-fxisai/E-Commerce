from django.contrib import admin
from .models import Product, Category, subCategory, ProductImage

# Register your models here.


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'subcategory', 'description',
                    'price', 'quantity', 'is_active', 'created_at', 'image']
    list_filter = ['subcategory', 'is_active']
    search_fields = ['name', 'subcategory__name']


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'description', 'created_at']
    search_fields = ['name']


@admin.register(subCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'category', 'description', 'created_at']
    list_filter = ['category']
    search_fields = ['name', 'category__name']


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ['product', 'created_at']
    search_fields = ['product__name']

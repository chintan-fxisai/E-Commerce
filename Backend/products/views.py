from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product, ProductImage, Category, subCategory
from .serializers import ProductSerializer, ProductImageSerializer, CategorySerializer, SubCategorySerializer
from rest_framework.pagination import PageNumberPagination

# Create your views here.


class CategoryView(APIView):
    def get(self, request, format =None):
        category = Category.objects.all()
        serializer = CategorySerializer(category, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class SubCategoryView(APIView):
    def get(self, request, format=None):
        sub_category = subCategory.objects.all()
        serializer = SubCategorySerializer(sub_category, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class customProductPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 5

class ProductView(APIView, customProductPagination):
    def get(self, request, format=None):
        products = Product.objects.all()
        paginator = customProductPagination()
        paginated_data = paginator.paginate_queryset(products, request)
        product_serializer = ProductSerializer(paginated_data, many=True)
        return paginator.get_paginated_response(product_serializer.data)

class ProductImageView(APIView):
    def get(self, request, format = None):
        product_images = ProductImage.objects.all()
        serializer = ProductSerializer(product_images, many = True)
        return Response(serializer.data,status=status.HTTP_200_OK)     
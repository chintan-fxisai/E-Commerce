from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product, ProductImage, Category, subCategory
from .serializers import ProductSerializer, ProductImageSerializer, CategorySerializer, SubCategorySerializer

# Create your views here.


class CategoryView(APIView):
    def get(self, request, format =None):
        category = Category.objects.all()
        serializer = CategorySerializer(data = category, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class SubCategoryView(APIView):
    def get(self, request, format=None):
        sub_category = subCategory.objects.all()
        serializer = SubCategorySerializer(data = sub_category, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ProductView(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()
        product_serializer = ProductSerializer(data = products, many=True)
        return Response(product_serializer.data, status=status.HTTP_200_OK)

class ProductImageView(APIView):
    def get(self, request, format = None):
        product_images = ProductImage.objects.all()
        serializer = ProductSerializer(data = product_images, many = True)
        return Response(serializer.data,status=status.HTTP_200_OK)     
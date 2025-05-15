from django.db import models
from products.models import Product
from account.models import User

class Cart(models.model):
    user = models.OneToOneField(User, related_name='user', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Cart Of User: {self.user.name}'

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name='cart_item', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='cart_product', on_delete=models.CASCADE)
    quantity = models.IntegerField(max_length=255, blank=False, null=False)
    added_at = models.DateTimeField(auto_now_add=True)

    @property
    def subtotal(self):
        return self.product.price * self.product.quantity

    def __str__(self):
        return f"{self.product.quantity} {self.product.name} in cart"
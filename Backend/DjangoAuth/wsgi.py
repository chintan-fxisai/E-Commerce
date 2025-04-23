# filepath: d:\Fxisai\E-Commerce\Backend\DjangoAuth\wsgi.py
import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'DjangoAuth.settings')

application = get_wsgi_application()
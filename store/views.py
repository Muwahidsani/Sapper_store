from django.shortcuts import render

# Create your views here.

PRODUCTS = [
    {"name": "Marble Glass Case", "model": "iPhone 15", "price": 399},
    {"name": "Midnight Matte", "model": "Samsung S24", "price": 349},
    {"name": "Clear Shock-proof", "model": "OnePlus 12", "price": 299},
    {"name": "Sunset Gradient", "model": "iPhone 14", "price": 379},
    {"name": "Leather Finish", "model": "Redmi Note 13", "price": 329},
    {"name": "Aurora Glass", "model": "iPhone 15 Pro", "price": 419},
    {"name": "Camo Rugged", "model": "Realme 12", "price": 299},
    {"name": "Candy Silicone", "model": "Samsung A55", "price": 279},
]

def home(request):
    return render(request, "store/index.html", {"products": PRODUCTS})
# 🚚 Transport API - Postman Collection

Bu Postman kolleksiyasi Transport boshqaruvi uchun API endpointlarini test qilishda yordam beradi.

## 📥 Yuklab olish

1. Shu repositoryga `Transport.postman_collection.json` faylini yuklang.
2. Postman dasturini oching.
3. `Import` tugmasini bosing.
4. Faylni tanlab yuklang: `Transport.postman_collection.json`

## 🌐 Bazaviy URL

ttps://dars14oy3.onrender.com/v1/api



## 🔐 Autentifikatsiya
Ko‘pgina endpointlar `token` talab qiladi. Avval quyidagi endpoint orqali tizimga kirib token oling:

**Login:**
POST /staff/login
Body:
{
"username": "Ali",
"password": "adminadmin"
}
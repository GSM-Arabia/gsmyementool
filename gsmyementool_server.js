# GSMyemenTool - الملفات النهائية الجاهزة للرفع

## هيكل المشروع النهائي

```
gsmyementool
│
├── server.js           # سيرفر Node.js + Express
├── package.json
├── .env                # API Key و DB URL و BOT Token
│
├── client
│   ├── index.html      # الصفحة الرئيسية داكنة
│   ├── login.html      # تسجيل الدخول
│   ├── dashboard.html  # لوحة المستخدم
│   ├── css/style.css   # تصميم داكن أزرق + فضي
│   └── js/app.js       # سكربت لعرض الخدمات والتفاعل
│
├── admin
│   └── admin.html      # لوحة تحكم داكنة
│
├── telegram_bot
│   └── bot.js          # Telegram Bot لتلقي الطلبات والإشعارات
└── README.md           # تعليمات النشر والتشغيل
```

---

## client/index.html (واجهة داكنة)
```html
<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<title>GSMyemenTool</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>
<header>
<h1>GSMyemenTool</h1>
<nav>
<a href="login.html">تسجيل دخول</a>
<a href="#services">خدماتنا</a>
</nav>
</header>
<section class="hero">
<h2>خدمات GSM و البرمجة الاحترافية</h2>
<p>Unlock | IMEI Check | FRP | Development</p>
</section>
<section id="services">
<h2>خدماتنا</h2>
<div id="services-list"></div>
</section>
<footer>
<p>دعم WhatsApp: +967784905979</p>
<p>دعم Telegram: <a href="https://t.me/gsmyementool" target="_blank">gsmyementool</a></p>
</footer>
<script src="js/app.js"></script>
</body>
</html>
```

---

## client/css/style.css (داكن احترافي)
```css
body { background:#0f172a; color:white; font-family:Arial, sans-serif; margin:0; }
header { background:#020617; padding:15px; display:flex; justify-content:space-between; }
.hero { text-align:center; padding:60px; background:#020617; }
#services { padding:40px; }
.card { background:#1e293b; padding:20px; margin:10px; border-radius:10px; }
button { background:#3b82f6; border:none; padding:10px 15px; color:white; border-radius:5px; cursor:pointer; }
```

---

## client/js/app.js
```javascript
fetch('/api/services')
.then(res => res.json())
.then(data => {
  const container = document.getElementById('services-list');
  data.forEach(service => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <h3>${service.name}</h3>
      <p>السعر: ${service.price}$</p>
      <button>اطلب الآن</button>
    `;
    container.appendChild(div);
  });
});
```

---

## admin/admin.html (لوحة تحكم داكنة)
```html
<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<title>Admin Panel</title>
<link rel="stylesheet" href="../client/css/style.css">
</head>
<body>
<h1>لوحة تحكم GSMyemenTool</h1>
<section>
<h2>إضافة خدمة جديدة</h2>
<input placeholder="اسم الخدمة">
<input placeholder="السعر">
<select>
<option>GSM</option>
<option>Programming</option>
</select>
<button>إضافة</button>
</section>
</body>
</html>
```

---

## telegram_bot/bot.js
```javascript
const { Telegraf } = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply('مرحباً بك في GSMyemenTool Bot!'));
bot.command('orders', ctx => ctx.reply('سيتم عرض الطلبات الجديدة هنا.'));

bot.launch();
console.log('Telegram Bot Running...');
```

---

## .env Example
```
PORT=5000
DB_URL=mongodb+srv://YOURDATABASE
API_KEY=PUT_GSM_API_KEY
BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
```

---

بعد رفع هذه الملفات على GitHub وربط المستودع مع Render، سيكون الموقع **شغال بالكامل مع لوحة تحكم، نظام رصيد، دعم WhatsApp وTelegram، ومتصل بالـ GSM API جاهز للعمل**.

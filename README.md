AI SaaS İçerik Oluşturma Platformu

Bu proje, PERN yığını (PostgreSQL, Express, React, Node.js) kullanılarak oluşturulmuş, abonelik tabanlı ödeme sistemine sahip, tam fonksiyonel bir AI SaaS (Hizmet Olarak Yazılım) uygulamasıdır. Kullanıcılar, Clerk ile güvenli bir şekilde kimlik doğrulama işlemlerini gerçekleştirebilir ve premium aboneliklerle gelişmiş yapay zeka özelliklerine erişebilirler.

✨ Temel Özellikler

Kullanıcı Kimlik Doğrulama: Clerk kullanılarak güvenli kayıt olma, giriş yapma ve profil yönetimi.

Abonelik Sistemi: Premium yapay zeka özelliklerine erişim için ücretli abonelik modeli (Free & Premium planlar).

Veritabanı: Neon tarafından sağlanan sunucusuz (serverless) PostgreSQL veritabanı.



🤖 Yapay Zeka Özellikleri

Uygulama, hem ücretsiz hem de premium kullanıcılara yönelik çeşitli yapay zeka araçları sunar.

Ücretsiz Araçlar

✍️ Makale Yazarı (Write Article): Belirtilen bir konu ve uzunlukta özgün makaleler üretir.

#️⃣ Blog Başlığı Üretici (Blog Titles): Verilen bir anahtar kelime ve kategori için ilgi çekici blog başlıkları oluşturur.

Premium Araçlar

🖼️ Metinden Resim Üretme (Generate Images): Yazılan bir metinden yola çıkarak Stability AI kullanarak yüksek kaliteli görseller oluşturur.

✂️ Arka Plan Silme (Remove Background): Yüklenen bir görselin arka planını Cloudinary AI ile otomatik olarak kaldırır.

✏️ Nesne Silme (Remove Object): Yüklenen bir görselden, kullanıcının belirttiği bir nesneyi akıllı bir şekilde siler.

📄 CV Analizi (Review Resume): Yüklenen PDF formatındaki CV'leri analiz eder ve iyileştirme önerileri sunar.

🚀 Kullanılan Teknolojiler

Bu proje, PERN yığını üzerine inşa edilmiştir.

💻 Frontend (Client)

React: Kullanıcı arayüzü için modern bir JavaScript kütüphanesi.

Vite: Hızlı ve modern bir geliştirme sunucusu ve derleme aracı.

Tailwind CSS: Hızla şık tasarımlar oluşturmak için kullanılan bir CSS çatısı.

Clerk: Kullanıcı kimlik doğrulama ve yetkilendirme yönetimi.

Axios: Sunucuya HTTP istekleri yapmak için kullanılan kütüphane.

Lucide React: Şık ve tutarlı ikon seti.

React Hot Toast: Kullanıcı dostu bildirimler için.

React Markdown: Üretilen metin içeriklerini formatlı bir şekilde göstermek için.

⚙️ Backend (Server)

Node.js & Express: Hızlı ve ölçeklenebilir bir sunucu ortamı.

Clerk: Sunucu tarafında kimlik doğrulama middleware'i.

PostgreSQL (NeonDB): Ölçeklenebilir ve sunucusuz (serverless) bir veritabanı.

Multer: Dosya (resim, PDF) yüklemelerini yönetmek için bir middleware.

Dotenv: Ortam değişkenlerini yönetmek için.

🤖 Yapay Zeka & Harici Servisler

Google Gemini: Metin tabanlı içerik üretimi için.

Stability AI (Stable Diffusion): Metinden resim üretimi için.

Cloudinary: Görsel depolama, sunma ve yapay zeka tabanlı görsel düzenleme (arka plan silme, nesne silme) için.

🏁 Projeyi Yerel Makinede Başlatma

Bu projeyi kendi makinenizde çalıştırmak için aşağıdaki adımları izleyin.

Gereksinimler

Node.js (v18 veya üstü)

npm veya yarn paket yöneticisi

Kurulum Adımları

Projeyi Klonlayın:

git clone [https://github.com/kullanici-adiniz/proje-adiniz.git](https://github.com/kullanici-adiniz/proje-adiniz.git)
cd proje-adiniz


Backend'i Ayarlayın (server klasörü):

server klasörüne gidin: cd server

Gerekli paketleri yükleyin: npm install

.env adında yeni bir dosya oluşturun ve aşağıdaki tüm API anahtarlarını ve veritabanı bağlantı cümlenizi bu dosyaya girin:

DATABASE_URL="postgresql://..."
CLERK_SECRET_KEY="sk_test_..."
GEMINI_API_KEY="AIzaSy..."
STABILITY_API_KEY="sk-..."
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."


Frontend'i Ayarlayın (client klasörü):

Ana dizine geri dönüp client klasörüne gidin: cd ../client

Gerekli paketleri yükleyin: npm install

.env.local adında yeni bir dosya oluşturun ve aşağıdaki değişkenleri girin:

VITE_BASE_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...


Uygulamayı Başlatın:

Backend Sunucusunu Başlatın: server klasöründeyken terminalde npm run server komutunu çalıştırın.

Frontend Geliştirme Sunucusunu Başlatın: client klasöründeyken yeni bir terminalde npm run dev komutunu çalıştırın.

Uygulamanız şimdi http://localhost:5173 adresinde çalışıyor olmalı!
Ekran Görüntüleri

<img width="1786" height="820" alt="Ekran görüntüsü 2025-10-16 162057" src="https://github.com/user-attachments/assets/b2b1f2c8-e1cc-4589-be0e-a1084135a83b" />

<img width="748" height="464" alt="Ekran görüntüsü 2025-10-16 163233" src="https://github.com/user-attachments/assets/47ccafa1-53d4-46ca-bd9a-293d4a129ca6" />

<img width="912" height="709" alt="Ekran görüntüsü 2025-10-16 163242" src="https://github.com/user-attachments/assets/7a910c98-6d1b-4db3-b766-0a8a4606b4d5" />

<img width="1302" height="508" alt="Ekran görüntüsü 2025-10-16 162111" src="https://github.com/user-attachments/assets/03abc241-a07f-443a-8589-52c60cda0886" />

<img width="1098" height="647" alt="Ekran görüntüsü 2025-10-16 162348" src="https://github.com/user-attachments/assets/65328a57-ec3b-45cb-b7df-2bf536e28a27" />

<img width="1018" height="382" alt="Ekran görüntüsü 2025-10-16 162618" src="https://github.com/user-attachments/assets/d2a57580-adfb-438a-afbb-0aa1f3c01511" />

<img width="1082" height="566" alt="Ekran görüntüsü 2025-10-16 162816" src="https://github.com/user-attachments/assets/aa65fc1c-1dbf-4751-86b8-91c8217c63fb" />

<img width="1031" height="460" alt="Ekran görüntüsü 2025-10-16 162848" src="https://github.com/user-attachments/assets/2d17d1df-db18-4eed-b9b3-84b68ee204e0" />

<img width="1013" height="412" alt="Ekran görüntüsü 2025-10-16 163102" src="https://github.com/user-attachments/assets/cc3131e8-aab1-46c4-850f-d73dc21e3ae4" />

<img width="1023" height="577" alt="Ekran görüntüsü 2025-10-16 163131" src="https://github.com/user-attachments/assets/b411453b-475f-44b0-b408-c42b8a0377ad" />

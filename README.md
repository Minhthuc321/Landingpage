# 🏦 Landing Page Thương Hiệu Cá Nhân - Nguyễn Minh Thức
> **Chuyên Gia Tư Vấn Giải Pháp Tài Chính & Tín Dụng Ngân Hàng**

Trang Landing Page cao cấp, tốc độ siêu nhanh (< 0.8s), chuẩn SEO và tối ưu trải nghiệm di động. Hỗ trợ tự động thu thập thông tin khách hàng (Lead Capture) về **Google Sheets & Telegram** hoàn toàn **MIỄN PHÍ 100%**.

![Landing Page Preview](assets/advisor.jpg)

---

## 🌟 Tính Năng Nổi Bật

- 🎨 **Giao diện Executive Luxury:** Tông màu Xanh Navy, Xanh Ngọc & Vàng Kim Metallics chuẩn nhận diện Ngân hàng/Tài chính.
- 🧮 **Công Cụ Tính Lãi Vay Tương Tác (Loan Calculator):** Tự động tính số tiền trả gốc & lãi hàng tháng theo phương thức Dư nợ giảm dần.
- 📱 **Thu Lead Tự Động:** Điền form đăng ký ➔ Tự động lưu dòng vào Google Sheet + Báo nổ tin nhắn tức thì qua Telegram trên điện thoại.
- ⚡ **Tối Ưu Hiệu Năng:** Mã nguồn HTML5/CSS3/JS thuần, chuẩn SEO Google, phản hồi 100% trên điện thoại di động & máy tính.
- 💰 **Chi Phí Vận Hành 0 VNĐ:** Chạy trực tiếp trên GitHub Pages, Vercel hoặc Netlify trọn đời.

---

## 📂 Cấu Trúc Thư Mục Dự Án

```text
Landingpage/
├── index.html               # Trang Landing Page chính
├── google-apps-script.js    # Mã nguồn Google Apps Script (Kết nối Google Sheet & Telegram)
├── assets/
│   ├── advisor.jpg          # Ảnh chân dung chuyên gia Nguyễn Minh Thức
│   └── hero-bg.jpg          # Ảnh nền đồ thị tài chính
└── README.md                # Tài liệu hướng dẫn sử dụng
```

---

## 🛠️ Hướng Dẫn Tích Hợp Google Sheet Thu Lead

1. Mở một **Bảng tính Google (Google Sheet)** mới trên Google Drive của bạn.
2. Trên thanh menu, chọn **Mở rộng (Extensions)** ➔ **Apps Script**.
3. Copy toàn bộ nội dung từ file [`google-apps-script.js`](google-apps-script.js) và dán vào Apps Script.
4. Nhấn **Triển khai (Deploy)** ➔ **Tạo bản triển khai mới (New deployment)**:
   - **Loại:** Ứng dụng Web (Web app)
   - **Thực thi dưới danh nghĩa:** Tôi (Me)
   - **Ai có quyền truy cập:** Bất kỳ ai (Anyone)
5. Copy đường dẫn **URL ứng dụng Web** thu được và mở file `index.html`, dán vào dòng:
   ```javascript
   const GOOGLE_SHEET_SCRIPT_URL = "DÁN_URL_GOOGLE_APPS_SCRIPT_CỦA_BẠN_VÀO_ĐÂY";
   ```

---

## 🚀 Hướng Dẫn Triển Khai Miễn Phí Trên Vercel / GitHub Pages

### Cách 1: Triển khai qua GitHub Pages
1. Vào phần **Settings** của Repository này trên GitHub.
2. Chọn mục **Pages** ở menu bên trái.
3. Tại **Source**, chọn nhánh `main` / `master` và thư mục `/ (root)`.
4. Nhấn **Save**. Trang web của bạn sẽ hoạt động tại đường dẫn: `https://minhthuc321.github.io/Landingpage/`

### Cách 2: Triển khai qua Vercel / Netlify
1. Đăng nhập vào [Vercel.com](https://vercel.com) hoặc [Netlify.com](https://netlify.com) bằng tài khoản GitHub.
2. Chọn **Import Repository** `Minhthuc321/Landingpage`.
3. Nhấn **Deploy**. Trang web sẽ khởi tạo trong 10 giây với SSL miễn phí!

---

## 📞 Thông Tin Liên Hệ
- **Chuyên gia:** Nguyễn Minh Thức
- **Dịch vụ:** Tư vấn Vay Thế Chấp BĐS, Vay Tín Chấp, Mở Thẻ Tín Dụng VIP, Đáo Hạn Ngân Hàng, Tái Cấu Trúc Nợ.

---
*© 2026 Nguyễn Minh Thức - Credit & Financial Advisor.*

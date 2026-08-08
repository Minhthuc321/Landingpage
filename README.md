# Thức Tỉnh AI — TikTok Landing Page

Landing page mobile-first xây bằng Next.js, TypeScript, Tailwind CSS, Framer Motion và Lucide.

## Chạy local
```bash
npm install
npm run dev
```
Mở http://localhost:3000.

## Production
```bash
npm run build
npm start
```

## Quản lý nội dung
- Cấu hình thương hiệu, link social, liên hệ và ảnh: `data/site.ts`
- Dịch vụ: `data/services.ts`
- Khóa học: `data/courses.ts`
- TikTok video: `data/videos.ts`
- Thay `public/mentor.svg` bằng ảnh thật (hoặc đổi `portrait` trong `data/site.ts`).

## Tracking
Sao chép `.env.example` thành `.env.local`. Kiến trúc hỗ trợ GA4, Meta Pixel, TikTok Pixel và UTM. CTA đẩy `cta_click`; lead đẩy `lead_submit`. Endpoint `/api/leads` hiện là mock và cần kết nối CRM/database trước production.

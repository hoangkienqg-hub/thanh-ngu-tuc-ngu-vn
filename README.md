# 🎮 GAME GIÁO DỤC - HƯỚNG DẪN SỬ DỤNG

## ❌ LỖI THƯỜNG GẶP

### "Website can't be reached"
**Nguyên nhân:** Đang mở sai đường dẫn hoặc chưa có server

---

## ✅ CÁCH 1: MỞ TRÊN MÁY TÍNH (ĐƠN GIẢN NHẤT)

### Bước 1: Tải về đầy đủ thư mục
```
D:\WEB-TROCHOI\thanh-ngu-tuc-ngu\
├── index.html
├── manifest.json
├── sw.js
├── games/
│   ├── index.html
│   └── 29_th_thanh_ngu_tuc_ngu/
│       ├── index.html
│       ├── game_01_Bat_dau.html (CHƠI TẠI ĐÂY)
│       └── game_standalone.html (PHẦN ĐỔI)
```

### Bước 2: Mở bằng trình duyệt
1. **Double-click** vào file: `game_standalone.html`
2. HOẶC chuột phải → **Open with** → Google Chrome
3. **KHÔNG cần internet** - chơi offline được!

---

## ✅ CÁCH 2: UPLOAD LÊN HOSTING (CHO HỌC SINH TRUY CẬP)

### Option A: GitHub Pages (MIỄN PHÍ)
1. Tạo repo mới trên GitHub
2. Upload toàn bộ thư mục `thanh-ngu-tuc-ngu`
3. Vào Settings → Pages → Chọn branch `main`
4. Link sẽ là: `https://tenban.github.io/thanh-ngu-tuc-ngu/`

### Option B: Netlify Drop (SIÊU NHANH)
1. Truy cập: https://app.netlify.com/drop
2. **Kéo thả** thư mục `thanh-ngu-tuc-ngu` vào
3. Nhận link ngay lập tức
4. Chia sẻ cho học sinh!

### Option C: Google Drive (CHO GAME ĐỘC LẬP)
1. Upload `game_standalone.html` lên Google Drive
2. Chuột phải → **Share** → **Anyone with link**
3. **KHÔNG hoạt động** - Google Drive chặn chạy HTML local

---

## ✅ CÁCH 3: CHẠY LOCALHOST (CHO GIÁO VIÊN)

### Dùng Python (nhanh nhất)
```bash
cd D:\WEB-TROCHOI\thanh-ngu-tuc-ngu
python -m http.server 8080
```
Mở trình duyệt: `http://localhost:8080/games/29_th_thanh_ngu_tuc_ngu/game_standalone.html`

### Dùng VS Code
1. Cài extension **"Live Server"**
2. Mở folder dự án
3. Chuột phải vào `game_standalone.html` → **"Open with Live Server"**

---

## 🔗 LINK CHIA SẺ ĐÚNG

| Môi trường | Link đúng |
|------------|-----------|
| Local file | `file:///D:/WEB-TROCHOI/thanh-ngu-tuc-ngu/games/29_th_thanh_ngu_tuc_ngu/game_standalone.html` |
| Localhost | `http://localhost:8080/games/29_th_thanh_ngu_tuc_ngu/game_standalone.html` |
| GitHub Pages | `https://yourname.github.io/thanh-ngu-tuc-ngu/games/29_th_thanh_ngu_tuc_ngu/game_standalone.html` |
| Netlify | `https://random-name.netlify.app/games/29_th_thanh_ngu_tuc_ngu/game_standalone.html` |

---

## ⚠️ LƯU Ý QUAN TRỌNG

### ❌ KHÔNG làm:
- Mở link `zaloapp.com/...` (đây là link sai)
- Mở file từ Google Drive trực tiếp
- Share link file Local (`file:///`) cho người khác

### ✅ PHẢI làm:
- Dùng Netlify Drop để có link web thật
- Hoặc host trên GitHub Pages
- Test trên điện thoại trước khi chia sẻ

---

## 📱 TEST TRÊN ĐIỆN THOẠI

1. Mở Netlify/Drop → copy link
2. Mở trên điện thoại
3. Kiểm tra:
   - [ ] Hiển thị giao diện đẹp
   - [ ] Nhấn nút được
   - [ ] Chơi được game
   - [ ] Lưu điểm được

---

## 🆘 HỖ TRỢ KHI GẶP LỖI

### Lỗi "Uncaught ReferenceError"
- Mở Console (F12) → xem lỗi gì
- Thường do copy paste code thiếu

### Lỗi "localStorage không hoạt động"
- Đang mở bằng `file://` protocol
- Chuyển sang dùng localhost hoặc hosting

### Lỗi "Không hiển thị âm thanh"
- Trình duyệt chặn autoplay
- Click vào trang 1 lần để kích hoạt audio context

---

**Chúc bạn thành công! 🎉**

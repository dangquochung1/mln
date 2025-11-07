# Các Hình Thái Kinh Tế - Xã Hội Ở Việt Nam

Dự án web tương tác giới thiệu về 5 hình thái kinh tế - xã hội trong lịch sử Việt Nam.

## 🎯 Tính năng

- **Trang chủ**: Hiển thị timeline của 5 hình thái kinh tế-xã hội
- **Trang lý thuyết**: Nội dung chi tiết cho từng hình thái
- **Trang trắc nghiệm**: Bài kiểm tra với 10 câu hỏi cho mỗi hình thái
- **Kết quả chi tiết**: Xem điểm số, đáp án đúng và giải thích

## 📚 5 Hình Thái Kinh Tế - Xã Hội

1. **Xã hội nguyên thủy** (Trước công nguyên)
2. **Chiếm hữu nô lệ** (Thời Văn Lang - Âu Lạc)
3. **Xã hội phong kiến** (Thế kỷ X - XIX)
4. **Thuộc địa - nửa phong kiến** (1858 - 1945)
5. **Xã hội chủ nghĩa** (Từ 1945 - nay)

## 🚀 Cài đặt và chạy

### Yêu cầu
- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn

### Các bước cài đặt

1. **Cài đặt dependencies**:
```bash
npm install
```

2. **Chạy development server**:
```bash
npm run dev
```

3. **Mở trình duyệt** và truy cập:
```
http://localhost:5174
```

## 🛠️ Công nghệ sử dụng

- **React 19** - Thư viện UI
- **Vite** - Build tool và dev server
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **PostCSS** - CSS processing

## 📁 Cấu trúc thư mục

```
my-app/
├── src/
│   ├── assets/
│   │   ├── theory/
│   │   │   └── theory.js (nội dung gốc)
│   │   └── quiz/
│   │       └── quiz.js (câu hỏi gốc)
│   ├── data/
│   │   ├── formationsData.js (dữ liệu 5 hình thái)
│   │   ├── theoryData.js (nội dung lý thuyết)
│   │   └── quizData.js (câu hỏi trắc nghiệm)
│   ├── pages/
│   │   ├── HomePage.jsx (trang chủ)
│   │   ├── TheoryPage.jsx (trang lý thuyết)
│   │   └── QuizPage.jsx (trang trắc nghiệm)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Tính năng chi tiết

### Trang chủ (HomePage)
- Timeline dọc hiển thị 5 hình thái
- Mỗi hình thái có icon, tên, thời kỳ và mô tả ngắn
- 2 nút: "Lý thuyết" và "Trắc nghiệm"
- Responsive design (desktop và mobile)

### Trang lý thuyết (TheoryPage)
- Hiển thị nội dung chi tiết từ `theoryData.js`
- Chia thành các section với heading rõ ràng
- Hỗ trợ định dạng: bold, bullet points, arrows, checkmarks
- Nút "Làm bài trắc nghiệm" để chuyển sang quiz

### Trang trắc nghiệm (QuizPage)
- 10 câu hỏi trắc nghiệm cho mỗi hình thái
- Progress bar hiển thị tiến độ
- Navigation giữa các câu hỏi
- Danh sách câu hỏi để nhảy nhanh
- Tính điểm và hiển thị kết quả
- Giải thích chi tiết cho mỗi câu

### Trang kết quả
- Điểm số và phần trăm
- Emoji phản hồi theo điểm số
- Chi tiết từng câu (đúng/sai)
- Nút "Làm lại", "Xem lý thuyết", "Trang chủ"

## 🎯 Build production

```bash
npm run build
```

Kết quả sẽ được tạo trong thư mục `dist/`.

## 📝 License

Dự án học tập - Lịch sử Việt Nam

---

**Dự án được tạo cho mục đích giáo dục về các hình thái kinh tế - xã hội ở Việt Nam.**


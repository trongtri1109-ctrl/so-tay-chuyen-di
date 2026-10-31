// Tài khoản đăng nhập bản web (lưu dạng mã băm SHA-256, không lưu mật khẩu gốc).
// Lưu ý: đây là màn hình đăng nhập đơn giản phía trình duyệt, không phải bảo mật thật.
// Đổi mật khẩu: mở trang, F12 > Console, chạy:
//   crypto.subtle.digest("SHA-256",new TextEncoder().encode("so-tay-v1:TEN:MATKHAU")).then(b=>console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")))
// rồi dán kết quả vào đúng dòng bên dưới.
window.LOCAL_USERS = {
  "tri": "213a843e0518fe2e1e5a49db33fe7eb76c147929d77f1977e5b0ad897c5153a1",
  "honganh": "8843acee0bca8d61867fa825ab02b84822c84dcefef0b9d8b2ac6a1ee6e80e3e",
  "tandat": "267454f626799cc89d576c8a4cd77cd7e0a17abb13cf01803cfb15c92eda388e"
};

// Tên hiển thị
window.LOCAL_NAMES = {
  "tri": "Trí",
  "honganh": "Hồng Ánh",
  "tandat": "Tấn Đạt"
};

// Để trống apiKey: chưa dùng Firebase.
window.FIREBASE_CONFIG = { apiKey: "" };

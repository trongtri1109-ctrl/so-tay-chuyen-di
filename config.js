// Tài khoản đăng nhập bản web (lưu dạng mã băm SHA-256, không lưu mật khẩu gốc).
// Lưu ý: đây là màn hình đăng nhập đơn giản phía trình duyệt, không phải bảo mật thật.
// Đổi mật khẩu: mở trang, F12 > Console, chạy:
//   crypto.subtle.digest("SHA-256",new TextEncoder().encode("so-tay-v1:TEN:MATKHAU")).then(b=>console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")))
// rồi dán kết quả vào đúng dòng bên dưới.
window.LOCAL_USERS = {
  "tri": "213a843e0518fe2e1e5a49db33fe7eb76c147929d77f1977e5b0ad897c5153a1",
  "thanhvien1": "42841ca5619e95ac549a8b3a4440be8ca18d1605a2df89574aebe5875c3d14e4",
  "thanhvien2": "4b8f06c779fc5b1aa87db9c1dd08b89a0f68eaaab5fdc326012d213808144f0e"
};

// Để trống apiKey: chưa dùng Firebase.
window.FIREBASE_CONFIG = { apiKey: "" };

# Sổ Tay Chuyến Đi

Trang lên kế hoạch du lịch dùng lại cho mọi chuyến: lịch trình từng ngày, link chỉ đường Google Maps, dự toán chi phí theo người / đêm / ngày. Giao diện kính mờ kiểu Apple, có chế độ sáng/tối.

## Chạy

- **Trên claude.ai (bản chính):** dữ liệu lưu chung, mọi người được cấp quyền đều cùng sửa.
- **Mở file `index.html` trực tiếp hoặc host ở nơi khác:** không có kho dữ liệu chung, trang tự chuyển sang lưu trong trình duyệt (localStorage) của từng người.

## Cấu trúc

- `index.html`: toàn bộ giao diện và logic (HTML + CSS + JS thuần, không cần build).
- `data/da-lat-3n2d.json`: chuyến mẫu Đà Lạt 3N2Đ (định dạng một tài liệu trong collection `trips`).

## Dữ liệu một chuyến

```
name, destination, start (YYYY-MM-DD), nights, people, budgetPP, color,
days: [{ title, note, stops: [{ time, title, note, type, cost, place }] }],
items: [{ label, amount, qty, unit: group|person|night|day|personDay }]
```

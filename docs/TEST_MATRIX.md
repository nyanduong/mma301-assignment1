# Test matrix — bản tài liệu nộp

Cập nhật **30/10/2026**. Source đối chiếu: `ee2e70ca5266c6a0f57727fd4e1abb6f4250e959`. Tài liệu này tổng hợp kiểm tra hiện tại và bằng chứng phiên chat 29/10; không phải chạy lại toàn bộ UI ngày 30/10.

## Môi trường và ý nghĩa trạng thái

- Bản hiện tại: Expo 58.0.21, React 19.3.0, React Native 0.88.1, AsyncStorage 2.2.0 theo lockfile.
- UI: Windows, LDPlayer 14.0.25.1, Expo Go và Metro do người học mở sẵn ngày 29/10.
- Người thao tác UI: Codex qua Computer Use theo yêu cầu người học. Không ghi thành người học tự test.
- Phiên bản Android/Expo Go và độ phân giải logic chưa được ghi nhận. Không xác nhận SHA chính xác của bundle UI lúc test; source StatusBar hiện tại khớp bản sửa trong phiên chat.
- PASS_EMULATOR: trực tiếp thao tác và quan sát ảnh cửa sổ trong chat, không dùng mock cho ca đó.
- PASS_TOOL: lệnh mới ngày 30/10 đạt trên workspace hiện tại.
- HISTORICAL_PASS: kết quả đã ghi ngày 07/10, SDK 57; chưa chạy lại trên SDK 58.
- NOT_VERIFIED: chưa kiểm chứng; không đồng nghĩa phát hiện lỗi.
- FAIL_AUDIT: audit còn cảnh báo, không bị che bởi doctor đạt.

## A. Kiểm thử UI trực tiếp ngày 29/10/2026

| ID | Điều kiện / thao tác | Expected | Actual | Trạng thái |
|---|---|---|---|---|
| L01 | Home → Profile với Student | Tên, avatar, bio đúng | Student, avatar S, MMA301 learner | PASS_EMULATOR |
| L02 | Edit: Student → Studen, Hủy, mở lại | Bỏ nháp, giữ hồ sơ | Profile/form mới vẫn Student | PASS_EMULATOR |
| L03 | Edit: thêm q → Studentq, Lưu, về Home | Profile và Home cập nhật ngay | Profile Studentq, Home chào Studentq | PASS_EMULATOR |
| L04 | Activity mở mới | Sáu mục và count 0 | Đúng sáu mục, count 0 | PASS_EMULATOR |
| L05 | Bật lọc khi chưa chọn rồi tắt lọc | Empty rồi khôi phục sáu mục | Có hướng dẫn tắt lọc; tắt lọc hiện đủ | PASS_EMULATOR |
| L06 | Chọn Đọc sách → lọc → bỏ chọn mục cuối | Count 0→1→0, danh sách 6→1→0 | Đúng trạng thái/viền/count và empty | PASS_EMULATOR |
| L07 | Settings bật Dark, đi qua năm màn hình | Theme giữ và nội dung đổi màu | Home/Profile/EditProfile/Activity/Settings, header/form/card dùng màu tối | PASS_EMULATOR cho nội dung; lỗi status bar xem L12 |
| L08 | Lưu Studentq và Dark; đóng tab Expo Go bằng X trong LDPlayer; về launcher; mở Expo Go; chọn Assignment 1 ở Recent history | Khôi phục profile/theme | Home Dark, Studentq; Profile xác nhận tên/bio đúng | PASS_EMULATOR cho đóng/mở Expo Go |
| L09 | Edit: tên S, nhấn Lưu | Báo lỗi và ở lại | Lỗi tên 2–50 ký tự, không rời form | PASS_EMULATOR |
| L10 | Xóa tên thành rỗng, Lưu rồi Hủy | Không lưu, hồ sơ trước còn nguyên | Form báo lỗi; Hủy về Studentq | PASS_EMULATOR |
| L11 | Activity Dark: chọn Đọc sách và Đi bộ; back Home; mở lại Activity | Count 2 rồi reset theo thiết kế | Hai mục đã chọn/count 2; mở lại count 0, lọc tắt, sáu mục chưa chọn | PASS_EMULATOR |
| L12 | Sau sửa StatusBar: bật Dark rồi trả Light | Giờ/biểu tượng tương phản đúng | Dark chữ/icon trắng; Light chữ/icon tối, đọc rõ | PASS_EMULATOR — B01 đã sửa |
| L13 | Kết thúc: xóa q, Lưu Student; trả Light | Khôi phục dữ liệu ban đầu | Student/bio gốc và Light; lượt retest kết thúc ở Settings Light | PASS_EMULATOR |

Không thấy màn hình lỗi đỏ hoặc crash ở những ca đã thao tác. Không thu Logcat hay kiểm toán mọi runtime warning. Đóng/mở Expo Go không được mô tả là force-stop hoặc reboot Android.

Bằng chứng UI là ảnh/trình tự thao tác trong phiên chat ngày 29/10, được tổng hợp lại ngày 30/10. Không có bộ screenshot/video riêng được lưu trong repo.

## B. Kiểm tra công cụ mới ngày 30/10/2026

| ID | Lệnh / đối chiếu | Expected | Actual | Trạng thái |
|---|---|---|---|---|
| C01 | package.json ↔ package-lock.json | Root dependency thống nhất | Expo ^58.0.21, React 19.3.0, RN 0.88.1; lock Expo 58.0.21 | PASS_TOOL |
| C02 | npx expo install --check | Dependency phù hợp SDK | Dependencies are up to date | PASS_TOOL |
| C03 | npx expo-doctor | Các kiểm tra cấu hình đạt | 20/20 checks passed, mã 0 | PASS_TOOL |
| C04 | npx expo config --type public | Config đọc được | SDK 58.0.0, Android/iOS, portrait, assets cấu hình được đọc; mã 0 | PASS_TOOL |
| C05 | npm audit --json | Không còn cảnh báo | Mã 1; 8 mục: 5 low, 0 moderate, 3 high, 0 critical | FAIL_AUDIT |

Audit đang đánh dấu expo, @expo/cli, zod ở high; các mục low gồm @expo/config, @expo/local-build-cache-provider, @expo/metro-config, @expo/prebuild-config và deepmerge. Số mục gồm cả phụ thuộc chịu ảnh hưởng gián tiếp, không phải tám khai thác độc lập đã chứng minh. Chưa sửa trong lượt tài liệu này; không tuyên bố cảnh báo vô hại. Doctor đạt không có nghĩa audit sạch.

Không chạy npm ci trên workspace đang dùng để tránh thay dependency trong lúc hoàn thiện hồ sơ. Chưa lặp lại clean clone, bundle Android/iOS hoặc script mock 22 nhóm trên SDK 58.

## C. Bằng chứng lịch sử ngày 07/10/2026

Source M6 `71c0836`, dependency SDK 57; các kết quả sau được giữ từ hồ sơ cũ, không gán lại cho phiên bản hiện tại:

| Phạm vi | Actual đã ghi | Trạng thái |
|---|---|---|
| First-run/loading, default, không tự ghi trước hydrate | Mock hooks/storage đạt | HISTORICAL_PASS |
| Validator name rỗng/trắng/1/2/50/51 và bio 160/161; Save/Cancel; Provider từ chối shape sai | Script logic đã ghi đạt | HISTORICAL_PASS |
| Missing/corrupt JSON/sai shape/mode; lỗi đọc/ghi; thử lại; ghi tuần tự | Fault injection mock đã ghi đạt | HISTORICAL_PASS |
| Tích hợp route/state/list bằng handler source + StackRouter thật | Tổng 22 nhóm logic đạt | HISTORICAL_PASS |
| Clone sạch tại M6, npm ci, check/doctor/config/Metro | Doctor 21/21; clone/cài thành công | HISTORICAL_PASS |
| Bundle Android/iOS | HTTP 200, 5.028.952 / 5.026.779 byte ở clone | HISTORICAL_PASS |
| Audit dependency cũ | 22 mục: 7 moderate, 15 high | FAIL lịch sử; số hiện tại xem C05 |

Script tạm đặt ngoài repo, không thuộc bản nộp; mock không phải React renderer và không chứng minh bridge/native disk thật. Chi tiết từng milestone có trong [AI_USAGE_LOG.md](AI_USAGE_LOG.md). Không dùng đường dẫn TEMP cũ làm điều kiện chạy app.

## D. Phạm vi chưa kiểm chứng

| Phạm vi | Tình trạng |
|---|---|
| Fresh install thật không có key; JSON hỏng/lỗi đọc/lỗi ghi trên native | NOT_VERIFIED; chỉ có mock lịch sử |
| Toàn bộ biên nhập liệu trên native, thay đổi bio | NOT_VERIFIED; mới thử Save tên thông thường, tên rỗng/1 ký tự |
| Bàn phím ảo, màn hình nhỏ/cỡ chữ lớn | NOT_VERIFIED; người học yêu cầu dừng kiểm thử bổ sung |
| System back/gesture, nhiều thiết bị/safe area | NOT_VERIFIED; đã dùng header back |
| Force-stop/reboot, tắt app khi đang ghi | NOT_VERIFIED; L08 chỉ đóng/mở Expo Go |
| Điện thoại thật, iOS, APK/release | NOT_VERIFIED |
| Người học tự giải thích/debug/modification không dùng AI | Không xác nhận từ lần test này; có tài liệu luyện riêng |

Các mục này được giữ minh bạch; không cần bổ sung chức năng ngoài đề để che việc chưa kiểm thử. R09 trong RTM vẫn PARTIAL.

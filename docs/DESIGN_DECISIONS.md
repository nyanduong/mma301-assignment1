# Những quyết định thiết kế cần giải thích được

Cập nhật 30/10/2026, đối chiếu source `ee2e70c`. Tám quyết định dưới đây phục vụ phạm vi Assignment 1; ví dụ đổi yêu cầu là phân tích tác động, chưa khẳng định đã triển khai. Kết quả test xem [TEST_MATRIX.md](TEST_MATRIX.md).

## 1. Một Native Stack cho năm màn hình

- Bối cảnh: bài tập cần mở màn hình con và quay về màn hình trước.
- Quyết định: giữ một NavigationContainer và một Native Stack, Home là điểm đầu; không thêm tab/drawer.
- Vì sao: route và thao tác navigate/goBack ít, dễ theo dõi ngăn xếp khi phỏng vấn.
- Đánh đổi: chưa có deep link hay nhiều nhánh điều hướng độc lập; animation đang tắt từ M1.
- Khi yêu cầu đổi: nếu cần tab, sửa AppNavigator và kiểm tra đường back, vòng đời màn hình và state cục bộ.
- Tệp: `src/navigation/AppNavigator.jsx`.

## 2. Hồ sơ chính tách khỏi bản nháp

- Bối cảnh: gõ chữ rồi Hủy phải giữ hồ sơ cũ; Home và Profile cần hiển thị cùng dữ liệu.
- Quyết định: ProfileProvider sở hữu hồ sơ chính; EditProfile sở hữu name/bio/errors; Activity tự giữ lựa chọn và bộ lọc.
- Vì sao: khi gõ chưa chạm Context; chỉ Save hợp lệ tạo object mới. Hủy chỉ goBack nên không cần hoàn tác.
- Đánh đổi: form lấy snapshot khi mount; không tự đồng bộ bản nháp nếu sau này có nguồn dữ liệu khác sửa hồ sơ cùng lúc.
- Khi yêu cầu đổi: đồng bộ nhiều thiết bị cần quy tắc xung đột; lưu lựa chọn xuyên màn hình thì chuyển chủ sở hữu selectedIds.
- Tệp: `ProfileContext.jsx`, `EditProfileScreen.jsx`, `ActivityScreen.jsx`.

## 3. Hai Context thay vì một kho state lớn

- Bối cảnh: chỉ hồ sơ và theme cần chia sẻ giữa nhiều screen.
- Quyết định: dùng useState + Context, không Redux; đặt ThemeProvider → ProfileProvider → AppNavigator.
- Vì sao: đã đủ cho bài tập, không cần dependency/action/reducer/store bổ sung. Theme ở ngoài để loading hồ sơ đọc được màu.
- Đánh đổi: consumer render lại khi value của Context đổi; dữ liệu nhỏ nên chưa cần memo hóa. Hai Provider cùng có mẫu effect đọc/ghi ngắn, giữ tường minh để học.
- Khi yêu cầu đổi: chỉ cân nhắc store/hook chung khi dữ liệu hoặc logic đủ lớn và có vấn đề cụ thể đo được.
- Tệp: `App.jsx`, `src/context/`.

## 4. Đọc AsyncStorage trước, ghi khi người dùng thay đổi

- Bối cảnh: giá trị mặc định trong useState xuất hiện trước khi đọc đĩa xong; ghi quá sớm sẽ đè dữ liệu cũ.
- Quyết định: helper tập trung hai khóa, JSON và try/catch. Mỗi Provider có hydrated + ref lastRequestedValue; loading chặn con đến khi đọc xong. Giá trị vừa khôi phục không tự ghi lại.
- Vì sao: tránh ghi sớm; lỗi đọc dùng mặc định nhưng không tự phá bản cũ; lỗi ghi vẫn giữ state để người dùng tiếp tục.
- Đánh đổi: hai lần đọc tuần tự; không mã hóa, không đồng bộ máy chủ. Không có nút thử lại riêng: lần thay đổi kế tiếp sẽ thử ghi. Đóng app đột ngột có thể ngắt ghi đang chờ.
- Khi yêu cầu đổi: model mới cần validator/default mới và cân nhắc migration dữ liệu cũ. Bí mật không nên đặt vào AsyncStorage.
- Tệp: `appStorage.js`, `ThemeContext.jsx`, `ProfileContext.jsx`, `LoadingScreen.jsx`, `StorageNotice.jsx`.

## 5. Ghi cùng khóa theo thứ tự

- Bối cảnh: nhiều thay đổi liên tiếp tạo các yêu cầu ghi bất đồng bộ.
- Quyết định: pendingWrites giữ chuỗi Promise riêng cho từng khóa; lần ghi sau đợi lần trước. Lỗi được bắt và trả về thông báo nên không làm đứt chuỗi.
- Vì sao: lần ghi cũ không hoàn tất sau và đè giá trị mới. Cleanup effect bỏ kết quả lỗi của lần ghi đã bị thay thế, còn yêu cầu ghi vẫn chạy.
- Đánh đổi: người học cần hiểu Promise/then; không giới hạn hàng đợi vì chỉ ghi object nhỏ và thao tác thủ công.
- Khi yêu cầu đổi: dữ liệu lớn hoặc nhập tự động liên tục cần đánh giá tần suất ghi; không tự thêm debounce ở bài này.
- Tệp: `src/storage/appStorage.js` → writeStoredValue.

## 6. FlatList và item nhận props

- Bối cảnh: cần danh sách, chọn/bỏ chọn và trạng thái rỗng kiểm tra được.
- Quyết định: activities có ID cố định; ActivityScreen tính data đã lọc và truyền item/selected/onPress; ActivityItem chỉ hiển thị và phát sự kiện.
- Vì sao: key không phụ thuộc vị trí; lọc không tạo thêm state sao chép; extraData thông báo lựa chọn đổi dù data gốc vẫn cùng reference. Mảng state cập nhật bằng filter/spread.
- Đánh đổi: lựa chọn mất khi Activity bị pop; số lượng nhỏ nên chưa cần tối ưu renderItem hoặc React.memo.
- Khi yêu cầu đổi: nếu lưu lựa chọn, cần chuyển state thích hợp, khóa storage và validator ID; vẫn giữ item đơn giản.
- Tệp: `activities.js`, `ActivityScreen.jsx`, `ActivityItem.jsx`.

## 7. Tổ chức theo vai trò, dùng lại những phần có ích

- Bối cảnh: người mới cần tìm đúng tệp khi lecturer yêu cầu sửa.
- Quyết định: screens/context/components/navigation/data/storage/utils; JSX đặt PascalCase.jsx, hàm JavaScript thuần camelCase.js. Không tách ProfileCard vì chưa có nơi dùng thứ hai.
- Vì sao: mỗi màn hình rõ vai trò; ScreenContainer chung nền/khoảng cách/cảnh báo; LoadingScreen dùng cho hai Provider.
- Đánh đổi: ScreenContainer chứa StorageNotice nên phục vụ ứng dụng này, chưa là component độc lập để xuất thư viện.
- Khi yêu cầu đổi: chỉ tách/thêm thư mục khi có logic cần dùng lại; không tạo repository/service layer chung cho hai khóa local.
- Tệp: `src/`, `App.jsx`.

## 8. StatusBar đi cùng chủ sở hữu theme

- Bối cảnh: kiểm thử LDPlayer ngày 29/10 phát hiện giờ/biểu tượng Android tối trên nền Dark, khó đọc.
- Quyết định: đặt StatusBar của React Native trong ThemeProvider; barStyle là light-content khi isDark, dark-content khi Light. Render cả khi đang hydrate theme.
- Vì sao: dùng cùng state themeMode cho nội dung và thanh trạng thái, tránh mỗi screen tự đặt màu khác nhau; không thêm dependency.
- Đánh đổi: native app.json vẫn userInterfaceStyle light; chưa hỗ trợ preference theo hệ thống. Đây là điều khiển kiểu chữ/biểu tượng, không phải thay toàn bộ system UI hoặc navigation bar Android.
- Khi yêu cầu đổi: thêm system theme cần mode hiệu lực từ Appearance/useColorScheme, validator storage mới và retest khi hệ điều hành đổi theme.
- Tệp: `src/context/ThemeContext.jsx`. Retest Dark/Light trên LDPlayer đã đạt; xem B01 trong DEBUG_LOG.

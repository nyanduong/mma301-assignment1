# MMA301 — Assignment 1: Profile & Activity App

Bản tài liệu nộp cập nhật ngày **30/10/2026**, đối chiếu source tại commit `ee2e70c`. Ứng dụng đã có đầy đủ workflow cốt lõi và đã được Codex thao tác trực tiếp trên LDPlayer ngày 29/10/2026. Phạm vi kiểm chứng và giới hạn được ghi trong [test matrix](docs/TEST_MATRIX.md).

## Phạm vi và công nghệ

Ứng dụng JavaScript dùng React Native, Expo, React Navigation Native Stack, useState, Context API và AsyncStorage. Có năm màn hình: Home, Profile, EditProfile, Activity, Settings.

Không có backend, đăng nhập, Firebase hoặc tính năng Assignment 2. Avatar là chữ cái từ tên; Activity có sáu mục cố định và lựa chọn chỉ tồn tại trong màn hình. Validation tự viết; cần tuân thủ quy định riêng của lớp nếu giảng viên yêu cầu cơ chế khác.

Phiên bản đang khóa trong package-lock.json:

| Thư viện | Phiên bản |
|---|---|
| Expo | 58.0.21 (SDK 58; package.json khai báo ^58.0.21) |
| React | 19.3.0 |
| React Native | 0.88.1 |
| AsyncStorage | 2.2.0 |
| React Navigation native / native-stack | 7.5.0 / 7.20.0 |
| safe-area-context / screens | 5.10.1 / 4.30.1 |

## Cài đặt và chạy

Cần Node.js/npm, Git và Expo Go hỗ trợ SDK 58. Giữ package-lock.json và dùng npm ci để cài đúng phiên bản.

```sh
git clone https://github.com/nyanduong/mma301-assignment1.git
cd mma301-assignment1
npm ci
npm start
```

Mở dự án bằng Expo Go trên thiết bị/emulator. Với LDPlayer, mở Expo Go rồi chọn development server hoặc nhập địa chỉ Metro hiển thị trong terminal. Điện thoại dùng LAN cần cùng mạng với máy tính; terminal phải tiếp tục chạy.

`npm run android` cần thiết bị/emulator Android đã cấu hình. `npm run ios` dùng simulator cần macOS; trên Windows có thể dùng iPhone qua Expo Go tương thích. Không cần secret hoặc backend.

Tên hiện tại: `MMA301 Assignment 1`, slug `mma301-assignment1`. Khi nộp, đặt tên repo/ZIP theo StudentName_ClassCode hoặc quy ước cụ thể của lớp.

## Cấu trúc và workflow

```text
index.js              Đăng ký App với Expo
App.jsx               ThemeProvider → ProfileProvider → AppNavigator
src/navigation/       Năm route, theme của navigation/header
src/context/          Theme/profile dùng chung; hydrate và lưu
src/screens/          Home, Profile, EditProfile, Activity, Settings
src/components/       Container, toggle, item, loading, cảnh báo storage
src/data/             Sáu hoạt động có ID ổn định
src/utils/            Validation hồ sơ
src/storage/          AsyncStorage helper và hai khóa
docs/                 Hồ sơ đánh giá và tài liệu luyện giải thích
```

```text
Khởi động → đọc theme → đọc profile → Home
Home → Profile → EditProfile → Lưu hợp lệ/Hủy → Profile
     → Activity
     → Settings
```

Home hiển thị tên dùng chung và nút điều hướng. Profile có avatar/tên/bio. Header hỗ trợ back. Provider nằm ngoài stack nên profile/theme giữ nguyên khi điều hướng; pop EditProfile bỏ nháp, pop Activity bỏ lựa chọn và bộ lọc.

## State, form và danh sách

| State | Chủ sở hữu | Lưu qua lần mở app? |
|---|---|---|
| profile: name, bio | ProfileProvider | Có |
| themeMode: light/dark | ThemeProvider | Có |
| Nháp name/bio, errors | EditProfileScreen | Không |
| selectedIds, showSelectedOnly | ActivityScreen | Không |
| hydrated, storageError | Từng Provider | Không |

Form dùng TextInput controlled. Lưu → validate → cập nhật Context bằng object mới → goBack. Tên sau trim phải dài 2–50; bio thô tối đa 160, sau khi hợp lệ mới trim khi lưu. Độ dài dùng JavaScript length (UTF-16). Invalid không lưu/không quay lại; Hủy không đổi Context.

Activity dùng FlatList, keyExtractor theo ID, extraData theo selectedIds và ListEmptyComponent. Chọn/bỏ chọn dùng spread/filter, không mutate mảng. Bật bộ lọc khi không có mục được chọn để demo trạng thái rỗng.

## Persistence và theme

Chỉ appStorage.js gọi AsyncStorage, với `mma301.profile` và `mma301.theme`. Mỗi Provider đọc JSON, kiểm tra shape, cập nhật state rồi mở cổng hydrated. Ref tránh tự ghi lại giá trị vừa khôi phục; lần ghi cùng key được xếp tuần tự.

Thiếu key dùng default Student / MMA301 learner và Light. Dữ liệu hỏng/lỗi đọc dùng fallback và hiện cảnh báo, không tự ghi đè bản cũ. Lỗi ghi giữ UI mới, báo chưa lưu; lần thay đổi tiếp theo thử ghi lại.

Theme đổi nền/chữ/form/card/header. StatusBar trong ThemeProvider dùng light-content khi Dark, dark-content khi Light, kể cả lúc loading theme. app.json vẫn khai báo native userInterfaceStyle light; app chỉ hỗ trợ lựa chọn Light/Dark thủ công, chưa có system theme.

## Kiểm chứng và bộ tài liệu nộp

Ngày 30/10/2026: expo install --check đạt; expo-doctor **20/20**; config đọc được SDK 58/Android/iOS. npm audit báo **8 mục: 5 low, 3 high, 0 moderate/critical**, chưa xử lý.

Ngày 29/10/2026: đã thao tác năm màn hình trên LDPlayer; Save/Cancel, tên rỗng/1 ký tự, chọn/lọc/rỗng, đổi theme và đóng/mở Expo Go để khôi phục profile/theme đều đạt trong phạm vi đã thử. Lỗi StatusBar đã sửa và retest Light/Dark đạt.

- [RTM: yêu cầu, source và bằng chứng](docs/REQUIREMENT_TRACEABILITY_MATRIX.md)
- [Quyết định thiết kế và đánh đổi](docs/DESIGN_DECISIONS.md)
- [Test matrix: Actual/Status, lịch sử và giới hạn](docs/TEST_MATRIX.md)
- [Debug log: lỗi thật, nguyên nhân, sửa, retest](docs/DEBUG_LOG.md)
- [AI usage log: lịch sử và cách kiểm chứng](docs/AI_USAGE_LOG.md)
- [Luyện giải thích code và modification task](docs/LEARNING_MAP.md)

## Giới hạn và khai báo AI

Chưa kiểm chứng bàn phím ảo, màn hình nhỏ/cỡ chữ lớn, toàn bộ biên nhập liệu trên native, gesture/back hệ thống, iOS hoặc điện thoại thật. Người học yêu cầu dừng các kiểm thử bổ sung này; không đánh dấu PASS. R09 vẫn PARTIAL. Đóng/mở Expo Go đã thử; chưa chứng minh force-stop/reboot hoặc đóng ngay khi đang ghi.

Chưa tạo APK và chưa chạy lại clone sạch/bundle hai nền tảng trên SDK 58. Kết quả clone/bundle/22 nhóm logic ngày 07/10 thuộc SDK 57 là lịch sử, không thay thế kiểm tra bản hiện tại. Script mock tạm không nằm trong repo.

AsyncStorage không mã hóa, không đồng bộ server. Audit còn cảnh báo; chưa chạy audit fix hoặc thay dependency trong lượt hoàn thiện tài liệu.

AI hỗ trợ phần lớn code/tài liệu và trực tiếp thao tác LDPlayer theo yêu cầu. Đây không phải xác nhận người học đã tự test hoặc tự luyện modification. Người học chịu trách nhiệm hiểu, giải thích, debug và sửa được yêu cầu nhỏ khi đánh giá.

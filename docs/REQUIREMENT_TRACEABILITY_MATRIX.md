# Requirement Traceability Matrix — Assignment 1

Cập nhật 30/10/2026, source đối chiếu `ee2e70c`. RTM này mô tả bản hiện tại; bằng chứng tự động ngày 07/10 chỉ có giá trị lịch sử cho SDK 57.

- **PASS emulator**: Codex đã thao tác UI LDPlayer ngày 29/10, trong đúng phạm vi ghi ở TEST_MATRIX.
- **PASS source/config**: đã đối chiếu code/cấu hình; không thay thế test native.
- **PARTIAL**: còn yêu cầu chưa được chứng minh đầy đủ.
- Các kiểm thử mở rộng người học yêu cầu dừng vẫn để chưa kiểm chứng.

| ID | Yêu cầu | Triển khai / source | Bằng chứng hiện có | Trạng thái |
|---|---|---|---|---|
| R01 | Expo/React Native project | package.json, package-lock.json, index.js; Expo 58.0.21, React 19.3.0, RN 0.88.1 | 30/10: dependency check đạt, doctor 20/20, config SDK 58; 29/10 mở app trên LDPlayer. Chưa cài lại clone sạch SDK 58 | PASS config/emulator trong phạm vi ghi |
| R02 | ≥5 màn hình, navigation/back | AppNavigator.jsx: Home/Profile/EditProfile/Activity/Settings, một Native Stack | 29/10 mở đủ route, Save/Cancel và header back hoạt động; system back/gesture chưa thử | PASS emulator cho route/header back |
| R03 | Profile name/avatar/bio, dữ liệu lưu | ProfileScreen.jsx, HomeScreen.jsx, ProfileContext.jsx | Student/avatar S/bio hiển thị; Save Studentq cập nhật Home/Profile; mở lại Expo Go còn Studentq | PASS emulator |
| R04 | Controlled form + validation + Save/Cancel | EditProfileScreen.jsx, profileValidation.js; name trim 2–50, bio thô ≤160 | Save hợp lệ và Hủy đạt; tên rỗng/1 ký tự bị chặn. Toàn bộ biên khác mới có bằng chứng mock lịch sử, chưa retest native | PASS emulator cho ca đã thử; biên mở rộng chưa kiểm chứng |
| R05 | Theme/preference shared bằng Context | ThemeContext.jsx, ThemeToggle.jsx, AppNavigator.jsx; StatusBar theo isDark | Đã quan sát cả năm màn hình ở Dark; Light/Dark giữ khi điều hướng; StatusBar sau sửa đổi màu đúng | PASS emulator |
| R06 | FlatList/SectionList + interaction/empty | ActivityScreen.jsx, ActivityItem.jsx, activities.js; key ID, extraData | Sáu mục; chọn hai mục count 2; lọc một mục; bỏ chọn mục cuối ra empty; lọc khi chưa chọn cũng empty | PASS emulator; cấu trúc list đã rà source |
| R07 | Persistence AsyncStorage | appStorage.js và hai Provider; JSON, hydrate/ref, tuần tự theo key | Đóng tab Expo Go → launcher → mở Expo Go → chọn dự án: giữ Studentq và Dark. Không tương đương force-stop/reboot | PASS emulator cho đóng/mở Expo Go |
| R08 | Reusable components | ScreenContainer cho năm screen, ActivityItem cho list, LoadingScreen cho hai Provider, ThemeToggle/StorageNotice | Source chia trách nhiệm rõ; các thành phần chính hiển thị trên emulator | PASS source/emulator trong phạm vi ghi |
| R09 | Responsive Flexbox/style | ScreenContainer flex:1, form/profile ScrollView, Activity FlatList | Bố trí portrait đã nhìn trên LDPlayer; chưa thử màn hình nhỏ/cỡ chữ lớn/bàn phím ảo theo quyết định người học | PARTIAL — chưa kiểm chứng đầy đủ |
| R10 | Validation/storage/error/fallback | profileValidation.js, appStorage.js, StorageNotice.jsx | Invalid name và empty state đã thử UI; missing/corrupt/read/write fault injection chỉ có mock lịch sử, chưa thử native | PASS source và ca UI đã thử; storage fault native chưa kiểm chứng |

## State ownership

| Dữ liệu | Chủ sở hữu | Consumer | Persistence |
|---|---|---|---|
| name/bio chính | ProfileProvider | Home/Profile/EditProfile | mma301.profile |
| name/bio nháp, errors | EditProfileScreen | Form | Không |
| themeMode | ThemeProvider | Navigator, StatusBar, UI | mma301.theme |
| selectedIds/showSelectedOnly | ActivityScreen | List/ActivityItem | Không; pop rồi mở lại reset |
| hydrated/storageError | Từng Provider | Loading/cảnh báo | Không |

## Đối chiếu hồ sơ đánh giá

| Đầu ra đề yêu cầu | Nơi cung cấp |
|---|---|
| Source chạy lại, hướng dẫn và workflow/state/limitations/AI | Source + README.md |
| RTM | Tài liệu này |
| ≥5 design decisions | DESIGN_DECISIONS.md, tám quyết định |
| Test matrix có expected/actual/status | TEST_MATRIX.md |
| ≥2 lỗi thật và retest | DEBUG_LOG.md, gồm lỗi app StatusBar và lỗi công cụ/dependency lịch sử |
| AI usage evidence | AI_USAGE_LOG.md |
| Giải thích và luyện thay đổi nhỏ | LEARNING_MAP.md; không khai đã tự hoàn thành bài luyện |
| Git history | Các commit trong repo; không thay thế năng lực phỏng vấn |

Chi tiết môi trường, ngày và giới hạn: [TEST_MATRIX.md](TEST_MATRIX.md). Lý do thiết kế: [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md).

# Bản đồ học và tập phỏng vấn

Cập nhật 30/10/2026 theo source `ee2e70c`. Tài liệu này hỗ trợ Code Explanation và Modification/Transfer trong rubric Assignment 1; các câu hỏi/bài tập không phải bằng chứng người học đã hoàn thành. Kết quả chạy thật xem [TEST_MATRIX.md](TEST_MATRIX.md).

Đọc source thật rồi chạy app. Với mỗi luồng, tự kể được: vì sao cần → hàm nào chạy → state nào đổi → màn hình nào nhận dữ liệu → lỗi đi đâu. Đừng học thuộc câu trả lời mà chưa thử thay đổi nhỏ.

## Luồng 1 — Khởi động và điều hướng

- Mục đích: mở đúng Home, giữ dữ liệu chung khi đi qua màn hình con.
- Điểm vào: `index.js` → `App.jsx`.
- Tệp liên quan: `AppNavigator.jsx`, hai Context và năm screen.
- Đầu vào: component App, cấu hình route, kết quả đọc dữ liệu local.
- Kích hoạt: mở app hoặc nhấn nút điều hướng.
- Biến đổi: ThemeProvider hydrate → ProfileProvider hydrate → navigator dựng stack; navigate thêm/mở route, goBack pop route trên cùng.
- Đầu ra: màn hình đang ở cuối stack nhận navigation prop; Provider ngoài stack vẫn tồn tại.
- Đường lỗi: tên route sai không mở đúng màn hình; consumer ngoài Provider không đọc được value; back ở Home không có màn hình trước.

Lecturer có thể hỏi:

1. Vì sao Provider phải đặt ngoài AppNavigator?
2. index.js và App.jsx khác vai trò gì?
3. NavigationContainer khác Stack.Navigator thế nào?
4. Stack thay đổi ra sao khi Home → Profile → Edit → Hủy?
5. Vì sao quay về Home giữ hồ sơ nhưng mở Activity lại mất lựa chọn?

## Luồng 2 — Theme và Context

- Mục đích: mọi màn hình/header đổi sáng tối cùng nhau.
- Điểm vào: `SettingsScreen.jsx` → `ThemeToggle.jsx`.
- Tệp liên quan: `ThemeContext.jsx`, `ScreenContainer.jsx`, `AppNavigator.jsx`, các screen.
- Đầu vào: themeMode hiện tại và sự kiện Switch.
- Kích hoạt: onValueChange → toggleTheme.
- Biến đổi: updater đọc previousMode → chọn light/dark → tính isDark/colors → value Context đổi → consumer render lại → effect lưu mode.
- Đầu ra: nền/chữ/placeholder/lỗi/header dùng bộ màu mới; StatusBar trong ThemeProvider dùng light-content khi Dark, dark-content khi Light.
- Đường lỗi: màu hard-code có thể khó đọc; consumer sai Provider không nhận state; lỗi storage vẫn đổi UI nhưng báo chưa lưu.

Ví dụ debug thật: nền đổi Dark nhưng status bar vẫn chữ tối. Kiểm tra ThemeContext.jsx → StatusBar → barStyle theo isDark; đã sửa và retest Light/Dark trên LDPlayer. Không suy ra đã kiểm thử bàn phím ảo hoặc màn hình nhỏ từ kết quả này.

Lecturer có thể hỏi:

1. useContext nhận gì và trả gì trong ThemeToggle?
2. Vì sao dùng setThemeMode(previousMode => ...) ?
3. Tại sao isDark và colors không cần useState riêng?
4. Vì sao header đổi màu dù không nằm trong ScreenContainer?
5. State đổi khác gì dữ liệu đã được ghi xuống máy?

## Luồng 3 — Hồ sơ → sửa → kiểm tra → Lưu/Hủy

- Mục đích: sửa hồ sơ an toàn, không làm mất bản đã lưu khi Hủy.
- Điểm vào: `ProfileScreen.jsx` → nút chỉnh sửa.
- Tệp liên quan: `ProfileContext.jsx`, `EditProfileScreen.jsx`, `profileValidation.js`, `HomeScreen.jsx`.
- Đầu vào: profile hiện tại; chuỗi người dùng nhập.
- Kích hoạt: onChangeText hoặc nhấn Lưu/Hủy.
- Biến đổi: gõ → state nháp; Lưu → validateProfile → setErrors; đúng → updateProfile kiểm tra lại shape, trim và tạo object mới → goBack. Hủy chỉ goBack.
- Đầu ra: Profile/Home nhận cùng hồ sơ mới; invalid giữ màn hình và hiện lỗi.
- Đường lỗi: tên trắng/ngoài 2–50; bio quá 160; object storage sai kiểu. Validator dùng JavaScript length nên emoji có thể chiếm nhiều đơn vị UTF-16.

Lecturer có thể hỏi:

1. Controlled TextInput cần value và onChangeText để làm gì?
2. Tại sao không cập nhật ProfileContext mỗi lần gõ?
3. Tại sao phải trim trước khi kiểm tra tên?
4. Hủy bỏ nháp bằng cách nào nếu không có hàm rollback?
5. Vì sao setProfile tạo object mới thay vì profile.name = name?

## Luồng 4 — FlatList → tương tác → danh sách rỗng

- Mục đích: hiển thị hoạt động, chọn/bỏ chọn và kiểm tra danh sách rỗng thật.
- Điểm vào: `ActivityScreen.jsx`.
- Tệp liên quan: `activities.js`, `ActivityItem.jsx`.
- Đầu vào: 6 mục cố định, selectedIds và showSelectedOnly.
- Kích hoạt: nhấn Pressable hoặc công tắc lọc.
- Biến đổi: toggleActivity dùng filter/spread tạo mảng ID mới; visibleActivities tính lại; FlatList nhận data và extraData; renderItem truyền props xuống item.
- Đầu ra: viền/chữ đã chọn, số đếm, mục sau lọc; data rỗng thì ListEmptyComponent xuất hiện.
- Đường lỗi: ID trùng làm key không ổn định; mutate mảng có thể khiến cập nhật không đúng; thiếu extraData khi render phụ thuộc state ngoài data có thể khiến item không cập nhật.

Lecturer có thể hỏi:

1. data và renderItem có trách nhiệm khác nhau thế nào?
2. Vì sao keyExtractor dùng ID thay vì vị trí trong mảng?
3. Vì sao có extraData={selectedIds} dù đã truyền data?
4. filter và spread giúp tránh mutate state ra sao?
5. Làm thế nào đưa app vào trạng thái ListEmptyComponent bằng thao tác thật?

## Luồng 5 — AsyncStorage → đọc lúc đầu → khôi phục/fallback

- Mục đích: giữ theme/hồ sơ qua lần mở app, xử lý dữ liệu cũ hoặc hỏng.
- Điểm vào: effect đầu tiên của `ThemeContext.jsx`, sau đó `ProfileContext.jsx`.
- Tệp liên quan: `appStorage.js`, `profileValidation.js`, `LoadingScreen.jsx`, `StorageNotice.jsx`.
- Đầu vào: chuỗi JSON hoặc null từ hai key; thay đổi state sau khi mở app.
- Kích hoạt: mount Provider → đọc; sau hydrate, người dùng sửa → effect ghi.
- Biến đổi: getItem → JSON.parse → validator → state/fallback → hydrated=true. Ref ghi nhớ giá trị restore để không ghi lại; state mới → JSON.stringify → chuỗi Promise theo key → setItem.
- Đầu ra: app mở với dữ liệu đúng; thay đổi được lưu; lần mở sau đọc lại.
- Đường lỗi: thiếu key là bình thường; parse/shape/read lỗi dùng mặc định và báo; write lỗi giữ state/cảnh báo; lần đổi tiếp theo thử ghi. Cleanup chỉ bỏ kết quả cũ, không hủy yêu cầu ghi.

Lecturer có thể hỏi:

1. Vì sao không lưu state mặc định ngay khi Provider mount?
2. hydrated khác lastRequestedValue ở điểm nào? Vì sao cái sau là ref?
3. JSON parse thành công đã đủ để tin dữ liệu chưa?
4. try/catch xử lý khác nhau thế nào giữa lỗi đọc và lỗi ghi?
5. pendingWrites giải quyết vấn đề gì khi người dùng thay đổi nhanh?

## Luồng 6 — Gỡ lỗi có bằng chứng

- Mục đích: tìm nguyên nhân rồi sửa đúng chỗ, phân biệt lỗi app với lỗi công cụ kiểm tra.
- Điểm vào: một ca FAIL hoặc biểu hiện bất thường trên thiết bị.
- Tệp liên quan: `TEST_MATRIX.md`, `DEBUG_LOG.md`, `AI_USAGE_LOG.md` và source thuộc luồng lỗi.
- Đầu vào: bước tái hiện, giá trị mong đợi/thực tế, thông báo và môi trường.
- Kích hoạt: thử một giả thuyết nhỏ có thể kiểm chứng.
- Biến đổi: xác định event/route → xem state/props → kiểm tra validator/effect/storage → tìm nguyên nhân → sửa tối thiểu → chạy lại ca lỗi và hồi quy liên quan.
- Đầu ra: log có nguyên nhân, sửa và bằng chứng kiểm tra lại; không coi “không thấy lỗi” là chứng minh mọi thiết bị đều đạt.
- Đường lỗi: script mock có thể sai như D01; bundle đạt không chứng minh keyboard/back; lỗi mạng doctor không nhất thiết là cấu hình app sai.

Lecturer có thể hỏi:

1. Nếu Lưu không đổi Home, bạn lần theo các hàm nào?
2. Nếu Dark bị mất khi mở lại, bạn kiểm tra key, hydrate và effect theo thứ tự nào?
3. Vì sao D01 sửa script thay vì sửa style trong app?
4. Doctor đạt khác gì bundle đạt và test trên điện thoại đạt?
5. Bạn chứng minh lỗi đã sửa bằng những bằng chứng nào?

## Thứ tự đọc source để học nhanh

1. App.jsx và index.js: cây Provider và điểm vào.
2. AppNavigator.jsx: route và stack.
3. ThemeContext.jsx: state, màu, hàm đổi theme.
4. ProfileContext.jsx: chủ sở hữu hồ sơ và updateProfile.
5. EditProfileScreen.jsx + profileValidation.js: input, nháp, lỗi, Lưu/Hủy.
6. ActivityScreen.jsx + ActivityItem.jsx: props, array update, FlatList.
7. appStorage.js: chuỗi JSON, Promise, try/catch.
8. Hai effect hydrate/lưu trong Context: đọc chậm, ref, cleanup, LoadingScreen/StorageNotice.
9. TEST_MATRIX + DEBUG_LOG: tự tái hiện và giải thích phạm vi kiểm chứng.

## Sáu bài tập đổi yêu cầu — CHƯA triển khai

| Bài tập | Tệp bị ảnh hưởng | State bị ảnh hưởng | Storage bị ảnh hưởng | Kiểm tra cần thêm |
|---|---|---|---|---|
| Thêm trường điện thoại | ProfileContext, EditProfileScreen, ProfileScreen, profileValidation | phone trong profile chính và bản nháp | Model profile thêm phone; dữ liệu cũ chưa có trường cần mặc định/migration | Nhập hợp lệ/sai, Save/Cancel, restore dữ liệu cũ/mới |
| Đổi quy tắc tên | profileValidation; nhãn/lỗi EditProfileScreen | errors; tên đã lưu có thể không còn hợp lệ | Validator hydrate dùng quy tắc mới: quyết định chấp nhận/migrate dữ liệu cũ | Biên mới, khoảng trắng, hồ sơ lưu theo quy tắc cũ |
| Thêm nút đặt lại bản nháp | EditProfileScreen | name/bio trở về profile hiện tại, errors={} | Không đổi, vì chưa Save | Nháp bẩn → reset; Context/disk giữ nguyên; Save sau reset |
| Thêm bộ lọc hoạt động | ActivityScreen, có thể activities/ActivityItem tùy tiêu chí | State bộ lọc mới; data vẫn tính từ state | Không cần nếu vẫn chỉ dùng trong màn hình | Kết hợp bộ lọc, empty, selected count và key |
| Lưu lựa chọn hoạt động | ActivityScreen; appStorage; nơi sở hữu lựa chọn nếu cần dùng chung | selectedIds + hydrate/error; cân nhắc Provider khi phải chia sẻ | Khóa mới, validator chỉ nhận ID tồn tại; tránh ghi sớm | Restore chọn, ID cũ không tồn tại, read/write lỗi, pop/remount |
| Thêm theme theo hệ thống | ThemeContext, ThemeToggle/Settings, app.json nếu cần native appearance | Preference light/dark/system; mode hiệu lực tính từ hệ điều hành | Validator/key theme nhận system; giữ tương thích dữ liệu cũ | Đổi giao diện hệ điều hành khi đang mở app, chọn thủ công, restart và fallback |

Mục tiêu mỗi bài: tự chỉ đúng tệp → nói rõ flow → sửa nhỏ → chạy kiểm tra → giải thích một failure path. Sáu bài vẫn là bài luyện chưa triển khai trong hồ sơ này; không phải tính năng còn thiếu để app đáp ứng core scope.

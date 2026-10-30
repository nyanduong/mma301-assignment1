# Nhật ký sử dụng AI

**Cập nhật hồ sơ nộp: 30/10/2026.** Các mục M0–M7 bên dưới là lịch sử theo ngày/milestone, giữ nguyên nội dung; phiên bản SDK và kết quả test trong đó không mô tả bản hiện tại. Bản hiện tại dùng Expo 58.0.21 / React 19.3.0 / RN 0.88.1. Xem phần bổ sung 29–30/10 ở cuối tài liệu và [TEST_MATRIX.md](TEST_MATRIX.md) cho kết quả mới.

## 04/10/2026 — M0: Cách làm theo từng giai đoạn và khởi tạo Expo

### Nhiệm vụ, yêu cầu và tài liệu tham khảo

- Người học yêu cầu AI cùng lập trình và hướng dẫn cho MMA301 — Bài tập 1. Chỉ làm từng giai đoạn được yêu cầu; giải thích vì sao cần thay đổi, thay đổi làm gì, luồng chạy và trường hợp có thể lỗi.
- Giai đoạn được yêu cầu: **M0 — Khởi tạo Expo và kiểm tra môi trường**, là bước học tập nội bộ trước M1.
- Phạm vi: tạo dự án Expo JavaScript từ mẫu trống ngay tại thư mục gốc; viết `App.js` tối thiểu; cập nhật README; ghi nhật ký sử dụng AI; kiểm tra thực tế; tạo một bản ghi thay đổi trong Git và đẩy lên nhánh `main`.
- Chưa làm: chuyển màn hình, nhiều màn hình, Context API, AsyncStorage, biểu mẫu nhập liệu, FlatList, hệ thống giao diện theo chủ đề, Firebase, máy chủ xử lý dữ liệu, TypeScript hoặc cấu trúc mã nguồn phức tạp.
- [Kho mã nguồn của bài tập](https://github.com/NhanDuong21/mma301-assignment1).
- Tài liệu tham khảo: [Các mẫu dự án Expo](https://docs.expo.dev/more/create-expo/) và [Kiến thức React cơ bản trong React Native](https://reactnative.dev/docs/intro-react).

### Mục đích

Tạo nền React Native + Expo nhỏ, dễ đọc và dễ giải thích. Làm theo từng giai đoạn để người học có thể hiểu mã nguồn, chạy lại các bước kiểm tra và trình bày trong buổi phỏng vấn với giảng viên.

### Nội dung do AI tạo đã được sử dụng

- Các lệnh kiểm tra môi trường và Git trước khi sửa tệp.
- Cách tạo dự án bằng mẫu trống chính thức của Expo, sao chép các tệp cần thiết vào kho mã nguồn hiện có và cài thư viện bằng npm.
- `App.js` gồm một `View`, hai `Text` và phần khai báo kiểu hiển thị bằng `StyleSheet.create`.
- Tên dự án trong `package.json` và `app.json`; README giải thích cách chạy và vai trò của từng tệp.
- Các lệnh kiểm tra, việc tìm hiểu cảnh báo thư viện và nhật ký này.
- Phần báo cáo M0 giải thích luồng chạy, kiến thức cơ bản, câu hỏi phỏng vấn, kết quả kiểm tra và vấn đề đã gặp.

### Những nội dung đã điều chỉnh

- AI điều chỉnh mẫu Expo cho kho mã nguồn hiện có. Không sao chép thư mục `.git` của dự án tạm, nên lịch sử Git gốc được giữ nguyên.
- Đổi tên gói thư viện của dự án và mã định danh trong cấu hình Expo thành `mma301-assignment1`; tên hiển thị là `MMA301 Assignment 1`.
- Thay chữ mẫu bằng hai dòng được yêu cầu, căn giữa bằng các thuộc tính bố trí đơn giản.
- Bỏ thư viện `expo-status-bar` không dùng và lệnh chạy trên trình duyệt. M0 chỉ chuẩn bị nền ứng dụng Android/iOS.
- Giữ các ảnh và giấy phép đi kèm mẫu Expo. Thêm `.env` vào `.gitignore`.
- Chuyển README gốc từ UTF-16 LE sang UTF-8 rồi viết hướng dẫn cài đặt và chạy.
- Những thay đổi và lệnh kiểm tra trong mục này do AI thực hiện. Không ghi nhận rằng người học đã tự sửa mã nguồn hay tự kiểm tra trên điện thoại khi chưa có bằng chứng.

### Cách kiểm chứng và kết quả thực tế

Các bước dưới đây đã chạy trên Windows, tại thư mục gốc của dự án, ngày 04/10/2026 theo múi giờ Việt Nam:

| Lệnh hoặc bước kiểm tra | Kết quả thực tế |
| --- | --- |
| `node -v` | Phiên bản `v24.15.0` |
| `npm -v` | Phiên bản `11.12.1` |
| `git status` trước khi sửa | Nhánh `main`, đồng bộ với `origin/main`, không có thay đổi chưa ghi vào Git |
| `git branch --show-current` | `main` |
| `git log --oneline -5` trước khi sửa | Có bản ghi gốc `e1030d2` |
| `npx --yes create-expo-app@latest --help` | Xác nhận có các lựa chọn `blank`, `--no-install`, `--no-agents-md` |
| `npx --yes create-expo-app@latest <thu-muc-tam> --template blank --no-install --no-agents-md --yes` | Tạo mẫu thành công ngoài kho mã nguồn; sao chép các tệp cần thiết vào thư mục gốc. `<thu-muc-tam>` là chỗ điền đường dẫn thực tế |
| `npm install` | Mã kết thúc 0, tức lệnh thành công; thêm 463 gói, kiểm tra bảo mật 464 gói; có cảnh báo được ghi bên dưới |
| `npm ls --depth=0` | Mã kết thúc 0; `expo 57.0.26`, `react 19.2.3`, `react-native 0.86.3` |
| `npx expo config --type public` | Mã kết thúc 0; đúng tên ứng dụng, mã định danh, SDK 57, nền tảng Android/iOS và đường dẫn ảnh |
| `npx expo install --check` | Mã kết thúc 0; thư viện đúng phiên bản yêu cầu của Expo |
| `npx --yes expo-doctor` | Mã kết thúc 0; đạt cả 21/21 mục kiểm tra |
| `npm start -- --localhost --port 8081`, đặt `CI=1` riêng trong phiên kiểm tra | Expo/Metro khởi động và chờ tại `http://localhost:8081`; chế độ này tắt tự động tải lại |
| Gửi yêu cầu tới `http://localhost:8081/status` | HTTP 200; giải mã được nội dung `packager-status:running`, nghĩa là Metro đang chạy |
| Gửi yêu cầu tới `/index.bundle?platform=android&dev=true&minify=false` | HTTP 200; 4.152.626 ký tự; có cả hai dòng chữ từ `App.js` |
| Gửi yêu cầu tới `/index.bundle?platform=ios&dev=true&minify=false` | HTTP 200; 4.144.068 ký tự; có cả hai dòng chữ từ `App.js` |
| `git check-ignore node_modules .expo` | Cả hai thư mục đều được Git bỏ qua |
| Đọc README và nhật ký bằng bộ giải mã UTF-8 nghiêm ngặt | Cả hai tệp đọc thành công và có nội dung |
| `git diff --cached --check` | Mã kết thúc 0; không có lỗi khoảng trắng trong các thay đổi chuẩn bị ghi vào Git |
| `npm audit --json` | Mã kết thúc 1; còn 23 mục cảnh báo bảo mật: 7 mức trung bình, 16 mức cao, 0 mức nghiêm trọng nhất |

Biến `CI=1` chỉ được đặt trong phiên kiểm tra của AI, không lưu vào dự án. Khi chạy `npm start` bình thường, bạn sử dụng chế độ phát triển thông thường.

**Giới hạn kiểm chứng:** đã kiểm tra cấu hình, tính tương thích thư viện, Metro khởi động và việc tạo gói JavaScript cho Android/iOS. Chưa chạy trên điện thoại thật hoặc máy ảo, chưa quan sát giao diện và chưa thử việc tự cập nhật giao diện sau khi lưu mã nguồn. Người học vẫn cần mở ứng dụng bằng Expo Go tương thích và xác nhận hai dòng chữ hiển thị.

### Vấn đề đã gặp và thông tin để tìm nguyên nhân lỗi

#### Không sửa được README: đã xử lý

- Biểu hiện: công cụ `apply_patch` từ chối đọc README vì byte đầu không hợp lệ theo UTF-8.
- Giả thuyết: README có sẵn đang dùng cách mã hóa chữ khác UTF-8.
- Nguyên nhân gốc: đọc dữ liệu thô thấy hai byte đầu `FF-FE`, tiếp theo là dữ liệu chữ UTF-16 LE.
- Cách sửa: đọc nội dung cũ rồi ghi lại bằng UTF-8 không có dấu nhận diện mã hóa ở đầu tệp trước khi sửa.
- Kiểm tra lại: `apply_patch` sửa tệp thành công; README mới đọc được bằng UTF-8.

#### Cảnh báo thư viện: vẫn còn tồn tại

- Biểu hiện: `npm install` cảnh báo `uuid@7.0.3` không còn được hỗ trợ và báo 23 mục cảnh báo bảo mật.
- Giả thuyết: các thư viện trong mẫu Expo đang dùng những gói đã có thông báo lỗ hổng.
- Nguyên nhân gốc: `npm audit` ghi nhận các chuỗi ảnh hưởng liên quan tới `braces/micromatch`, `node-forge` và `uuid`, lan tới các gói Expo/Metro/React Native phụ thuộc vào chúng. Con số 23 bao gồm các gói bị ảnh hưởng theo chuỗi, không phải 23 lỗi riêng trong mã nguồn ứng dụng.
- Cách xử lý hiện tại: giữ các phiên bản tương thích với SDK 57. Một số đề xuất sẽ hạ Expo xuống `44.0.6` hoặc React Native xuống `0.72.17`, làm xáo trộn nền dự án hiện tại. Không ép sửa phiên bản thư viện và không khẳng định đã hết vấn đề bảo mật.
- Kiểm tra lại: `npm audit` vẫn báo 23 mục; kiểm tra tương thích thư viện và cả 21 mục của Expo đều đạt; tạo gói JavaScript Android/iOS thành công. Các cảnh báo bảo mật vẫn chưa được giải quyết.

#### Những thông báo không chặn việc chạy

- Git báo ký tự xuống dòng LF sẽ được đổi thành CRLF theo cấu hình trên Windows. Đây là việc chuẩn hóa xuống dòng, không phải lỗi chạy ứng dụng.
- Tiến trình Metro báo `NO_COLOR` bị bỏ qua khi có `FORCE_COLOR`. Thông báo liên quan tới màu chữ trong cửa sổ dòng lệnh; việc tạo gói JavaScript vẫn thành công.
- Lúc đầu PowerShell trả phản hồi trạng thái Metro dưới dạng các byte. Giải mã UTF-8 cho kết quả `packager-status:running`. Dãy số ban đầu là vấn đề cách hiển thị phản hồi, không phải Metro bị lỗi.

Chưa quan sát thấy lỗi mã nguồn ứng dụng trong các bước kiểm tra cấu hình, khởi động và tạo gói JavaScript. Việc chạy và hiển thị giao diện trên thiết bị vẫn chưa được xác minh.

## 04/10/2026 — Điều chỉnh tài liệu M0 sang tiếng Việt

### Nhiệm vụ và mục đích

Người học yêu cầu chuyển README và các tệp Markdown trong `docs/` sang tiếng Việt dễ hiểu để thuận tiện tự học và giải thích mã nguồn.

### Nội dung AI đã tạo và điều chỉnh

- Viết lại README và nhật ký này bằng tiếng Việt, gồm tiêu đề, hướng dẫn, chú thích cấu trúc thư mục, kết quả kiểm tra và thông tin tìm nguyên nhân lỗi.
- Giải thích các thuật ngữ bằng lời đơn giản. Giữ nguyên tên tệp, tên công nghệ, lệnh, phiên bản và nội dung phản hồi kỹ thuật để đối chiếu với dự án.
- Giữ đúng bằng chứng M0, bao gồm 23 cảnh báo bảo mật còn tồn tại và việc chưa kiểm chứng trên thiết bị.
- Hai dòng chữ tiếng Anh trong README là nội dung hiện có của `App.js`, được trích nguyên văn để đối chiếu.

### Cách kiểm chứng

- Đọc lại hai tài liệu: phần giải thích và tiêu đề đều bằng tiếng Việt; tên kỹ thuật, lệnh và nội dung ứng dụng được trích nguyên văn khi cần đối chiếu.
- Kiểm tra UTF-8 nghiêm ngặt: cả hai tệp đọc được, không có ký tự thay thế do lỗi mã hóa.
- Kiểm tra dấu mở và đóng khối mã Markdown: hợp lệ ở cả hai tệp.
- Kiểm tra liên kết nội bộ từ README tới nhật ký: tệp đích tồn tại.
- Đối chiếu các phiên bản, số lượng gói, 21/21 mục đạt, kích thước gói JavaScript, 23 cảnh báo và giới hạn chưa kiểm tra thiết bị: các thông tin được giữ lại.
- Chạy `git diff --check`: thành công, không có lỗi khoảng trắng. Chỉ README và nhật ký được thay đổi; không sửa mã nguồn ứng dụng.
- Đây là thay đổi tài liệu; không chạy lại ứng dụng và không ghi nhận thêm bằng chứng kiểm tra trên thiết bị.

### Vấn đề trong lúc chỉnh tài liệu

- Biểu hiện: công cụ sửa tệp từ chối bản vá đầu tiên vì có nhiều thao tác cùng nhắm vào một tệp; chưa có thay đổi nào được ghi bởi bản vá đó.
- Nguyên nhân: AI gộp thao tác xóa và tạo lại cùng đường dẫn trong một bản vá, trong khi công cụ không hỗ trợ cách gọi này.
- Cách sửa: tách thành các bản vá hợp lệ rồi ghi lại hai tài liệu.
- Kiểm tra lại: nội dung tiếng Việt đã được ghi thành công; các bước kiểm tra tài liệu bên trên đều đạt.

## 04/10/2026 — Thống nhất quy ước đặt tên tệp

### Nhiệm vụ và mục đích

Người học hỏi về quy ước `.js` và `.jsx`, đồng thời yêu cầu bài tập sử dụng cách đặt tên thống nhất. Mục đích là nhận biết nhanh tệp giao diện và tệp xử lý JavaScript.

### Nội dung AI đã tạo và điều chỉnh

- Tham khảo [hướng dẫn đặt tên React của Airbnb](https://github.com/airbnb/javascript/tree/master/react#naming): tệp thành phần giao diện dùng `.jsx` và `PascalCase`.
- Đổi `App.js` thành `App.jsx`, giữ nguyên nội dung bên trong.
- Giữ `index.js` vì tệp này không chứa JSX. Dòng `import App from './App'` không ghi đuôi tệp; việc kiểm tra thực tế xác nhận Metro tìm được `App.jsx`.
- Cập nhật tên tệp hiện tại và phần quy ước đặt tên trong README. Các tệp JavaScript tự đặt không chứa JSX dùng `.js` và `camelCase`; tên cấu hình giữ theo công cụ.
- Đây là quy ước được chọn cho bài tập, không phải chuẩn bắt buộc duy nhất của React Native. Không cài thêm thư viện, không bắt đầu M1.
- Các mục nhật ký trước vẫn nhắc `App.js` vì đó là tên thật tại thời điểm kiểm tra trước đây.

### Cách kiểm chứng

- So sánh nội dung `App.jsx` với `App.js` trong Git trước khi đổi tên: giống nhau.
- Chạy `npm start -- --localhost --port 8082` với `CI=1` riêng trong phiên kiểm tra: Metro khởi động thành công.
- Yêu cầu gói JavaScript Android và iOS: cả hai trả HTTP 200, chứa tên `App.jsx` và hai dòng chữ của giao diện.
- Chạy `git diff --check`: không có lỗi khoảng trắng.
- Chưa kiểm tra giao diện trên điện thoại hoặc máy ảo; lần kiểm tra này xác nhận việc tìm tệp và tạo gói JavaScript sau đổi tên.

### Vấn đề gặp trong lệnh kiểm tra

- Biểu hiện: lệnh PowerShell đầu tiên bị lỗi phân tích cú pháp trước khi thực hiện kiểm tra.
- Nguyên nhân gốc: AI viết biến `$namePlatform` ngay trước dấu `:` trong chuỗi; PowerShell hiểu nhầm đó là cú pháp biến có phạm vi.
- Cách sửa: dùng `${namePlatform}` để phân định rõ tên biến.
- Kiểm tra lại: lệnh chạy thành công, nội dung tệp không đổi và cả hai gói Android/iOS đều đạt. Đây là lỗi của lệnh kiểm tra do AI viết, không phải lỗi ứng dụng.

## 07/10/2026 — M1: Khung điều hướng dạng ngăn xếp

### Nhiệm vụ, yêu cầu và tài liệu tham khảo

- Người học yêu cầu triển khai M1 chính thức của MMA301 — Bài tập 1: React Navigation Native Stack với Home, Profile, EditProfile, Activity và Settings; tách phần điều hướng khỏi `App.jsx`, giải thích luồng chạy và kiểm tra trước khi ghi thay đổi vào Git rồi đẩy lên `main`.
- Chỉ tạo giao diện minh họa. Không làm Context, biểu mẫu, trạng thái hồ sơ/hoạt động, danh sách, lưu dữ liệu, đổi giao diện sáng/tối hoặc các chức năng M2–M5.
- Tài liệu tham khảo: [Cài đặt với Expo](https://reactnavigation.org/docs/getting-started/), [Native Stack](https://reactnavigation.org/docs/native-stack-navigator/), [Chuyển màn hình](https://reactnavigation.org/docs/navigating/) và [NavigationContainer](https://reactnavigation.org/docs/navigation-container/).
- Trong yêu cầu M1, người học xác nhận đã mở ứng dụng M0 trên thiết bị thật và thử việc tự cập nhật giao diện sau khi lưu mã nguồn. Đây là thông tin do người học cung cấp ngày 07/10/2026, không phải thao tác trên thiết bị của AI và không xác nhận M1 đã chạy trên thiết bị.

### Mục đích

Tạo một khung điều hướng dễ đọc để người học hiểu route, màn hình, ngăn xếp, nút mở màn hình và nút quay lại. Giữ nội dung các chức năng ở mức minh họa để không làm trước giai đoạn tiếp theo.

### Nội dung AI tạo đã sử dụng và những điều chỉnh

- Cài `@react-navigation/native` và `@react-navigation/native-stack` bằng npm; cài `react-native-screens` và `react-native-safe-area-context` bằng `expo install` để khớp SDK 57.
- `App.jsx` chỉ render `AppNavigator`; giữ nguyên entry point `index.js`.
- Tạo `src/navigation/AppNavigator.jsx`, có một `NavigationContainer`, một Native Stack và năm `Stack.Screen`. `initialRouteName` là `Home`.
- Tạo năm function component trong `src/screens/`, dùng các thành phần cơ bản của React Native, giữ quy ước `PascalCase.jsx`.
- Home có ba nút mở Profile, Activity và Settings. Profile mở EditProfile. EditProfile có nút gọi `navigation.goBack()`; các màn hình con dùng thêm nút quay lại mặc định trên thanh tiêu đề.
- Route dùng tên ngắn, nhất quán: `Home`, `Profile`, `EditProfile`, `Activity`, `Settings`. Tiêu đề EditProfile được hiển thị là `Edit Profile`, độc lập với tên route.
- Tắt hiệu ứng chuyển màn hình bằng `animation: 'none'`. Không thêm bộ biểu tượng, thư viện giao diện, thư mục dịch vụ, hook hoặc Context.
- Cập nhật README tiếng Việt ngắn gọn: M1, cấu trúc, luồng điều hướng, lệnh chạy, checklist T01–T10 chưa đánh dấu và những chức năng chưa triển khai.
- Cập nhật Expo từ `57.0.26` lên bản vá `57.0.27` do công cụ kiểm tra yêu cầu; vẫn ở SDK 57, giữ phiên bản React và React Native.

### Kiểm chứng do AI thực hiện

| Lệnh hoặc bước kiểm tra | Kết quả thực tế |
| --- | --- |
| Kiểm tra Git trước khi sửa | `main`, đồng bộ `origin/main`, sạch; commit mới nhất `69ef50d`, lịch sử M0 được giữ nguyên |
| Đọc `package.json`, `App.jsx`, `index.js` và danh sách tệp | Đúng nền JavaScript/Expo và entry point hiện có |
| `npm install @react-navigation/native @react-navigation/native-stack` | Thành công; thêm 19 gói, kiểm tra bảo mật 483 gói; lúc này còn 23 cảnh báo |
| `npx expo install react-native-screens react-native-safe-area-context` | Thành công; chọn hai thư viện native tương thích SDK 57 |
| `npx expo install expo@~57.0.27` | Thành công; cập nhật bản vá Expo và 20 gói trong cây thư viện; kiểm tra bảo mật báo 22 cảnh báo |
| `npm ls --depth=0` sau sửa | Mã kết thúc 0; native `7.5.0`, native-stack `7.20.0`, screens `4.26.2`, safe-area-context `5.7.0`, Expo `57.0.27`, React `19.2.3`, React Native `0.86.3` |
| `npx expo install --check` sau sửa | Mã kết thúc 0; các thư viện đúng phiên bản yêu cầu |
| `npx expo config --type public` | Mã kết thúc 0; đúng tên, mã định danh, SDK 57, cấu hình Android/iOS và đường dẫn ảnh |
| `npx --yes expo-doctor` sau sửa và thử lại | Mã kết thúc 0; cả 21/21 mục đạt |
| `npm start -- --localhost --port 8083`, đặt `CI=1` riêng trong phiên kiểm tra | Expo/Metro khởi động thành công; chế độ này tắt tự động tải lại trong phiên kiểm tra |
| Yêu cầu trạng thái Metro tại `/status` | HTTP 200; `packager-status:running` |
| Gói Android tại `/index.bundle?platform=android&dev=true&minify=false` | HTTP 200; 4.971.405 ký tự; có AppNavigator, năm màn hình và nội dung tiếng Việt sau giải mã ký tự |
| Gói iOS tại `/index.bundle?platform=ios&dev=true&minify=false` | HTTP 200; 4.969.131 ký tự; có AppNavigator, năm màn hình và nội dung tiếng Việt sau giải mã ký tự |
| Kiểm tra JavaScript bằng tập lệnh tạm ngoài kho code | Thành công; chi tiết bên dưới |
| Rà soát phạm vi mã nguồn | Không thêm các API Context, trạng thái ứng dụng, nhập liệu, danh sách hay lưu dữ liệu bị loại khỏi M1 |
| Kiểm tra tài liệu UTF-8, khối mã và liên kết nội bộ | Cả README và nhật ký đều hợp lệ |
| Đối chiếu nhật ký với bản trước M1 trong Git | Nội dung lịch sử được giữ nguyên; chỉ thêm mục M1 |
| Kiểm tra checklist README | Đủ T01–T10, cả 10 mục chưa đánh dấu |
| `git diff --check` | Không có lỗi khoảng trắng |
| `npm audit --json` cuối M1 | Mã kết thúc 1; còn 22 mục cảnh báo: 7 mức trung bình, 15 mức cao, 0 mức nghiêm trọng nhất |

Tập lệnh kiểm tra logic nằm ngoài kho code, tại thư mục tạm của Windows, tên `mma301-m1-navigation-check.cjs`; chạy bằng Node với đường dẫn kho code làm tham số. Tập lệnh dùng Babel đã có trong cây thư viện để đọc JSX; thay thành phần giao diện bằng phần tử giả lập và dùng `StackRouter` thật của thư viện đã cài để xử lý các hành động. Không cài thêm thư viện kiểm thử.

Các kiểm tra logic L01–L10 đều đạt: Home khởi đầu; các nút thật trong mã nguồn gọi đúng Profile, EditProfile, Activity, Settings và `goBack()`; các trạng thái ngăn xếp đúng; năm vòng điều hướng liên tiếp đều trở lại Home. Cũng xác nhận đủ năm route, liên kết đúng component, không có route trùng, chỉ một container và hiệu ứng chuyển màn hình đã tắt. Hành động tới route không tồn tại và quay lại khi chỉ còn Home được router từ chối như dự kiến.

### Giới hạn kiểm chứng và phần người học cần tự kiểm tra

- AI không chạm nút trên điện thoại, không gắn giao diện native trong môi trường kiểm tra logic và không thử nút quay lại trên thanh tiêu đề hoặc hành động quay lại của hệ thống.
- Kiểm tra gói JavaScript chứng minh các import được xử lý; kiểm tra logic chứng minh mã xử lý nút và router JavaScript hoạt động trong môi trường kiểm tra. Hai việc này chưa chứng minh toàn bộ vòng đời navigator hoặc giao diện native trên thiết bị hoạt động.
- Checklist T01–T10 trong README vẫn chưa đánh dấu. Chỉ xác nhận sau khi người học tự mở M1 và thử từng bước trên thiết bị.
- Các cảnh báo bảo mật vẫn còn; không ép thay phiên bản thư viện hoặc khẳng định đã hết vấn đề bảo mật.

### Vấn đề thật đã gặp

#### Phiên bản vá Expo không còn khớp yêu cầu: đã xử lý

- Biểu hiện → `expo install --check` báo thư viện cũ; `expo-doctor` không đạt mục kiểm tra phiên bản.
- Giả thuyết → đã có bản vá mới trong SDK 57 sau M0.
- Kiểm tra → công cụ báo yêu cầu `~57.0.27`, trong khi đang cài `57.0.26`.
- Nguyên nhân gốc → bản vá Expo hiện có thấp hơn phiên bản được khuyến nghị tại thời điểm M1.
- Cách sửa → chạy `npx expo install expo@~57.0.27`.
- Kiểm tra lại → thư viện đúng phiên bản; `expo-doctor` đạt 21/21; kiểm tra logic và tạo gói Android/iOS thành công.

#### Máy chủ Expo bị hết thời gian kết nối: thử lại thành công

- Biểu hiện → lần đầu `expo-doctor` báo `fetch failed` và `ConnectTimeoutError` tới `exp.host:443`; không kiểm tra được cấu trúc cấu hình trực tuyến. Tổng lần đầu là 19/21 mục đạt, gồm lỗi mạng và sai bản vá.
- Giả thuyết → kết nối tới dịch vụ Expo bị gián đoạn trong lần kiểm tra đó.
- Kiểm tra → thông báo chỉ ra kết nối vượt 10 giây; cấu hình vẫn đọc được bằng `expo config`.
- Nguyên nhân xác định được → yêu cầu mạng tới máy chủ Expo bị hết thời gian; chưa có bằng chứng để xác định nguyên nhân sâu hơn ở mạng.
- Cách xử lý → chạy lại `expo-doctor` sau khi cài bản vá, không bỏ qua hoặc tắt mục kiểm tra.
- Kiểm tra lại → mã kết thúc 0, cả 21/21 mục đạt.

#### Lệnh kiểm tra không tìm thấy chữ tiếng Việt trong gói: đã sửa cách kiểm tra

- Biểu hiện → gói Android trả HTTP 200 nhưng kiểm tra báo thiếu cụm chữ từ Home.
- Giả thuyết → ký tự trong mã JavaScript tạo ra đã được biểu diễn theo cách khác.
- Kiểm tra → đọc đoạn mã gần tiêu đề Home, thấy chuỗi tiếng Việt chứa các dạng `\u1ECD`, `\xE0` thay cho chữ có dấu.
- Nguyên nhân gốc → công cụ chuyển mã biểu diễn chữ bằng mã ký tự; tìm chuỗi tiếng Việt nguyên văn trong văn bản gói cho kết quả sai.
- Cách sửa → giải mã các dạng `\uXXXX` và `\xXX` trước khi đối chiếu chữ; không sửa giao diện ứng dụng.
- Kiểm tra lại → cả gói Android/iOS đều có đủ màn hình và chữ yêu cầu. Đây là lỗi trong cách kiểm tra do AI viết, không phải lỗi ứng dụng.

Chưa quan sát thấy lỗi thật của mã nguồn ứng dụng trong phạm vi kiểm tra M1. Các giới hạn trên thiết bị và cảnh báo thư viện được giữ lại rõ ràng.

## 07/10/2026 — M2: Giao diện dùng chung và Context chia sẻ theme

### Nhiệm vụ, mục đích và tài liệu tham khảo

- Yêu cầu của người học: thêm chế độ sáng/tối bằng Context, Settings đổi theme, cả năm màn hình và thanh tiêu đề dùng chung theme; ít nhất hai component dùng chung; giữ luồng M1 và không làm M3–M5.
- Mục đích: học state, hàm cập nhật state, Provider, thành phần đọc Context, `children` và cách tách bố trí lặp lại.
- State chỉ nằm trong bộ nhớ. Không dùng AsyncStorage, lưu dữ liệu hoặc Context hồ sơ. Khởi động lại hoàn toàn trở về Light là kết quả đúng của M2.
- Tài liệu: [useState](https://react.dev/reference/react/useState), [useContext](https://react.dev/reference/react/useContext), [createContext](https://react.dev/reference/react/createContext), [children và props](https://react.dev/learn/passing-props-to-a-component), [theme điều hướng](https://reactnavigation.org/docs/themes/).

### Thiết kế trước khi viết mã

- `ThemeProvider` sở hữu `themeMode`, khởi tạo `'light'`.
- `isDark` và `colors` được tính từ `themeMode`, không giữ thêm bản sao state.
- `toggleTheme` dùng hàm cập nhật nhận chế độ trước đó để chuyển qua lại.
- Context cung cấp đúng bốn giá trị: `themeMode`, `isDark`, `colors`, `toggleTheme`.
- Provider nằm trên AppNavigator; navigator, năm màn hình, ScreenContainer và ThemeToggle đọc Context từ bên dưới. Theme không đặt riêng trong Settings vì các thành phần khác cũng cần dùng.

### Nội dung AI tạo đã sử dụng và điều chỉnh

- Tạo `src/context/ThemeContext.jsx` bằng `createContext`, `useState` và `ThemeContext.Provider`. Hai bộ màu có background, surface, text, secondaryText, primary và border.
- `App.jsx` ngắn gọn, đặt ThemeProvider bao ngoài AppNavigator.
- Tạo ScreenContainer nhận `children`, chia sẻ `flex: 1`, khoảng cách nội dung và màu nền. Cả năm màn hình sử dụng; bỏ phần bố trí container lặp lại.
- Tạo ThemeToggle bằng View, Text, Switch và StyleSheet. Switch nhận `value={isDark}` và `onValueChange={toggleTheme}`; Settings chỉ dùng component này.
- Năm màn hình đọc màu chữ chính/phụ từ Context bằng style động; StyleSheet giữ phần bố trí tĩnh. Các Button điều hướng vẫn là Button cơ bản của React Native.
- AppNavigator dùng DefaultTheme/DarkTheme làm nền rồi thay các màu từ Context. Giữ các thuộc tính khác của theme thư viện, gồm fonts; đặt màu thanh tiêu đề, chữ/biểu tượng quay lại và nền nội dung phù hợp.
- Giữ nguyên Home, Profile, EditProfile, Activity, Settings và các lệnh navigate/goBack. Không thêm Tab, Drawer, biểu mẫu hoặc dữ liệu nghiệp vụ.
- README tiếng Việt cập nhật M2, sở hữu state, luồng đổi màu, cấu trúc, giới hạn bộ nhớ và checklist T01–T12 chưa đánh dấu.
- Không cài thêm thư viện hoặc sửa package files. Khi bắt đầu M2, repo đã có hai commit cập nhật dependencies `281733e`, `cb6d4b2`; dùng Expo `58.0.6`, React `19.3.0`, React Native `0.88.0-rc.3`. Giữ các cập nhật của người dùng, không quay lại SDK 57.

### Kiểm chứng thực tế do AI thực hiện

| Lệnh hoặc bước kiểm tra | Kết quả |
| --- | --- |
| Git trước khi sửa | Nhánh main, working tree sạch; commit mới nhất cb6d4b2, hơn origin/main một commit |
| Đọc App, navigator, năm màn hình và package.json | M1 vẫn là năm màn hình minh họa; không có chức năng ngoài phạm vi |
| `npm ls --depth=0` | Mã kết thúc 0; các gói trực tiếp hợp lệ |
| `npx expo install --check` | Mã kết thúc 0; phiên bản tương thích với Expo đang cài |
| `npx --yes expo-doctor` | Mã kết thúc 0; 20/20 mục đạt |
| `npx expo config --type public` | Mã kết thúc 0; SDK 58, cấu hình Android/iOS đọc được |
| `npm start -- --localhost --port 8084`, CI=1 riêng phiên kiểm tra | Metro khởi động; không lưu thiết lập CI vào dự án |
| Yêu cầu `/status` | HTTP 200, packager-status:running |
| Gói Android | HTTP 200; 5.098.389 ký tự; có Context, hai component, navigator, năm màn hình và hai bộ màu |
| Gói iOS | HTTP 200; 5.096.655 ký tự; có đủ các thành phần và màu như Android |
| Tập lệnh tạm `mma301-m2-context-check.cjs` ngoài kho code | Mã kết thúc 0; chi tiết và giới hạn bên dưới |
| Kiểm tra tài liệu UTF-8, khối mã và liên kết nội bộ | Cả README và nhật ký hợp lệ |
| So sánh nhật ký với bản trước M2 trong Git | Nội dung M0/M1 được giữ nguyên, chỉ thêm mục M2 |
| Kiểm tra checklist và phạm vi | Đủ 12 mục chưa đánh dấu; useState chỉ trong ThemeProvider; không có API nhập liệu, danh sách, lưu dữ liệu ngoài phạm vi |
| `git diff --check` | Không có lỗi khoảng trắng |
| `npm audit --json` | Mã kết thúc 1; còn 22 cảnh báo: 7 trung bình, 15 cao, 0 nghiêm trọng nhất; không khẳng định đã sạch bảo mật |

Tập lệnh tạm dùng Babel có sẵn để đọc mã JSX, mô phỏng `useState`, `useContext`, Provider và thành phần native; dùng StackRouter thật của thư viện đã cài. Không thêm thư viện kiểm thử hoặc đưa tập lệnh vào Git.

Các bước kiểm tra mô phỏng đạt: Provider bao ngoài navigator; cả năm màn hình dùng ScreenContainer; thành phần đọc Context được duyệt bên dưới Provider; giá trị mặc định Light; Switch gọi hàm đổi state; màu Settings và cấu hình điều hướng thay đổi; Dark được giữ qua năm màn hình và quay lại; tắt Switch trở về Light; hai lần cập nhật dựa trên state trước đó trả về chế độ ban đầu; phiên Provider mới trở về Light. Tên route vẫn đúng M1.

Kiểm tra số học độ tương phản của chữ chính/phụ trên background/surface: Light đạt 6,92–17,85; Dark đạt 9,85–17,06. Cả tám cặp đạt mức kiểm tra 4,5. Đây là kiểm tra mã màu, không xác nhận kích thước chữ hoặc giao diện thực tế trên thiết bị.

### Giới hạn và việc người học cần kiểm chứng

- Hooks React và giao diện trong tập lệnh là mô phỏng. Không xác minh bộ lập lịch render thật của React, vòng đời navigation native, việc chạm Switch hoặc màu hiển thị trên điện thoại.
- Bundle và mô phỏng không thay thế kiểm tra thiết bị. T01–T12 trong README vẫn chưa đánh dấu.
- Cần tự thử Light/Dark, quay lại/chuyển màn hình, chữ, thanh tiêu đề/biểu tượng quay lại và khởi động lại hoàn toàn.
- Fast Refresh có thể giữ state; không dùng việc lưu mã nguồn thay cho kiểm tra khởi động lại ở T10.
- Context chỉ chia sẻ theme. State chỉ phục vụ một component nên giữ trong component đó; không đưa navigation, hồ sơ, dữ liệu hoạt động hoặc biểu mẫu vào ThemeContext.

### Vấn đề thật quan sát được

- Chưa gặp lỗi thực tế của mã nguồn ứng dụng trong các kiểm tra M2 đã chạy; không tạo lỗi giả để ghi nhật ký.
- Các cảnh báo bảo mật dependencies vẫn còn 22 mục, như kết quả kiểm tra ở đầu M2; không sửa ép phiên bản ngoài phạm vi milestone.
- Metro có thông báo NO_COLOR bị bỏ qua khi có FORCE_COLOR; Git có thông báo chuẩn hóa LF/CRLF. Đây là thông báo môi trường, không chặn kiểm tra hoặc tạo bundle.

## M3 — Hồ sơ dùng chung và biểu mẫu (07/10/2026)

- Yêu cầu/tham chiếu: sprint M3→M7 của người học; chỉ M3 trong commit này.
- Mục đích: hiểu bản nháp cục bộ, Context dùng chung, cập nhật bất biến và kiểm tra dữ liệu trước khi lưu.
- Đầu ra AI sử dụng: ProfileContext, quy tắc validateProfile, Profile/EditProfile, lời chào Home, provider tree và màu lỗi. Tài liệu tiếng Việt cập nhật baseline SDK 57.
- Điều chỉnh: giữ avatar chữ cái không cần mạng; không thêm thư viện form; bản nháp khởi tạo lúc màn hình được mở; lỗi giữ đến lần Lưu kế tiếp.
- Luồng: TextInput → state cục bộ → validateProfile → updateProfile tạo object mới → Context → Home/Profile; Hủy chỉ goBack.
- Kiểm chứng: script ngoài repo `node "$env:TEMP\mma301-sprint-check.cjs" "$PWD"` đạt 6 nhóm: validation biên, provider tree, invalid/valid save, cancel/mở lại, Context, theme và route handlers. Mock React hooks/native component; không phải chạy UI native.
- Android bundle HTTP 200 (4.990.031 byte); iOS HTTP 200 (4.987.769 byte), Metro cổng 8085. `npx expo install --check` đạt; `npx expo-doctor` 21/21; `git diff --check` đạt.
- Lỗi thật: D01 trong DEBUG_LOG — script đọc sai vị trí màu trong mảng style; sửa cách kết hợp style, chạy lại cả 6 nhóm đạt. Metro có cảnh báo biến môi trường NO_COLOR/FORCE_COLOR, không ảnh hưởng bundle; không phải lỗi ứng dụng.
- Giới hạn: chưa persistence; kiểm tra ký tự theo UTF-16; chưa xác minh bàn phím/gesture/hiển thị native.
- Người học còn phải: tự test toàn ứng dụng trên điện thoại cuối sprint, giải thích controlled input và vì sao Cancel không thay đổi Context. AI chưa có bằng chứng kiểm tra điện thoại.

## M4 — Danh sách hoạt động tương tác (07/10/2026)

- Yêu cầu/tham chiếu: sprint M3→M7, phần M4; kế tiếp M3 đã kiểm tra và đẩy lên remote.
- Mục đích: học FlatList, key ổn định, state cục bộ, cập nhật mảng bất biến và trạng thái rỗng thật.
- Đầu ra AI sử dụng: activities.js (6 mục), ActivityItem nhận props và ActivityScreen dùng FlatList, công tắc lọc, số đã chọn.
- Điều chỉnh: mô tả tiếng Việt, trạng thái chọn bằng chữ/viền và accessibilityState; không thêm thư viện, không lưu lựa chọn.
- Luồng: nhấn item → toggleActivity → mảng ID mới → tính danh sách lọc → FlatList nhận data/extraData → item và số lượng cập nhật. Bỏ chọn mục cuối khi đang lọc → thông báo rỗng.
- Kiểm chứng: script ngoài repo đạt 9 nhóm (6 nhóm M3 + dữ liệu/key, chọn/bỏ chọn/bộ lọc/rỗng/bất biến, item/theme). `expo install --check` đạt; doctor 21/21; Android/iOS bundle HTTP 200; `git diff --check` đạt.
- Lỗi thật: chưa phát hiện lỗi ứng dụng mới qua các kiểm tra trên. Các ca kiểm tra trạng thái rỗng là chủ động thử yêu cầu, không phải defect.
- Giới hạn: React hooks và native component được mô phỏng; chưa đo hiệu năng/cuộn/nhấn trên thiết bị. Selection bị xóa khi màn hình được gỡ khỏi stack.
- Người học còn phải: kiểm tra danh sách trên điện thoại trong checklist cuối; giải thích data, renderItem, keyExtractor, extraData, ListEmptyComponent và vì sao không push/splice state.

## M5 — Lưu trữ, khôi phục và xử lý dữ liệu hỏng (07/10/2026)

- Yêu cầu/tham chiếu: sprint M3→M7, phần M5; M4 đã qua gate.
- Mục đích: giữ hồ sơ/theme qua các lần mở app và hiểu thứ tự đọc trước, ghi sau.
- Đầu ra AI sử dụng: appStorage tập trung hai khóa và JSON try/catch; LoadingScreen; StorageNotice; effect hydrate/lưu trong hai Provider; isValidProfile kiểm tra kiểu trước khi dùng dữ liệu.
- Điều chỉnh: Expo cài AsyncStorage 2.2.0; không nâng Expo 57.0.27/React 19.2.3/RN 0.86.3. Không tự ghi mặc định cả khi đọc lỗi; ghi tuần tự cùng khóa tránh race; cleanup effect bỏ cập nhật kết quả đã lỗi thời; lần thay đổi kế tiếp thử lưu lại nếu lần trước thất bại.
- Luồng: Theme đọc → Profile đọc → mở navigator; người dùng sửa → Context đổi → effect ghi JSON; mở phiên mới → đọc/validate/restore; lỗi → mặc định hoặc giữ state hiện tại và báo chưa lưu.
- Kiểm chứng: 21 nhóm trong script ngoài repo đạt, gồm toàn bộ hồi quy M3/M4; first run; save/remount restore; đọc bị trì hoãn và không ghi sớm; JSON hỏng, null, array, sai kiểu/tên/bio/theme; read/write failure; ghi lại thành công; ghi tuần tự, giá trị mới nhất thắng; Provider từ chối hồ sơ invalid. Có 15 cảnh báo do cố ý mô phỏng lỗi; không phải bug mới.
- `npx expo install --check` đạt; doctor 21/21; `npm ls --depth=0` xác nhận nền không đổi; Android/iOS bundle HTTP 200; `git diff --check` đạt.
- Lỗi thật: chưa phát hiện lỗi mới qua những kiểm tra này. npm install báo 22 cảnh báo bảo mật (7 vừa, 15 cao); sẽ phân tích trong M7, không chạy audit fix --force.
- Giới hạn: bài thử dùng mock AsyncStorage và mô phỏng remount, không chứng minh dữ liệu native còn sau khi hệ điều hành tắt app. Không lưu lựa chọn hoạt động, không mã hóa, không có nút thử lại riêng.
- Người học còn phải: kiểm tra Save/theme → đóng/mở app trên điện thoại, đọc hiểu useEffect/useRef/hydrated và đường lỗi trong checklist cuối. Nhật ký M2 giữ nguyên vì hành vi khi đó chỉ nằm trong bộ nhớ.

## M6 — Tích hợp và đối chiếu yêu cầu (07/10/2026)

- Yêu cầu/tham chiếu: sprint M3→M7, phần M6; M5 đã commit/push và chạy đạt.
- Mục đích: nối các luồng thành một ứng dụng, xác định chủ sở hữu state và bằng chứng cho R01–R10.
- Đầu ra AI sử dụng: REQUIREMENT_TRACEABILITY_MATRIX.md và DESIGN_DECISIONS.md; ghi rõ 7 quyết định và đánh đổi, trạng thái kiểm chứng theo từng mức.
- Điều chỉnh: không refactor source vì rà soát không tìm thấy nhu cầu đủ rõ. Giữ hai Context riêng, form/list cục bộ; không thêm abstraction hay dependency.
- Kiểm chứng: chạy lại script ngoài repo đạt 22 nhóm. Nhóm mới đi startup → Profile → Edit invalid/valid/cancel → Home nhận dữ liệu → Activity chọn → Settings đổi theme → quay lại → remount restore; gọi handler source thật và StackRouter thật, hooks/UI/storage vẫn mock. Mở Activity mới xóa lựa chọn đúng chủ sở hữu state.
- Source audit: một NavigationContainer, năm route đúng; storage chỉ ở helper; inputs controlled; keys ổn định; data/extraData/empty đầy đủ; không push/splice state; mỗi consumer nằm dưới Provider.
- Source/dependency không đổi so với hai bundle và doctor đã đạt ở M5. Kiểm tra diff và liên kết tài liệu trước commit.
- Lỗi thật: chưa phát hiện lỗi mới. R09 ghi PARTIAL vì chưa xác minh bố trí native/keyboard/cỡ chữ trên điện thoại; không ghi PASS thay cho thiếu bằng chứng.
- Giới hạn/người học còn phải: thao tác native, vòng đời thật và lưu đĩa thật vẫn chờ checklist cuối; cần học các đánh đổi trong DESIGN_DECISIONS.
- Cập nhật kiểm tra trước commit M6: git diff --check phát hiện dòng trống dư cuối README; đã sửa và chạy lại đạt. Xem D02; đây là lỗi tài liệu, không phải ứng dụng. UTF-8, code fence, liên kết nội bộ và phần lịch sử AI M0–M2 đều đã kiểm tra đạt.

## M7 — Kiểm chứng bản bàn giao và tài liệu học (07/10/2026)

- Yêu cầu/tham chiếu: sprint M3→M7; M7 và chuẩn bị Final Audit, không thêm chức năng.
- Mục đích: lecturer clone/cài/chạy lại được, kết quả kiểm chứng rõ mức bằng chứng, người học có tài liệu học và debug từ source thật.
- Đầu ra AI sử dụng: README cuối; TEST_MATRIX với T01–T18 và D01; LEARNING_MAP có 6 luồng × 5 câu hỏi, 6 bài đổi yêu cầu chưa triển khai; cập nhật RTM; DEBUG_LOG bổ sung lỗi lịch sử có nguồn. Không sửa source/dependency trong M7.
- Điều chỉnh: chỉ ghi PASS cho mức đã kiểm chứng; R09 vẫn PARTIAL/chờ bố trí native. Một checklist điện thoại cuối. Không tạo APK, không thêm framework test, script kiểm tra tạm vẫn ở ngoài repo.
- Bản clone sạch: C:\Users\LENOVO\AppData\Local\Temp\mma301-release-20261007-71c0836, clone origin/main SHA 71c083603c6b9a5fcb269f01d9a55b1e5358f55a. npm ci mã 0, thêm 485 gói/audit 486; không sao chép node_modules hay file secret.
- Kiểm chứng clone: expo install --check đạt; expo-doctor 21/21; expo config public SDK 57.0.0; Metro cổng 8086 báo running; Android HTTP 200/5.028.952 byte, iOS HTTP 200/5.026.779 byte; 22 nhóm logic đạt. Dừng Metro chủ động sau kiểm tra.
- Kiểm chứng repo chính: chạy lại 22 nhóm (có cả bộ lọc rỗng ngay khi chưa chọn gì); UTF-8/code fence/link của 7 tài liệu; phần đầu AI log M0–M2 giữ nguyên từng nội dung sau chuẩn hóa CRLF/LF; git diff --check đạt.
- Rà source: import/bundle đúng; không mutation array; key/empty/extraData đủ; chỉ helper gọi AsyncStorage, keys không lặp; try/catch và fallback; Provider/route/controlled inputs đúng. Không thấy mẫu secret phổ biến hoặc file secret trong phạm vi rà; không tuyên bố kiểm toán toàn lịch sử. Chỉ có console.warn storage trong __DEV__.
- Dependency audit thực tế: npm audit --json mã 1, 22 mục gồm 7 moderate/15 high/0 critical. Các đề xuất có cả Expo 44.0.6 và RN 0.72.17 ngoài baseline; một số gói báo có bản sửa. Chưa sửa và chưa chứng minh mọi mục vô hại. Không chạy audit fix --force; không nâng/hạ SDK. Chi tiết ở TEST_MATRIX.
- Lỗi thật: D01 script đọc style sai, D02 newline dư đã sửa/kiểm tra lại; D03 lệch bản vá Expo và D04 UTF-16 là lỗi lịch sử có evidence. Chưa phát hiện application defect trong phạm vi tự động. uuid deprecated và audit vẫn được giữ làm giới hạn, không nói đã fix.
- Giới hạn: script mô phỏng hooks/UI/storage, dùng StackRouter thật; không thay UI native hoặc đĩa thật. Cảnh báo do fault injection không phải bug thực tế. Không có xác nhận người học chạm thiết bị ở sprint này.
- Người học còn phải: checklist cuối TEST_MATRIX trên điện thoại, học source theo LEARNING_MAP, giải thích WHY/WHAT/FLOW/FAILURE và tự thử change request sau sprint. Sáu bài diễn tập mới chỉ phân tích tác động, chưa triển khai.

## 29/10/2026 — Đối chiếu đề, kiểm thử LDPlayer và sửa StatusBar

- Yêu cầu/prompt tham chiếu: người học hỏi bài đã đáp ứng đề chưa; sau đó yêu cầu dùng màn hình LDPlayer để test; tiếp theo yêu cầu sửa status bar khó đọc khi Dark. Nguồn: phiên chat của dự án ngày 29/10.
- Mục đích: kiểm chứng workflow thật ngoài mock, tìm khác biệt với đề và xử lý lỗi được quan sát.
- Đầu ra AI áp dụng: tổng hợp ca UI, thêm StatusBar của React Native trong ThemeProvider, barStyle theo isDark; không thêm thư viện.
- Cách điều chỉnh: StatusBar đặt ở chủ sở hữu theme và được render cả khi hydrated chưa hoàn tất; giữ loading chặn children đến khi theme đọc xong. Không thay cấu trúc form/list/storage.
- Kiểm chứng: Codex trực tiếp click/type trên LDPlayer 14.0.25.1, Expo Go/Metro mở sẵn. Đã thử đủ năm màn hình, Save/Cancel, tên rỗng/1 ký tự, list chọn/bỏ chọn/lọc/empty, state Activity reset sau pop, theme shared. Đóng tab Expo Go → launcher → mở Expo Go → chọn dự án còn Studentq và Dark.
- Lỗi thật: status bar Android chữ/icon tối trên nền Dark; thiếu barStyle theo theme. Sau sửa đã bật Dark thấy chữ/icon trắng, trả Light thấy chữ/icon tối, đọc rõ. Source hiện tại giữ bản sửa tại ee2e70c; xem B01 trong DEBUG_LOG.
- Giới hạn: phiên UI không ghi SHA bundle, phiên bản Android/Expo Go hoặc độ phân giải logic; không có bộ ảnh/video riêng trong repo. Thao tác đóng/mở không chứng minh force-stop/reboot. Không thấy crash/màn hình đỏ trong các ca đã thử, không thu Logcat.
- Người học ban đầu yêu cầu mở rộng test bàn phím ảo/cỡ chữ lớn/màn hình nhỏ/toàn bộ biên nhập liệu rồi chủ động yêu cầu dừng. Không tiếp tục và không ghi PASS cho các phần đó. Lượt retest kết thúc ở Settings Light; hồ sơ đã trả Student/bio gốc.
- Báo cáo LDPlayer riêng được tạo trong phiên chat nhưng không còn trong workspace khi rà ngày 30/10. Hồ sơ nộp hiện gộp lại bằng chứng có trong lịch sử chat vào TEST_MATRIX, không tạo thêm một tài liệu trùng lặp.
- Phân biệt trách nhiệm: AI thực hiện các thao tác trên emulator; không ghi rằng người học đã tự test, tự giải thích hoặc tự hoàn thành modification.

## 30/10/2026 — Đồng bộ toàn bộ tài liệu nộp

- Yêu cầu/prompt tham chiếu: “cập nhật hết document cho khớp code và kết quả test hiện tại … docs nào out scope đề thì có thể xóa”.
- Mục đích: bỏ thông tin hiện hành sai SDK/trạng thái test; giữ bằng chứng lịch sử đúng thời điểm; chốt README, RTM, design/test/debug/AI và tài liệu phỏng vấn.
- Source đối chiếu: ee2e70ca5266c6a0f57727fd4e1abb6f4250e959; package-lock khóa Expo 58.0.21, React 19.3.0, RN 0.88.1, AsyncStorage 2.2.0. Cập nhật dependency đã tồn tại trong repo trước lượt tài liệu này; AI không chạy install/update để đổi phiên bản.
- Đầu ra áp dụng: viết lại README/RTM/TEST_MATRIX theo trạng thái hiện tại; bổ sung B01 vào DEBUG_LOG, quyết định StatusBar vào DESIGN_DECISIONS và flow theme trong LEARNING_MAP; thêm phần tổng hợp này. Giữ M0–M7 làm lịch sử, không sửa thành các kết quả mới.
- Lý do giữ LEARNING_MAP: phục vụ Code Explanation và Modification/Transfer trong rubric, không phải scope Assignment 2. Không có tài liệu hiện có nào cần xóa; gộp kiểm thử emulator vào TEST_MATRIX để tránh lặp.
- Kiểm chứng mới: npx expo install --check đạt; npx expo-doctor mã 0, 20/20; npx expo config --type public mã 0, SDK 58, Android/iOS, portrait. Root dependencies trong package.json khớp package-lock.json.
- npm audit --json mã 1: 8 mục gồm 5 low, 0 moderate, 3 high, 0 critical; chưa xử lý. Không dùng kết quả 22 mục/doctor 21/21 ngày 07/10 để mô tả SDK 58.
- Cách kiểm chứng tài liệu: đối chiếu source/lockfile; kiểm tra UTF-8, hàng rào code, liên kết nội bộ và git diff --check sau biên tập.
- Chưa thực hiện: không cài clone sạch, không bundle lại Android/iOS, không chạy lại script mock lịch sử, không điều khiển UI hoặc tiếp tục các test người học đã dừng. Những phần này ghi rõ giới hạn trong TEST_MATRIX.
- Người học chịu trách nhiệm cuối: đọc và hiểu source/tài liệu, tuân thủ tên bài nộp và yêu cầu riêng của lớp, tự giải thích/debug và xử lý thay đổi nhỏ khi đánh giá. Không có lời khai thay người học đã hoàn tất các năng lực đó.

# Dự án instagram api được xây dựng theo mô hình MVC

# Cấu trúc thư mục

-   configs: nơi sẽ chứa tất cả các cấu hình cần thiết cho ứng dụng. Ví dụ: nếu ứng dụng kết nối với cơ sở dữ liệu thì cấu hình cho cơ sở dữ liệu (như tên cơ sở dữ liệu và tên người dùng) có thể được đặt trong một tệp như db.js. Tương tự, các cấu hình khác như số lượng bản ghi hiển thị trên mỗi trang để phân trang có thể được lưu trong tệp có tên General.config.js bên trong thư mục configs này.
-   controllers: nơi sẽ chứa tất cả các bộ điều khiển cần thiết cho ứng dụng. Các phương thức điều khiển này nhận yêu cầu từ các tuyến và chuyển đổi chúng thành phản hồi HTTP bằng cách sử dụng bất kỳ phần mềm trung gian nào nếu cần.
-   middlewares: nơi sẽ tách biệt mọi phần mềm trung gian cần thiết cho ứng dụng ở một nơi. Có thể có phần mềm trung gian để xác thực người dùng, kiểm tra quyền,...
-   models: nơi sẽ chứa các mô hình dữ liệu cần thiết cho ứng dụng. Điều này cũng sẽ phụ thuộc vào kho dữ liệu được sử dụng nếu đó là cơ sở dữ liệu quan hệ hoặc không quan hệ (NoSQL). Nội dung của thư mục này cũng sẽ được xác định bằng cách sử dụng thư viện Ánh xạ quan hệ đối tượng (ORM). Nếu sử dụng ORM như Sequelize hoặc Prisma, thư mục này sẽ có các mô hình dữ liệu được xác định theo yêu cầu của nó.
-   routes: nơi sẽ chứa một tệp duy nhất cho mỗi bộ tuyến đường hợp lý. Ví dụ: có thể có các tuyến đường cho một loại tài nguyên. Nó có thể được chia nhỏ hơn nữa theo các phiên bản như v1 hoặc v2 để phân tách các tệp tuyến đường theo phiên bản API.
-   services: nơi sẽ chứa tất cả logic nghiệp vụ. Nó có thể có các dịch vụ đại diện cho các đối tượng kinh doanh và có thể chạy các truy vấn trên cơ sở dữ liệu. Tùy theo nhu cầu, thậm chí các dịch vụ chung như cơ sở dữ liệu cũng có thể được đặt ở đây.
-   types: nơi sẽ chứa các types cần thiết cho ứng dụng.
-   utils: nơi sẽ chứa các hàm tiện ích và trợ giúp cần thiết cho ứng dụng. Nó cũng sẽ hoạt động như một nơi để đặt logic chia sẻ, nếu có. Ví dụ: một trình trợ giúp đơn giản để tính toán độ lệch cho truy vấn SQL được phân trang có thể được đặt trong tệp helper.util.js trong thư mục này.

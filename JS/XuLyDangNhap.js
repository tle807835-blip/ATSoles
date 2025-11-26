document.addEventListener("DOMContentLoaded", () => {

    // Tất cả thẻ sản phẩm
    const productItems = document.querySelectorAll(".product-card");

    const popup = document.getElementById("login");

    productItems.forEach(item => {
        item.addEventListener("click", (e) => {
            const isLoggedIn = localStorage.getItem("isLoggedIn");

            if (!isLoggedIn) {
                e.preventDefault(); // chặn chuyển trang
                popup.style.display = "flex"; // mở popup yêu cầu đăng nhập
                return;
            }

            // Nếu đã đăng nhập → cho phép đi tiếp
        });
    });

});

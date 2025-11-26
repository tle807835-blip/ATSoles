function showMessage(text, type = "error") {
    const msg = document.getElementById("message");
    if (!msg) return;

    msg.innerText = text;
    msg.style.color = type === "success" ? "green" : "red";
    msg.style.opacity = "1";

    setTimeout(() => {
        msg.style.opacity = "0";
    }, 2500);
}

// Che hoặc không che 
document.querySelectorAll(".password_box i").forEach(icon => {
    icon.addEventListener("click", () => {
        const input = icon.previousElementSibling;

        if (input.type === "password") {
            input.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    });
});

// Đăng ký
const btnRegister = document.getElementById("btnRegister");

if (btnRegister) {
    btnRegister.addEventListener("click", () => {
        const username = document.getElementById("regUsername").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const password = document.getElementById("regPassword").value;
        const confirmPassword = document.getElementById("regConfirmPassword").value;
        const agree = document.getElementById("agree").checked;

        if (!username || !email || !password || !confirmPassword) {
            showMessage("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (!agree) {
            showMessage("Bạn phải đồng ý với điều khoản dịch vụ!");
            return;
        }

        if (password !== confirmPassword) {
            showMessage("Mật khẩu không khớp!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const exist = users.find(u => u.email === email);
        if (exist) {
            showMessage("Email đã tồn tại!");
            return;
        }

        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        showMessage("Đăng ký thành công!", "success");

        setTimeout(() => {
            window.location.href = "Login.html";
        }, 1500);
    });
}

// Xử lý đăng nhập
const btnLogin = document.getElementById("btnLogin");

if (btnLogin) {
    btnLogin.addEventListener("click", () => {
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        if (!email || !password) {
            showMessage("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(u =>
            (u.email === email || u.username === email) &&
            u.password === password
        );

        if (!user) {
            showMessage("Sai email/tên người dùng hoặc mật khẩu!");
            return;
        }

        // LƯU TRẠNG THÁI ĐĂNG NHẬP
        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "true");

        showMessage("Đăng nhập thành công!", "success");

        // Nếu có sản phẩm chờ xem chi tiết → mở Product.html luôn
        const pending = localStorage.getItem("pendingProduct");
        if (pending) {
            const productData = JSON.parse(pending);
            localStorage.setItem("selectedProduct", JSON.stringify(productData));
            localStorage.removeItem("pendingProduct");

            setTimeout(() => {
                window.location.href = "Product.html";
            }, 800);
            return;
        }

        // Không có sản phẩm chờ → quay về trang chủ
        setTimeout(() => {
            window.location.href = "index.html";
        }, 800);
    });
}

function onLoginSuccess() {
            // Đánh dấu đã đăng nhập
            localStorage.setItem("isLoggedIn", "true");
        
            // Nếu có sản phẩm đang chờ (người dùng click trước khi login) -> chuyển đến Product.html
            const pending = localStorage.getItem("pendingProduct");
            if (pending) {
                // thiết lập selectedProduct từ pendingProduct
                localStorage.setItem("selectedProduct", pending);
                localStorage.removeItem("pendingProduct");
            
                // chuyển thẳng tới trang chi tiết sản phẩm
                window.location.href = "Product.html";
                return;
            }
        
            // Nếu không có pending -> chuyển về trang chính hoặc trang profile
            window.location.href = "index.html";
        }

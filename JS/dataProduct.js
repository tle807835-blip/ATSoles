document.addEventListener("DOMContentLoaded", () => {
    // Dữ liệu ở các sản phẩm
    const saved = localStorage.getItem("selectedProduct");
    if (!saved) {
        console.warn("Không tìm thấy sản phẩm trong localStorage!");
        return;
    }

    const product = JSON.parse(saved);

    // Hiển thị thông tin
    document.querySelector(".product__title").textContent = product.name;
    document.querySelector(".subtitle").textContent = product.desc;
    document.querySelector(".price").textContent =
        product.price.toLocaleString("vi-VN") + "đ";

    const mainImg = document.querySelector(".image img");
    const thumbs = document.querySelectorAll(".image__three img");

    const imgList = product.images && product.images.length > 0
        ? product.images
        : [product.img || product.image];

    mainImg.src = imgList[0];

    thumbs.forEach((img, i) => {
        img.src = imgList[i % imgList.length];
    });

    thumbs.forEach(img => {
        img.addEventListener("click", e => {
            e.preventDefault();
            mainImg.src = img.src;
        });
    });

    // Chọn size
    const sizeButtons = document.querySelectorAll(".size");

    sizeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            sizeButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    // Thêm vào giỏ
    document.querySelector(".add__cart").addEventListener("click", () => {
        const selectedSize = document.querySelector(".size.active");

        if (!selectedSize) {
            alert("Vui lòng chọn size trước khi thêm vào giỏ hàng!");
            return;
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const newItem = {
            name: product.name,
            price: product.price,
            image: mainImg.src,
            size: selectedSize.innerText,
            color: "Trắng",
            quantity: 1
        };

        const existing = cart.find(
            item => item.name === newItem.name && item.size === newItem.size
        );

        if (existing) existing.quantity += 1;
        else cart.push(newItem);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`Đã thêm vào giỏ: ${product.name} - Size ${newItem.size}`);
    });

    window.addEventListener("scroll", () => {
        document.querySelector(".header")
            .classList.toggle("sticky", window.scrollY > 50);
    });
});



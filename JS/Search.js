const allProducts = [
    { 
        id : 1,
        name: "Platform Sneakers", 
        category: "sneaker", 
        price: 178000, 
        desc: "Giày Sneaker Phong Cách Hàn Quốc", 
        img: "image/Sneaker.png",
        images: ["image/Sneaker.png", "image/Sneaker1.png", "image/Sneaker2.png"]
    },
    { 
        id : 2,
        name: "Office Shoes", 
        category: "congso", 
        price: 520000, 
        desc: "Giày công sở cao cấp", 
        img: "image/Office Shoes.webp",
        images: ["image/Office Shoes.webp", "image/Office Shoes1.webp", "image/Office Shoes2.webp"]
    },
    { 
        id : 3,
        name: "Fashion Heels", 
        category: "thoitrang", 
        price: 460000, 
        desc: "Giày thời trang nữ thanh lịch", 
        img: "image/Fashion Heels.webp",
        images: ["image/Fashion Heels.webp", "image/Fashion Heels1.webp", "image/Fashion Heels2.webp"]
    },
    { 
        id : 4,
        name: "New Balance 530", 
        category: "sneaker", 
        price: 1460000, 
        desc: " Giày NewBalance 530 Phối Đồ Cực Đẹp Full Size", 
        img: "image/New Balance.webp",
        images: ["image/New Balance.webp", "image/New Balance1.webp", "image/New Balance2.webp"]
    },
    { 
        id : 5,
        name: "Giày Vải Canvas ", 
        category: "thoitrang", 
        price: 118000, 
        desc: "Giày vải canvas nam nữ kiểu dáng thiết kế bassic, đẹp mắt", 
        img: "image/Canvas.webp",
        images: ["image/Canvas.webp", "image/Canvas1.webp", "image/Canvas2.webp"]
    },
    { 
        id : 6,
        name: "Giày Nam Store M192", 
        category: "sneaker", 
        price: 179000, 
        desc: "Giày nam phong cách Hàn Quốc hợp thời trang dành cho sinh viên", 
        img: "image/Store.webp",
        images: ["image/Store.webp", "image/Store1.webp", "image/Store2.webp"]
    },
    { 
        id : 7,
        name: "Giày Bốt Martin Nam", 
        category: "congso", 
        price: 189000, 
        desc: "Giày Boot Công Sở Cổ Thấp Phong Cách Đường Phố Kiểu Dáng Thời Trang", 
        img: "image/Martin.webp",
        images: ["image/Martin.webp", "image/Martin1.webp", "image/Martin2.webp"]
    },
    { 
        id : 8,
        name: "Giày Công Sở Oxford", 
        category: "congso", 
        price: 259000, 
        desc: "Giày Công Sở Tăng Chiều Cao Nam", 
        img: "image/Oxford.webp",
        images: ["image/Oxford.webp", "image/Oxford1.webp", "image/Oxford2.webp"]
    },
    { 
        id : 9,
        name: "Giày Cao Gót Công Sở ", 
        category: "congso", 
        price: 294000, 
        desc: "Giày Công Sở Đế Mềm Giày Giữa Gót Nữ Thoải Mái", 
        img: "image/Cao Gót CS.webp",
        images: ["image/Cao Gót CS.webp", "image/Cao Gót CS1.webp", "image/Cao Gót CS2.webp"]
    },
    { 
        id : 10,
        name: "Giày Converse Cổ Cao", 
        category: "thoitrang", 
        price: 514000, 
        desc: "Giày Converse Cổ Cao, Giày Converse Chuck 1970s nam nữ cao cấp full size", 
        img: "image/Converse.webp",
        images: ["image/Converse.webp", "image/Converse1.webp", "image/Converse2.webp"]
    },
    { 
        id : 11,
        name: "Giày đốc da nữ", 
        category: "thoitrang", 
        price: 699000, 
        desc: "Giày đốc da nữ kiểu dáng dễ thương", 
        img: "image/Đốc Da.webp",
        images: ["image/Đốc Da.webp", "image/Đốc Da1.webp", "image/Đốc Da.webp"]
    },
    { 
        id : 12,
        name: "Giày MaryJane", 
        category: "thoitrang", 
        price: 142000, 
        desc: "Giày đốc da nữ kiểu dáng dễ Giày MaryJane 2 Quai Khóa Cài Da Bóng Sang Chảnh Đế Cao", 
        img: "image/MaryJane.webp",
        images: ["image/MaryJane.webp", "image/MaryJane1.webp", "image/MaryJane2.webp"]
    },
    { 
        id : 13,
        name: "Giày thể thao Ladies", 
        category: "sneaker", 
        price: 152000, 
        desc: "Thời trang nhẹ và thoáng khí Chống trượt và chống mài mòn", 
        img: "image/Ladies.webp",
        images: ["image/Ladies.webp", "image/Ladies1.webp", "image/Ladies2.webp"]
    },
    { 
        id : 14,
        name: "Giày Sandal Nữ", 
        category: "thoitrang", 
        price: 199000, 
        desc: " Giày Sandal Nữ Quai Ngang Chéo Trẻ Trung Năng Động", 
        img: "image/Sandal.webp",
        images: ["image/Sandal.webp", "image/Sandal1.webp", "image/Sandal2.webp"]
    }
];

function createSearchUI() {
    const searchBox = document.querySelector(".header__search");
    if (!searchBox) return;

    // Khung danh sách tìm kiếm
    const resultBox = document.createElement("div");
    resultBox.className = "search-results";
    resultBox.style.position = "absolute";
    resultBox.style.top = "45px";
    resultBox.style.left = "0";
    resultBox.style.right = "0";
    resultBox.style.background = "#fff";
    resultBox.style.border = "1px solid #ccc";
    resultBox.style.borderRadius = "4px";
    resultBox.style.maxHeight = "270px";
    resultBox.style.overflowY = "auto";
    resultBox.style.display = "none";
    resultBox.style.zIndex = "999";

    searchBox.style.position = "relative";
    searchBox.appendChild(resultBox);

    const input = searchBox.querySelector("input");

    //Nhập tìm kiếm
    input.addEventListener("input", () => {
        const keyword = input.value.trim().toLowerCase();
        
        if (keyword === "") {
            resultBox.style.display = "none";
            return;
        }

        const match = allProducts.filter(p =>
            p.name.toLowerCase().includes(keyword) ||
            p.desc.toLowerCase().includes(keyword)
        );

        if (match.length === 0) {
            resultBox.innerHTML = `<p style="padding:10px; opacity:0.7;">Không tìm thấy sản phẩm</p>`;
            resultBox.style.display = "block";
            return;
        }

        resultBox.innerHTML = match.map(p => `
            <div class="search-item" data-id="${p.id}"
                 style="display:flex; align-items:center; gap:10px; padding:8px; cursor:pointer;">
                <img src="${p.images[0]}" style="width:45px; height:45px; border-radius:6px;">
                <div>
                    <strong>${p.name}</strong><br>
                    <span style="opacity:0.7; font-size:13px;">${p.price.toLocaleString("vi-VN")}đ</span>
                </div>
            </div>
        `).join("");

        resultBox.style.display = "block";

        // Click sản phẩm
        resultBox.querySelectorAll(".search-item").forEach(item => {
            item.addEventListener("click", () => {
                const id = item.getAttribute("data-id");
                const product = allProducts.find(p => p.id == id);

                //Chuyển Product.html
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "Product.html";
            });
        });
    });

    document.addEventListener("click", (e) => {
        if (!searchBox.contains(e.target)) {
            resultBox.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", createSearchUI);

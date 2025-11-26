const sizeModal = document.getElementById("sizeSole");

// Mở modal
function openSizeGuide() {
    sizeModal.style.display = "flex";
}

// Click ra ngoài để tắt
sizeModal.addEventListener("click", function(e) {
    if (e.target === sizeModal) {
        sizeModal.style.display = "none";
    }
});
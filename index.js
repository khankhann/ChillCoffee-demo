var arrItem = [
  {
    name: "nước cam",
    image: "image/nuoccam.jpg",
    price: 20000,
  },
  {
    name: "nước dừa",
    image: "image/nuocdua.jpg",
    price: 20000,
  },
  {
    name: "nước ép táo",
    image: "image/nuoctao.jpg",
    price: 28000,
  },
  {
    name: "nước ép thơm",
    image: "image/nuocthom.jpg",
    price: 28000,
  },
  {
    name: "cà phê đen",
    image: "image/capheden.jpg",
    price: 18000,
  },
  {
    name: "bạc sĩu",
    image: "image/bacsiu.jpg",
    price: 28000,
  },
  {
    name: "cà phê sữa",
    image: "image/caphesua.jpg",
    price: 28000,
  },
  {
    name: "trà sữa chân trâu",
    image: "image/trasuachantrau.jpg",
    price: 35000,
  },
  {
    name: "trà sữa truyền thống",
    image: "image/trasuatruyenthongdailoan.png",
    price: 32000,
  },
  {
    name: "trà đào",
    image: "image/tradao.jpg",
    price: 35000,
  },
  {
    name: "sữa tươi chân trâu",
    image: "image/suatuoichanchau.jpg",
    price: 45000,
  },
  {
    name: "matcha latte",
    image: "image/matchaLatte.jpg",
    price: 45000,
  },
  {
    name: "matcha đá xay",
    image: "image/matchadaxay.jpg",
    price: 30000,
  },
  {
    name: "capuchino",
    image: "image/capuchino.jpg",
    price: 40000,
  },
  {
    name: "milo dầm",
    image: "image/milodam.png",
    price: 35000,
  },
  {
    name: "trà trái cây",
    image: "image/tratraicay.jpg",
    price: 30000,
  },
  {
    name: "bánh su kem ",
    image: "image/banhsukem.jpg",
    price: 30000,
  },
  {
    name: "bánh tiramisu",
    image: "image/banhtiramisu.jpg",
    price: 32000,
  },
  {
    name: "bánh mango cheese",
    image: "image/mangocheesecake.jpg",
    price: 38000,
  },
  {
    name: "bánh sừng bò",
    image: "image/banhsungbo.jpg",
    price: 28000,
  },
  {
    name: "bánh eclair ",
    image: "image/banheclair.jpg",
    price: 30000,
  },
  {
    name: "bánh kouign",
    image: "image/banhkouign.jpg",
    price: 40000,
  },
  {
    name: "bánh opera",
    image: "image/banhopera.jpg",
    price: 40000,
  },
  {
    name: "bánh paris",
    image: "image/banhparis.jpg",
    price: 30000,
  },
  {
    name: "bánh mille",
    image: "image/banhmille.jpg",
    price: 35000,
  },
  {
    name: "bánh religieuse",
    image: "image/banhreligieuse.jpg",
    price: 35000,
  },
  {
    name: "bánh saint",
    image: "image/banhsaint.jpg",
    price: 40000,
  },
  {
    name: "bánh tarte",
    image: "image/banhtarte.jpg",
    price: 42000,
  },
];

var arrMember = [
  {
    name: "Nguyên Khang",
    image: "image/nguyenkhang.jpg",
    role: "Dev",
  },
  {
    name: "Giang",
    image: "image/nguyenkhang.jpg",
    role: "Dev",
  },
  {
    name: "Nguyên",
    image: "image/nguyenkhang.jpg",
    role: "Dev",
  },
  {
    name: "Minh Tý",
    image: "image/nguyenkhang.jpg",
    role: "Dev",
  },
  {
    name: "Phúc",
    image: "image/nguyenkhang.jpg",
    role: "Dev",
  },
];

const infoMember = document.querySelector(".info-member");
const header = document.querySelector("header");
const shopContent = document.querySelector(".shop-content");

// nội dung sản phẩm
function loadProduct(arrItem) {
  const html = arrItem
    .map((product) => {
      return `
        <div class="row">
            <img src="${product.image}" alt="">
            <h3>${product.name}</h3>
            <p> </p>
            <div class="in-text">
                <div class="price">
                    <h6>${product.price.toLocaleString("vi-VN")}VNĐ</h6>
                </div>
                <div class="s-btn add-to-cart">
                    <button 
                        class="order-now" 
                        data-name="${product.name}" 
                        data-image ="${product.image}"
                        data-price="${product.price}"> Order now</button>
                </div>
            </div>
            <div class="top-icon">
                <a href="#"> </a>
            </div>
        </div>
    `;
    })
    .join("");
  shopContent.innerHTML = html;
}

function tabUI() {
  const tabs = document.querySelectorAll(".tabitem");
  const sections = document.querySelectorAll("section"); // Các section tương ứng với tabitem
  const $ = document.querySelector.bind(document);

  // Lắng nghe sự kiện scroll
  window.addEventListener("scroll", () => {
    let currentIndex = 0;

    // Duyệt qua các sections để tìm vị trí hiện tại
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop; // Điều chỉnh offset nếu cần
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentIndex = index;
      }
    });

    // Cập nhật trạng thái active của tab
    $(".tabitem.active").classList.remove("active");
    tabs[currentIndex].classList.add("active");
  });

  // Sự kiện click tab
  tabs.forEach((tab, index) => {
    tab.onclick = () => {
      $(".tabitem.active").classList.remove("active");
      tab.classList.add("active");

      // Cuộn tới section tương ứng
      sections[index].scrollIntoView({ behavior: "smooth" });
    };
  });
}
tabUI();

loadProduct(arrItem);

function loadInfoMember(arrMember) {
  const html = arrMember
    .map((info) => {
      return `
     <div class="team-member">
      <div class="member-img">
        <img src="${info.image}" alt="Walter White">
        <div class="social">
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="https://www.facebook.com/khangeward/"><i class="fa-brands fa-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info">
        <h4>${info.name}</h4>
        <span>${info.role}</span>
      </div>
    </div>
    `;
    })
    .join("");
  infoMember.innerHTML = html;
}
loadInfoMember(arrMember);
window.onscroll = () => {
  header.classList.toggle("sticky", window.scrollY > 80);
};

// Khởi tạo giỏ hàng từ localStorage hoặc mảng rỗng
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Hàm lưu giỏ hàng vào localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Hàm hiển thị giỏ hàng
function displayCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = ""; // Xóa nội dung cũ
  let totalPrice = 0; // Tổng tiền

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p> Giỏ hàng rỗng. </p>";
    cartContainer.style.marginLeft = "70px";
    cartContainer.style.padding = "10px";
    return;
  }

  cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity; // Cộng tổng tiền
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.innerHTML = `
            <div class"cart-item-box" style="display: flex; align-items: center; margin-bottom: 10px; padding :0px">
                <img src="${item.image}" alt="${
      item.name
    }" style="width: 50px; height: 50px; margin-right: 10px;">
                <div>
                    <p>${item.name} - ${item.price.toLocaleString("vi-VN")} VND 
                        <input type="number" class="update-quantity" data-name="${
                          item.name
                        }" value="${
      item.quantity
    }" min="1" style="width: 50px;">
                    </p>
                    <button class="remove-item" data-name="${
                      item.name
                    }">Xóa</button>
                </div>
            </div>
        `;
    cartContainer.appendChild(itemElement);
  });

  // Thêm tổng số tiền
  const totalElement = document.createElement("div");
  totalElement.innerHTML = `<p><strong>Tổng tiền:</strong>${totalPrice.toLocaleString(
    "vi-VN"
  )}VND</p>`;
  // totalElement.style.width = "177px";
  cartContainer.appendChild(totalElement);

  // Thêm sự kiện click cho các nút "Xóa"
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      removeFromCart(name);
      showRemove();
    });
  });

  // Thêm sự kiện thay đổi số lượng
  document.querySelectorAll(".update-quantity").forEach((input) => {
    input.addEventListener("change", () => {
      const name = input.getAttribute("data-name");
      const newQuantity = parseInt(input.value);
      updateQuantity(name, newQuantity);
    });
  });
}

// Hàm thêm sản phẩm vào giỏ hàng
// function addToCart(product) {
//   const existingProduct = cart.find((item) => item.name === product.name);
//   if (existingProduct) {
//     existingProduct.quantity += 1; // Tăng số lượng nếu sản phẩm đã tồn tại
//   } else {
//     cart.push(product); // Thêm sản phẩm mới
//   }
//   saveCart(); // Lưu lại giỏ hàng
//   // alert(`${product.name} đã được thêm vào giỏ hàng!`);
// }
function addToCart(product) {
  // Lấy giỏ hàng hiện tại từ localStorage
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

  // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
  const existingProduct = currentCart.find(
    (item) => item.name === product.name
  );

  if (existingProduct) {
    // Tăng số lượng nếu sản phẩm đã tồn tại
    existingProduct.quantity += 1;
  } else {
    // Thêm sản phẩm mới nếu chưa tồn tại
    currentCart.push(product);
  }

  // Lưu lại toàn bộ giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(currentCart));
}

// Hàm xóa sản phẩm khỏi giỏ hàng
// function removeFromCart(productName) {
//   cart = cart.filter((item) => item.name !== productName);
//   saveCart();
//   displayCart();
// }

function removeFromCart(productName) {
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = currentCart.filter((item) => item.name !== productName);

  localStorage.setItem("cart", JSON.stringify(updatedCart)); // Cập nhật localStorage
  displayCart(); // Cập nhật hiển thị giỏ hàng
}

// Hàm cập nhật số lượng sản phẩm
function updateQuantity(productName, newQuantity) {
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = currentCart.find((item) => item.name === productName);
  if (product) {
    if (newQuantity <= 0) {
      // Nếu số lượng <= 0, xóa sản phẩm khỏi giỏ
      removeFromCart(productName);
    } else {
      // Cập nhật số lượng
      product.quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(currentCart)); // Lưu giỏ hàng mới
    }
  }
  displayCart(); // Cập nhật hiển thị giỏ hàng
}

// Sự kiện click icon giỏ hàng
document.getElementById("cart-icon").addEventListener("click", () => {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.style.animation = "leftSide 0.5s ease";
  cartContainer.style.display = "block";
  displayCart();
});

// Sự kiện đóng giỏ hàng
document.getElementById("close-cart").addEventListener("click", () => {
  const cartContainer = document.getElementById("cart-container");
  // cartContainer.style.animation = "RightSide 1.5s ease";
  cartContainer.style.display = "none";
});

// Sự kiện click "Order now"
document.querySelectorAll(".order-now").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseInt(button.getAttribute("data-price"));
    const image = button.getAttribute("data-image"); // Lấy đường dẫn hình ảnh
    const product = { name, price, image, quantity: 1 };
    addToCart(product);
    displayCart();
    showSuccess();
  });
});
// Hiển thị form đặt hàng
document.getElementById("checkout").addEventListener("click", () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  if (cartItems.length === 0) {
    alert("Giỏ hàng rỗng. Vui lòng thêm sản phẩm trước khi đặt món.");
    return;
  }

  document.getElementById("checkout-form").style.display = "block";
});

// Đóng form đặt hàng
document.getElementById("cancel-checkout").addEventListener("click", () => {
  document.getElementById("checkout-form").style.display = "none";
});

// Xử lý xác nhận đặt hàng
document.getElementById("order-form").addEventListener("submit", (event) => {
  // event.preventDefault(); // Ngăn reload trang

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;

  if (!name || !address || !phone) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  // Lấy giỏ hàng hiện tại
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const orderSummary = cartItems
    .map((item) => `${item.name} x ${item.quantity}`)
    .join(", ");

  // Lưu thông tin xác nhận vào localStorage
  const orderInfo = {
    name,
    address,
    phone,
    items: cartItems,
    total: cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ),
  };

  localStorage.setItem("orderInfo", JSON.stringify(orderInfo));
  // Thông báo đặt hàng thành công
  alert(`
        Đặt hàng thành công!
        Tên: ${name}
        Địa chỉ: ${address}
        Số điện thoại: ${phone}
        Đơn hàng: ${orderSummary}
  
       
    `);

  // Xóa giỏ hàng sau khi đặt
  localStorage.removeItem("cart");
  cart = [];
  displayCart();
  document.getElementById("checkout-form").style.display = "none";
});

// phần comment
// Select elements
// Select elements
const commentForm = document.getElementById("commentForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const commentsList = document.getElementById("commentsList");
const starRating = document.getElementById("starRating");
const ratingValue = document.getElementById("ratingValue");

// Function to display comments from localStorage
function loadComments() {
  const storedComments = JSON.parse(localStorage.getItem("comments")) || [];

  // Clear current comments
  commentsList.innerHTML = "";

  // Display each comment stored in localStorage
  storedComments.forEach((comment) => {
    const commentItem = document.createElement("div");
    commentItem.classList.add("comment-item");
    commentItem.innerHTML = `
            <h4>${comment.name} (${comment.email})</h4>
            <p>${comment.message}</p>
            <div class="stars">
                ${"★".repeat(comment.rating)}${"☆".repeat(5 - comment.rating)}
            </div>
        `;
    commentsList.appendChild(commentItem);
  });
}

// Handle star rating selection
starRating.addEventListener("click", (event) => {
  if (event.target.tagName === "SPAN") {
    const stars = [...starRating.children];
    const value = event.target.getAttribute("data-value");

    // Reset all stars to default
    stars.forEach((star) => star.classList.remove("selected"));

    // Update selected stars
    stars.forEach((star, index) => {
      if (index < value) {
        star.classList.add("selected");
      }
    });

    // Update hidden input value
    ratingValue.value = value;
  }
});

// Handle form submission
commentForm.addEventListener("submit", (event) => {
  // event.preventDefault(); // Prevent form from refreshing the page

  // Get user inputs
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const rating = ratingValue.value;

  if (name && email && message && rating > 0) {
    // Create a new comment object
    const newComment = {
      name: name,
      email: email,
      message: message,
      rating: parseInt(rating),
    };

    // Get current comments from localStorage or initialize empty array
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];

    // Add the new comment to the array
    storedComments.push(newComment);

    // Save the updated comments array to localStorage
    localStorage.setItem("comments", JSON.stringify(storedComments));

    // Clear the form inputs
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    ratingValue.value = 0;
    [...starRating.children].forEach((star) =>
      star.classList.remove("selected")
    );

    // Reload comments from localStorage
    showComment();
    loadComments();
  } else {
    alert("Hãy ủng hộ cho chúng tôi với sự đóng góp hài lòng của bạn !");
  }
});

// Load comments when the page is loaded
loadComments();

// dùng fetch tải bình luận

function toastMessage({ title, type, duration, message }) {
  const iconBox = {
    success: "fa-solid fa-check", //dat hang
    remove: "fa-solid fa-trash", //huy don
    comment: "fa-solid fa-comment", //comment
  };
  const icons = iconBox[type];
  const toastBox = document.querySelector("#toast");

  const autoRemove = setTimeout(() => {
    toastBox.removeChild(main);
  }, duration);
  const main = document.createElement("div");
  main.onclick = (e) => {
    if (e.target.closest(".toast__close")) {
      toastBox.removeChild(main);
      clearTimeout(autoRemove);
    }
  };
  main.classList.add("toast", `toast--${type}`);
  main.innerHTML = `
   
            <div class="toast__icon">

                <i class="${icons}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message} </p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
     
  `;
  toastBox.appendChild(main);
}
toastMessage();
function showSuccess() {
  toastMessage({
    title: "Success",
    message: "Bạn đã thêm đơn hàng vào giỏ !",
    type: "success",
    duration: 3000,
  });
}
function showComment() {
  toastMessage({
    title: "Comment",
    message: "Chúng tôi cảm ơn với góp ý của bạn !",
    type: "Comment",
    duration: 3000,
  });
}
function showRemove() {
  toastMessage({
    title: "Remove",
    message: "Bạn đã hủy đơn hàng thành công !",
    type: "remove",
    duration: 3000,
  });
}

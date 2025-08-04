// Elements
const userName = document.getElementById("userName");
const cardNumber = document.getElementById("cardNumber");
const expire = document.getElementById("expire");
const balance = document.getElementById("balance");
const photo = document.getElementById("photo");
const qrcode = document.getElementById("qrcode");
const logoutBtn = document.getElementById("logoutBtn");
const pin = document.getElementById("pin");

// Load user from localStorage
const userJSON = localStorage.getItem("escardUser");

if (!userJSON) {
  window.location.href = "index.html";
} else {
  const user = JSON.parse(userJSON);

  userName.textContent = user.name;
  cardNumber.textContent = user.cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
  expire.textContent = user.expire;
  balance.textContent = user.balance.toFixed(2);
  pin.textContent = user.pin;
  photo.src = user.photo;
  qrcode.src = user.qrcode;
}

// Logout
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("escardUser");
  window.location.href = "index.html";
});

// Disable screenshot & dev tools
window.addEventListener("contextmenu", e => e.preventDefault());
window.addEventListener("keydown", e => {
  if (e.key === "PrintScreen") {
    e.preventDefault();
    alert("Screenshots are disabled on this page.");
  }

  if (
    (e.ctrlKey && ["s", "p"].includes(e.key.toLowerCase())) ||
    (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key.toUpperCase())) ||
    e.key === "F12"
  ) {
    e.preventDefault();
    alert("This action is disabled.");
  }
});
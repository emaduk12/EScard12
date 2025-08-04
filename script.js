const users = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "1234567890",
    password: "alice123",
    cardNumber: "1111222233334444",
    pin: "1234",
    expire: "12/27",
    balance: 2500.75,
    photo: "https://i.pravatar.cc/100?img=1",
    qrcode: "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=Alice123"
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "0987654321",
    password: "bobpass",
    cardNumber: "5555666677778888",
    pin: "4321",
    expire: "10/25",
    balance: 1280.50,
    photo: "https://i.pravatar.cc/100?img=2",
    qrcode: "https://www.qrcoder.co.uk/api/v4/?key=INSERT-YOUR-KEY-HERE&text=kurdistan"
  },
{
    name: "kurdistan",
    email: "kurdistan@gmail.com",
    phone: "0987654321",
    password: "kurd1212",
    cardNumber: "5555666677778888",
    pin: "4326",
    expire: "10/05",
    balance: 44.00,
    photo: "https://i.pravatar.cc/100?img=2",
    qrcode: "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=£50.00"
  }
];

const loginUser = document.getElementById("loginUser");
const loginPass = document.getElementById("loginPass");
const loginBtn = document.getElementById("loginBtn");
const forgotBtn = document.getElementById("forgotBtn");
const forgotMessage = document.getElementById("forgotMessage");

// LOGIN
loginBtn.addEventListener("click", () => {
  const input = loginUser.value.trim().toLowerCase();
  const pass = loginPass.value;

  const user = users.find(u =>
    (u.email.toLowerCase() === input || u.phone === input || u.cardNumber === input) &&
    u.password === pass
  );

  if (!user) {
    alert("ئیمێل یان پاسوورد خەلە تە");
    return;
  }

  localStorage.setItem("escardUser", JSON.stringify(user));
  window.location.href = "dashboard.html";
});

// FORGOT PASSWORD
forgotBtn.addEventListener("click", () => {
  const input = loginUser.value.trim().toLowerCase();

  if (!input) {
    forgotMessage.textContent = "هێڤیە ئیمێلێ خوە یان ژمارا خوە داخل بکە ل دەستپێکێ";
    forgotMessage.classList.remove("hidden");
    return;
  }

  const user = users.find(u =>
    u.email.toLowerCase() === input || u.phone === input || u.cardNumber === input
  );

  if (user) {
    forgotMessage.innerHTML = `
      📞 Your phone: <strong>${user.phone}</strong><br>
      🔐 Please contact support to reset your password.
    `;
  } else {
    forgotMessage.textContent = "ئەڤ هەژمارە لدەف مە نینە ئیمێل یان ژمارا درست داخل بکە";
  }

  forgotMessage.classList.remove("hidden");
});

// AUTO LOGIN REDIRECT
window.onload = () => {
  if (localStorage.getItem("escardUser")) {
    window.location.href = "dashboard.html";
  }
};

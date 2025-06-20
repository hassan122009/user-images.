// إعداد Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA4YGIHObEz7gkr6z7At09n9p6cJMj9l2A",
  authDomain: "hsa4-ac45e.firebaseapp.com",
  projectId: "hsa4-ac45e",
  storageBucket: "hsa4-ac45e.firebasestorage.app",
  messagingSenderId: "688236241105",
  appId: "1:688236241105:web:4b5ff00e3f25b931b9a5f0",
  measurementId: "G-5P717K607F"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// تسجيل مستخدم جديد
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (fullName === "") {
    alert("❌ من فضلك أدخل الاسم الكامل.");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // تحديث الاسم في الملف الشخصي
      return user.updateProfile({
        displayName: fullName
      }).then(() => {
        alert("✅ تم إنشاء الحساب بنجاح!");
        window.location.href = "dashboard.html";
      });
    })
    .catch((error) => {
      alert("❌ خطأ: " + error.message);
    });
});

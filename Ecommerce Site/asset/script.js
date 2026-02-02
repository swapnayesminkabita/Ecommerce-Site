document.getElementById('date').innerHTML = new Date().toLocaleDateString();
setInterval(() => document.getElementById('time').innerHTML = new Date().toLocaleTimeString());





 function togglePassword() {
        const pass = document.getElementById("password");
        const icon = document.querySelector(".password-toggle");

        if(pass.type === "password"){
          pass.type = "text";
          icon.classList.replace("bi-eye", "bi-eye-slash");
        } else {
          pass.type = "password";
          icon.classList.replace("bi-eye-slash", "bi-eye");
        }
      }
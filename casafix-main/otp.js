document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".otp-box");
  const form = document.getElementById("otpForm");
  const message = document.getElementById("message");

  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {

      if (input.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !input.value && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const otp = Array.from(inputs).map((input) => input.value).join("");
    if (otp.length !== 4 || !/^\d{4}$/.test(otp)) {
      message.textContent = "Please enter a valid 4-digit OTP.";
      return;
    }

    message.textContent = "";
    alert("OTP verified!");
    window.location.href = "forgot pass.html";
  });
});

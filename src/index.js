const Slide = () => {
  const openBtn = document.querySelector("#open-btn");
  const closeBtn = document.querySelector("#cancel-btn");
  const formSection = document.querySelector(".form-section-frame");
  const formInput = document.querySelectorAll(
    ".form-section, .form-section form"
  );

  openBtn.addEventListener("click", () => {
    formSection.classList.toggle("form-active");
    formInput.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `formInputFade 0.7s ease-in forwards ${
          index / 20 + 0
        }s`;
        return false;
      }
    });
    closeBtn.addEventListener("click", () => {
      formSection.classList.toggle("form-disactive");
    });
  });
};
Slide();

"use strict";

// const btnCloseModal = document.querySelector(".btn--close-modal");
// const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });
const signUpButton = document.querySelectorAll(".btn-SignUp");
const box = document.querySelector(".box");
const closeBox = document.querySelector(".btn-close-box");
const subBtn = document.querySelector(".btnSubmit");

const openBox = function (e) {
  e.preventDefault();
  box.classList.remove("hidden");
  // overlay.classList.remove("hidden");
};

const closeButtonBox = function (e) {
  e.preventDefault();
  box.classList.add("hidden");
};

signUpButton.forEach((btn) => btn.addEventListener("click", openBox));
closeBox.addEventListener("click", closeButtonBox);

subBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Clixked!");
  let firstName = document.querySelector(".myInput").value.toLowerCase();
  alert(`Please check your ${firstName} !`);
  document.querySelector(".myInput").value = "";
});
// console.log(document.querySelector(".box"));

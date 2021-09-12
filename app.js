const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const title = question.querySelector(".question-title");
  title.addEventListener("click", () => {
    //
    // ===============
    // Only show 1 answer at a time:
    // ===============
    //
    // questions.forEach((item) => {
    //   if (item !== question) {
    //     item.classList.remove("show-text");
    //   }
    // });
    //
    question.classList.toggle("show-text");
  });
});

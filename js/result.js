// 결과 페이지에서 결과 표시
window.addEventListener("load", () => {
  const selectedAnswers =
    JSON.parse(localStorage.getItem("selectedAnswers")) || [];
  const yesCount = selectedAnswers.filter((answer) => answer === "예").length;

  const userName = localStorage.getItem("userName");
  document.getElementById(
    "result-heading"
  ).textContent = `${userName}님의 결과`;

  if (yesCount > questions.length / 2) {
    resultImage.src = "../positive.jpg";
    resultText.textContent = "건강한 생활을 하고 계시네요!";
  } else {
    resultImage.src = "../negative.jpg";
    resultText.textContent = "건강에 좀 더 신경을 쓰셔야겠어요.";
  }
});

document.getElementById("restart-btn").addEventListener("click", () => {
  window.location.href = "../index.html";
});

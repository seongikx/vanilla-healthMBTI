document.getElementById("start-btn").addEventListener("click", function () {
  var name = document.getElementById("name-input").value.trim();
  if (name) {
    alert(`안녕하세요, ${name}님! 건강유형 테스트를 시작합니다.`);
    window.location.href = "Pages/quiz.html";
  } else {
    alert("이름을 입력해 주세요.");
  }
});

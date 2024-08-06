let currentQuestionIndex = 0;
let selectedAnswers = [];

// 퀴즈 질문들
const questions = [
  { question: "아침에 일찍 일어나는 편인가요?", options: ["예", "아니오"] },
  { question: "운동을 자주 하나요?", options: ["예", "아니오"] },
  // ... 총 12개의 질문 추가
];

// 질문 표시 함수
function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";

  const currentQuestion = questions[currentQuestionIndex];
  const questionElement = document.createElement("div");
  questionElement.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        ${currentQuestion.options
          .map(
            (option, index) => `
            <div>
                <input type="radio" id="option${index}" name="option" value="${option}">
                <label for="option${index}">${option}</label>
            </div>
        `
          )
          .join("")}
    `;
  questionContainer.appendChild(questionElement);
}

// 페이지 로드 시 첫 질문 표시
window.addEventListener("load", () => {
  showQuestion();
});

document.getElementById("next-btn").addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    selectedAnswers.push(selectedOption.value);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      // localStorage에 답변 저장
      localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
      window.location.href = "result.html";
    }
  } else {
    alert("옵션을 선택해주세요.");
  }
});

let currentQuestionIndex = 0;
let scores = [0, 0, 0, 0]; // 네 파트 각각의 점수
let partIndex = 0; // 현재 파트 인덱스

// 퀴즈 질문과 선택지
const questions = [
  {
    question: "친구들과 뷔페에 온 당신, 가장 먼저 접시에 담을 음식은?",
    options: [
      "탱글한 새우가 올라간 클래식 그린 샐러드",
      "미디움 레어로 구워져 육즙이 터지는 립아이 스테이크",
    ],
    score: [1, -1],
  },
  {
    question: "새벽 1시, 꼬르륵 소리에 냉장고를 열어본 당신",
    options: [
      "지금 먹으면 살찌잖아 ... 오늘만 참자",
      "야식은 라면이지 ~! 쫄깃쫄깃 오동통통 농* 너*리",
    ],
    score: [1, -1],
  },
  {
    question: "기다리던 점심시간이다 !! 오늘의 메뉴는?",
    options: [
      "한국인은 밥심이지! 제대로 든든하게 챙겨먹자",
      "패스트푸드점에서 빠르고 간편하게 먹고 쉬자",
    ],
    score: [1, -1],
  },
  // 운동 및 습관 부분
  {
    question: "오늘은 꼭 운동해야지! 근데 .. 폭염주의보가 ..?",
    options: [
      "땀도 빼고 운동도 하고 ᄏᄏ 오히려 좋아",
      "운동하지말라는 신의 계시 ..?",
    ],
    score: [1, -1],
  },
  {
    question: "오랜만에 생긴 여유로운 주말, 운동이나 해볼까?",
    options: [
      "이건 못 참지 득근할 생각에 두근득근",
      "쉬는 게 운동이지 ~ 체력 보충을 위해 침대에 다시 눕는다",
    ],
    score: [1, -1],
  },
  {
    question: "결국 운동하기로 결정한 순간, 친구에게 온 연락 “같이 운동 ᄀ?”",
    options: [
      "하나보단 둘이 낫지! 혼자하는 운동은 넘 외롭고 슬프잖아",
      "운동은 온전히 나에게 집중하는 시간 ... 혼자 하고싶어",
    ],
    score: [1, -1],
  },
  // 건강 관리
  {
    question: "콜록콜록, 감기인가 .. 움직일 힘이 없다",
    options: [
      "힘들어도 아프면 병원을 가야 낫지 !!",
      "우선 집에 있는 약 먹고 쉬면 낫겠지 뭐 ..",
    ],
    score: [1, -1],
  },
  {
    question: "병원에서 다음주 화요일 4시에 또 오라고 했다.",
    options: [
      "오라고 했으니까 일단 가야겠지?",
      "거의 다 나았는데 안 가도 되겠지",
    ],
    score: [1, -1],
  },
  {
    question: "먼 친척에게 온 청첩장, 어라 이날은 건강검진날인데",
    options: [
      "먼 친척 ..? 안 가도 모르지 않을까? 또 미룰 순 없어",
      "결혼식은 평생에 한 번 ... 건강검진은 내년에도 할 수 있으니까",
    ],
    score: [1, -1],
  },
  // 정신 건강
  {
    question: "팀플 빌런을 만난 당신, 스트레스가 쌓여가는데 ...",
    options: [
      "내가 좋아하는 영화를 보며 기분을 푼다",
      "술 먹으면서 친구에게 신세 한탄을 한다.",
    ],
    score: [1, -1],
  },
  {
    question: "나도 모르게 엄마에게 버럭 화를 내버렸다",
    options: [
      "그래도 우리 엄만데 일단 사과부터 하자",
      "아직 화가 안 풀려 ... 나중에 사과드려야겠다",
    ],
    score: [1, -1],
  },
  {
    question: "요즘 잠도 못 자고, 부쩍 우울감이 드는 당신 ...",
    options: [
      "전문가와 상담을 받아 해결한다.",
      "시간이 약이다 생각하고 혼자 참아본다.",
    ],
    score: [1, -1],
  },
];

const images = [
  "../images/part1.png",
  "../images/part2.png",
  "../images/part3.png",
  "../images/part4.png",
];

function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  const option1Btn = document.getElementById("option1-btn");
  const option2Btn = document.getElementById("option2-btn");
  const quizImage = document.getElementById("quiz-image");

  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;
  option1Btn.textContent = currentQuestion.options[0];
  option2Btn.textContent = currentQuestion.options[1];
  quizImage.src = images[partIndex];

  option1Btn.onclick = () => selectOption(currentQuestion.score[0]);
  option2Btn.onclick = () => selectOption(currentQuestion.score[1]);
}

function selectOption(score) {
  scores[partIndex] += score;
  currentQuestionIndex++;
  if (currentQuestionIndex % 3 === 0) {
    partIndex++;
  }

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    finalizeQuiz();
  }
}

function finalizeQuiz() {
  const resultTypes = scores.map((score) => (score >= 0 ? "A" : "B")).join("");
  localStorage.setItem("quizResult", resultTypes);
  window.location.href = "result.html"; // 결과 페이지로 이동
}

window.addEventListener("load", showQuestion);

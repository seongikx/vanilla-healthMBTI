const resultTypes = {
  AAAA: {
    title: "육각형 김종국",
    description:
      "당신은 식단, 운동, 건강 관리, 정신 건강까지 모두 챙기는 완벽한 건강 관리왕이네요! 지금처럼 꾸준히 자기 관리를 이어가면 건강한 삶이 보장될 거예요. 식단 관리: 매일 신선한 채소와 과일을 섭취하고, 단백질과 건강한 지방을 골고루 챙기세요. 음식을 통해 얻는 영양소는 몸에 좋은 연료가 되니까요! 운동: 다양한 운동을 섞어서 해보세요. 예를 들어, 요가와 웨이트 트레이닝을 번갈아 하면서 신체 균형을 맞추면 좋을 거예요. 건강 관리: 정기적인 건강검진을 받고, 작은 증상도 무시하지 말고 병원을 방문하세요. 예방이 최선입니다! 정신 건강: 좋아하는 영화나 책을 통해 스트레스를 해소하고, 꾸준히 명상이나 심호흡 연습을 해보세요. 전문가와의 상담도 주저하지 마세요.",
  },
  BAAA: {
    title: "먹잘알 김종국",
    description:
      "식단에서 조금 더 신경을 써야 할 부분이 있어요. 그 외에 운동, 건강관리, 정신건강은 잘 챙기고 있으니 식단 부분만 보완해보세요. 식단 관리: 건강한 식습관을 유지하세요. 야식은 피하고, 정해진 시간에 규칙적으로 식사하세요. 운동: 다양한 운동을 통해 몸을 균형 있게 단련하세요. 운동 후 스트레칭도 잊지 마세요. 건강 관리: 정기적인 검진을 받고, 병원을 가야 할 때는 꼭 가세요. 작은 증상도 놓치지 마세요. 정신 건강: 스트레스를 받을 때는 운동이나 명상으로 해소하세요. 전문가와의 상담도 좋은 방법입니다.",
  },
  ABAA: {
    title: "헬스계의 간디",
    description:
      "식단과 건강 관리는 잘 챙기고 있어요. 정신 건강 부분도 잘 유지하고 있으나 운동을 꾸준히 해보세요. 식단 관리: 건강한 식습관을 유지하세요. 신선한 채소와 과일을 꾸준히 섭취하세요. 운동: 다양한 운동을 통해 몸을 균형 있게 단련하세요. 운동 후 스트레칭도 잊지 마세요. 건강 관리: 정기적인 검진을 받고, 병원을 가야 할 때는 꼭 가세요. 작은 증상도 놓치지 마세요. 정신 건강: 스트레스를 받을 때는 운동이나 명상으로 해소하세요. 친구와의 대화도 큰 도움이 될 거예요.",
  },
  AABA: {
    title: "꼬꼬마 마동석",
    description:
      "식단과 운동은 잘 챙기지만, 가끔 건강 관리에서 소홀할 때가 있어요. 정기적인 검진과 스케줄 관리를 통해 건강을 지키세요. 식단 관리: 건강한 음식을 꾸준히 섭취하세요. 특히, 면역력을 높이는 식품을 챙기면 좋습니다. 운동: 규칙적인 운동은 유지하되, 지나치게 무리하지 않는 선에서 하세요. 건강 관리: 일정표에 건강 검진 일정을 미리 넣어두고 잊지 않도록 하세요. 작은 증상도 체크하세요. 정신 건강: 휴식과 여가 활동을 통해 정신적인 스트레스를 풀어주세요. 명상이나 요가도 추천합니다.",
  },
  AAAB: {
    title: "유리멘탈 강호동",
    description:
      "식단과 운동, 건강 관리는 정말 잘 챙기시는데, 정신 건강 관리가 조금 아쉬워요. 스트레스 해소 방법을 좀 더 다양하게 찾아보면 좋을 것 같아요. 식단 관리: 균형 잡힌 식사를 유지하고, 특히 스트레스 해소에 좋은 음식들을 찾아보세요. 예 를 들어, 다크 초콜릿이나 견과류가 도움이 될 수 있어요. 운동: 운동을 통해 스트레스를 해소해보세요. 러닝이나 수영 같은 유산소 운동이 도움이 될 거예요. 건강 관리: 정기적인 건강검진과 적절한 휴식은 필수! 자기 자신을 위한 시간을 가지세요. 정신 건강: 친구와의 대화나 취미 활동을 통해 스트레스를 해소하세요. 힘들 땐 전문가와 상담하는 것도 좋은 방법입니다.",
  },
  BBAA: {
    title: "요가하는 간디",
    description:
      "식단과 운동 관리가 조금 아쉬워요. 기본적인 건강 관리는 잘 챙기고 있으니 나머지 부분도 보완해보세요. 식단 관리: 건강한 식습관을 유지하세요. 야식은 피하고, 정해진 시간에 규칙적으로 식사하세요. 운동: 다양한 운동을 통해 몸을 균형 있게 단련하세요. 운동 후 스트레칭도 잊지 마세요. 건강 관리: 정기적인 검진을 받고, 병원을 가야 할 때는 꼭 가세요. 작은 증상도 놓치지 마세요. 정신 건강: 스트레스를 받을 때는 운동이나 명상으로 해소하세요. 친구와의 대화도 큰 도움이 될 거예요.",
  },
  ABBA: {
    title: "운동부족 유재석",
    description:
      "식단과 정신은 매우 건강하지만, 운동과 건강관리 부분을 보완해보세요. 식단 관리: 건강한 식습관을 유지하세요. 신선한 채소와 과일을 꾸준히 섭취하세요. 운동: 다양한 운동을 통해 몸을 균형 있게 단련하세요. 운동 후 스트레칭도 잊지 마세요. 건강 관리: 정기적인 검진을 받고, 병원을 가야 할 때는 꼭 가세요. 작은 증상도 놓치지 마세요. 정신 건강: 스트레스를 받을 때는 운동이나 명상으로 해소하세요. 친구와의 대화도 큰 도움이 될거예요.",
  },
  AABB: {
    title: "병원가기 싫어하는 마동석",
    description:
      "식단과 운동은 잘 챙기시는데, 건강 관리와 정신 건강 부분에서 조금 더 신경 써야 해요. 작 은 습관 변화로 큰 차이를 만들어 보세요. 식단 관리: 건강한 식단을 유지하면서 가끔은 좋아하는 음식도 즐기세요. 너무 스트레스 받지 않게! 운동: 운동을 꾸준히 하되, 지나치게 무리하지 않는 것이 중요해요. 적당한 강도로 즐기세요. 건강 관리: 건강검진은 미루지 말고 제때 받으세요. 작은 병도 놓치지 않도록 주의하세요. 정신 건강: 스트레스 해소 방법을 다양하게 시도해보세요. 취미 생활이나 새로운 활동을 통해 긍정적인 에너지를 얻으세요.",
  },
  BAAB: {
    title: "먹잘알 간디",
    description:
      "식단 관리와 정신 건강 관리가 잘 되어 있어요. 운동과 건강 관리에 조금 더 신경 쓰면 더욱 완벽한 건강을 유지할 수 있을 거예요. 식단 관리: 건강한 식단을 유지하고, 규칙적인 식사 시간을 지키세요. 스트레스 해소에 좋은 음식들을 섭취해보세요.운동: 규칙적인 운동 루틴을 만들어보세요. 유산소 운동과 근력 운동을 번갈아 가며 하세요. 건강 관리: 정기적인 건강검진과 적절한 휴식은 필수! 건강 관리를 위한 계획을 세워보세요. 정신 건강: 좋아하는 영화나 음악으로 스트레스를 해소하세요. 취미 생활도 큰 도움이 될 거예요.",
  },
  BABA: {
    title: "대식가 소크라테스",
    description:
      "식단과 건강 관리가 조금 아쉬워요. 하지만 운동을 잘 챙기고 있어요. 식단과 건강 관리를 보 완하면 더 건강한 삶을 살 수 있어요. 식단 관리: 건강한 식습관을 유지하세요. 야식은 피하고, 정해진 시간에 규칙적으로 식사하세요. 운동: 다양한 운동을 통해 몸을 균형 있게 단련하세요. 운동 후 스트레칭도 잊지 마세요. 건강 관리: 정기적인 검진을 받고, 병원을 가야 할 때는 꼭 가세요. 작은 증상도 놓치지 마세요. 정신 건강: 스트레스를 받을 때는 운동이나 명상으로 해소하세요. 친구와의 대화도 큰 도움이 될 거예요.",
  },
  ABAB: {
    title: "헬린이 백종원",
    description:
      "식단과 건강 관리가 잘 되어 있어요. 그러나 운동과 정신 건강 부분도 꾸준히 관리해보세요. 식단 관리: 건강한 식습관을 유지하세요. 신선한 채소와 과일을 꾸준히 섭취하세요. 운동: 다양한 운동을 통해 몸을 균형 있게 단련하세요. 운동 후 스트레칭도 잊지 마세요. 건강 관리: 정기적인 검진을 받고, 병원을 가야 할 때는 꼭 가세요. 작은 증상도 놓치지 마세요. 정신 건강: 스트레스를 받을 때는 운동이나 명상으로 해소하세요. 친구와의 대화도 큰 도움이 될 거예요.",
  },
  ABBB: {
    title: "수줍음 많은 백종원",
    description:
      "식단을 제외한 운동, 건강관리, 정신 건강 부분을 꾸준히 관리하고, 작은 습관 변화를 통해 더 건강한 삶을 만들 필요가 있어요. 식단 관리: 건강한 식습관을 유지하세요. 신선한 채소와 과일을 꾸준히 섭취하세요. 운동: 다양한 운동을 통해 몸을 균형 있게 단련하세요. 운동 후 스트레칭도 잊지 마세요. 건강 관리: 정기적인 검진을 받고, 병원을 가야 할 때는 꼭 가세요. 작은 증상도 놓치지 마세요! 정신 건강: 스트레스를 받을 때는 운동이나 명상으로 해소하세요. 친구와의 대화도 큰 도움이 될 거예요.",
  },
  BABB: {
    title: "프로틴 괴물",
    description:
      "운동은 잘 챙기고 있지만, 식단, 건강 관리, 정신 건강 부분에 조금 더 신경을 써야 해요. 정기적인 검진을 통해 건강을 지키세요. 식단 관리: 건강한 식습관을 유지하고, 신선한 재료로 음식을 준비하세요. 야식을 피하고, 규칙적인 식사를 지켜보세요. 운동: 다양한 운동을 시도해보세요. 유산소 운동과 근력 운동을 번갈아가며 하세요. 건강 관리: 건강검진을 제때 받고, 작은 증상도 무시하지 마세요. 병원을 꼭 방문하세요. 정신 건강: 스트레스를 받을 때는 좋아하는 활동을 통해 해소하세요. 친구와의 대화도 큰 도움이 될 거예요.",
  },
  BBAB: {
    title: "병원 러버 주우재",
    description:
      "식단과 운동 관리가 조금 아쉬워요. 하지만 건강 관리와 정신 건강은 잘 챙기고 있어요. 나머지 부분도 보완해보세요. 식단 관리: 건강한 식습관을 유지하세요. 야식은 피하고, 정해진 시간에 규칙적으로 식사하세요. 운동: 다양한 운동을 통해 몸을 균형 있게 단련하세요. 운동 후 스트레칭도 잊지 마세요. 건강 관리: 정기적인 검진을 받고, 병원을 가야 할 때는 꼭 가세요. 작은 증상도 놓치지 마세요. 정신 건강: 스트레스를 받을 때는 운동이나 명상으로 해소하세요. 전문가와의 상담도 좋은 방법입니다.",
  },
  BBBA: {
    title: "숨쉬기 운동만 하는 노홍철",
    description:
      "식단, 운동, 건강 관리가 조금 아쉬워요. 정신 건강은 잘 챙기고 있으니 나머지 부분도 보완해 보세요. 식단 관리: 건강한 식습관을 유지하세요. 야식은 피하고, 정해진 시간에 규칙적으로 식사하세요. 운동: 다양한 운동을 통해 몸을 균형 있게 단련하세요. 운동 후 스트레칭도 잊지 마세요. 건강 관리: 정기적인 검진을 받고, 병원을 가야 할 때는 꼭 가세요. 작은 증상도 놓치지 마세요. 정신 건강: 스트레스를 받을 때는 운동이나 명상으로 해소하세요. 친구와의 대화도 큰 도움이 될 거예요.",
  },
  BBBB: {
    title: "3대 0 치는 슬픔이",
    description:
      "식단, 운동, 건강 관리, 정신 건강 모두 조금 더 신경을 써야 해요. 작은 변화로 건강한 삶을 시작해보세요. 식단 관리: 건강한 식습관을 유지하세요. 야식은 피하고, 정해진 시간에 규칙적으로 식사하세요. 운동: 다양한 운동을 통해 몸을 균형 있게 단련하세요. 운동 후 스트레칭도 잊지 마세요. 건강 관리: 정기적인 검진을 받고, 병원을 가야 할 때는 꼭 가세요. 작은 증상도 놓치지 마세요. 정신 건강: 스트레스를 받을 때는 운동이나 명상으로 해소하세요. 전문가와의 상담도 좋은 방 법입니다.",
  },
};

window.addEventListener("load", () => {
  const resultType = localStorage.getItem("quizResult") || "AAAA"; // 기본 유형 설정
  const resultData = resultTypes[resultType];
  const name = localStorage.getItem("name") | null;
  const resultHeading = document.getElementById("result-heading");
  const resultText = document.getElementById("result-text");

  resultHeading.textContent = `${name}님의 유형 : ${resultType}, ${resultData.title}`;
  resultText.textContent = resultData.description;
});

document.getElementById("restart-btn").addEventListener("click", () => {
  window.location.href = "../index.html"; // 메인 페이지로 이동
});

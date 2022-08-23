const quotes = [
  {
    quote: "아직, 지지않았어.",
    character: "히나타 쇼요",
  },
  {
    quote: "내가 무언가에 절망한다면 배구를 할 수 없을때 뿐이야",
    character: "카게야마 토비오",
  },
  {
    quote: "그래도 멋대로 포기하는 건 용서 못 해!",
    character: "니시노야 유",
  },
  {
    quote: "사고 쳐. 민폐 끼쳐. 발목 잡아. 그걸 메우기 위한 팀이고, 선배다!",
    character: "타나카 류노스케",
  },
  {
    quote: "선생님, 저는 이로운게 있어서 배구를 하는 게 아니에요",
    character: "스가와라 코시",
  },
  {
    quote: "에이스는 좀 더 성장하지 않으면 안 되지.",
    character: "아카아시 케이지",
  },
  {
    quote: "운? 설마요ㅎ.기적을 일으키는 것 이야말로 에이스입니다!",
    character: "고시키 츠토무",
  },
  {
    quote: "오늘의 나는 120점..!!",
    character: "텐도 사토리",
  },
  {
    quote: "나는 우리가 이길 것임을 의심치 않는다.",
    character: "우시지마 와카토시",
  },
]

const quote = document.querySelector("#quote span:first-child");
const character = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
character.innerText = todaysQuote.character;

// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector(".modal");
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement("div");
  modal.className = "modal hidden";

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content zoomIn";

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement("div");
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = "Door Image";
  image.style.width = "100%";
  image.style.height = "211px";

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement("p");
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener("click", () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove("hidden"), 0);
}

const modalMessageList = [
  {
    number: 1,
    message:
      "Merry Christmas, Joseph! Santa's elves told me you're spreading giggles faster than snowflakes! Keep the fun rolling!",
  },
  {
    number: 2,
    message:
      "Hey there, smarty pants Juan! Santa's impressed by your cleverness! Keep dazzling everyone with your wit!",
  },
  {
    number: 3,
    message:
      "Merry Christmas, Maitha! You're a gift of joy and laughter! Keep spreading your sparkle this holiday!",
  },
  {
    number: 4,
    message:
      "Ho ho ho, Lisa! The reindeer told Santa you made the North Pole merrier! Please come again and bring more giggles!",
  },
  {
    number: 5,
    message:
      "Merry Christmas, Mohammad! Santa loves your curious mind! Keep exploring and discovering new wonders!",
  },
  {
    number: 6,
    message:
      "Hey Omar! Santa thinks you're on the nice list for being super cool! Keep shining like a Christmas star!",
  },
  {
    number: 7,
    message:
      "Merry Christmas, Mohid! Santa's elves are amazed by your kindness! Keep spreading that warm holiday cheer!",
  },
  {
    number: 8,
    message:
      "Hey Sua! Santa admires your height almost as much as his elves! Keep growing tall and spreading joy!",
  },
  {
    number: 9,
    message:
      "Merry Christmas, Georgia! Your hair is as festive as tinsel! Keep rocking that holiday style!",
  },
  {
    number: 10,
    message:
      "Ho ho ho! Santa's got a surprise for you, Daniel! You're the honorary Santa Claus helper this year! Spread that merry cheer!",
  },
  {
    number: 11,
    message:
      "Merry Christmas, Min Gyeong! You're as bright as Rudolph's nose! Keep shining and spreading warmth this season!",
  },
  {
    number: 12,
    message:
      "Hey Omar! Santa's elves told me you've got the spirit of Christmas in you! Keep that holiday joy alive!",
  },
  {
    number: 13,
    message:
      "Merry Christmas, Khaled! You're as cool as a polar bear! Keep spreading that icy-cool holiday vibe!",
  },
  {
    number: 14,
    message:
      "Hey Aldana! Santa thinks you're a gift to everyone around you! Keep shining like a Christmas star!",
  },
  {
    number: 15,
    message:
      "Merry Christmas, Fouad! Santa's impressed by your holiday spirit! Keep jingling those bells of joy!",
  },
  {
    number: 16,
    message:
      "Hey Jiu! Santa thinks you're as smart as his wisest elf! Keep dazzling everyone with your cleverness!",
  },
  {
    number: 17,
    message:
      "Merry Christmas, Mayed! Santa's heard about your kindness! Keep spreading that holiday cheer!",
  },
  {
    number: 18,
    message:
      "Ho ho ho, Lea! Santa's reindeer told him how amazing you are! Keep being as bright as Rudolph's nose!",
  },
  {
    number: 19,
    message:
      "Merry Christmas, Hind! Santa's got his eye on you for spreading joy like snowflakes! Keep it up!",
  },
  {
    number: 20,
    message:
      "Hey there, Mohamed! Santa knows you're as special as a Christmas miracle! Keep spreading that magic!",
  },
  {
    number: 21,
    message:
      "Merry Christmas, Buhti! Santa's elves love your energy! Keep that holiday spirit high!",
  },
  {
    number: 22,
    message:
      "Ho ho ho! Santa's heard you're as joyful as a sleigh ride! Keep spreading that merry cheer, Hamdan!",
  },
  {
    number: 23,
    message:
      "Merry Christmas, Salama! Santa's reindeer told him about your kindness! Keep shining bright!",
  },
  {
    number: 24,
    message:
      "Hey Katherine! Santa thinks your joy is as contagious as Christmas carols! Keep spreading that holiday happiness!",
  },
  {
    number: 25,
    message:
      "Merry Christmas, Khalifa! Santa's elves told him about your holiday cheer! Keep the Christmas spirit alive!",
  },
  {
    number: 26,
    message:
      "Ho ho ho, Hind! Santa thinks you're as wonderful as a Christmas wish! Keep spreading joy everywhere you go!",
  },
  {
    number: 27,
    message:
      "Merry Christmas, Mr. Darren! You've been spreading wisdom like Santa spreads gifts! Thank you for teaching us and making learning fun!",
  },
];

// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll(".door");
doors.forEach((door, index) => {
  door.addEventListener("click", () => {
    // 상위 div의 class 번호를 찾아서 image url에 사용합니다
    const imageUrl = `image/card/card-${index + 1}.png`;

    // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
    const doorDiv = document.querySelector(`.day-${index + 1}`);
    const backDiv = doorDiv.querySelector(`.back`);

    const style = window.getComputedStyle(backDiv);
    const pTag = backDiv.querySelector("p");
    const text = modalMessageList[index]["message"];

    // showModal 함수를 호출하여 모달을 표시합니다.
    showModal(imageUrl, text);
    // alert('이벤트 캘린더를 엽니다.');
  });
});

//DOM Select(선택)
const opener = document.querySelector(".opener"); //기호
const closer = document.querySelector("#closer");  //기호
const menu = document.querySelector(".menu");

//event 추가 : .addEventListener() vs Event 제거: .removeEventListener
opener.addEventListener("click", function () { //클릭 : 마우스 클릭 이벤트
  //menu.classList.remove("hide");//숨겨져있던 .menu 나타내기.
  menu.style.display = "bolck";
  console.log("hide 클래스를 제거했습니다.");
});

closer.addEventListener("click", function () { //클릭 : 마우스 클릭 이벤트
  //menu.classList.add("hide"); 실제로는 문제 없지만 테스트 환경 고려. 
  menu.style.display = "none";
  console.log("hide 클래스를 추가했습니다.");
});
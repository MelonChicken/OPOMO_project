const firebaseConfig = {
  apiKey: "AIzaSyDrZRAAkmuJ_1k_cRcY0bFkImfZukHass0",
  authDomain: "opomo-project.firebaseapp.com",
  databaseURL: "https://opomo-project-default-rtdb.firebaseio.com",
  projectId: "opomo-project",
  storageBucket: "opomo-project.appspot.com",
  messagingSenderId: "17089883592",
  appId: "1:17089883592:web:2f6f072aa41136d44fe4fd",
};

firebase.initializeApp(firebaseConfig);

//DB에 새로 쓰기(추가 아님)
function writePoseData(value) {
  firebase.database().ref("poses/").set(value);
}

//DB에서 불러오기
//불러오기 순서 1. pose 2. basic/custom
function getWhichData(category, value) {
  const source = firebase.database().ref(`${category}/`).child(`${value}`);
  source
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
//불러오기 예시
getWhichData("poses", "basic");
getWhichData("poses", "custom");

//새로 쓰기 예시
writePoseData({
  basic: [
    {
      id: "b1",
      name: "베어스",
      tag: ["#3명", "#신나게", "#친구와"],
      url: "./images/베어스.png",
    },
    {
      id: "b2",
      name: "세서미",
      tag: ["#2명", "#친구와"],
      url: "./images/세서미.png",
    },
    {
      id: "b3",
      name: "콩순이",
      tag: ["#1명", "#귀엽게"],
      url: "./images/콩순이.png",
    },
    {
      id: "b4",

      name: "쿠로미",
      tag: ["#2명", "#친구와", "#귀엽게"],
      url: "./images/쿠로미.png",
    },
    {
      id: "b5",
      name: "스폰지밥1",
      tag: ["#2명", "#신나게"],
      url: "./images/스폰지밥1.png",
    },
    {
      id: "b6",
      name: "스폰지밥2",
      tag: ["#2명", "#웃기게", "#친구와"],
      url: "./images/스폰지밥2.png",
    },
    {
      id: "b7",
      name: "모두 집중",
      tag: ["#3명", "이쁘게", "#친구와"],
      url: "./images/Basic/img (1).jpeg",
    },
    {
      id: "b8",
      name: "크앙",
      tag: ["#2명", "귀엽게", "#연인과"],
      url: "./images/Basic/img (1).jpg",
    },
    {
      id: "b9",
      name: "락스피릿",
      tag: ["#4명", "재밌게", "#친구와"],
      url: "./images/Basic/img (1).PNG",
    },
    {
      id: "b10",
      name: "허물없는 우리",
      tag: ["#4명", "재밌게", "#친구와"],
      url: "./images/Basic/img (2).jpeg",
    },
    {
      id: "b11",
      name: "브이 삼총사",
      tag: ["#3명", "신나게", "#친구와"],
      url: "./images/Basic/img (2).jpg",
    },
    {
      id: "b12",
      name: "행복한 징징이와",
      tag: ["#3명", "재밌게", "#친구와"],
      url: "./images/Basic/img (2).PNG",
    },
    {
      id: "b13",
      name: "똑 닮은 우리",
      tag: ["#2명", "신나게", "#친구와"],
      url: "./images/Basic/img (3).jpg",
    },
    {
      id: "b14",
      name: "저 멀리 가자",
      tag: ["#3명", "#재밌게", "#친구와"],
      url: "./images/Basic/img (3).PNG",
    },
    {
      id: "b15",
      name: "귀여운 우리",
      tag: ["#2명", "귀엽게", "#친구와"],
      url: "./images/Basic/img (4).jpg",
    },
    {
      id: "b16",
      name: "여기 사랑스런 우리",
      tag: ["#2명", "창의적이게", "#친구와"],
      url: "./images/Basic/img (4).PNG",
    },
    {
      id: "b17",
      name: "힙한 꽃들",
      tag: ["#3명", "귀엽게", "#친구와"],
      url: "./images/Basic/img (5).jpg",
    },
    {
      id: "b18",
      name: "말랑콩떡",
      tag: ["#1명", "귀엽게"],
      url: "./images/Basic/img (5).PNG",
    },
    {
      id: "b19",
      name: "볼콕포즈",
      tag: ["#2명", "귀엽게", "#친구와"],
      url: "./images/Basic/img (6).jpg",
    },
    {
      id: "b20",
      name: "마음 빼고 다 맞는 우리",
      tag: ["#3명", "신나게", "#친구와"],
      url: "./images/Basic/img (6) PNG",
    },
    {
      id: "b21",
      name: "대칭으로 꽁냥",
      tag: ["#2명", "사랑스럽게", "#친구와", "연인과"],
      url: "./images/Basic/img (7).jpg",
    },
  ],
  custom: [
    {
      id: "c1",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (1).jpg",
    },
    {
      id: "c2",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (2).jpg",
    },
    {
      id: "c3",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (3).jpg",
    },
    {
      id: "c4",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (4).jpg",
    },
    {
      id: "c5",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (5).jpg",
    },
    {
      id: "c6",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (6).jpg",
    },
    {
      id: "c7",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (7).jpg",
    },
    {
      id: "c8",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (8).jpg",
    },
    {
      id: "c9",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (9).jpg",
    },
    {
      id: "c10",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (10).jpg",
    },
    {
      id: "c11",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (11).jpg",
    },
    {
      id: "c12",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (12).jpg",
    },
    {
      id: "c13",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (13).jpg",
    },
    {
      id: "c14",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (14).jpg",
    },
    {
      id: "c15",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (15).jpg",
    },
    {
      id: "c16",
      tag: ["#2명"],
      url: "./images/2명/패트와 매트 포즈 조합/after/img (16).jpg",
    },
    {
      id: "c17",
      tag: ["#2명"],
      url: "./images/2명/1.png",
    },
    {
      id: "c18",
      tag: ["#2명"],
      url: "./images/2명/2.png",
    },
    {
      id: "c19",
      tag: ["#2명"],
      url: "./images/2명/3.png",
    },
    {
      id: "c20",
      tag: ["#2명"],
      url: "./images/2명/4.png",
    },
    {
      id: "c21",
      tag: ["#2명"],
      url: "./images/2명/5.png",
    },
    {
      id: "c22",
      tag: ["#2명"],
      url: "./images/2명/6.png",
    },
    {
      id: "c23",
      tag: ["#2명"],
      url: "./images/2명/7.png",
    },
    {
      id: "c24",
      tag: ["#2명"],
      url: "./images/2명/8.png",
    },
    {
      id: "c25",
      tag: ["#2명"],
      url: "./images/2명/9.png",
    },
    {
      id: "c26",
      tag: ["#2명"],
      url: "./images/2명/10.png",
    },
    {
      id: "c27",
      tag: ["#2명"],
      url: "./images/2명/11.png",
    },
    {
      id: "c28",
      tag: ["#2명"],
      url: "./images/2명/12.png",
    },
    {
      id: "c29",
      tag: ["#2명"],
      url: "./images/2명/13.png",
    },
    {
      id: "c30",
      tag: ["#2명"],
      url: "./images/2명/14.png",
    },
    {
      id: "c31",
      tag: ["#2명"],
      url: "./images/2명/15.png",
    },
    {
      id: "c32",
      tag: ["#2명"],
      url: "./images/2명/16.png",
    },
    {
      id: "c33",
      tag: ["#2명"],
      url: "./images/2명/17.png",
    },
    {
      id: "c34",
      tag: ["#2명"],
      url: "./images/2명/18.png",
    },
    {
      id: "c35",
      tag: ["#2명"],
      url: "./images/2명/19.png",
    },
    {
      id: "c36",
      tag: ["#2명"],
      url: "./images/2명/20.png",
    },
    {
      id: "c37",
      tag: ["#2명"],
      url: "./images/2명/21.png",
    },
    {
      id: "c38",
      tag: ["#2명"],
      url: "./images/2명/22.png",
    },
    {
      id: "c39",
      tag: ["#3명"],
      url: "./images/3명/1.png",
    },
    {
      id: "c40",
      tag: ["#3명"],
      url: "./images/3명/2.png",
    },
    {
      id: "c41",
      tag: ["#3명"],
      url: "./images/3명/3.png",
    },
    {
      id: "c42",
      tag: ["#3명"],
      url: "./images/3명/4.png",
    },
    {
      id: "c43",
      tag: ["#3명"],
      url: "./images/3명/5.png",
    },
    {
      id: "c44",
      tag: ["#3명"],
      url: "./images/3명/6.png",
    },
    {
      id: "c45",
      tag: ["#3명"],
      url: "./images/3명/7.png",
    },
    {
      id: "c46",
      tag: ["#3명"],
      url: "./images/3명/8.png",
    },
    {
      id: "c47",
      tag: ["#3명"],
      url: "./images/3명/9.png",
    },
    {
      id: "c48",
      tag: ["#3명"],
      url: "./images/3명/10.png",
    },
    {
      id: "c49",
      tag: ["#3명"],
      url: "./images/3명/11.png",
    },
    {
      id: "c50",
      tag: ["#3명"],
      url: "./images/3명/12.png",
    },
    {
      id: "c51",
      tag: ["#3명"],
      url: "./images/3명/13.png",
    },
    {
      id: "c52",
      tag: ["#3명"],
      url: "./images/3명/14.png",
    },
    {
      id: "c53",
      tag: ["#3명"],
      url: "./images/3명/15.png",
    },
    {
      id: "c54",
      tag: ["#4명 이상"],
      url: "./images/4명 이상/1.png",
    },
    {
      id: "c55",
      tag: ["#4명 이상"],
      url: "./images/4명 이상/2.png",
    },
    {
      id: "c56",
      tag: ["#4명 이상"],
      url: "./images/4명 이상/3.png",
    },
    {
      id: "c57",
      tag: ["#4명 이상"],
      url: "./images/4명 이상/3.png",
    },
    {
      id: "c58",
      tag: ["#4명 이상"],
      url: "./images/4명 이상/4.png",
    },
    {
      id: "c59",
      tag: ["#4명 이상"],
      url: "./images/4명 이상/5.png",
    },
  ],
});

'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//都道府県ボタン属性
const arrayPrefecture = [
  {name:"北海道", x:640, y: 20, drct:"h"},
  {name:  "青森", x:640, y: 80, drct:"h"},
  {name:  "秋田", x:640, y:120, drct:"v"},
  {name:  "岩手", x:680, y:120, drct:"v"},
  {name:  "山形", x:640, y:200, drct:"v"},
  {name:  "宮城", x:680, y:200, drct:"v"},
  {name:  "福島", x:640, y:280, drct:"h"},
  {name:  "茨城", x:680, y:320, drct:"v"},
  {name:  "栃木", x:640, y:320, drct:"v"},
  {name:  "群馬", x:600, y:320, drct:"v"},
  {name:  "埼玉", x:600, y:400, drct:"h"},
  {name:  "千葉", x:680, y:400, drct:"v"},
  {name:  "東京", x:600, y:440, drct:"h"},
  {name:"神奈川", x:600, y:480, drct:"h"},
  {name:  "新潟", x:600, y:240, drct:"v"},
  {name:  "富山", x:560, y:240, drct:"v"},
  {name:  "石川", x:520, y:280, drct:"v"},
  {name:  "福井", x:480, y:320, drct:"v"},
  {name:  "長野", x:560, y:320, drct:"v"},
  {name:  "山梨", x:560, y:400, drct:"v"},
  {name:  "静岡", x:560, y:480, drct:"v"},
  {name:  "岐阜", x:520, y:360, drct:"v"},
  {name:  "愛知", x:520, y:440, drct:"v"},
  {name:  "三重", x:480, y:480, drct:"v"},
  {name:  "滋賀", x:480, y:400, drct:"v"},
  {name:  "奈良", x:440, y:400, drct:"v"},
  {name:"和歌山", x:400, y:480, drct:"h"},
  {name:  "京都", x:400, y:360, drct:"h"},
  {name:  "大阪", x:400, y:400, drct:"v"},
  {name:  "兵庫", x:360, y:400, drct:"v"},
  {name:  "岡山", x:280, y:440, drct:"h"},
  {name:  "広島", x:200, y:440, drct:"h"},
  {name:  "鳥取", x:280, y:400, drct:"h"},
  {name:  "島根", x:200, y:400, drct:"h"},
  {name:  "山口", x:160, y:400, drct:"v"},
  {name:  "香川", x:280, y:500, drct:"h"},
  {name:  "愛媛", x:200, y:500, drct:"h"},
  {name:  "徳島", x:280, y:540, drct:"h"},
  {name:  "高知", x:200, y:540, drct:"h"},
  {name:  "福岡", x: 60, y:400, drct:"h"},
  {name:  "大分", x:100, y:440, drct:"v"},
  {name:  "佐賀", x: 60, y:440, drct:"v"},
  {name:  "長崎", x: 20, y:440, drct:"v"},
  {name:  "宮崎", x:100, y:520, drct:"v"},
  {name:  "熊本", x: 60, y:520, drct:"v"},
  {name:"鹿児島", x: 60, y:600, drct:"h"},
  {name:  "沖縄", x: 20, y:660, drct:"h"}
]

//都道府県ボタン
for(let i =0; i < arrayPrefecture.length; i++) {
  let index = "btn" + ("00" + String(i)).slice(-2);
  let btn = document.createElement("input");
    btn.type = "button";
    btn.id = index;
    btn.value = arrayPrefecture[i]["name"];

    btn.style.position ="absolute";
    btn.style.left = arrayPrefecture[i]["x"] + "px";
    btn.style.top  = arrayPrefecture[i]["y"] + 50 + "px";
    if(arrayPrefecture[i]["drct"] === "h") {
      btn.style.width = "80px";
      btn.style.height = "40px";
    } else {
      btn.style.width = "40px";
      btn.style.height = "80px";
    }

    btn.style.fontFamily = "UD デジタル 教科書体 N-B";
    btn.style.fontSize = "9pt";
    btn.style.textAlign = "center";
    btn.style.borderColor = "darkgreen";
    btn.style.background = "lightgreen";
    btn.style.color = "darkblue";
    btn.style.borderRadius = "5pt";

    document.body.appendChild(btn);
    btn.addEventListener("click",function(e){listener(e,index);});
}


//タイトル
let ttl = document.createElement("p");
  ttl.id = "tytle";
  ttl.textContent = "都道府県ボタンクリックでイメージ表示します！";

  ttl.style.position ="absolute";
  ttl.style.left ="25px";
  ttl.style.top ="10px";
  ttl.style.position ="absolute";

  ttl.style.fontFamily = "UD デジタル 教科書体 N-B";
  ttl.style.fontSize = "20pt";
  ttl.style.textAlign = "left";
  ttl.style.color = "darkred";

  document.body.appendChild(ttl);


//画像
let pic = document.createElement("img");
  pic.id = "pics";
  pic.src = "./全国.jpg"

  pic.style.position = "absolute";
  pic.style.left = "150px";
  pic.style.top = "150px";
  pic.style.width = "200px";
  pic.style.height = "auto";

  document.body.appendChild(pic);


//クリックイベント関数(画像切替)
let indexPre = "btn00";
function listener(e,index) {
  document.getElementById(indexPre).style.background = "lightgreen";
  document.getElementById(index).style.background = "lightpink";
  indexPre = index;
  pic.src = "./" + document.getElementById(index).value + ".jpg";
}


//切替ボタン
let swt = document.createElement("input");
  swt.type="button";
  swt.id = "swtch";
  swt.value = "解説";

  swt.style.position ="absolute";
  swt.style.left = "20px";
  swt.style.top  = "80px";
  swt.style.width = "60px";
  swt.style.height = "60px";

  swt.style.fontFamily = "UD デジタル 教科書体 N-B";
  swt.style.fontSize = "15pt";
  swt.style.textAlign = "center";
  swt.style.borderColor = "darkorange";
  swt.style.background = "lightyellow";
  swt.style.color = "darkbrown";
  swt.style.borderRadius = "5pt";

  document.body.appendChild(swt);
  swt.onclick = function() {
    if(swt.value === "解説") {
      for(let i =0; i < arrayPrefecture.length; i++) {
        let indexRmv = "btn" + ("00" + String(i)).slice(-2);
      document.getElementById(indexRmv).remove();
      }
      pic.src = "./解説.jpg"
      pic.style.position = "absolute";
      pic.style.left = "100px";
      pic.style.top = "10px";
      pic.style.width = "800px";
      pic.style.height = "auto";

    swt.value = "地図";
      ttl.textContent = "解説";
    } else {
      location.reload();
    }
  }

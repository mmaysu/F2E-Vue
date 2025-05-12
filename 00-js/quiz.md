## 🌟 1. 語法糖 - 模板字符串

請用模板字符串補齊以下程式碼，讓輸出結果正確：

```
const city = "台北";
const message = `我現在在${city}！`; // ✍️ 補上模板字符串
console.log(message); // 我現在在台北！
```


## 🎮 2. ES6 箭頭函式（Arrow Function）

### 練習一：將傳統函式改成箭頭函式

```
const multiply = function(x, y) {
    return x * y;
};

// 請改寫成箭頭函式
const modernMultiply = (x, y) => x * y; // ✍️
```

### 練習二：搭配 map 使用箭頭函式

```
const names = ["小明", "小華", "小菁"];
// 請用 map 和箭頭函式，製作一個每個名字加上「同學」的新陣列
const classmates = names.map(name => `${name}同學`); // ✍️
console.log(classmates); // ["小明同學", "小華同學", "小菁同學"]
```

## 🎲 3. 物件字面語法增強（Object Enhancement）

請利用「物件屬性簡寫」與「方法簡寫」完成這個物件：

```
const name = "勇者";
const hp = 120;

// 請產生一個角色物件，內容有 name、hp，以及一個 attack 方法，回傳字串「勇者攻擊了！」
const character = {
    name,  
    hp,    
    attack() {  
        return `${this.name}攻擊了！`;
    }  // ✍️
};

console.log(character.attack()); // 勇者攻擊了！
```

## 🎯 4. 解構（Destructuring）

### 練習一：陣列解構

```
const colors = ["紅色", "藍色", "黃色"];
// 請使用解構，取出第一個和第二個顏色
const [firstColor, secondColor] = colors; // ✍️
console.log(firstColor); // 紅色
console.log(secondColor); // 藍色
```

### 練習二：物件解構

```
const book = {
    title: "JS 大冒險",
    author: "小明",
    price: 300
};

// 請解構出 title 和 price
const { title, price } = book; // ✍️
```

## 🎨 5. 展開語法（Spread）

### 練習一：合併兩組玩家

```
const teamA = ["勇者", "法師"];
const teamB = ["弓箭手", "刺客"];

// 請合併兩組玩家成一組 allPlayers
const allPlayers = [...teamA, ...teamB]; // ✍️
console.log(allPlayers); // ["勇者", "法師", "弓箭手", "刺客"]
```

### 練習二：物件擴展

```
const baseStats = {
    hp: 100,
    mp: 50
};

// 請新增一個包含 baseStats、攻擊力 attack: 30 的新物件
const knight = {
    ...baseStats,
    attack: 30
};

console.log(knight); // ✍️
```

## 🎁 6. 函式參數預設值（Default parameters）

請完成下方函式，讓它即使不給參數也能正常運作：

```
const summonPet = (name, type) => {
    return `${name} 是一隻 ${type} 的寵物。`;
};

console.log(summonPet()); // 小狗 是一隻 一般 的寵物。
console.log(summonPet("火焰龍", "稀有")); // 火焰龍 是一隻 稀有 的寵物。
```

## 🌈 7. Promise 和非同步處理

請模擬一個載入遊戲的非同步流程：

```
const loadGame = (gameName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${gameName} 載入完成！`);
        }, 1500);
    });
};

// 請使用 async/await 完成啟動流程
const startGame = async () => {
    const result = await loadGame("遊戲");
    console.log(result); // ✍️
};

startGame();
```

## 🎵 8. 可選串連（Optional chaining）

請安全地存取玩家的第一個技能，如果沒有就回傳「沒有技能」：

```
const player = {
    profile: {
        // skills 可能不存在
        skills: ["劍術", "魔法"]
    }
};

// 安全取得第一個技能
const firstSkill = player.profile?.skills?.[0] || "沒有技能"; // ✍️
console.log(firstSkill); // 沒有技能
```

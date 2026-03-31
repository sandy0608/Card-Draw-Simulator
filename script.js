const cardData = [
    { id: 1, rarity: "SSR", name: "闇黑龍", img: "img/ssr_1.jpg", chance: 1, className: "ssr" },
    { id: 2, rarity: "SSR", name: "光之守護者", img: "img/ssr_2.jpg", chance: 1, className: "ssr" },
    { id: 3, rarity: "SR", name: "闇影刺客", img: "img/sr_1.jpg", chance: 7, className: "sr" },
    { id: 4, rarity: "SR", name: "銀翼弓箭手", img: "img/sr_2.jpg", chance: 8, className: "sr" },
    { id: 5, rarity: "R", name: "森林守衛", img: "img/r_1.jpg", chance: 16, className: "r" },
    { id: 6, rarity: "R", name: "烈焰法師", img: "img/r_2.jpg", chance: 17, className: "r" },
    { id: 7, rarity: "N", name: "史萊姆", img: "img/n_1.jpg", chance: 25, className: "n" },
    { id: 8, rarity: "N", name: "哥布林", img: "img/n_2.jpg", chance: 25, className: "n" }
];

// Step 0: 定義玩家的背包
let inventory = [];

const btn = document.getElementById('draw-btn');
const container = document.getElementById('result-container');
const inventoryDisplay = document.getElementById('inventory-display');

btn.addEventListener('click', () => {
    // 1. 抽卡邏輯
    const randomNum = Math.floor(Math.random() * 100) + 1;
    let currentSum = 0;
    let selectedCard = null;

    for (let card of cardData) {
        currentSum += card.chance;
        if (randomNum <= currentSum) {
            selectedCard = card;
            break;
        }
    }

    // 2. 顯示目前的抽卡結果 (大卡片)
    container.innerHTML = `
        <div class="card ${selectedCard.className}">
            <img src="${selectedCard.img}" alt="${selectedCard.name}">
            <div class="card-name">${selectedCard.name}</div>
            <div class="rarity-tag">${selectedCard.rarity}</div>
        </div>
    `;

    // Step 1: 將抽到的卡片物件存入陣列 (Push)
    inventory.push(selectedCard);

    // Step 2 & 3: 渲染背包內容
    updateInventoryUI();
});

// Step 3: 渲染背包內容的函數 (Render)
function updateInventoryUI() {
    inventoryDisplay.innerHTML = ""; // 先清空，才不會重複出現舊的
    
    inventory.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = `inventory-item ${item.className}`;
        
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="mini-name">${item.name}</div>
        `;
        
        inventoryDisplay.appendChild(itemDiv);
    });
}
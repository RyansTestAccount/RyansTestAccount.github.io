var today = new Date();
var day = String(today.getDate()).padStart(2, '0');

console.log(day)

var pairs = {
    1:  ["The Common Kitchen & Bar", "https://goo.gl/maps/tQVeoX3zF5fSn6vy9"],
    2:  ["Massi", "https://goo.gl/maps/TD3WbLpSWLhdGA9u8"],
    3:  ["Simply Spanish (Closed on Mondays)", "https://goo.gl/maps/DmjfyGRn87oM348m9"],
    4:  ["Tipo 00", "https://goo.gl/maps/vEGKf5xQt2tKq2j26"],
    5:  ["Pok Pok Junior", "https://goo.gl/maps/t4umTKVkfJA9JcSU6"],
    6:  ["The Workers' Food Room", "https://goo.gl/maps/X9Yq5eSL2pj1ZPK46"],
    7:  ["Hardware Société", "https://goo.gl/maps/UDqtxgU4WZH4MmWb9"],
    8:  ["Claypots Barbarossa", "https://goo.gl/maps/Y42WVksqGYi7UTXZ8"],
    9:  ["Rice Paper Scissors", "https://goo.gl/maps/UE2Pj1fYNAiaumyo8"],
    10: ["Little Brother", "https://goo.gl/maps/yh9Wj9q6TeEV6GgN6"],
    11: ["Royal Stacks", "https://goo.gl/maps/Yq2XEmyuBFW39Z5b7"],
    12: ["Brick Lane", "https://goo.gl/maps/hpSs3kUi48hobLEDA"],
    13: ["Mamak", "https://goo.gl/maps/hRXpLojvj4uBCP1Y7"],
    14: ["Gami Chicken & Beer", "https://goo.gl/maps/Sxwnbbd9cumNeHv19"],
    15: ["Shanghai Street Dumpling", "https://goo.gl/maps/xZ2UZee88ywWBKwZ6"],
    16: ["Korean Table", "https://goo.gl/maps/b9izXiTkVBrKWSf38"],
    17: ["The Mitre Tavern", "https://goo.gl/maps/STasvXbQxBQMVoi66"],
    18: ["The Grain Store", "https://goo.gl/maps/krhMHGAZf7YRSD746"],
    19: ["Natural History Public Bar", "https://goo.gl/maps/JpXAq9AGXGYfubuG9"],
    20: ["Little Ramen Bar", "https://goo.gl/maps/TqouprYqhRwzq7uS7"],
    21: ["SUD Food and Wine", "https://goo.gl/maps/iK2f8WN7o6UNa66E7"],
    22: ["Hawker Boys", "https://goo.gl/maps/H6Zxb7GbJX9FwGtp7"],
    23: ["Red Cliff", "https://goo.gl/maps/RbD4pEM7GeVTq1tEA"],
    24: ["Sakae", "https://goo.gl/maps/fk6aLbbU1ewvGLQC9"],
    25: ["Dumpling Kingdom", "https://goo.gl/maps/Crit9GUcdKXDqDt9A"],
    26: ["Five Points Café", "https://goo.gl/maps/WjjH3YRQASV2jEHF7"],
    27: ["Delhi Rocks", "https://goo.gl/maps/DksnbgMRHN8igytk9"],
    28: ["GJ's Grill", "https://goo.gl/maps/rbYfhRKZPZfCntxT6"],
    29: ["Pokéd", "https://goo.gl/maps/PH7qYwLdMfchBtKDA"],
    30: ["Taketori Fusion Japanese", "https://goo.gl/maps/EcgoQp8XSBQgmMMh8"],
    31: ["Göz City", "https://goo.gl/maps/KUkBYBcffqgXx8fb6"],
}


var captainsCall = document.getElementById("captains-call");
captainsCall.textContent = pairs[day][0];

var mapsLink = document.getElementById("maps-link");
mapsLink.href = pairs[day][1]

var randomNumber = Math.floor(Math.random() * 14) + 1;
var theManHimself = document.getElementById("food-captain-image")
theManHimself.src = 'images/' + randomNumber + '.png'
function closeProfile(){
document.getElementById('popup').style.display='none';
}
document.querySelectorAll('.overall-player').forEach(card => {

  card.addEventListener('mouseenter', () => {
    card.style.transform = "translateY(-6px) scale(1.02)";
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "translateY(0px) scale(1)";
  });

});
let currentIndex = 0;

function showKit(e, id) {
  const tabs = Array.from(document.querySelectorAll('.kit-tab'));
  const newIndex = tabs.indexOf(e.currentTarget);

  const direction = newIndex > currentIndex ? "right" : "left";

  document.querySelectorAll('.kit-content').forEach(el => {
    el.classList.remove('active', 'slide-left', 'slide-right');
  });

  const newKit = document.getElementById(id);

  newKit.classList.add('active');
  newKit.classList.add(direction === "right" ? 'slide-right' : 'slide-left');

  document.querySelectorAll('.kit-tab').forEach(tab => tab.classList.remove('active'));
  e.currentTarget.classList.add('active');

  currentIndex = newIndex;
}
const players = {
ItsMoritzzz: {
    name: "ItsMoritzzz",
    rank: "1.",
    title: "Combat Cadet",
    points: "46 points",
    tiers: [
      {icon:"elytra-73b66265", tier:"LT3"},
      {icon:"bed-7313535b", tier:"LT3"},
      {icon:"bow-0b52585f", tier:"LT3"},
      {icon:"trident-1c1a3e5a", tier:"HT4"},
      {icon:"creeper-2cbc5b3a", tier:"HT4"},
      {icon:"debuff-23da9341", tier:"LT4"},
      {icon:"dia_smp-523efa38", tier:"LT4"},
      {icon:"speed-116175c6", tier:"LT4"},     
      {icon:"minecart-e4204998", tier:"LT4"},     
      {icon:"dia_crystal-b4032423", tier:"LT4"},
      {icon:"og_vanilla-bd47093f", tier:"LT4"},      
      {icon:"manhunt-f5be6ddb", tier:"HT5"},                 
    ]
  },
   shotss: {
    name: "4shotss",
    rank: "2.",
    title: "Combat Cadet",
    points: "45 points",
    tiers: [
      {icon:"speed-116175c6", tier:"HT3"},
      {icon:"elytra-73b66265", tier:"LT3"},      
      {icon:"og_vanilla-bd47093f", tier:"LT3"},   
      {icon:"dia_smp-523efa38", tier:"HT4"},
      {icon:"creeper-2cbc5b3a", tier:"LT4"}, 
      {icon:"debuff-23da9341", tier:"LT4"},
      {icon:"trident-1c1a3e5a", tier:"LT4"},   
      {icon:"bed-7313535b", tier:"LT4"},
      {icon:"dia_crystal-b4032423", tier:"HT5"},
      {icon:"minecart-e4204998", tier:"HT5"},  
      {icon:"bow-0b52585f", tier:"HT5"},                    
      {icon:"manhunt-f5be6ddb", tier:"LT5"},          
    ]
  },
  kasnnn: {
    name: "kasnnn",
    rank: "3.",
    title: "Combat Cadet",
    points: "28 points",
    tiers: [
      {icon:"minecart-e4204998", tier:"LT3"},  
      {icon:"dia_smp-523efa38", tier:"LT3"},
      {icon:"speed-116175c6", tier:"LT3"},
      {icon:"og_vanilla-bd47093f", tier:"LT4"},
      {icon:"manhunt-f5be6ddb", tier:"HT4"}, 
      {icon:"creeper-2cbc5b3a", tier:"-"},
      {icon:"bed-7313535b", tier:"-"},                 
      {icon:"dia_crystal-b4032423", tier:"-"},
      {icon:"bow-0b52585f", tier:"-"},                                  
      {icon:"trident-1c1a3e5a", tier:"-"},  
      {icon:"debuff-23da9341", tier:"-"},
      {icon:"elytra-73b66265", tier:"-"}, 
      
    ]
  },
  k4qx: {
    name: "k4qx",
    rank: "4.",
    title: "Combat Cadet",
    points: "26 points",
    tiers: [
      {icon:"elytra-73b66265", tier:"LT3"}, 
      {icon:"speed-116175c6", tier:"LT3"},
      {icon:"og_vanilla-bd47093f", tier:"LT3"},
      {icon:"trident-1c1a3e5a", tier:"HT4"}, 
      {icon:"creeper-2cbc5b3a", tier:"-"},
      {icon:"bed-7313535b", tier:"-"},                 
      {icon:"dia_crystal-b4032423", tier:"-"},
      {icon:"bow-0b52585f", tier:"-"},
      {icon:"minecart-e4204998", tier:"-"},                              
      {icon:"manhunt-f5be6ddb", tier:"-"},
      {icon:"dia_smp-523efa38", tier:"-"},
      {icon:"debuff-23da9341", tier:"-"},
      
    ]
  },
   SocialRex11: {
    name: "SocialRex11",
    rank: "5.",
    title: "Combat Cadet",
    points: "24 points",
    tiers: [
      {icon:"speed-116175c6", tier:"HT4"},
      {icon:"og_vanilla-bd47093f", tier:"LT4"},      
      {icon:"dia_crystal-b4032423", tier:"LT4"},
      {icon:"creeper-2cbc5b3a", tier:"HT5"},  
      {icon:"dia_smp-523efa38", tier:"HT5"},
      {icon:"debuff-23da9341", tier:"HT5"},
      {icon:"trident-1c1a3e5a", tier:"HT5"}, 
      {icon:"bed-7313535b", tier:"HT5"},
      {icon:"elytra-73b66265", tier:"LT5"},
      {icon:"bow-0b52585f", tier:"LT5"},
      {icon:"minecart-e4204998", tier:"LT5"},                              
      {icon:"manhunt-f5be6ddb", tier:"LT5"},      
    ]
  },
   Gold3n__: {
    name: "Gold3n__",
    rank: "6.",
    title: "Combat Novice",
    points: "19 points",
    tiers: [      
      {icon:"speed-116175c6", tier:"LT3"},
      {icon:"og_vanilla-bd47093f", tier:"LT3"},   
      {icon:"dia_smp-523efa38", tier:"LT3"},
      {icon:"bow-0b52585f", tier:"HT5"}, 
      {icon:"elytra-73b66265", tier:"-"},
      {icon:"creeper-2cbc5b3a", tier:"-"}, 
      {icon:"debuff-23da9341", tier:"-"},
      {icon:"trident-1c1a3e5a", tier:"-"},   
      {icon:"bed-7313535b", tier:"-"},
      {icon:"dia_crystal-b4032423", tier:"-"},
      {icon:"minecart-e4204998", tier:"-"},                           
      {icon:"manhunt-f5be6ddb", tier:"-"},          
    ]
  },
  Jonkler75: {
    name: "Jonkler75",
    rank: "7.",
    title: "Combat Novice",
    points: "18 points",
    tiers: [
      {icon:"debuff-23da9341", tier:"LT3"},
      {icon:"dia_crystal-b4032423", tier:"HT4"},
      {icon:"trident-1c1a3e5a", tier:"LT4"},
      {icon:"dia_smp-523efa38", tier:"LT4"},
      {icon:"creeper-2cbc5b3a", tier:"HT5"},  
      {icon:"speed-116175c6", tier:"-"},
      {icon:"bed-7313535b", tier:"-"},
      {icon:"elytra-73b66265", tier:"-"},      
      {icon:"bow-0b52585f", tier:"-"},
      {icon:"minecart-e4204998", tier:"-"},         
      {icon:"og_vanilla-bd47093f", tier:"-"},                 
      {icon:"manhunt-f5be6ddb", tier:"-"},            
    ]
  },
  TREN: {
    name: "1TREN",
    rank: "8.",
    title: "Combat Novice",
    points: "14 points",
    tiers: [
      {icon:"speed-116175c6", tier:"LT3"},
      {icon:"og_vanilla-bd47093f", tier:"HT4"},
      {icon:"trident-1c1a3e5a", tier:"LT4"},  
      {icon:"creeper-2cbc5b3a", tier:"LT5"},
      {icon:"bed-7313535b", tier:"-"},
      {icon:"elytra-73b66265", tier:"-"},            
      {icon:"dia_crystal-b4032423", tier:"-"},
      {icon:"bow-0b52585f", tier:"-"},
      {icon:"minecart-e4204998", tier:"-"},                            
      {icon:"manhunt-f5be6ddb", tier:"-"},
      {icon:"dia_smp-523efa38", tier:"-"},
      {icon:"debuff-23da9341", tier:"-"},
      
    ]
  },
  Eliiiiaass: {
    name: "Eliiiiaass",
    rank: "9.",
    title: "Combat Novice",
    points: "13 points",
    tiers: [
      {icon:"dia_smp-523efa38", tier:"LT3"},
      {icon:"manhunt-f5be6ddb", tier:"LT3"},
      {icon:"minecart-e4204998", tier:"LT5"}, 
      {icon:"og_vanilla-bd47093f", tier:"-"},
      {icon:"speed-116175c6", tier:"-"},
      {icon:"bed-7313535b", tier:"-"},
      {icon:"elytra-73b66265", tier:"-"},
      {icon:"creeper-2cbc5b3a", tier:"-"},      
      {icon:"dia_crystal-b4032423", tier:"-"},
      {icon:"bow-0b52585f", tier:"-"},                    
      {icon:"trident-1c1a3e5a", tier:"-"},                       
      {icon:"debuff-23da9341", tier:"-"},
      
    ]
  },
   MyNameIsPuma: {
    name: "MyNameIsPuma",
    rank: "10.",
    title: "Combat Novice",
    points: "12 points",
    tiers: [
      {icon:"manhunt-f5be6ddb", tier:"LT3"},
      {icon:"dia_smp-523efa38", tier:"LT3"},
      {icon:"minecart-e4204998", tier:"-"}, 
      {icon:"og_vanilla-bd47093f", tier:"-"},
      {icon:"speed-116175c6", tier:"-"},
      {icon:"bed-7313535b", tier:"-"},
      {icon:"elytra-73b66265", tier:"-"},
      {icon:"creeper-2cbc5b3a", tier:"-"},      
      {icon:"dia_crystal-b4032423", tier:"-"},
      {icon:"bow-0b52585f", tier:"-"},                    
      {icon:"trident-1c1a3e5a", tier:"-"},                 
      {icon:"debuff-23da9341", tier:"-"},
      
    ]
  },
  
  certifiedrid: {
    name: "certifiedrid",
    rank: "11.",
    title: "Combat Novice",
    points: "10 points",
    tiers: [
      {icon:"dia_crystal-b4032423", tier:"HT3"},
      {icon:"bow-0b52585f", tier:"-"},
      {icon:"minecart-e4204998", tier:"-"},         
      {icon:"og_vanilla-bd47093f", tier:"-"},
      {icon:"bed-7313535b", tier:"-"},
      {icon:"trident-1c1a3e5a", tier:"-"},
      {icon:"speed-116175c6", tier:"-"},      
      {icon:"creeper-2cbc5b3a", tier:"-"},
      {icon:"manhunt-f5be6ddb", tier:"-"},
      {icon:"dia_smp-523efa38", tier:"-"},
      {icon:"debuff-23da9341", tier:"-"},
      {icon:"elytra-73b66265", tier:"-"},
    ]
  },
   McNicho: {
    name: "McNicho",
    rank: "12.",
    title: "Rookie",
    points: "8 points",
    tiers: [
      {icon:"elytra-73b66265", tier:"LT4"},
      {icon:"dia_crystal-b4032423", tier:"HT5"},
      {icon:"creeper-2cbc5b3a", tier:"HT5"},
      {icon:"bed-7313535b", tier:"LT5"},      
      {icon:"bow-0b52585f", tier:"-"},
      {icon:"minecart-e4204998", tier:"-"},         
      {icon:"og_vanilla-bd47093f", tier:"-"},
      {icon:"trident-1c1a3e5a", tier:"-"},
      {icon:"speed-116175c6", tier:"-"},      
      {icon:"manhunt-f5be6ddb", tier:"-"},
      {icon:"dia_smp-523efa38", tier:"-"},
      {icon:"debuff-23da9341", tier:"-"},
      
    ]
  },
KoksikSzef: {
    name: "KoksikSzef",
    rank: "13.",
    title: "Rookie",
    points: "6 points",
    tiers: [
      {icon:"og_vanilla-bd47093f", tier:"LT4"},
      {icon:"speed-116175c6", tier:"LT4"},
      {icon:"bed-7313535b", tier:"-"},
      {icon:"elytra-73b66265", tier:"-"},
      {icon:"creeper-2cbc5b3a", tier:"-"},      
      {icon:"dia_crystal-b4032423", tier:"-"},
      {icon:"bow-0b52585f", tier:"-"},
      {icon:"minecart-e4204998", tier:"-"},               
      {icon:"trident-1c1a3e5a", tier:"-"},           
      {icon:"manhunt-f5be6ddb", tier:"-"},
      {icon:"dia_smp-523efa38", tier:"-"},
      {icon:"debuff-23da9341", tier:"-"},
      
    ]
  },
   BartekGaming383: {
    name: "BartekGaming383",
    rank: "14.",
    title: "Rookie",
    points: "3 points",
    tiers: [
      {icon:"og_vanilla-bd47093f", tier:"LT4"},
      {icon:"speed-116175c6", tier:"-"},
      {icon:"bed-7313535b", tier:"-"},
      {icon:"elytra-73b66265", tier:"-"},
      {icon:"creeper-2cbc5b3a", tier:"-"},      
      {icon:"dia_crystal-b4032423", tier:"-"},
      {icon:"bow-0b52585f", tier:"-"},
      {icon:"minecart-e4204998", tier:"-"},               
      {icon:"trident-1c1a3e5a", tier:"-"},           
      {icon:"manhunt-f5be6ddb", tier:"-"},
      {icon:"dia_smp-523efa38", tier:"-"},
      {icon:"debuff-23da9341", tier:"-"},
      
    ]
  },
  
  
  TheCronos_YT: {
    name: "TheCronos_YT",
    rank: "15.",
    title: "Rookie",
    points: "2 points",
    tiers: [
      {icon:"speed-116175c6", tier:"HT5"},
      {icon:"og_vanilla-bd47093f", tier:"-"},     
      {icon:"bed-7313535b", tier:"-"},
      {icon:"elytra-73b66265", tier:"-"},
      {icon:"creeper-2cbc5b3a", tier:"-"},      
      {icon:"dia_crystal-b4032423", tier:"-"},
      {icon:"bow-0b52585f", tier:"-"},
      {icon:"minecart-e4204998", tier:"-"},               
      {icon:"trident-1c1a3e5a", tier:"-"},           
      {icon:"manhunt-f5be6ddb", tier:"-"},
      {icon:"dia_smp-523efa38", tier:"-"},
      {icon:"debuff-23da9341", tier:"-"},
      
    ]
  },
   
};


function openProfile(name) {
  const player = players[name];
  if (!player) return;

  document.getElementById("popup").style.display = "flex";

  /* NAME */
  document.getElementById("popup-name").innerText = player.name;

  /* SKIN */
  document.getElementById("popup-skin").src =
    `https://render.crafty.gg/3d/bust/${player.name}`;

  /* INFO */
  document.getElementById("popup-rank").innerText = player.rank;
  document.getElementById("popup-title").innerText = player.title;
  document.getElementById("popup-points").innerText = player.points;

  /* TOP 3 FARBEN */
  const rankEl = document.getElementById("popup-rank");

  rankEl.classList.remove("gold", "silver", "bronze");

  if (player.rank.trim() === "1.") {
    rankEl.classList.add("gold");
  }
  else if (player.rank.trim() === "2.") {
    rankEl.classList.add("silver");
  }
  else if (player.rank.trim() === "3.") {
    rankEl.classList.add("bronze");
  }

  /* TIERS */
  const container = document.getElementById("popup-tiers");
  container.innerHTML = "";

  player.tiers.forEach(t => {

    const el = document.createElement("div");
    el.className = "kit-item";

    const iconSrc = t.icon.startsWith("http")
      ? t.icon
      : `https://subtiers.net/assets/${t.icon}.svg`;

    el.innerHTML = `
      <div class="icon ${t.tier.toLowerCase()}">
        <img src="${iconSrc}">
      </div>

      <span class="label ${t.tier.toLowerCase()}">
        ${t.tier}
      </span>
    `;

    container.appendChild(el);
  });
}

function closeProfile() {
  document.getElementById("popup").style.display = "none";
}


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".player, .overall-player").forEach(el => {
    el.addEventListener("click", () => {
      const name = el.innerText.split("\n")[0].trim();
      openProfile(name);
    });
  });
});
document.querySelectorAll('.kit-item').forEach(el => {
  const text = el.getAttribute('data-tooltip');
  if (text && text.includes('|')) {
    el.setAttribute('data-tooltip', text.replace('|', '\n'));
  }
});
document.getElementById("playerSearch").addEventListener("keydown", function(e){

  if(e.key !== "Enter") return;

  const search = this.value.toLowerCase();

  const player = players.find(p =>
    p.name.toLowerCase() === search
  );

  if(player){
    openProfile(player);
    this.value = "";
  }
});
document
.getElementById("playerSearch")
.addEventListener("keydown", function(e){

  if(e.key !== "Enter") return;

  const input = this.value.toLowerCase().trim();

  const playerKey = Object.keys(players).find(key =>
    players[key].name.toLowerCase().includes(input)
  );

  if(playerKey){
    openProfile(playerKey);
  }
});

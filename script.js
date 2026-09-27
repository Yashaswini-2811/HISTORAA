const civilizationData={
India:"The Indus Valley Civilization developed around the Indus River and is known for planned cities such as Harappa and Mohenjo-daro.",
Egypt:"Ancient Egypt developed along the Nile River and is famous for pyramids, temples and hieroglyphic writing.",
Greece:"Ancient Greece influenced philosophy, science, art and the development of democracy.",
China:"Ancient Chinese civilizations made major contributions including paper, silk and early printing.",
Rome:"Ancient Rome is remembered for roads, engineering, law and architecture.",
Maya:"The Maya civilization developed in Mesoamerica and made advances in astronomy, mathematics and architecture.",
Japan:"Japan has a long history shaped by traditions including samurai culture, temples and distinctive arts."
};
const questions=[
{q:"Which river was central to Ancient Egyptian civilization?",o:["Nile","Amazon","Thames","Danube"],a:0},
{q:"Which civilization is associated with Harappa?",o:["Roman","Indus Valley","Maya","Greek"],a:1},
{q:"Which civilization is famous for the Colosseum?",o:["Roman","Maya","Egyptian","Chinese"],a:0},
{q:"Which civilization is famous for astronomy in Mesoamerica?",o:["Maya","Roman","Greek","Indus Valley"],a:0}
];
const women=[
["Rani Lakshmibai","Rani Lakshmibai of Jhansi became a major figure in the Indian Rebellion of 1857 and is remembered for her leadership and courage."],
["Marie Curie","Marie Curie was a pioneering scientist whose research on radioactivity earned her Nobel Prizes in Physics and Chemistry."],
["Ada Lovelace","Ada Lovelace is remembered for her work on Charles Babbage's Analytical Engine and is often described as an early computer programmer."]
];
const cards=[
["🏺","Indus Valley","Harappa and Mohenjo-daro"],["🐫","Ancient Egypt","Nile, pyramids and pharaohs"],
["🏛️","Ancient Greece","Philosophy, art and democracy"],["🦅","Ancient Rome","Law, roads and engineering"],
["🌎","Maya","Astronomy and mathematics"],["🐉","Ancient China","Silk, paper and inventions"]
];
let qi=0,score=0,wi=0,treasure=Math.floor(Math.random()*5)+1,done=false;

function showPage(id){document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"));document.getElementById(id).classList.add("active");scrollTo(0,0)}
function civilization(n){document.getElementById("civilizationInfo").innerHTML="<h3>"+n+"</h3><p>"+civilizationData[n]+"</p>"}
function loadQuestion(){let q=questions[qi];document.getElementById("question").textContent=q.q;document.getElementById("feedback").textContent="";let b=document.getElementById("answers");b.innerHTML="";q.o.forEach((x,i)=>{let btn=document.createElement("button");btn.textContent=x;btn.onclick=()=>checkAnswer(i);b.appendChild(btn)})}
function checkAnswer(i){let q=questions[qi];document.getElementById("feedback").textContent=i===q.a?"✅ Correct!":"❌ Not quite.";if(i===q.a){score++;document.getElementById("score").textContent=score}document.querySelectorAll("#answers button").forEach(b=>b.disabled=true)}
function nextQuestion(){qi=(qi+1)%questions.length;loadQuestion()}
function loadWoman(){document.getElementById("womanName").textContent=women[wi][0];document.getElementById("womanText").textContent=women[wi][1]}
function nextWoman(){wi=(wi+1)%women.length;loadWoman()}
function loadCards(){let b=document.getElementById("cardsBox");cards.forEach(c=>b.innerHTML+=`<article><div style="font-size:45px">${c[0]}</div><h3>${c[1]}</h3><p>${c[2]}</p></article>`)}
function findTreasure(n){if(done)return;document.getElementById("treasureMessage").textContent=n===treasure?"🎉 You found the treasure! You win!":"❌ Empty! Try another.";if(n===treasure)done=true}
function resetHunt(){treasure=Math.floor(Math.random()*5)+1;done=false;document.getElementById("treasureMessage").textContent="Choose one!"}
loadQuestion();loadWoman();loadCards();
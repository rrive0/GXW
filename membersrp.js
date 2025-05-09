// member.js
const members = [
  { name: "Jox Jutistory", fbId: "lakksjslal.ksksiksks#" },
  { name: "Percy Gxw", fbId: "perq.diamondonsnow#" },
  { name: "Wayla Gxw", fbId: "wayla.godmyhxnd#" },
  { name: "Kinz Gxw", fbId: "100080485166340#" },
  { name: "Kxii Vincere", fbId: "100085538075706#" },
  { name: "Mochiix Gxw", fbId: "Mochiixz#" },
  { name: "Jing Gxw", fbId: "jing.gxw#" },
  { name: "Josefine Gxw", fbId: "100077494847829#" },
  { name: "Mindjia Lamlukka", fbId: "61550306857972#" }
];

document.addEventListener("DOMContentLoaded", () => {
  const selectEl = document.getElementById("group");
  if (selectEl) {
    members.forEach(member => {
      const option = document.createElement("option");
      option.value = member.name;
      option.textContent = member.name;
      selectEl.appendChild(option);
    });
  }
});

// member.js
const members = [
  { name: "Jox Jutistory", fbId: "lakksjslal.ksksiksks#" },
  { name: "Percy Gxw", fbId: "perq.diamondonsnow#" },
  { name: "Wayla Gxw", fbId: "wayla.godmyhxnd#" }
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

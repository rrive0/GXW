// member.js
const members = [
  { name: "Percy Gxw", fbId: "perq.diamondonsnow#" }
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

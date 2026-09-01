// Simple click counter - handy for practising commits
let count = 0;

document.getElementById("cta-btn").addEventListener("click", () => {
  count++;
  document.getElementById("click-count").textContent = `Clicked ${count} time${count === 1 ? "" : "s"}`;
});

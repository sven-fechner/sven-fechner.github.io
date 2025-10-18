document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll(".tile");

  tiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("visible");
    }, index * 300); // 300ms Abstand zwischen den Tiles
  });

  // Optional: Container ebenfalls einblenden
  const container = document.querySelector(".tiles");
  if (container) {
    container.style.opacity = "1";
  }
});

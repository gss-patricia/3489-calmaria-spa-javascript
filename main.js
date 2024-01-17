//selecionar todos os cabecalho__lista-item
document.querySelectorAll(".cabecalho__lista-item").forEach((item) => {
  // adicionar um ouvinte mouseover
  item.addEventListener("mouseover", () => alternarSubmenu(item, true));

  // adicionar um ouvinte mouseout
  item.addEventListener("mouseout", () => alternarSubmenu(item, false));

  item.addEventListener("click", () => {
    const submenu = item.querySelector(".submenu");

    const isDisplayed = submenu.style.display === "block";

    alternarSubmenu(item, !isDisplayed);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs__item");
  const image = document.getElementById("tabsImage");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove("tabs__item--active"));

      // Add active class to clicked tab
      tab.classList.add("tabs__item--active");

      // Change the image
      const newImageSrc = tab.dataset.image;
      image.src = newImageSrc;
    });
  });
  
  const peopleQuote = document.getElementById("peopleQuote");
  const peopleTabs = document.querySelectorAll(".people__tab");
  
  peopleTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      peopleTabs.forEach(t => t.classList.remove("people__tab--active"));
      tab.classList.add("people__tab--active");
      
      peopleQuote.textContent = tab.dataset.quote;
    });
  });
  
  const searchInput = document.getElementById("productSearch");
  const grid = document.getElementById("productsGrid");
  const count = document.getElementById("productCount");
  
  if (searchInput && grid && count) {
    const cards = Array.from(grid.querySelectorAll(".product-card"));
    
    const update = () => {
      const q = searchInput.value.trim().toLowerCase();
      let visible = 0;
      
      cards.forEach(card => {
        const title = (card.dataset.title || "").toLowerCase();
        const match = title.includes(q);
        card.style.display = match ? "" : "none";
        if (match) visible += 1;
      });
      
      count.textContent = `${visible} products found`;
    };
    
    searchInput.addEventListener("input", update);
    update();
  }
  
});
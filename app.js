document.addEventListener("DOMContentLoaded", () => {
  // Generic helper for tab UIs
  function setupTabs({ tabSelector, activeClass, onSelect }) {
    const tabs = document.querySelectorAll(tabSelector);
    if (!tabs.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove(activeClass));
        tab.classList.add(activeClass);
        onSelect(tab);
      });
    });
  }

  // 1) Tabs section: swap image
  const tabsImage = document.getElementById("tabsImage");
  if (tabsImage) {
    setupTabs({
      tabSelector: ".tabs__item",
      activeClass: "tabs__item--active",
      onSelect: (tab) => {
        const src = tab.dataset.image;
        if (src) tabsImage.src = src;
      },
    });
  }

  // 2) People section: swap quote text
  const peopleQuote = document.getElementById("peopleQuote");
  if (peopleQuote) {
    setupTabs({
      tabSelector: ".people__tab",
      activeClass: "people__tab--active",
      onSelect: (tab) => {
        const quote = tab.dataset.quote;
        if (quote) peopleQuote.textContent = quote;
      },
    });
  }

  // 3) Products search: filter cards + update count
  const searchInput = document.getElementById("productSearch");
  const grid = document.getElementById("productsGrid");
  const count = document.getElementById("productCount");

  if (searchInput && grid && count) {
    const cards = Array.from(grid.querySelectorAll(".product-card"));

    function updateProducts() {
      const q = searchInput.value.trim().toLowerCase();
      let visible = 0;

      cards.forEach((card) => {
        const title = (card.dataset.title || "").toLowerCase();
        const match = title.includes(q);

        card.style.display = match ? "" : "none";
        if (match) visible += 1;
      });

      count.textContent = `${visible} products found`;
    }

    searchInput.addEventListener("input", updateProducts);
    updateProducts();
  }
});

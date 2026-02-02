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

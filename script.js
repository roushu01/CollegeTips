 document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const sections = document.querySelectorAll(".category-section");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      sections.forEach(section => {
        if (category === "all" || section.getAttribute("data-category") === category) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });

      // Optional: Highlight active button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});


window.onload = function () {
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/terrabrasilis/FAQ/main/terrabrasilis-faq-pt.json",
    dataType: "json",
    success: function (json) {

      const container = $("#faq-itens");
      Object.entries(json.faq).forEach(([key, section]) => {

        let html = `
          <div class="category">
            <button class="accordion">
              ${section.title}
              <span class="icon"></span>
            </button>
            <div class="panel">
        `;

        section.itens.forEach(item => {
          html += `
            <div class="question-item">
              <h3 class="faq-heading">${item.question}</h3>
              <p class="faq-text">${item.answer}</p>
            </div>
          `;
        });

        html += `
            </div>
          </div>
        `;

        container.append(html);
      });

      enableAccordion();
    },
    error: function (err) {
      console.error("Erro ao carregar o FAQ", err);
    }
  });
};

function enableAccordion() {
  $(".accordion").on("click", function () {

    const panel = $(this).next();

    $(this).toggleClass("active");
    panel.slideToggle(200);
  });
}
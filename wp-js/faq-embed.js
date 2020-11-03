// id of div entry point (faq-itens)
window.onload=function(){
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/terrabrasilis/FAQ/main/terrabrasilis-faq.json",
    dataType: "json",
    success: function(json) {
      json.itens.forEach(item => {
        let html='<div class="question-item">';
        html+='<h3>' +item.question + '</h3>';
        html+='<p>' +item.answer+'</p>'
        html+='</div>';
        $("#faq-itens").append(html);
      });
      //$('#loading').hide();
    }
  });
}
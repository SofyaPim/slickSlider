//$(".faq-item-quest").click(function () {
 //   $(".this").find(".faq-item-answer").toggle(300);
//})
var quest = document.querySelectorAll(".faq-item-quest");
//var answer = document.nextSibling(".faq-item-answer");

for (var i = 0; i<quest.length; i++){
quest[i].onclick = function () {
    if (this.parentNode.childNodes[3].style.display == "none") {
        this.parentNode.childNodes[3].style.display = "flex";
    } else {
        this.parentNode.childNodes[3].style.display = "none"
    }
}
}
   // if(answer.main.display =="none"){
   //     answer.main.display = "flex";
  //  }else{
  //      answer.main.display = "none";
   // }
    
//}


let form_popup = document.getElementsByClassName("form-request-popup");
let form_request = document.querySelector(".form-request-button-box");
let close_button = document.querySelector(".form-request-popup-close");
let content = document.querySelector(".form-request-popup-content");

form_request.onclick = function () {
    if (form_popup[0].className == "form-request-popup hidden") {
        form_popup[0].className = "form-request-popup see";
    } else if (form_popup[0].className == "form-request-popup see") {
        form_popup[0].className = "form-request-popup hidden";
    }
}

close_button.onclick = () =>{
    form_popup[0].className = "form-request-popup hidden";
}


//Uncaught ReferenceError: $ is not defined at main.js:44 ЧТО ЭТО ЗНАЧИТ? НЕ ЗАДАЛИ ПЕРЕМЕННУЮ "FORM"?
$("form").submit(function(e){
    e.preventDefault();

    let fioVal = $(this).find("[name='fio']").val();
    let emailVal = $(this).find("[name='email']").val();
    let phoneVal = $(this).find("[name='phone']").val();

    let errorElement = $(this).find(".error-message");

    if(fioVal == "" || emailVal == "" || phoneVal ==""){

        var errorMessage = "Вы не заполнили поля";
    
    if(fioVal == ""){
        $(this).find("[name='fio']").css("border-color", "red");
        errorMessage = errorMessage + " фамилия ";
    }else{
        $(this).find("[name='fio']").css("border-color", "green");
    }
    if(emailVal == ""){
        $(this).find("[name='email']").css("border-color", "red");
        errorMessage = errorMessage + " mail@ ";
    }else{
        $(this).find("[name='email']").css("border-color", "green");
    }
    if(phoneVal == ""){
        $(this).find("[name='phone']").css("border-color", "red");
        errorMessage = errorMessage + " tel ";
    }else{
        $(this).find("[name='phone']").css("border-color", "green");
    }
    errorElement.html(errorMessage);
    errorElement.slideDown();
}else{
    alert("Все классно, форма была отправлена");
    errorElement.slideUp();
    $(this).find("[name='fio']").css("border-color", "green");
    $(this).find("[name='email']").css("border-color", "green");
    $(this).find("[name='phone']").css("border-color", "green");
    form_popup[0].className = "form-request-popup hidden";
}

});


$("[name='fio'], [name='email'],[name='phone']").keyup(function(e){
    if(e.keyCode != 27 && e.keyCode !=9 && e.keyCode !=16 && e.keyCode !=17){
        if($(this).val().length >=2 && $(this).val().length <= 30){
            $(this).css("border-color", "green");
        }else{
            $(this).css("border-color", "red");
        }
    }
});


$(window).keydown(function (e) { 
    if(e.keyCode == 192){
        form_popup[0].className = "form-request-popup shake animated";
       // setTimeout(() => {
       //     form_popup[0].className = "form-request-popup see";
       // }, 1000);
    }

});

$(window).keydown(function (e) { 
    if(e.keyCode == 27){
        form_popup[0].className = "form-request-popup zoomOut animated slow";
       // setTimeout(() => {
       //     form_popup[0].className = "form-request-popup hidden";
       // }, 2010);
    }

});


$(window).keydown(function(e){
  if(e.keyCode == 32 || e.keyCode == 190 ){
    $("[type='submit']").click();
  }    
})
$(window).keydown(function(e){
  if(e.keyCode == 49){
    content.className = "alt_dark";
  }
})
$(window).keydown(function(e){
  if(e.keyCode == 50){
    content.className = "alt_red";
  }
})
$(window).keydown(function(e){
    if(e.keyCode == 51){
      content.className = "alt_white";
    }
  })


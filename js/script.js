"use strict";


document.querySelector(".form__btn").addEventListener("click", (e) => {
    let result_form = get_input_value();

    let dollar_exchange_rate = result_form[0],
        form_rubles          = result_form[1],
        form_dollars         = result_form[2];

    if (form_dollars * dollar_exchange_rate == form_rubles){
        alert("У вас все порядке")
    }else if(form_dollars * dollar_exchange_rate > form_rubles){
        alert(`Вам нужно перевести ${((form_dollars*dollar_exchange_rate-form_rubles)/2)*form_dollars} долларов в рубли`)
    }else if(form_dollars * dollar_exchange_rate < form_rubles){
        alert(`Вам нужно перевести ${((form_rubles-form_dollars*dollar_exchange_rate)/2)}рубли в долларов`)
    }
    e.preventDefault();
})

function get_input_value(){
    let list_value = [];
    document.querySelectorAll(".form__input").forEach((div_input) => {
        list_value.push(+div_input.value)
    })
    return list_value
}

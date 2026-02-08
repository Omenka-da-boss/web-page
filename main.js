const butUp = document.querySelector('.ups')
const container = document.querySelector('.container')

function moveup(){
    window.scrollTo({top:0,behavior:'smooth'})
}

//That your counter in the Food stuff it had negative values
let quantsInputs = document.querySelectorAll('.quant');
quantsInputs.forEach((input)=>{
    input.addEventListner('input', ()=> {
        input.value = Math.max(0, input.value);
    });
});

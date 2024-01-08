const elSelect = document.querySelector('#select');
const elResbtn = document.querySelector('#reset');
const elZikr = document.querySelector('#zikr');
const elCount = document.querySelector('#count');
const elCounterbtn = document.querySelector('#counter');

elSelect.addEventListener('change', function(){
    elZikr.textContent = elSelect.value;
    elCounterbtn.disabled = false;
    elCount.textContent = 0;

});

elCounterbtn.addEventListener('click', function(){
    elCount.textContent++
});

elResbtn.addEventListener('click', function(){
    elSelect.value = 'Zikrlar';
    elZikr.textContent = "Iltimos aytmoqchi bo'lgan zikrni tanlang :("
    elCount.textContent = 0;
    elCounterbtn.disabled = true;
})
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector("#name");
const emailinput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm. addEventListener('submit',onSubmit);

function onSubmint(e){
    e.preventDefault();

    if(nameInput.value === '' || emailinput.value ===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields'

        setTimeout(()=> msg.remove, 3000)
    } else{ 
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`{nameInput.value}: ${emailInput.value}`));
     }
     userList.appendChild(li)

    console.log(nameInput.value);

    //clear fields
    nameInput.value='';
    emailInput.value=''
}

///toggle dark background
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.item').lastElementChild,innerHTML=''
});
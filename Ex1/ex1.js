const button = document.getElementById('btn');

const doSomeThing = () =>{
    console.log("Button has bbeen clicked");
    button.innerHTML = 'Clicked'
}

button.addEventListener('click', doSomeThing);
let checkbox = document.getElementById("checkboxTheme");
checkbox.addEventListener('change', function(){
    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

calcularIdade();
function calcularIdade(){
    const dataNascimento = new Date('2000-02-20');
    let dataHoje = Date.now();
    let idadeMs = dataHoje - dataNascimento;
    let idade = parseInt(idadeMs/31536000000).toFixed(0);
    let spanIdade = document.getElementById('spanIdade');
    spanIdade.innerHTML = idade;
}
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let data = {
        email
    }
    let converteData = JSON.stringify(data);

    localStorage.setItem('lead', converteData);

    let content = document.getElementById('content');
    let carregando = `<p>Carregando...</p>`;
    let pronto = `<p>E-mail Cadastrado!</p>`
    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto
    }, 200);
})
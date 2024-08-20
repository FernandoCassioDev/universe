const sobre = document.querySelector('#about')

const formulario = document.querySelector('#formulario')

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

async function getApiGithub() {
    try{
        const dadosPerfil = await fetch(`https://api.github.com/users/fernandocassiodev`)
        const perfil = await dadosPerfil.json();

        const conteudo = 
        `
        <img src="${perfil.avatar_url}" alt="Foto do Perfil do Github ${perfil.name}" width="450px">


            <article id="sobre_texto">

                <h1>Sobre mim</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam odit voluptates incidunt inventore rem error harum
                    blanditiis accusamus vitae, minus fugit consequatur?
                    Dolorum maiores magni deleniti modi sit laudantium totam!
                </p>

                <div id="sobre_github" class="flex sobre_github">

                    <a class="botao" target="_blank" href="${perfil.html_url}">Github</a>
                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p>

                </div>

            </article>
        `;

        sobre.innerHTML = conteudo
    }catch(error){
        console.log(error)
    }
}
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const campoNome = document.querySelector("#name")
    const txtNome = document.querySelector("#txtNome")

    if(campoNome.value.length < 3){
        txtNome.innerHTML = 'O nome deve ter no minimo 3 caracteres.'
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = ''
    }

    const campoEmail = document.querySelector("#email")
    const txtEmail = document.querySelector("#txtEmail")
    
    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um E-mail válido!";
        campoEmail.focus(); 
        return ;
    }else{
        txtEmail.innerHTML = ''
    }

    const campoSubject = document.querySelector("#subject")
    const txtSubject = document.querySelector("#subject")

    if(campoSubject.value.length < 5){
        txtSubject.innerHTML = 'O assunto deve ter pelo menos 5 caracteres.';
        campoSubject.focus();
        return;
    }else{
        txtSubject.innerHTML = ''
    }

    //Se todas as validações forem concluidas com êxito, envia o formulário
    formulario.submit();
});

getApiGithub();
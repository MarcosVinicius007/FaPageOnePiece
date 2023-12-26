/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 

        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
a seleção dele

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem

        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
a seleção deles 
*/

//OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 

//passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um delesel

const botoes =document.querySelectorAll('.botao');

// passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um dele




const personagens = document.querySelectorAll(".personagem");
console.log(personagens);



botoes.forEach((botao,indice)=> {
    botao.addEventListener("click", ()=>{

//passo 3 do OBJETIVO DOIS"2" - verificar se já existe um botão selecionado, se sim, devemos remover 
//a seleção deles //OBS o passo tres (3) tem que ficar antes do selecionado pq se nao da erro!!!Por isso que colocamos o passo três (3) por cima ,pq primeiro temos q pegar o personagem selecionado ,tirar a classe dele . Pra depois na linha 39 adicionar no botao que estamos realmente trabalhando !!OBSERVÃCAO essa é a finalidade do Java Script que é modificar o HTML depois que ele foi carregado na pagina .

const botaoSelecionado = document.querySelector(".botao.selecionado");
botaoSelecionado.classList.remove("selecionado");

//passo 2 do OBJETIVO UM "1"- adicionar a classe "selecionado" no personagem que o usuário selecionou

     botao.classList.add("selecionado");

     //        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
     //a seleção dele
     const personagemSelecionado=document.querySelector(".personagem.selecionado");
     personagemSelecionado.classList.remove("selecionado");


     //OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
     // passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
     
     personagens[indice].classList.add("selecionado");
     
    });
    });
    
const meubotao = document.getElementById("meubotao")

meubotao.addEventListener("click", function(){
    const confirmacao = confirm("Deseja adicionar esse item no seu carrinho ?")

    if(confirmacao){
        alert("Item adicionado no carrinho!")
    } else {
        alert("Item não foi adicionado no carrinho!")
    }
})


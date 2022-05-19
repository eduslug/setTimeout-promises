'use strict'

let nomes = ['eduardo', 'irineu'];

const lista = (novo) =>{

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            nomes.push(novo)

            let erro = false 

            if(!erro){
                resolve()
            }else{
                reject({msg:'erro!'})
            }
        },2000);
    })
 }

const novoUsuario = () =>{
    console.log(nomes )
}

lista('santos').
                then(novoUsuario)
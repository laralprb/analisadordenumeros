
    let add = document.getElementById('addtext');
    let selAnalisar = document.getElementById('cxanalisar');
    let res = document.getElementById('res')

function btnadicionar(){

    let a = Number(add.value);

    if(a.length == 0 || a < 1 || a > 100){
        alert('Digite um número válido!')
    } else { //adicionar os números ao select
        let item = document.createElement('option')
        item.text = `${a}`;
        selAnalisar.add(item)
            
    }
}

let newSelect = []; // nova variável que será o array dos números do select

function btnanalisar(){

        //transforma em array
     	for (i = 0; i < selAnalisar.length ; i++) { 
        newSelect.push(selAnalisar.options[i].text);
        }

    newSelect.shift(); //tira o primeiro item "Valores adicionados"
    
    let max = Math.max.apply(Math, newSelect);// define maior valor do array
    let min = Math.min.apply(Math, newSelect); // define menor valor do array
    let soma = 0;
   
        //calcula a soma
        for(i = 0; i < newSelect.length ; i++){
            soma += Number(newSelect[i])
            //return soma
        }
       
       //calcula a média
       let media = (soma/newSelect.length).toFixed(2)
        
    res.innerHTML = `<ul>
    <li>Ao todo, temos ${newSelect.length} números cadastrados!</li>
    <li>O MENOR número: ${min}.</li>
    <li>O MAIOR número: ${max}.</li>
    <li> A SOMA é igual a ${soma}.</li>
    <li> A MÉDIA é ${media}.</li>
    </ul>`
}
function limpar(){
   document.location.reload(true);
}






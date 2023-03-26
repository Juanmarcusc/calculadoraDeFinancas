let família = { 
    receitas : [3100, 1290, 705, 1015],
    despesas :  [944, 1510, 950, 155, 330, 790, 147, 60, 37, 800, 106, 80, 34]
}

function sum (array) {
    let total = 0;
    for (let value of array) {
        total += value
    }
    return total
}

function resultados () {
    const resultadoReceitas = sum (família.receitas)
    const resultadoDespesas = sum (família.despesas)
    
    const total = resultadoReceitas - resultadoDespesas
    const estaBem = total >= 0; 

    let texto = "está devendo"

    if (estaBem) {
        texto = "não está devendo"
    }
       console.log (`Seu saldo é ${texto}: ${total}`)
}

resultados ()

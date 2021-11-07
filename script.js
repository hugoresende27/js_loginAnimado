const letras = document.querySelectorAll('.formControl label')  //INSTANCIAR letras COMO AS LABELS DO formControl

letras.forEach(label => {
        label.innerHTML = label.innerText
            .split('')//divide a label num array letra a letra
            .map(( let, ind) => `<span style="transition-delay:${ind*50}ms">${let}</span>`)//criar um array de <spans> com uma letra cada span
            .join('')//volta a tornar o array numa string
    })


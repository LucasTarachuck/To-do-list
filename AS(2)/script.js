function adicionar(){
    const tarefa = document.getElementById('tarefa').value

    if(tarefa == ''){
        alert('Não foi adicinada uma tarefa!')
    }
    else{
        const li = document.createElement('li')
        li.innerText = tarefa

        const btnConclu = document.createElement('button')
        const conclu = document.getElementById('concluidas')
        btnConclu.innerText = 'Concluido'
        btnConclu.classList.add('conc')
        btnConclu.addEventListener('click', function(){
            const span = document.createElement('span')
            const data = new Date()
            span.innerText = `concluído dia: ${data.getDay()}/${data.getMonth()+1} as: ${data.getHours()}: ${data.getMinutes()}`
            li.insertBefore(span, btnExcluir)
            conclu.appendChild(li)
            btnConclu.remove()
        })
            
        
        const btnExcluir = document.createElement('button')
        btnExcluir.innerText = 'Excluir'
        btnExcluir.classList.add('exc')
        btnExcluir.addEventListener('click', function(){
            li.remove()
        } )


        li.appendChild(btnExcluir)
        li.appendChild(btnConclu)

        const pendentes = document.getElementById('pendentes')
        pendentes.appendChild(li)

        const select = document. querySelector ( 'select');
        if (seletor.value == 'alta'){
            li.style.backgroundColor = '#FF0000';
        }
        else if (select.value == 'media') {
            li.style.backgroundColor = '#FF4500';
        }
        else if (select.value == 'baixa') {
            li.style.backgroundColor = '#32CD32';
        }

    }   
        
}
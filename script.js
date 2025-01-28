function verificarNome() {
    const nomeInput = document.getElementById('nomeAmor');
    const mensagemErro = document.querySelector('.mensagem-erro');
    const nome = nomeInput.value.trim().toLowerCase();

    // Resetar mensagem de erro
    mensagemErro.style.display = 'none';
    
    if(nome === '') {
        mostrarErro('Digite o nome da pessoa mais especial ❤');
        return;
    }
    
    if(nome === 'larissa') {
        // Transição suave
        document.getElementById('formScreen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('formScreen').classList.add('hidden');
            document.getElementById('homenagemScreen').classList.remove('hidden');
            // Animação de entrada
            document.getElementById('homenagemScreen').style.animation = 'fadeIn 0.5s';
        }, 300);
    } else {
        mostrarErro('Esse não é o nome da minha paixão! Tente novamente 😘');
        nomeInput.value = '';
        nomeInput.focus();
    }
}

function mostrarErro(mensagem) {
    const erro = document.querySelector('.mensagem-erro');
    erro.textContent = mensagem;
    erro.style.display = 'block';
    erro.style.animation = 'shake 0.4s';
    
    // Resetar animação após execução
    setTimeout(() => erro.style.animation = '', 400);
}

// Adicionar animação de shake
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
}`;
document.head.appendChild(style);

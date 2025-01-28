function verificarResposta() {
    const input = document.getElementById('nomeInput');
    const mensagemErro = document.querySelector('.mensagem-erro');
    const nome = input.value.trim().toLowerCase();

    // Resetar mensagem de erro
    mensagemErro.style.display = 'none';

    if(nome === '') {
        mostrarErro('Digite o nome da pessoa especial!');
        return;
    }

    if(nome === 'larissa') {
        // Animação de transição
        document.getElementById('formScreen').style.opacity = '0';
        document.getElementById('formScreen').style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            document.getElementById('formScreen').classList.add('hidden');
            document.getElementById('homenagemScreen').classList.remove('hidden');
            // Animação de entrada
            document.getElementById('homenagemScreen').style.animation = 'aparecer 0.5s';
        }, 300);
    } else {
        mostrarErro('Porquê digitar outro nome se é so você que eu tenho? ❤');
        input.value = '';
        input.focus();
    }
}

function mostrarErro(texto) {
    const erro = document.querySelector('.mensagem-erro');
    erro.textContent = texto;
    erro.style.display = 'block';
    erro.style.animation = 'shake 0.4s';
    
    setTimeout(() => {
        erro.style.animation = '';
    }, 400);
}

// Adicionar animação personalizada
const style = document.createElement('style');
style.textContent = `
@keyframes aparecer {
    from { 
        opacity: 0;
        transform: scale(0.9);
    }
    to { 
        opacity: 1;
        transform: scale(1);
    }
}`;
document.head.appendChild(style);

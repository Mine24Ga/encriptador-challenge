const encriptarBtn = document.getElementById('encriptar');
const desencriptarBtn = document.getElementById('desencriptar');
const copiarBtn = document.getElementById('copiar');
const limpiarBtn = document.getElementById('limpiar');
const texto = document.getElementById('texto');
const resultContainer = document.querySelector('.result-container');

encriptarBtn.addEventListener('click', () => {
    let textoEncriptado = '';
    for (let i = 0; i < texto.value.length; i++) {
        switch (texto.value[i]) {
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += texto.value[i];
                break;
        }
    }
    resultContainer.innerHTML = textoEncriptado;
});

desencriptarBtn.addEventListener('click', () => {
    let textoDesencriptado = '';
    let palabra = '';
    for (let i = 0; i < texto.value.length; i++) {
        palabra += texto.value[i];
        switch (palabra) {
            case 'enter':
                textoDesencriptado += 'e';
                palabra = '';
                break;
            case 'imes':
                textoDesencriptado += 'i';
                palabra = '';
                break;
            case 'ai':
                textoDesencriptado += 'a';
                palabra = '';
                break;
            case 'ober':
                textoDesencriptado += 'o';
                palabra = '';
                break;
            case 'ufat':
                textoDesencriptado += 'u';
                palabra = '';
                break;
            default:
                if (texto.value[i + 1] === ' ' || i === texto.value.length - 1) {
                    textoDesencriptado += palabra;
                    palabra = '';
                }
                break;
        }
    }
    resultContainer.innerHTML = textoDesencriptado;
});

copiarBtn.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    textArea.value = resultContainer.innerHTML;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
});

limpiarBtn.addEventListener('click', () => {
    texto.value = '';
    resultContainer.innerHTML = '<img src="./img/Muneco.png" alt=""><div class="mensaje"><h2>Ningún mensaje fue encontrado</h2><p>Ingresa el texto que desees encriptar o desencriptar.</p></div>';
});
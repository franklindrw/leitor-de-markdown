import chalk from 'chalk';
import pegaArquivo from './index.js';
import validaUrl from './response-http.js';

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    
    if(caminho[3] === 'validar'){
        console.log(chalk.yellow('Links validados'),await validaUrl(resultado));
    } else {
        console.log(chalk.yellow('lista de links:'), resultado);
    }
    
}

processaTexto(caminho);
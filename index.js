import chalk from 'chalk';
import fs from 'fs';
const log = console.log;

//usando async e await
async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf8';
    try{
        const text = await fs.promises.readFile(caminhoDoArquivo, encoding);
        log(chalk.green(text));
    } catch(err){
        trataErro(err);
    } finally{
        log(chalk.yellow('fim do comando'));
    }

}

//usando formato promises
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf8';
//     //o fs por padrao existe o promises para fazer uma funcao async
//     fs.promises.readFile(caminhoDoArquivo, encoding) //faz a leitura do arquivo
//         .then((resp) => log(chalk.green(resp)))
//         .catch((err) => trataErro(err))
// }

//usando formato funcao simples (sicrono)
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (err, data) => {
//         if(err){
//             trataErro(chalk.red(err.code, 'erro ao ler o arquivo/caminho'));
//         } else {
//             log(chalk.green(data));
//         }
//     })
// };

function trataErro(erro){
    throw new Error(chalk.red(erro.code, "não foi possível ler o arquivo"));
}

pegaArquivo(`./Documents/text1.md`);
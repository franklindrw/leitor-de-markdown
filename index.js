import chalk from 'chalk';
import fs from 'fs';
const log = console.log;

function extraiLinks(text){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(text)) != null){
        arrayResultados.push({[temp[1]]: temp[2]});
    }
    return arrayResultados.length === 0 ? 'não há links no arquivo' : arrayResultados;
}

//usando async e await
export default async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf8';
    try{
        const text = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(text);
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
    throw new Error(chalk.red(erro.code, "não foi possível ler o arquivo:" + erro.message));
}
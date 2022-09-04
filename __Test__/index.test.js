import pegaArquivo from '../index.js';

const arrayResult = [
    {
       'Implementation notes': 'https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes'
    }
];

describe('pegaArquivo::', () => {
    it('Deve ser uma função', () => {
        expect(typeof(pegaArquivo))
        .toBe('function');
    });

    it('deve retornar array com resultados', async () => {
        const result = await pegaArquivo('/home/franklindrw/Documentos/Projetos/leitor-de-markdown/Documents/text1.md');
        expect(result).toEqual(arrayResult);
    });

    it('deve retornar mensagem "não há links no arquivo"', async () =>{
        const result = await pegaArquivo('/home/franklindrw/Documentos/Projetos/leitor-de-markdown/Documents/text3.md');
        expect(result).toBe('não há links no arquivo');
    });
})
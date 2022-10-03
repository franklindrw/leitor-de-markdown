<br />
<h1 align="center"> Leitor de Markdown </h1>
<h4 align="center">Programa em Node.js Vanilla para leitura e verificação de links de arquivos md, projeto com base nas aulas de Node da Alura. Fr4nxxB0t-01 v1.0.0</h4>
<br />

<div id="statusProject" align="center">
<img src="https://img.shields.io/github/license/franklindrw/leitor-de-markdown.svg?style=for-the-badge" />
<img src="https://img.shields.io/github/stars/franklindrw/leitor-de-markdown.svg?style=for-the-badge" />
<img src="https://img.shields.io/github/forks/franklindrw/leitor-de-markdown.svg?style=for-the-badge" />
<img src="https://img.shields.io/github/issues/franklindrw/leitor-de-markdown.svg?style=for-the-badge" />
<img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=green&style=for-the-badge"/>
</div>

<br /><br />

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | Leitor de Markdown
| :label: Tecnologias | Javascript, Node.js, Jest
| :rocket: URL         | 
| :fire: Desafio     | Criar um leitor de markdown para testar

<br /><br />

## 🧭 Índice
* [Sobre o Projeto](#-sobre-o-projeto)
  * [Objetivo](#objetivo)
  * [Construção](#construção)
  * [Node-fetch](#node-fetch)
  * [Testes Unitários Jest.js](#testes-unitários-jestjs)
* [Construído com](#-construindo-com)
* [Instalação](#-instalação)
* [Como usar](#%EF%B8%8F-como-usar)
* [Autor](#-autor)
* [Licença](#-licença)

<br /><br />

## 🔎 Sobre o Projeto

### Objetivo
O Robo tem como objetivo abrir postagens de blogs ou artigos escritos em markdown para identificar e testar todos os links referenciados no texto para que não seja necessário a verificação manual abrindo link por link. Com isso é possível facilitar o dia-a-dia da redação do blog ou site para garantir que todos os conteúdos estão funcionando, deixando a manutenção automatizada.

__Ao executar a aplicação ela mostra a lista de links encontradas no texto, e abaixo qual o status, sendo que status 200 está online, e status 400 ou maior está offline com o código do erro retornado.__
![teste-links](https://user-images.githubusercontent.com/81038899/188332965-d4d7cd68-cf53-4fd5-b311-af7659382746.png)

### Construção
Para essa aplicação foi usado na sua estrutura Vanilla.js (Javascript Puro), com ele foi possível fazer a leitura do arquivo e identificar o padrão dos links existentes com regex em todo o texto que está sendo lido pelo robo.

_Aqui na função "pega arquivo" foi usado async e await para que o JS aguarde que o ReadFile (leitor de arquivos) do javascript possa ler e armazenar todo o texto em uma variável, para que assim possa seguir para as outras funções. E para validação de erros foi colocado um try catch, assim caso algum erro aconteça durante a operação possa ser identificado e tratado durante a construção da aplicação._
![captura-texto](https://user-images.githubusercontent.com/81038899/188338250-d9705683-0dd7-4897-91d9-c6506131cf59.png)

_Após a captura do texto é passado para função de extração de links, que por sua vez usa regex para identificar os padrões dos links salvos no texto e monta a lista de links_
![captura-dos-links](https://user-images.githubusercontent.com/81038899/188332967-d21b23da-ebfe-463a-9329-8e00e75fd2a7.png)

### Node-fetch
Após o robo montar a lista com todos os links encontrados no texto, ele faz o teste usando Node-fetch para capturar o retorno do servidor de cada link, assim identificando quais estão com algum problema e mostrar para o usuário do programa quais links precisam de reparos.
![checa-status](https://user-images.githubusercontent.com/81038899/188332970-faac088c-475a-47af-9256-6f34eb6ccdc0.png)

Então após validar todos os links, o robo monta novamente o array, inserindo conforme o index definido na função map o status code de cada objeto.       
![monta-resposta](https://user-images.githubusercontent.com/81038899/188339152-e12dbb03-7d26-499f-8edd-115d397987cb.png)


### Testes unitários Jest.js
Por fim, toda a aplicação foi validada usando um framework de testes Jest.js, com ele conseguimos fazer um fluxo de testes para garantirmos que toda a aplicação está em funcionamento, então conforme foi construido o Robo, foi montado um fluxo de testes para que seja validado a qualidade do produto conforme ela se desenvolve.
![jest-tester](https://user-images.githubusercontent.com/81038899/188332953-7ce0d5dc-28a6-4774-bf5c-5171306918f8.png)

Além de conseguirmos acompanhar todo o fluxo da aplicação é possível também vermos a tempo usado para executar cada fluxo programado.
![jest-fluxos](https://user-images.githubusercontent.com/81038899/188332962-e4e97579-6274-4474-a882-1c421c74e48e.png)
<br /><br />


## 🔨 Construindo com
<div id="statusProject" align="left">
 <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
 <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
 <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
</div>

<br /><br />

## 📥 Instalação

 1. Verifique se você tem o node instalado em sua maquina executando o comando a baixo no prompt da sua máquina:
 ```
 node -v
 ```
 caso não tenha sido identificado o comando é necessário instalar node para executar o programa, siga os passos [clicando aqui!](https://nodejs.org/pt-br/)

 2. Clone o repositório

 3. Navegue até a pasta clonada

 4. Abra o CMD na pasta ou abra uma janela cmd e cole o caminho após digitar cd <caminho da pasta>

<br /><br />

## ▶️ Como usar

 1. Copie o endereço do arquivo que você quer que o Robo faça leitura e teste as URLs encontradas
 
 2. Depois com o CMD aberto na pasta do projeto execute o comando com o caminho do arquivo a frente:
 ```
 node cli.js <caminho do arquivo>
 ```
 
 3. Com isso é possível ver a lista impressa no cmd, com todos os links encontrados e seus respectivos status code.
 
 4. Caso queira ver o fluxo de teste do jest, basta executar no cmd:
 ```
 npm run test
 ```


### 🖊 Autor

<a href="https://github.com/franklindrw">
<img style="border-radius: 50%; width: 100px" src="https://github.com/franklindrw.png" alt="Foto do Autor"/>
<br />
<sub><b>Franklin Campos</b></sub>
</a>
</br>
<p>Feito por <strong>Franklin Campos</strong> 👋🏻 </br>
Entre em contato!</p>

<div>
<a href="https://www.linkedin.com/in/franklindrw" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href="mailto:franklindrw@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.instagram.com/franklindrw" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
</div>

<br /><br />

### 📋 Licença

<p> Copyright 2022 © Franklin Campos </br>
This project is MIT licensed.</p>

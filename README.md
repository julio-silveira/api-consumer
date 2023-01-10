# Desafio para o processo seletivo SHARENERGY 2023/01

# 🎯Objetivo

Construir uma aplicação web (frontend e backend) capaz de realizar a comunicação com APIs distintas, além de um CRUD.

## Vídeo demonstrativo da aplicação
  https://youtu.be/PPjN_k3_8Xw
  
  
# 🖥️Tecnologias utilizadas
  
  ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
  ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

  
  
# Como Utilizar

1. Clone o repositório repositório para sua máquina utilizando o comando: 
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`git clone git@github.com:julio-silveira/desafio-sharenergy-2023-01.git`

2. Após finalizar o download, abra o diretório raiz da aplicação e execute o comando `docker compose up` e aguarde a montagem dos 3 containers necessários para utilizar a aplicação; (Observação, o arquivo .env está no repositório para facilitar o processo de abrir a aplicação, essa prática não deve ser repetida em projetos que serão colocados em produção)

3. Com todos containers em pê, abra seu navegador na página `http://localhost:5173/` e utilizar a aplicação!

## Dados para acessar a aplicação

  A aplicação não possui uma função de cadastro acessível a partir do frontend( conforme as regras de negócio), então, a única forma de acessar-la é utilizando as seguintes credenciais:
  
  | username | password |
  |:--------:|:--------:|
  |`desafiosharenergy`  |`sh@r3n3rgy`    |

## Aplicação

- A página inicial da aplicação deve ser uma `Login Page`;
- O usuário deve ser capaz de se autenticar utilizando o username `desafiosharenergy` e password `sh@r3n3rgy`, também, deve existir a possibilidade do usuário utilizar o `remember me` para realizar logins automáticos, sem a necessidade de digitar username e password após o primeiro acesso;
- Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api [Random User Generator](https://randomuser.me/), a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, deve haver uma search para buscar usuários por nome, email ou username;
- Em uma segunda página, o usuário deve ser capaz de selecionar um status code http qualquer, e, após a seleção, deve ser retornada uma imagem da api [HTTP Cat](https://http.cat/) relacionada ao status escolhido, caso não exista tal imagem, deve ser retornada uma imagem de not found à critério de escolha do participante do desafio;
- Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api [Random Dog](https://random.dog/);
- Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf.



# Criador de Questões com Inteligência Artificial

Esse App usa inteligência artificial para auxiliar professores na elaboração de questões de qualidade para avaliar estudantes. Os objetivos cenrtais desse recurso são:
* Ser uma ferramenta flexível que possibilite aos professores produzir diferetes tipos de questões, cobrindo habilidades variadas relacionadas a um conteúdo;
* Gerar conteúdo de qualidade, que realmente atenda ao propósito de avaliar a aprendizagem dos estudantes;
* Acelerar o processo de criação manual de questões, que consome várias horas de trabalho de professores.

## Referências do projeto
[Writing Good Multiple Choice Test Questions](https://cft.vanderbilt.edu/guides-sub-pages/writing-good-multiple-choice-test-questions/)

(![Screenshot do app](https://raw.githubusercontent.com/william-gtatim/criador-questoes/main/src/assets/screenshot.png))
## Como Rodar o Projeto

Siga estes passos para configurar e executar o projeto localmente:

1. **Baixe o Projeto**:
   Primeiramente, faça o download do projeto para o seu computador.

2. **Instale as Dependências**:
   Abra o terminal na pasta do projeto e instale as dependências necessárias usando o seguinte comando:
   ```sh
   npm install
    ```
3. **Configure as Variáveis de Ambiente:**
    Crie um arquivo chamado .env.local na raiz do projeto. Dentro deste arquivo, adicione sua chave de API do Gemini da seguinte forma:
    ```sh
    VITE_GEMINI_API=sua_chave_api_aqui
    ```
    Substitua sua_chave_api_aqui pela sua chave API real. Embora seja uma string, não inclua aspas nesse contexto
4. **Inicie o Projeto:**
    Para iniciar o servidor de desenvolvimento e testar o projeto, execute:
    ```sh
    npm install
    ```

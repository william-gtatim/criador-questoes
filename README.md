# Criador de Questões com Inteligência Artificial
Esse App usa inteligência artificial para auxiliar professores na elaboração de questões de qualidade para avaliar estudantes.
## Recursos disponíveis
* Os prompts de geração de questões por trás dessa ferramenta foram desenvolvidos para produzir questões que atendem a uma série de padrões de qualidade. Em espcial, visam evitar um problema recorrente em questões produzidas por Inteligência Artificial: a alternativa correta normalmente é a mais longa. 
* Permite que o usuário tenha controle sobre o tipo de habilidade exigida do estudante em relação ao conteúdo. Essas habilidade estão associadas aos níveis de complexidade da taxonomia de Bloom.

![Screenshot do app](https://raw.githubusercontent.com/william-gtatim/criador-questoes/main/src/assets/screenshot.png)

## Referências do projeto
[Writing Good Multiple Choice Test Questions](https://cft.vanderbilt.edu/guides-sub-pages/writing-good-multiple-choice-test-questions/)


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
## Bibliotecas utilizadas
Para a criação da interface desse projeto foram usados as seguintes bibliotecas. Nos links você encontra a documentação de cada uma delas.
*[Primevue](https://primevue.org/)
*[Primeflex](https://primeflex.org/)
*[Primeicons](https://primevue.org/icons/)

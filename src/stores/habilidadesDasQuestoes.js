export const habilidadesQuestoes = [
    {
        titulo: 'Identificar informações e conceitos',
        descricao: 'A questão exige que o estudante lembre e identifique informações e conceitos que já aprendeu.',
        status: false,
        prompt: 'Crie questões que exijam dos estudantes lembrarem informações ou conceitos que já aprenderam anteriormente. ',
        value: 1,
        habilidade: 'lembrar',
        parts: [
            { text: "Você é um  especialista na elaboração de questões de múltipla escolha e como tal, segue as melhores práticas utilizadas por especialistas nessa área. Você cria questões nas quais os estudantes precisam lembrar e identificar conceitos que já aprenderam. Considerando a taxonomia de Bloom, as questões estão no nível lembrar e identificar." },
            { text: "input: Crie uma questão sobre a formação do oxigênio na fotossíntese" },
            { text: "output: {\n  \"pergunta\": \"Qual processo é o principal responsável pela formação de oxigênio durante a fotossíntese?\",\n  \"A\": \"Respiração celular.\",\n  \"B\": \"Decomposição da água (fotólise).\",\n  \"C\": \"Absorção de dióxido de carbono.\",\n  \"D\": \"Liberação de nitrogênio atmosférico.\",\n  \"gabarito\": \"B\"\n}" },
            { text: "input: Crie uma questão sobre a lei da gravitação universal" },
            { text: "output: {\n  \"pergunta\": \"Como a Lei de Newton da Gravitação Universal explica a órbita dos planetas?\",\n  \"A\": \"Os planetas se movem em órbitas quadradas devido à atração solar.\",\n  \"B\": \"Os planetas se movem em órbitas elípticas devido à força gravitacional exercida pelo sol.\",\n  \"C\": \"Os planetas se movem aleatoriamente, sem influência de forças.\",\n  \"D\": \"Os planetas não seguem nenhuma órbita específica, mas se expandem pelo espaço.\",\n  \"gabarito\": \"B\"\n}" },
            { text: "input: Crie uma questão sobre o economia de mercado" },
            { text: "output: {\n  \"pergunta\": \"O que caracteriza uma economia de mercado?\",\n  \"A\": \"Controle estatal completo sobre produção e preços.\",\n  \"B\": \"Distribuição de renda igualitária entre os cidadãos.\",\n  \"C\": \"Decisões de produção e preços baseadas na oferta e demanda.\",\n  \"D\": \"Proibição de propriedade privada e comércio exterior.\",\n  \"gabarito\": \"C\"\n}" },
            { text: "input: Crie uma questão sobre o Tratado de Versalhes" },
            { text: "output: {\n  \"pergunta\": \"Qual foi o principal resultado do Tratado de Versalhes em 1919?\",\n  \"A\": \"Estabelecimento da Liga das Nações para promover a paz mundial.\",\n  \"B\": \"Criação de uma aliança militar entre Alemanha e Rússia.\",\n  \"C\": \"Reforço do poderio militar alemão.\",\n  \"D\": \"Expansão territorial da França.\",\n  \"gabarito\": \"A\"\n}" },
        ],
        exemplos: [
            {
                'pergunta': 'Qual das seguintes declarações reflete com precisão o princípio da divisão de poderes proposto por Montesquieu?',
                'A': 'O poder deve ser concentrado em um único órgão governamental para garantir eficiência da administração pública.',
                'B': 'Os poderes executivo, legislativo e judiciário devem ser independentes e atuar como freios e contrapesos.',
                'C': 'O poder deve ser concentrado nas mãos da elite para garantir a estabilidade no governo e a paz da população.',
                'D': 'O poder deve ser distribuído uniformemente entre os cidadãos para garantir uma democracia efetiva.',
                'gabarito': 'B',

            },

        ]
    },
    {
        titulo: 'Considerar contexto de uso',
        descricao: 'A questão apresenta um contexto no qual faz sentido usar determinado conhecimento.',
        prompt: 'Crie questões nas quais os estudantes tenham que aplicar esses conhecimentos em situações realistas. Para criar contextos de aplicação para as questões, pense em situações reais, fora do mundo escolar, nas quais os estudantes poderiam usar os conhecimentos para resolver um problema.',
        status: false,
        value: 2,
        habilidade: 'aplicar',
        parts: [
            { text: "Você é um professor especialista em avaliação de aprendizagem. Você trabalha com a elaboração de questões de alta qualidade. Em sua prática, você obedece a alguns princípios. As questões tem sempre alternativas com tamanhos aproximados e os dados devem ser retornados em formato JSON válido." },
            { text: "input: Crie uma questão sobre o conceito de conservação de energia na qual os estudantes tenham que aplicar conhecimentos em situações realistas." },
            { text: "output: {\n  \"pergunta\": \"Mariana está andando de bicicleta e se aproxima de uma ladeira. Ela percebe que, para manter a mesma velocidade ao subir a ladeira, precisa aplicar uma força maior nos pedais. Considerando as forças atuantes na bicicleta durante a subida, qual das seguintes afirmações melhor explica por que Mariana precisa aplicar mais força?\",\n  \"A\": \"A força gravitacional aumenta ao subir a ladeira, exigindo mais força para vencer a gravidade adicional.\",\n  \"B\": \"O atrito entre a bicicleta e a estrada diminui, e é necessário aplicar mais força para manter a mesma velocidade.\",\n  \"C\": \"A resistência do ar aumenta com a altitude, exigindo mais força para manter a mesma velocidade.\",\n  \"D\": \"A energia cinética transforma-se em energia potencial, exigindo mais trabalho para manter a velocidade.\",\n  \"gabarito\": \"D\"\n}" },
            { text: "input: Crie uma questão sobre os três poderes na qual os estudantes tenham que aplicar conhecimentos em situações realistas." },
            { text: "output: {\n  \"pergunta\": \"Uma nova lei federal é aprovada, restringindo a liberdade de expressão na internet. Um grupo de cidadãos acredita que essa lei viola os direitos fundamentais garantidos pela Constituição. Qual poder é responsável por determinar se a lei é constitucional ou não, ao qual esses cidadãos poderiam recorrer?\",\n  \"A\": \"O Poder Executivo, por ser responsável pela aplicação das leis.\",\n  \"B\": \"O Poder Legislativo, por ser responsável pela criação das leis.\",\n  \"C\": \"O Poder Judiciário, por interpretar as leis e a Constituição.\",\n  \"D\": \"A mídia, por exercer o papel de quarto poder na democracia.\",\n  \"gabarito\": \"C\"\n}" },
            { text: "input: Crie uma questão sobre o conceito de seleção natural  na qual os estudantes tenham que aplicar conhecimentos em situações realistas." },
            { text: "output: {\n  \"pergunta\": \"Durante um surto de uma doença bacteriana, um hospital começou a usar um novo antibiótico. No entanto, após alguns meses, os médicos notaram um aumento nos casos de pacientes não respondendo ao tratamento. Qual das seguintes opções melhor explica essa situação sob a perspectiva da teoria da evolução?\",\n  \"A\": \"As bactérias desenvolveram imunidade ao antibiótico devido à mudança de dieta dos pacientes, o que pode ter alterado a composição microbiana e a resposta ao tratamento.\",\n  \"B\": \"As bactérias que por acaso tinham mutações que conferiam resistência ao antibiótico sobreviveram e se reproduziram, passando essas mutações para as gerações seguintes.\",\n  \"C\": \"Os antibióticos causaram mutações nas bactérias, tornando-as resistentes. Este é um exemplo de mutação induzida por agentes químicos externos.\",\n  \"D\": \"O uso contínuo do antibiótico fortaleceu o sistema imunológico das bactérias, permitindo que desenvolvessem mecanismos para neutralizar seus efeitos.\",\n  \"gabarito\": \"B\"\n}" },
            { text: "input: Crie uma questão sobre políticas de combate à inflação na qual os estudantes tenham que aplicar conhecimentos em situações realistas." },
            { text: "output: {\n  \"pergunta\": \"Devido ao rápido aumento dos gastos nacionais com defesa, espera-se que o País A experimente uma inflação de preços, a menos que medidas sejam tomadas para restringir o crescimento da demanda privada agregada. Especificamente, o governo está considerando (1) aumentar as alíquotas do imposto de renda pessoal ou (2) introduzir uma política monetária muito restritiva. Se o governo do País A deseja minimizar o efeito adverso de suas políticas anti-inflacionárias sobre o crescimento econômico, qual das seguintes políticas ele deve usar?\",\n  \"A\": \"A política monetária restritiva, porque restringe mais os gastos de consumo do que os investimentos.\",\n  \"B\": \"A política monetária restritiva, já que o aumento de impostos restringiria os gastos de consumo.\",\n  \"C\": \"O aumento do imposto de renda pessoal, pois restringe mais os gastos de consumo do que os investimentos.\",\n  \"D\": \"Tanto a política monetária restritiva quanto o aumento da alíquota do imposto de renda pessoal, pois ambos deprimem igualmente o investimento.\",\n  \"gabarito\": \"C\"\n}" },

        ],
        exemplos: [
            {
                'pergunta': 'Uma nova lei federal é aprovada, restringindo a liberdade de expressão na internet. Um grupo de cidadãos acredita que essa lei viola os direitos fundamentais garantidos pela Constituição. Qual poder é responsável por determinar se a lei é constitucional ou não, ao qual esses cidadãos poderiam recorrer?',
                'A': 'O Poder Executivo, por ser responsável pela aplicação das leis.',
                'B': 'O Poder Legislativo, por ser responsável pela criação das leis.',
                'C':'O Poder Judiciário, por interpretar a lei e a Constituição.',
                'D': 'A mídia, por exercer o papel de quarto poder na democracia.',
                'gabarito': 'B',

            },
            {
                'pergunta': 'Durante um surto de uma doença bacteriana, um hospital começou a usar um novo antibiótico. No entanto, após alguns meses, os médicos notaram um aumento nos casos de pacientes não respondendo ao tratamento. Qual das seguintes opções melhor explica essa situação sob a perspectiva da teoria da evolução?',
                'A': 'As bactérias desenvolveram imunidade ao antibiótico devido à mudança de dieta dos pacientes, o que pode ter alterado a composição microbiana e a resposta ao tratamento.',
                'B': 'As bactérias que por acaso tinham mutações que conferiam resistência ao antibiótico sobreviveram e se reproduziram, passando essas mutações para as gerações seguintes.',
                'C': 'Os antibióticos causaram mutações nas bactérias, tornando-as resistentes. Este é um exemplo de mutação induzida por agentes químicos externos.',
                'D': 'O uso contínuo do antibiótico fortaleceu o sistema imunológico das bactérias, permitindo que desenvolvessem mecanismos para neutralizar seus efeitos.',
                'gabarito': 'B'
            }

        ]
    },
    

  
];


export const habilidadesQuestoes2 = [
    {
        titulo: 'Considerar contexto de uso',
        descricao: 'A questão apresenta um contexto realista e exige o estudante aplicar conhecimento',
        prompt: 'Crie questões nas quais os estudantes tenham que aplicar esses conhecimentos em situações realistas. Para criar contextos de aplicação para as questões, pense em situações reais, fora do mundo escolar, nas quais os estudantes poderiam usar os conhecimentos para resolver um problema.',
        status: false,
        value: 1,
        habilidade: 'aplicar',
        parts: [
            { text: "Você é um professor especialista em avaliação de aprendizagem. Você trabalha com a elaboração de questões de alta qualidade. Em sua prática, você obedece a alguns princípios. As questões tem sempre alternativas com tamanhos aproximados e os dados devem ser retornados em formato JSON válido." },
            { text: "input: Crie uma questão sobre o conceito de conservação de energia na qual os estudantes tenham que aplicar conhecimentos em situações realistas." },
            { text: "output: {\n  \"pergunta\": \"Mariana está andando de bicicleta e se aproxima de uma ladeira. Ela percebe que, para manter a mesma velocidade ao subir a ladeira, precisa aplicar uma força maior nos pedais. Considerando as forças atuantes na bicicleta durante a subida, qual das seguintes afirmações melhor explica por que Mariana precisa aplicar mais força?\",\n  \"A\": \"A força gravitacional aumenta ao subir a ladeira, exigindo mais força para vencer a gravidade adicional.\",\n  \"B\": \"O atrito entre a bicicleta e a estrada diminui, e é necessário aplicar mais força para manter a mesma velocidade.\",\n  \"C\": \"A resistência do ar aumenta com a altitude, exigindo mais força para manter a mesma velocidade.\",\n  \"D\": \"A energia cinética transforma-se em energia potencial, exigindo mais trabalho para manter a velocidade.\",\n  \"gabarito\": \"D\"\n}" },
            { text: "input: Crie uma questão sobre os três poderes na qual os estudantes tenham que aplicar conhecimentos em situações realistas." },
            { text: "output: {\n  \"pergunta\": \"Uma nova lei federal é aprovada, restringindo a liberdade de expressão na internet. Um grupo de cidadãos acredita que essa lei viola os direitos fundamentais garantidos pela Constituição. Qual poder é responsável por determinar se a lei é constitucional ou não, ao qual esses cidadãos poderiam recorrer?\",\n  \"A\": \"O Poder Executivo, por ser responsável pela aplicação das leis.\",\n  \"B\": \"O Poder Legislativo, por ser responsável pela criação das leis.\",\n  \"C\": \"O Poder Judiciário, por interpretar as leis e a Constituição.\",\n  \"D\": \"A mídia, por exercer o papel de quarto poder na democracia.\",\n  \"gabarito\": \"C\"\n}" },
            { text: "input: Crie uma questão sobre o conceito de seleção natural  na qual os estudantes tenham que aplicar conhecimentos em situações realistas." },
            { text: "output: {\n  \"pergunta\": \"Durante um surto de uma doença bacteriana, um hospital começou a usar um novo antibiótico. No entanto, após alguns meses, os médicos notaram um aumento nos casos de pacientes não respondendo ao tratamento. Qual das seguintes opções melhor explica essa situação sob a perspectiva da teoria da evolução?\",\n  \"A\": \"As bactérias desenvolveram imunidade ao antibiótico devido à mudança de dieta dos pacientes, o que pode ter alterado a composição microbiana e a resposta ao tratamento.\",\n  \"B\": \"As bactérias que por acaso tinham mutações que conferiam resistência ao antibiótico sobreviveram e se reproduziram, passando essas mutações para as gerações seguintes.\",\n  \"C\": \"Os antibióticos causaram mutações nas bactérias, tornando-as resistentes. Este é um exemplo de mutação induzida por agentes químicos externos.\",\n  \"D\": \"O uso contínuo do antibiótico fortaleceu o sistema imunológico das bactérias, permitindo que desenvolvessem mecanismos para neutralizar seus efeitos.\",\n  \"gabarito\": \"B\"\n}" },
            { text: "input: Crie uma questão sobre políticas de combate à inflação na qual os estudantes tenham que aplicar conhecimentos em situações realistas." },
            { text: "output: {\n  \"pergunta\": \"Devido ao rápido aumento dos gastos nacionais com defesa, espera-se que o País A experimente uma inflação de preços, a menos que medidas sejam tomadas para restringir o crescimento da demanda privada agregada. Especificamente, o governo está considerando (1) aumentar as alíquotas do imposto de renda pessoal ou (2) introduzir uma política monetária muito restritiva. Se o governo do País A deseja minimizar o efeito adverso de suas políticas anti-inflacionárias sobre o crescimento econômico, qual das seguintes políticas ele deve usar?\",\n  \"A\": \"A política monetária restritiva, porque restringe mais os gastos de consumo do que os investimentos.\",\n  \"B\": \"A política monetária restritiva, já que o aumento de impostos restringiria os gastos de consumo.\",\n  \"C\": \"O aumento do imposto de renda pessoal, pois restringe mais os gastos de consumo do que os investimentos.\",\n  \"D\": \"Tanto a política monetária restritiva quanto o aumento da alíquota do imposto de renda pessoal, pois ambos deprimem igualmente o investimento.\",\n  \"gabarito\": \"C\"\n}" },

        ],
        exemplos: [
            {
                'pergunta': 'Uma nova lei federal é aprovada, restringindo a liberdade de expressão na internet. Um grupo de cidadãos acredita que essa lei viola os direitos fundamentais garantidos pela Constituição. Qual poder é responsável por determinar se a lei é constitucional ou não, ao qual esses cidadãos poderiam recorrer?',
                'A': 'O Poder Executivo, por ser responsável pela aplicação das leis.',
                'B': 'O Poder Legislativo, por ser responsável pela criação das leis.',
                'C': 'O Poder Judiciário, por interpretar a lei e a Constituição.',
                'D': 'A mídia, por exercer o papel de quarto poder na democracia.',
                'gabarito': 'B',

            },
            {
                'pergunta': 'Durante um surto de uma doença bacteriana, um hospital começou a usar um novo antibiótico. No entanto, após alguns meses, os médicos notaram um aumento nos casos de pacientes não respondendo ao tratamento. Qual das seguintes opções melhor explica essa situação sob a perspectiva da teoria da evolução?',
                'A': 'As bactérias desenvolveram imunidade ao antibiótico devido à mudança de dieta dos pacientes, o que pode ter alterado a composição microbiana e a resposta ao tratamento.',
                'B': 'As bactérias que por acaso tinham mutações que conferiam resistência ao antibiótico sobreviveram e se reproduziram, passando essas mutações para as gerações seguintes.',
                'C': 'Os antibióticos causaram mutações nas bactérias, tornando-as resistentes. Este é um exemplo de mutação induzida por agentes químicos externos.',
                'D': 'O uso contínuo do antibiótico fortaleceu o sistema imunológico das bactérias, permitindo que desenvolvessem mecanismos para neutralizar seus efeitos.',
                'gabarito': 'B'
            }

        ]
    },
    {
        titulo: 'Criar um cenário',
        descricao: 'A questão descreve um cenário realista e pede para o estudante resolver o problema',
        status: false,
        prompt: 'Crie questões para o estudante aplicar seu conhecimento. Crie um caso para o estudante analisar e identificar qual a decisão ou modo de pensar correto sobre ele a partir do que está estudando.',
        value: 2,
        habilidade: 'aplicar',
        exemplos: [

        ]
    },
    {
        titulo: 'Lembrar informações e conceitos',
        descricao: 'A questão exige que o estudante lembre de alguma informação que já aprendeu',
        status: false,
        prompt: 'Crie questões que exijam dos estudantes lembrarem informações ou conceitos que já aprenderam anteriormente. ',
        value: 3,
        habilidade: 'lembrar',
        exemplos: [
            {
                'pergunta': 'Qual das seguintes declarações reflete com precisão o princípio da divisão de poderes proposto por Montesquieu?',
                'A': 'O poder deve ser concentrado em um único órgão governamental para garantir eficiência da administração pública.',
                'B': 'Os poderes executivo, legislativo e judiciário devem ser independentes e atuar como freios e contrapesos.',
                'C': 'O poder deve ser concentrado nas mãos da elite para garantir a estabilidade no governo e a paz da população.',
                'D': 'O poder deve ser distribuído uniformemente entre os cidadãos para garantir uma democracia efetiva.',
                'gabarito': 'B',

            },

        ]
    },
    {
        titulo: 'Identificar o que ilustra um conceito',
        descricao: 'Apresenta uma teoria ou conceito e pede para o estudante identificar uma situação que a ilustra',
        status: false,
        prompt: 'Crie questões com distradores com exemplos e peça para o estudante identificar qual deles ilustra melhor o conceito. ',
        value: 4,
        habilidade: 'compreender',
        exemplos: [

        ]
    },
    {
        titulo: 'Identificar o que é consistente com um conceito',
        descricao: 'Apresenta uma teoria ou conceito e pede para o estudante identificar uma afirmação que a ilustra',
        status: false,
        prompt: 'Crie questões que exijam do estudante identificar uma afirmação que seja consistente com o conceito.',
        value: 5,
        habilidade: 'compreender',
        exemplos: [

        ]
    },
    {
        titulo: 'Contrastar conceitos',
        descricao: 'Exige que o estudante saiba reconhecer a diferença e semelhanças entre duas coisas. Ideias, conceitos etc, se concorda ou discorda',
        prompt: 'Crie questões que exija do estudante comparar duas ideias e identificar diferenças fundamentais elas.',
        status: false,
        value: 6,
        habilidade: 'compreender',
        exemplos: [

        ]
    },
    {
        titulo: 'Fazer analogias',
        descricao: 'Exige que o estudante saiba reconhecer semelhanças entre duas coisas.',
        status: false,
        prompt: 'Crie questões que exija do estudante identificar semelhanças entre duas ideias.',
        value: 7,
        habilidade: 'compreender',
        exemplos: [

        ]
    },
    {
        titulo: 'Concorda ou discorda',
        descricao: 'Apresente uma afirmação e pergunta se alguém uma ideia concordaria ou não com escolha',
        status: false,
        prompt: 'Crie questões que apresentem uma afirmação e pergunte se o teórico dessa teoria concordaria ou não com ela e porquê.',
        value: 8,
        habilidade: 'avaliar',
        exemplos: [

        ]
    },
    {
        titulo: 'Causa e efeito ou predição',
        descricao: 'Exige que o estudante identifique o que irá resultar de uma situação a partir de determinados princípios',
        status: false,
        prompt: 'Crie questões que exijam do estudante fazer predições a partir de dados eventos ou informações.',
        value: 9,
        habilidade: 'avaliar',
        exemplos: [

        ]
    },
    {
        titulo: 'Deduzir ou fazer inferências',
        descricao: 'Exige que os estudantes deduzam uma conclusão a partir de alguns dados',
        status: false,
        prompt: 'Crie questões que exijam dos estudantes deduzirem uma conclusão a partir de dados fornecidos. Eles devem ser capazes de inferir algo que não está explicitamente declarado nos dados.',
        value: 10,
        habilidade: 'avaliar',
        exemplos: [

        ]
    },
    {
        titulo: 'Ranquear ou priorizar ações',
        descricao: 'Julgar o que é mais grave ou menos',
        status: false,
        prompt: 'Crie questões que exijam dos estudantes ranquearem ações ou identificarem a mais apropriada em uma determinada situação. Eles devem ser capazes de priorizar ações com base em critérios específicos.',
        value: 11,
        habilidade: 'avaliar',
        exemplos: [

        ]
    },
    {
        titulo: 'Identificar as razões',
        descricao: 'Uma afirmação verdadeira é feita e o estudante deve identificar porque ela é verdadeira ou as razões pelas quais é considerada verdadeira',
        status: false,
        prompt: 'Crie questões que apresentem uma afirmação e o estudante deve identificar porque ela é verdadeira ou as razões pelas quais é considerada verdadeira',
        value: 12,
        habilidade: 'avaliar',
        exemplos: [

        ]
    }
];

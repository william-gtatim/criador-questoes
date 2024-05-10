import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { habilidadesQuestoes } from './habilidadesDasQuestoes';
import { criarConteudo } from '../api/criarConteudo';

export const useCriarQuestoesStore = defineStore('criarQuestoes', () => {
    const btnCriarQuestaoLoading = ref(false);
    const fonteDadosParaQuestao = ref(0);
    const topicoDigitado = ref('');
    const subtopicosSugeridos = ref([]);
    const subtopicosSelecionados = computed(() => subtopicosSugeridos.value.filter(subtopico => subtopico.status));
    const textoDigitado = ref('');
    const tipoPerguntaSelecionada = ref(1);
    const dificuldadeSelecionada = ref(1);
    const nivelLeituraSelecionada = ref(1);
    const habilidadeQuestaoSelecionada = ref(2);
    const questoes = ref([]);

  
    const generationConfig = {
        temperature: 0.7,
        topK: 0,
        topP: 1,
        maxOutputTokens: 4048,
    };

    const criarQuestoes = async () => {
        if(habilidadeQuestaoSelecionada.value === 2){
            criarQuestoesContextoUso();
        }
        if (habilidadeQuestaoSelecionada.value === 1) {
            criarQuestoesLembrarIdentificar();
        }
        if(habilidadeQuestaoSelecionada.value === 3){
            criarQuestoesContextoUso();
        }


    }
    async function criarQuestoesContextoUso(){
        if (subtopicosSelecionados.value.length === 0) {
            btnCriarQuestaoLoading.value = true;
            for (let i = 0; i < 3; i++) {
                const parts = habilidadesQuestoes[habilidadeQuestaoSelecionada.value - 1].parts;
                parts.push({ text: `input: Crie uma questão sobre ${topicoDigitado.value}  na qual os estudantes tenham que aplicar conhecimentos em situações realistas.` },
                    { text: "output: " });

                const resultado = await criarConteudo(generationConfig, parts);
                if (resultado) {
                    questoes.value.push(resultado);
                }
            }
            btnCriarQuestaoLoading.value = false;
        } else {
            btnCriarQuestaoLoading.value = true;
            const subtopicos = subtopicosSelecionados.value;
            for (let i = 0; i < subtopicos.length; i++) {
                const parts = habilidadesQuestoes[habilidadeQuestaoSelecionada.value - 1].parts;
                const subtopico = subtopicos[i];
                parts.push({ text: `input: Crie uma questão sobre ${subtopico.texto}, do tema ${topico} na qual os estudantes tenham que aplicar conhecimentos em situações realistas.` },
                    { text: "output: " });

                const resultado = await criarConteudo(generationConfig, parts);
                if (resultado) {
                    questoes.value.push(resultado);
                }
            }
            btnCriarQuestaoLoading.value = false;

        }
    }

    async function criarQuestoesLembrarIdentificar() {
        if (subtopicosSelecionados.value.length === 0) {
            btnCriarQuestaoLoading.value = true;
            for (let i = 0; i < 3; i++) {
                const parts = habilidadesQuestoes[habilidadeQuestaoSelecionada.value - 1].parts;
                parts.push({ text: `input: Crie uma questão sobre ${topicoDigitado.value}` },
                    { text: "output: " });

                const resultado = await criarConteudo(generationConfig, parts);
                if (resultado) {
                    questoes.value.push(resultado);
                }
            }
            btnCriarQuestaoLoading.value = false;
        } else {
            btnCriarQuestaoLoading.value = true;
            const subtopicos = subtopicosSelecionados.value;
            for (let i = 0; i < subtopicos.length; i++) {
                const parts = habilidadesQuestoes[habilidadeQuestaoSelecionada.value - 1].parts;
                const subtopico = subtopicos[i];
                parts.push({ text: `input: Crie uma questão sobre ${subtopico.texto}, do tema ${topico}` },
                    { text: "output: " });

                const resultado = await criarConteudo(generationConfig, parts);
                if (resultado) {
                    questoes.value.push(resultado);
                }
            }
            btnCriarQuestaoLoading.value = false;

        }
    }

    async function criarQuestoesCriarCenario() {
        if (subtopicosSelecionados.value.length === 0) {
            btnCriarQuestaoLoading.value = true;
            for (let i = 0; i < 10; i++) {
                const parts = habilidadesQuestoes[habilidadeQuestaoSelecionada.value - 1].parts;
                parts.push({ text: `input: ${topicoDigitado.value}` },
                    { text: "output: " });

                const resultado = await criarConteudo(generationConfig, parts);
                if (resultado) {
                    questoes.value.push(resultado);
                }
            }
            btnCriarQuestaoLoading.value = false;
        } else {
            btnCriarQuestaoLoading.value = true;
            const subtopicos = subtopicosSelecionados.value;
            for (let i = 0; i < subtopicos.length; i++) {
                const parts = habilidadesQuestoes[habilidadeQuestaoSelecionada.value - 1].parts;
                const subtopico = subtopicos[i];
                parts.push({ text: `input: ${topico} ${subtopico.texto}, ` },
                    { text: "output: " });

                const resultado = await criarConteudo(generationConfig, parts);
                if (resultado) {
                    questoes.value.push(resultado);
                }
            }
            btnCriarQuestaoLoading.value = false;

        }
    }
    



    return { btnCriarQuestaoLoading, fonteDadosParaQuestao, topicoDigitado, subtopicosSugeridos, textoDigitado, tipoPerguntaSelecionada, dificuldadeSelecionada, nivelLeituraSelecionada, habilidadeQuestaoSelecionada, prompt, questoes, criarQuestoes }
})

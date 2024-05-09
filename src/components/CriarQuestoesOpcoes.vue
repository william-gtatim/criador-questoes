<script setup>
import { storeToRefs } from 'pinia';
import Button from 'primevue/button';
import OpcoesTopico from '@/components/CriarQuestoes/OpcoesTopico.vue';
import OpcoesSubtopicosSugeridos from '@/components/CriarQuestoes/OpcoesSubtopicosSugeridos.vue';
import OpcoesFonteDados from '@/components/CriarQuestoes/OpcoesFonteDados.vue';



import { useCriarQuestoesStore } from "@/stores/criarQuestoes";
import OpcoesTipoPergunta from './CriarQuestoes/OpcoesTipoPergunta.vue';
import OpcoesNivelLeitura from './CriarQuestoes/OpcoesNivelLeitura.vue';
import OpcoesDificuldade from './CriarQuestoes/OpcoesDificuldade.vue';
import OpcoesHabilidadeQuestao from './CriarQuestoes/OpcoesHabilidadeQuestao.vue';

const store = useCriarQuestoesStore();
const { fonteDadosParaQuestao, btnCriarQuestaoLoading, topicoDigitado, subtopicosSugeridos, prompt } = storeToRefs(store);


</script>

<template>
    <div class="flex flex-column gap-6">
        <OpcoesFonteDados />

        <div v-if="fonteDadosParaQuestao === 0" class="flex flex-column gap-6">
            <div class="grid">
                <OpcoesTipoPergunta class="col-12 lg:col-12" />
            </div>

            <OpcoesHabilidadeQuestao />

            <div v-if="fonteDadosParaQuestao === 0" class="flex flex-column  gap-4">
                <OpcoesTopico />
                <OpcoesSubtopicosSugeridos />
            </div>


            <div v-if="fonteDadosParaQuestao === 1">
                campo de texto longo
            </div>

            <Button :loading="btnCriarQuestaoLoading" :disabled="topicoDigitado === ''"  label="Criar Questões" icon="pi pi-sparkles"
                @click="store.criarQuestoes" />
        </div>
        <div v-else>
            Em desenvolvimento

        </div>

    </div>
</template>

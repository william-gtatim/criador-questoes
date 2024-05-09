<script setup>
import CriarQuestoesOpcoes from './CriarQuestoesOpcoes.vue';
import VisualizarCardQuestao from "./CriarQuestoes/VisualizarCardQuestao.vue";
import { storeToRefs } from "pinia";
import { useCriarQuestoesStore } from "@/stores/criarQuestoes";

const store = useCriarQuestoesStore();
const { nivelLeituraSelecionada } = storeToRefs(store);


</script>
<template>
    <div class="grid h-full">
        <div class="col-12 md:col-5 p-4 ">
            <div class="md:sticky md:top-0">
                <CriarQuestoesOpcoes />
            </div>
        </div>
        <div class="col-12 md:col-7 bg-gray-50  p-4 border-top-1 md:border-left-1 border-gray-200">
            <div class="text-3xl mb-4">Questões Geradas</div>
            <VisualizarCardQuestao />
        </div>
    </div>
</template>
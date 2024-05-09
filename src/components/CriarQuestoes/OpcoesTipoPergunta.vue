<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import Dropdown from "primevue/dropdown";
import { useCriarQuestoesStore } from "@/stores/criarQuestoes";
const store = useCriarQuestoesStore();
const { tipoPerguntaSelecionada } = storeToRefs(store);

const tiposPergunta = [
    { name: 'Multipla escolha', value: 1 }
]
</script>
<template>
    <div class="flex flex-column gap-2">
        <label for="topico">Tipo de pergunta</label>
        <Dropdown v-model="tipoPerguntaSelecionada" :options="tiposPergunta" optionLabel="name" optionValue="value"
            placeholder="Selecione um tipo de pergunta" class="w-full" />
    </div>
</template>
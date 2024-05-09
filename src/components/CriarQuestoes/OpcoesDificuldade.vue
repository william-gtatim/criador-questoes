<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCriarQuestoesStore } from "@/stores/criarQuestoes";
import SelectButton from "primevue/selectbutton";
const store = useCriarQuestoesStore();
const { dificuldadeSelecionada } = storeToRefs(store);
const options = [
    { label: 'Fácil', value: 1 },
    { label: 'Médio', value: 2 },
    { label: 'Difícil', value: 3 }
]
</script>
<template>
    <div class="flex flex-column gap-2">
        <label for="topico">Dificuldade da questão</label>
        <SelectButton v-model="dificuldadeSelecionada" :options="options" optionLabel="label" optionValue="value"
            aria-labelledby="basic" class="w-full" />
    </div>
</template>
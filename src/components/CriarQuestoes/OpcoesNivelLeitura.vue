<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCriarQuestoesStore } from "@/stores/criarQuestoes";
import Dropdown from "primevue/dropdown";
const store = useCriarQuestoesStore();
const { nivelLeituraSelecionada } = storeToRefs(store);
const niveisDeLeitura = [
    { label: 'Baixo', value: 1 },
    { label: 'Médio', value: 2 },
    { label: 'Alto', value: 3 }
]
</script>
<template>
    <div class="flex flex-column gap-2">
        <label for="topico">Nível de leitura</label>
        <Dropdown v-model="nivelLeituraSelecionada" :options="niveisDeLeitura" optionLabel="label" optionValue="value"
            placeholder="Selecione um nível de leitura" class="w-full" />
    </div>

</template>
<script setup>
import { ref } from "vue";
import VisualizarCardQuestao from "@/components/CriarQuestoes/VisualizarCardQuestao.vue";
import { storeToRefs } from "pinia";
import { useCriarQuestoesStore } from "@/stores/criarQuestoes";
import Dropdown from "primevue/dropdown";
const store = useCriarQuestoesStore();
const { prompt } = storeToRefs(store);
</script>

<template>
    <VisualizarCardQuestao />
</template>
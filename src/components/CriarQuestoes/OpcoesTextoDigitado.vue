<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCriarQuestoesStore } from "@/stores/criarQuestoes";
const store = useCriarQuestoesStore();
const { fonteDadosParaQuestao } = storeToRefs(store);

</script>
<template>


</template>
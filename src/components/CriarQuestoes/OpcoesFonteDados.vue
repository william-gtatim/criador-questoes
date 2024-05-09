<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import TabMenu from "primevue/tabmenu";

import { useCriarQuestoesStore } from "@/stores/criarQuestoes";
const store = useCriarQuestoesStore();
const { fonteDadosParaQuestao } = storeToRefs(store);


const items = ref([
    { label: 'Tópico', icon: 'pi pi-tag' },
    { label: 'Texto', icon: 'pi pi-book' },
    { label: 'Vídeo', icon: 'pi pi-video' },
    { label: 'Arquivo', icon: 'pi pi-file' }
]);
</script>

<template>
    <TabMenu :model="items" v-model:activeIndex="fonteDadosParaQuestao" />
</template>


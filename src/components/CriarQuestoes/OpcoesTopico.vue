<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { sugerirSubtopicos } from "@/api/criarConteudo";
import { useCriarQuestoesStore } from "@/stores/criarQuestoes";
const store = useCriarQuestoesStore();
const {topicoDigitado, subtopicosSugeridos } = storeToRefs(store);
const btnLoading = ref(false);
async function criarSubtopicos() {
    if(topicoDigitado.value === '') return;
    btnLoading.value = true;
    let resultado = await sugerirSubtopicos(topicoDigitado.value);
    resultado = JSON.parse(resultado);
    subtopicosSugeridos.value = resultado.map(subtopico => {
        return { texto: subtopico, status: false }
    })
    btnLoading.value = false;
}
</script>
<template>
    <div class="flex flex-column gap-2">
        <label for="topico">Tópico</label>
        <div class="flex flex-row gap-2">
            <InputText id="topico" v-model="topicoDigitado" class="w-full" />
            <Button v-tooltip.top="'Sugerir Subtópicos'" :loading="btnLoading" icon="pi pi-sparkles" @click="criarSubtopicos"  severity="secondary" text />
        </div>
    </div>
</template>
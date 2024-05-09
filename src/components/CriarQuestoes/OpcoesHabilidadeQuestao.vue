<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useCriarQuestoesStore } from "@/stores/criarQuestoes";
import { habilidadesQuestoes } from "@/stores/habilidadesDasQuestoes";

import Dialog from "primevue/dialog";
import Chip from 'primevue/chip';

const store = useCriarQuestoesStore();
const { habilidadeQuestaoSelecionada} = storeToRefs(store);
const visible = ref(false);

const selecionaHabilidade = (value) => {
    console.log(value)
    habilidadeQuestaoSelecionada.value = value
    visible.value = false
}

const criterioTaxonomiaSelecionado = ref(null)
const habilidadesFiltradas = computed(() => {
    if(criterioTaxonomiaSelecionado.value !== null) { 
        return habilidadesQuestoes.filter(item => item.habilidade.includes(criterioTaxonomiaSelecionado.value));
    }
    return habilidadesQuestoes;
})

</script>
<template>
    <div class="flex flex-column gap-2">
        <label>Habilidade da questão</label>
        <div class="flex flex-column gap-2 border border-1 border-gray-300 p-1 border-round-md  cursor-pointer"
            @click="visible = true">
            <div class="hover:surface-100 p-3 border-round-md flex flex-column gap-2">
                <div class="font-semibold">{{ habilidadesQuestoes[habilidadeQuestaoSelecionada - 1].titulo }}</div>
                <div class="text-sm">{{ habilidadesQuestoes[habilidadeQuestaoSelecionada - 1].descricao }}</div>
            </div>
        </div>
    </div>

    <Dialog v-model:visible="visible" modal header="Selecione o nível de habilidade da questão"
        :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="mb-4 flex gap-2 flex-wrap">
            <Chip label="Todas" class="cursor-pointer" @click="criterioTaxonomiaSelecionado = null" />
            <Chip label="Lembrar" class="cursor-pointer" @click="criterioTaxonomiaSelecionado = 'lembrar'" />
            <Chip label="Compreender" class="cursor-pointer" @click="criterioTaxonomiaSelecionado = 'compreender'" />
            <Chip label="Aplicar" class="cursor-pointer" @click="criterioTaxonomiaSelecionado = 'aplicar'" />
            <Chip label="Avaliar" class="cursor-pointer" @click="criterioTaxonomiaSelecionado = 'avaliar'" />
        </div>
        <div class="flex flex-column gap-2 border border-1 border-gray-300 p-1 border-round-md">
            <div v-for="habilidade in habilidadesFiltradas" :key="habilidade.value">
                <div @click=" selecionaHabilidade(habilidade.value)"
                    class="border-round-md hover:surface-100 cursor-pointer flex flex-column gap-2 p-3">
                    <div class="font-semibold">{{ habilidade.titulo }}</div>
                    <div class="text-sm">{{ habilidade.descricao }}</div>
                </div>
            </div>
        </div>
    </Dialog>

</template>


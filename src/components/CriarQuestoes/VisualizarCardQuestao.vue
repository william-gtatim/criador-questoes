<script setup>
import { storeToRefs } from "pinia";
import { useCriarQuestoesStore } from "@/stores/criarQuestoes";
const store = useCriarQuestoesStore();
const { questoes } = storeToRefs(store);
import Card from "primevue/card";
import Button from "primevue/button";



const copiarQuestao = (index) => {
    const questao = questoes.value[index];
    const questaoFormatada = `${questao.pergunta}
                                A) ${questao.A}
                                B) ${questao.B}
                                C) ${questao.C}
                                D) ${questao.D}
                                Resposta Correta: ${questao.gabarito}`;

    navigator.clipboard.writeText(questaoFormatada)
        .then(() => {
            console.log("Questão copiada com sucesso!");
        })
        .catch(err => {
            console.error("Erro ao copiar questão:", err);
        });
}




</script>
<template>
    <div class="flex flex-column gap-5">
        <Card v-for="(questao, index) in questoes" :key="index">
            <template #title>Questão {{ index + 1 }}</template>
            <template #content>
                <div class="flex flex-column gap-4">
                    <div>{{ questao.texto }}</div>
                    <div>{{ questao.pergunta }}</div>

                </div>

                <div class="flex flex-column gap-4 mt-5">
                    <div class="flex flex-row gap-3 ">
                        <div class="font-semibold  border-round-md p-2 surface-200"
                            :class="{ 'bg-blue-500 text-white': questao.gabarito === 'A'}">
                            A</div>
                        <div>{{ questao.A }}</div>
                    </div>
                    <div class="flex flex-row gap-3 ">
                        <div class="font-semibold border-round-md p-2 surface-200"
                            :class="{ 'bg-blue-500 text-white': questao.gabarito == 'B' }">
                            B</div>
                        <div>{{ questao.B }}</div>
                    </div>
                    <div class="flex flex-row gap-3 ">
                        <div class="font-semibold border-round-md p-2 surface-200"
                            :class="{ 'bg-blue-500 text-white': questao.gabarito === 'C' }">
                            C</div>
                        <div>{{ questao.C }}</div>
                    </div>
                    <div class="flex flex-row gap-3 ">
                        <div class="font-semibold border-round-md p-2 surface-200"
                            :class="{ 'bg-blue-500 text-white': questao.gabarito === 'D' }">D</div>
                        <div>{{ questao.D}}</div>
                    </div>
                </div>
                <div class="flex gap-3 mt-5">
                    <Button v-tooltip.top="'Copiar Questão'" icon="pi pi-copy" severity="secondary" text rounded
                        @click="copiarQuestao(index)" />



                </div>
            </template>

        </Card>

    </div>

</template>

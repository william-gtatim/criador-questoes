<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import Checkbox from "primevue/checkbox";
import { useCriarQuestoesStore } from "@/stores/criarQuestoes";
const store = useCriarQuestoesStore();
const { subtopicosSugeridos } = storeToRefs(store);

</script>
<template>
    <div class="flex flex-column gap-2" v-if="subtopicosSugeridos.length > 0">

        <div class="flex flex-row flex-wrap gap-3">
            <div v-for="(subtopico, index) in subtopicosSugeridos" :key="index">
                <Checkbox v-model="subtopico.status" :binary="true" />
                {{ subtopico.texto }}
            </div>
        </div>
    </div>
</template>
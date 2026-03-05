<script setup>

import { ref } from "vue"
import { useCounterStore } from "../stores/counter"

const store = useCounterStore()

const description = ref("")
const value = ref("")

function addRecurring(){

store.addRecurring({
description:description.value,
value:Number(value.value)
})

description.value=""
value.value=""

}

</script>

<template>

<div class="container">

<h2 style="color: black;">Gastos Recorrentes</h2>

<input v-model="description" placeholder="Descrição"/>

<input v-model="value" placeholder="Valor"/>

<button @click="addRecurring">
Adicionar
</button>

<div
v-for="(item,index) in store.recurring"
:key="index"
class="expense-card"
>

<div class="expense-title">
{{item.description}}
</div>

<div class="expense-value">
R$ {{item.value}}
</div>

</div>

</div>

</template>

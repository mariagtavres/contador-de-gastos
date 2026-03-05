<script setup>

import { useCounterStore } from "../stores/counter"
import ExpenseItem from "../components/ExpenseItem.vue"

const store = useCounterStore()

</script>

<template>

<div class="container">

<h2>Histórico</h2>

<ExpenseItem
v-for="(expense,index) in store.counter"
:key="index"
:description="expense.description"
:category="expense.category"
:value="expense.value"
/>

</div>

</template>
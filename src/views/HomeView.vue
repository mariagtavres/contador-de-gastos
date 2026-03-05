<script setup>
import {ref} from 'vue'
import {useCounterStore} from '../stores/counter'

  const store = useCounterStore()

  const description = ref("")
  const value = ref("")
  const category = ref("")

  function addCounter() {
    store.addCounter({
      description:description.value,
      value:Number(value.value),
      category:category.value
    })
  }

</script>

<template>
  <div>
    <div class="container">
      <div class="total-card">
          <p>Total de Gastos</p>
          <h2>R$ {{store.totalCount}}</h2>
      </div>
    </div>

    <h3 style="margin-top: 20px;">Novo Gasto</h3>
    <input v-model="description" placeholder="Descrição (ex: Disney Plus)" />
    <div class="input-row">
      <input v-model="value" placeholder="Valor (R$)" />
      <input v-model="category" placeholder="Categoria" />
    </div>
    <button @click="addCounter">Adicionar Gasto</button>
  </div>
</template>

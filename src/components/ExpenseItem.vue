<script setup>

defineProps({
    description: String,
    category: String,
    value: Number,
})

</script>

<template>
    <div class="expense-card">
        <div>
            <div class="expense-title">{{ description }}</div>
        </div>
        
        <div>
            <div class="count-category">{{ category }}</div>
        </div>

        <div>
            <div class="expense-value">R$ {{ value }}</div>
        </div>
    </div>
</template>

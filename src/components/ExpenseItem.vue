<script setup>

defineProps({
    description: String,
    category: String,
    value: Number,
})

</script>

<template>
    <div class="count-card">
        <div>
            <div class="count-title">{{ description }}</div>
        </div>
        
        <div>
            <div class="count-category">{{ category }}</div>
        </div>

        <div>
            <div class="count-value">R$ {{ value }}</div>
        </div>
    </div>
</template>

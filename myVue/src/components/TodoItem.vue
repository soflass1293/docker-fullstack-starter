<template>
    <div class="todo-item">
        <div class="label">{{ label }}</div>
        <div class="date">{{ date }}</div>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            date: String,
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .todo-item {
        display: flex;
        flex-direction: column;
        border: 1px solid #5c6069;
        padding: 20px;
        width: 80vw;
    }
    .todo-item:not(:last-child) {
        border-bottom: none;
    }
    .label {
        font-size: 18px;
    }
    .date {
        font-size: 12px;
    }
</style>

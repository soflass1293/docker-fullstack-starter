<template>
    <div class="todo-item">
        <div class="label">{{ label }}</div>
        <div class="date">created on {{ date }}</div>
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
<style scoped lang="scss">
    .todo-item {
        display: flex;
        flex-direction: column;
        border-top: 1px solid #5c6069;
        border-bottom: 1px solid #5c6069;
        padding: 20px 30px;
        width: 80vw;
        position: relative;

        &:not(:last-child) {
            border-bottom: none;
        }

        &::before {
            position: absolute;
            width: 1px;
            height: calc(100% + 20px);
            content: ' ';
            background: #5c6069;
            top: -10px;
            right: 10px;
        }

        &::after {
            position: absolute;
            width: 1px;
            height: calc(100% + 20px);
            content: ' ';
            background: #5c6069;
            top: -10px;
            left: 10px;
        }

        .label {
            font-size: 18px;
        }
        .date {
            font-size: 12px;
        }
    }
</style>

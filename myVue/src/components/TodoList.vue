<template>
    <div class="todo-list">
        <TodoItem v-for="todo in todos" :label="todo.label" :date="todo.date" :key="todo.id" />
    </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
    props: {
        todos: Array,
    },
    components: { TodoItem },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .todo-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>

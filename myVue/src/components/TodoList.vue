<template>
    <div class="todo-list">
        <TodoItem v-for="todo in todos" :label="todo.label" :date="todo.date" :key="todo.id" />
    </div>
</template>

<script>
import TodoItem from "./TodoItem";

const todos = [
    {
        id: 1,
        label: "un premier todo",
        date: "24/12/1988",
    },
    {
        id: 2,
        label: "un 2e todo",
        date: "24/12/2004",
    },
    {
        id: 3,
        label: "un 3e todo",
        date: "24/12/1998",
    },
];

export default {
    data: () => {
        return { todos: todos };
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

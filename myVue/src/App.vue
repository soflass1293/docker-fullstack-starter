<template>
    <div id="app">
        <TodoList />
    </div>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
    name: "app",
    components: {
        TodoList,
    },
};
</script>

<style>
    body {
        background: #212329;
    }
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #e1e1e1;
        margin-top: 60px;
        background: #212329;
    }
</style>

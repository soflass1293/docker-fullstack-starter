<template>
    <div id="app">
        <div class="main-wrapper">
            <div v-if="loading" class="loading">
                <div class="loader" />
            </div>

            <div v-if="error" class="error">
                {{ error }}
            </div>

            <div v-if="todos" class="content">
                <TodoList :todos="todos" />
            </div>
        </div>
    </div>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
    name: "app",
    components: {
        TodoList,
    },
    data() {
        return {
            loading: false,
            todos: null,
            error: null,
        };
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchData();
    },
    watch: {
        // call again the method if the route changes
        $route: "fetchData",
    },
    methods: {
        getTodos(callback) {
            setTimeout(() => {
                callback(null, [
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
                ]);
            }, 2000);
        },
        fetchData() {
            this.error = this.todos = null;
            this.loading = true;
            // replace `getPost` with your data fetching util / API wrapper
            this.getTodos((err, todos) => {
                this.loading = false;
                if (err) {
                    this.error = err.toString();
                } else {
                    this.todos = todos;
                }
            });
        },
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
    .main-wrapper {
        display: flex;
        justify-content: center;
    }
    .loader {
        border: 8px solid #1E7D7E;
        border-top: 8px solid #3FC7C7;
        border-radius: 50%;
        width: 30vw;
        height: 30vw;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>

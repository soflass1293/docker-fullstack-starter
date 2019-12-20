<template>
    <div id="app">
        <div class="main-wrapper">
            <div v-if="loading" class="loading">
                <Loader />
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
import Loader from "./components/Loader";
import TodoList from "./components/TodoList";
import axios from "axios";

const { VUE_APP_API_PORT, VUE_APP_API_HOST } = process.env;

export default {
    name: "app",
    components: {
        Loader,
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
            axios.get(`http://${VUE_APP_API_HOST}:${VUE_APP_API_PORT}/todos`)
                .then((response) => {
                    callback(null, response.data);
                })
                .catch((error) => {
                    console.log("===> ", error);
                });
        },
        fetchData() {
            this.error = this.todos = null;
            this.loading = true;

            this.getTodos((error, todos) => {
                this.loading = false;
                if (error) {
                    this.error = error.toString();
                } else {
                    this.todos = todos;
                }
            });
        },
    },
};
</script>

<style lang="scss">
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

    .main-wrapper {
        display: flex;
        justify-content: center;
    }
}
</style>

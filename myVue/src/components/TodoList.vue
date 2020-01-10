<template>
    <div class="todo-list">
        <TodoItem draggable="true"
                  @todo-drag-start="handleDragStart"
                  @todo-drag-end="handleDragEnd"
                  @todo-drag-over="handleDragOver"
                  v-for="todo in todos"
                  :label="todo.label"
                  :date="todo.date"
                  :id="todo.id"
                  :key="todo.id"/>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem";
    import * as Utils from "../utils";
    import axios from "axios";

    const { VUE_APP_API_PORT, VUE_APP_API_HOST } = process.env;
    const Direction = {
        TOP: 'top', BOTTOM: 'bottom',
    };

    export default {
        props: {
            todos: Array,
        },
        components: { TodoItem },
        data() {
            return {
                dragOverId: null,
                dragElement: null,
                dragDirection: null,
            };
        },
        methods: {
            handleDragStart(id) {
                this.dragElement = id;
            },
            handleDragEnd(id) {
                const replacedTodo = this.todos.find(todo => todo.id === this.dragOverId);
                const selectedTodo = this.todos.find(todo => todo.id === id);
                const newPosition = replacedTodo.position;

                this.todos.forEach(todo => {
                    if (todo.id !== selectedTodo.id) {
                        if (todo.position <= selectedTodo.position && todo.position >= replacedTodo.position && this.dragDirection === Direction.TOP) {
                            todo.position++;
                        }

                        if (todo.position >= selectedTodo.position && todo.position <= replacedTodo.position && this.dragDirection === Direction.BOTTOM) {
                            todo.position--;
                        }
                    }
                });

                selectedTodo.position = newPosition;

                Utils.sortTodos(this.todos);

                axios.post(`http://${VUE_APP_API_HOST}:${VUE_APP_API_PORT}/todos`, {todos: this.todos})
                    .then(() => {
                        console.log("success post");
                    })
                    .catch((error) => {
                        console.log("error post ===> ", error);
                    });
            },
            handleDragOver(id) {
                if (this.dragOverId === null) {
                    this.dragOverId = id;
                }

                const selectedTodo = this.todos.find(todo => todo.id === this.dragElement);
                const overTodo = this.todos.find(todo => todo.id === id);

                if (this.dragOverId !== id) {
                    this.dragDirection = overTodo.position > selectedTodo.position ? Direction.BOTTOM : Direction.TOP;
                    this.dragOverId = id;
                }
            }
        }
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

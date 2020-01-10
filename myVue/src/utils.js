export const sortTodos = (todos) => {
    todos.sort((a, b) => {
        return a.position - b.position;
    });
    return todos;
};

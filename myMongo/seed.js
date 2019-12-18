db.person.drop();
db.person.insertMany([
    {
        _id: 1,
        name: 'Lea',
        age: 27
    },
    {
        _id: 2,
        name: 'Baptiste',
        age: 30
    }
]);

db.todo.drop();
db.todo.insertMany([
    {
        _id: 1,
        label: 'Manger du chocolat',
        date: new Date()
    },
    {
        _id: 2,
        label: 'faire des listes',
        date: new Date()
    }
]);

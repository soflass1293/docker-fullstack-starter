// db.person.drop();
db.person.insertMany([
    {
        _id: 1,
        name: 'Alice',
        age: 27
    },
    {
        _id: 2,
        name: 'Bob',
        age: 30
    }
]);

// db.todo.drop();
db.todo.insertMany([
    {
        _id: 1,
        id: 1,
        position: 7,
        label: 'Buy milk',
        date: new Date("2021-04-12T10:50:42.389Z"),
        personId: 2
    },
    {
        _id: 2,
        id: 2,
        position: 1,
        label: 'Do homework',
        date: new Date("2021-02-17T10:50:42.389Z"),
        personId: 2
    },
    {
        _id: 4,
        id: 4,
        position: 3,
        label: 'Watch TV',
        date: new Date("2021-10-16T10:50:42.389Z"),
        personId: 2
    },
]);
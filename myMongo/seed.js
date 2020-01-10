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
        id: 1,
        position: 7,
        label: 'Manger du chocolat',
        date: new Date("2019-02-10T10:50:42.389Z"),
        personId: 2
    },
    {
        _id: 2,
        id: 2,
        position: 1,
        label: 'Aller au Keisuke King',
        date: new Date("2019-03-10T10:50:42.389Z"),
        personId: 2
    },
    {
        _id: 3,
        id: 3,
        position: 2,
        label: 'Retourner au Keisuke King',
        date: new Date("2019-08-10T10:50:42.389Z"),
        personId: 2
    },
    {
        _id: 4,
        id: 4,
        position: 3,
        label: 'Plonger a Tubattaha',
        date: new Date("2019-02-10T11:50:42.389Z"),
        personId: 2
    },
    {
        _id: 5,
        id: 5,
        position: 4,
        label: 'faire des listes',
        date: new Date("2014-02-10T10:50:42.389Z"),
        personId: 1
    },
    {
        _id: 6,
        id: 6,
        position: 5,
        label: 'faire la vaisselle',
        date: new Date("2014-10-10T10:50:42.389Z"),
        personId: 1
    },
    {
        _id: 7,
        id: 7,
        position: 6,
        label: 'faire mon sac',
        date: new Date("2019-01-10T10:50:42.389Z"),
        personId: 1
    }
]);

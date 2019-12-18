db.createUser(
    {
        user: "bat",
        pwd: "bat1234",
        roles:[
            {
                role: "readWrite",
                db:   "mydb"
            }
        ]
    }
);

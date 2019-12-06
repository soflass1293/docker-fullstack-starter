# Run the project

``docker-compose up``

## Test mongo connection

``mongo --host mongodb://127.0.0.1:27017/mydb  --username admin --password``

enter admin password and run ``show collections`` you should see the `test` collection.

## Clear cache

``docker-compose stop && docker-compose rm -f`` and `rm -rf myMongo/data`


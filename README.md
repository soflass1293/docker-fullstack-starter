# Run the project

`docker system prune` -> extreme, remove everything

`docker-compose rm -fv db`

`docker-compose stop && docker-compose rm -f`

`docker-compose build --no-cache`

`docker-compose up`

SSH connection: `docker exec -it d09 bash`


## Test API server

go to `http://localhost:3000/`


## Test mongo connection

``mongo --host mongodb://127.0.0.1:27017/mydb  --username admin --password``

enter admin password and run ``show collections`` you should see the `test` collection.


## Clear mongo cache

``docker-compose stop && docker-compose rm -f`` and `rm -rf myMongo/data`

## Get container API

`docker ps`

`docker inspect id-of-container`


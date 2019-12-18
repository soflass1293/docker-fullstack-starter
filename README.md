# Run the project

`docker-compose build`

`docker-compose up`


## Test API server

go to `http://localhost:3000/`

SSH connection: `docker exec -it <ID> bash`


## Test mongo connection

``mongo --host mongodb://127.0.0.1:27017/mydb  --username bat --password``

enter bat password and run ``show collections`` you should see the collections from seed file.


## Clear mongo cache

``docker-compose stop && docker-compose rm -f`` and `rm -rf myMongo/data`

## Get container API

`docker ps`

`docker inspect id-of-container`


## Other clean

`docker system prune` -> extreme, remove everything

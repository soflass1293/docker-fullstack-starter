FROM mongo:3.6
COPY users.template.txt /docker-entrypoint-initdb.d/users.template.txt
ARG MONGO_NON_ROOT_USERNAME
ARG MONGO_NON_ROOT_PASSWORD
ARG MONGO_NON_ROOT_ROLE
ARG MONGO_DB
RUN sed 's/#USER#/'$MONGO_NON_ROOT_USERNAME'/g; s/#PWD#/'$MONGO_NON_ROOT_PASSWORD'/g; s/#ROLE#/'$MONGO_NON_ROOT_ROLE'/g; s/#DB#/'$MONGO_DB'/g' /docker-entrypoint-initdb.d/users.template.txt > /docker-entrypoint-initdb.d/users.js
COPY seed.js /docker-entrypoint-initdb.d
https://scotch.io/tutorials/create-a-mean-app-with-angular-2-and-docker-compose


# Angular Client

docker build -t angular-client:dev .
docker run -d --name angular-client -p 4200:4200 angular-client:dev
docker run -it --entrypoint=/bin/bash angular-client:dev
docker stop angular-client

# Express Server

docker build -t express-server:dev .
docker run -d --name express-server -p 3000:3000 express-server:dev
docker stop express-server
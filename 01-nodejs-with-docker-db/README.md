# Installation

```
npm install
```

# Running

```
docker-compose up
npm start
```

Go to http://127.0.0.1:3000

# Docker
```
docker-compose up
docker-compose down

docker-compose run

docker-compose logs
docker-compose logs -f
docker-compose -h
```

`docker-compose images`

```
Container   Repository      Tag        Image Id       Size
------------------------------------------------------------
adminer     adminer      latest      4cb61948bf59   89.76 MB
postgres    postgres     13-alpine   83b40f2726e5   159.5 MB
```

`docker-compose ps`

```
  Name                Command               State           Ports
--------------------------------------------------------------------------
adminer    entrypoint.sh docker-php-e ...   Up      0.0.0.0:8080->8080/tcp
postgres   docker-entrypoint.sh postgres    Up      0.0.0.0:5432->5432/tcp
```

# Adminer

http://localhost:8080/

System: `PostgreSQL`
Server: `postgres`
Username: `alex`
Password: `123`
Database: `alex`

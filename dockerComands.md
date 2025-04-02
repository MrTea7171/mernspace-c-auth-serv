docker run --rm -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules --env-file ${PWD}/.env -p 5501:5501 -e NODE_ENV=development auth-service:dev

docker build -t auth-service:dev -f docker/dev/Dockerfile .

docker run --rm --name mernpg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -v mernpgdata:/var/lib/postgressql/data -p 5432:5432 -d postgres

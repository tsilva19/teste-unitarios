## COMEÇO provisiona api e o postgres

- docker-compose up

## SE PRECISAR RESTART O CONTAINERda api se por ventura alterações de codigo

- docker  restart apiContainer

## COMANDO TYPEORM para criar as migrations

- yarn typeorm migration:create -n CreateCategories

- yarn typeorm migration:create -n CreateSpecifications

- yarn typeorm migration:create -n CreateUsers

## comando para criar entity no postgres

- yarn typeorm migration:run

## comando para deletar entity

- yarn typeorm migration:revert

## USANDO a api por contrato SWAGGER OPEN API

- Acesse http://localhost:3333/api-docs

![alt text](https://github.com/tsilva19/Injecao-Dependencia-node/blob/main/injetadependencia.png)

## USANDO no postman

- Acesse GET E POST http://localhost:3333/categories

- Acesse IMPORTAR VIA ARQUIVO use a opção multiformdata pra inserir arquivo csv de exemplos: arquivo.csv e sweeger.csv via POST http://localhost:3333/categories/import

- Acesse GET E POST http://localhost:3333/specifications


## Exemplo de requisição

`
curl -X 'POST' \
  'http://localhost:3333/categories' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "SVU 2",
  "description": "SVU EXEMPLO 2"
}'
`

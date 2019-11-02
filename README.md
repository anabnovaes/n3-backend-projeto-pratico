# API de lista de tarefas

## n3-backend-projeto-pratico
Primeiro projeto prático de API realizado na 4ª semana do bootcamp de backend da reprograma

## Objetivo projeto

Exibir via API uma listagem de tarefas, com rotas para listagem por ID, nome colaborador e por data de início do projeto.

## Tecnologias usadas

Para desenvolver o projeto utilizei a tecnologia Node JS. O download do Node é feito neste [link](https://nodejs.org/en/). A instalação é feita pelo procedimento padrão de instalação (next => next => ok). Para o download dos pacotes utilizei o NPM, porém este pacote é opcional e poderá ser usado conforme desejado.

## Instalação

Após clonar o repositório você deverá iniciar o node pelo seguinte comando 

```sh
npm init 
```

## Endpoints utilizados

Os endpoints criados foram os seguintes

#GET /:id => Exibe os dados de acordo com o ID inserido
#GET /  => Exibe todas as tarefas incluídas
#GET /concluidos/filtrar => Exibe apenas as tarefas concluídas
#GET /:nome/buscar => Exibe apenas os dados do nome filtrado
#GET /dataInclusao/filtrar => Ordena a exibição de acordo com as datas mais recentes

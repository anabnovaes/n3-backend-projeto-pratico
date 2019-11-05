# API de lista de tarefas

## n3-backend-projeto-pratico
Primeiro projeto prático de API realizado na 4ª semana do bootcamp de backend da reprograma

## Objetivo projeto

Exibir via API uma listagem de tarefas, com rotas para listagem por ID, nome colaborador e por data de início do projeto.

## Tecnologias usadas

Para desenvolver o projeto utilizei a tecnologia Node JS. O download do Node é feito neste [link](https://nodejs.org/en/). A instalação é feita pelo procedimento padrão de instalação (next => next => ok). Para o download dos pacotes utilizei o NPM, porém você poderá usar o gerenciador de pacotes de sua preferência.

## Instalação
 
 Para clonar este repositório você deverá acessar o git bash (Windows) ou terminal (Linux, MAC) e digitar o seguinte comando:

```sh
git clone https://github.com/anabnovaes/n3-backend-projeto-pratico.git 

```

Após clonar o repositório e acessar o novo diretório criado, você deverá iniciar o node pelo seguinte comando (caso utilize o NPM)

```sh
npm install 

```

Se você está utilizando outro gerenciador de pacotes apenas altere o npm para seu respectivo instalador.

## Endpoints utilizados

Os endpoints criados foram os seguintes:

GET /:id => Exibe os dados de acordo com o ID inserido

GET /  => Exibe todas as tarefas incluídas

GET tarefas/concluidos/filtrar => Exibe apenas as tarefas concluídas

GET tarefas/:nome/buscar => Exibe apenas os dados do nome filtrado

GET tarefas/dataInclusao/filtrar => Ordena a exibição de acordo com as datas mais recentes

GET tarefas/concluidos/duracaoTarefa => Exibe a duração em dias da tarefa caso a mesma tenha sido concluída
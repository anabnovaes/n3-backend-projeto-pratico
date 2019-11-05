const tarefas = require('../model/lista-tarefas.json');
 //função para transformar string em tipo date
 function stringParaData(data){
  const dataSplit = data.split("/");
  const dia = dataSplit[0];
  const mes = dataSplit[1] + 1;
  const ano = dataSplit[2];
  const dataFormatada = new Date(ano, mes, dia);
  return dataFormatada;
}

//função para calcular o tempo de execução da tarefa
function calcularDuracao(dataInicial, dataFinal){
  const subtracaoDias = Math.abs(dataFinal - dataInicial);
  const diferencaDias = Math.ceil(subtracaoDias / (1000 * 60 * 60 * 24))
  return diferencaDias
}
  
//obtendo a rota pelo id 
const getId = (req, res) => {
    const id = req.params.id
    if (id > 4 || id <= 0) {
        res.send('Id não encontrado!')
      }
      res.status(200).send(tarefas.find(tarefa => tarefa.id == id));
     }

// obtendo as tarefas na rota tarefas
    const getTarefas = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
  }
//obtendo os concluidos
  const getConcluidos = (req,res) =>{
    const arrConcluido = tarefas.filter(tarefa => tarefa.concluido);
    res.status(200).send(arrConcluido);
  }

  // pesquisando por colaborador 
  const getNomes =(req,res) =>{
    const nomeColab = req.params.nome;
    const arrTarefas = tarefas.filter(tarefa => tarefa.nomeColaborador === nomeColab)

     if(arrTarefas.length === 0){
      res.status(404)
    }else{
      res.status(200).send(arrTarefas);
    }
    
  }



  // pesquisando rota por data de exibição
const getOrdenadoPorData = (req, res)=>{   
    const datasOrdenadas = tarefas.sort(function (param1, param2) {
      if (stringParaData(param1.dataInclusao) < stringParaData(param2.dataInclusao)) {
        return 1;
      }
      if (stringParaData(param1.dataInclusao) > stringParaData(param2.dataInclusao)){
        return -1;
      }
      return 0;
    });

    res.send(datasOrdenadas)
  }

  // incluindo tempo de conclusão da tarefa
  const getTempoConclusao = (req, res) =>{
    tarefas.forEach(tarefa => {
      if (tarefa.concluido){
      tarefa.duracao = calcularDuracao(
        stringParaData(tarefa.dataInclusao),
        stringParaData(tarefa.dataConclusao)
      )
    }
    })
    res.status(200).send(tarefas)
  }
  //exportando todos as rotas para o routes
module.exports={ getOrdenadoPorData, getConcluidos, getId , getNomes ,getTarefas, getTempoConclusao}
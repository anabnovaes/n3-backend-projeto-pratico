const tarefas = require('../model/lista-tarefas.json');

//obtendo a rota pelo id 
exports.getId = (req, res) => {
    const id = req.params.id
    if (id > 4 || id <= 0) {
        res.send('Id não encontrado!')
      }
      res.status(200).send(tarefas.find(tarefa => tarefa.id == id));
     }

// obtendo as tarefas na rota tarefas
    exports.getTarefas = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
  }
//obtendo os concluidos
  exports.getConcluidos = (req,res) =>{
    const arrConcluido = tarefas.filter(tarefa => tarefa.concluido === true);
    res.status(200).send(arrConcluido);
  }

  // pesquisando por colaborador 
  exports.getNomes =(req,res) =>{
    const nomeColab = req.params.nome;
    const arrTarefas = tarefas.filter(tarefa => tarefa.nomeColaborador === nomeColab)

     if(arrTarefas.length === 0){
      res.status(404)
    }else{
      res.status(200).send(arrTarefas);
    }
    
  }



  // pesquisando rota por data de exibição
  exports.getOrdenadoPorData = (req, res)=>{
   //função para transformar a string em data 
  function stringParaData(data){
    const dataSplit = data.split("/");
    const dataComSeparador = dataSplit[1] + '-' + dataSplit[0] + '-' +
    dataSplit[2];    
    const dataFormatada = new Date(dataComSeparador).toLocaleDateString();
    console.log(dataFormatada)
    return dataFormatada
    
  }
  
    
 const datasOrdenadas = tarefas.sort(function (a, b) {
      if (stringParaData(a.dataInclusao) > stringParaData(b.dataInclusao)) {
        return 1;
      }
      if (stringParaData(a.dataInclusao) < stringParaData(b.dataInclusao)){
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    res.send(datasOrdenadas)
  }
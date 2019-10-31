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
    const arrTarefas = []
    for (let i = 0; i < tarefas.length; i++) {
    const concluidos = {}
    concluidos.id = tarefas[i].id;
    concluidos.dataInclusao = tarefas[i].dataInclusao;
    concluidos.concluido = tarefas[i].concluido;
    concluidos.descricao = tarefas[i].descricao;
    concluidos.nomeColaborador = tarefas[i].nomeColaborador;
   
    if (concluidos.concluido === true){
     arrTarefas.push(concluidos);
    };
    
    }
    res.status(200).send(arrTarefas);
  }
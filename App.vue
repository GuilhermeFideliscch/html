<script>
export default{
  data(){
    return{
      nome: "",
      idade: "",
      cabelo: "",
      pessoas: [],
    };
  },
  methods:{
  salvar_pessoas(){
    this.pessoas.push({"nome": this.nome, "idade": this.idade, "cabelo": this.cabelo})
  }
}
}

</script>

<template>
  <div class="header-container">
  <h1>Pessoas</h1>
  <button type="button" class="btn btn-success botao" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
  </div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <label for="nome" class="form-label">Nome</label>
        <input type="text" id="nome" name="nome" class="form-control" v-model="nome">
        <label for="idade" class="form-label">Idade</label>
        <input type="text" id="idade" name="idade" class="form-control col-4" v-model="idade">
        <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupSelect01">Cabelo</label>
      <select class="form-select" id="inputGroupSelect01" v-model="cabelo">
      <option value="1">cabeludo</option>
      <option value="2">careca</option>
      <option value="3">careca-cabeludo</option>
      </select>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="salvar_pessoas()">salvar</button>
      </div>
    </div>
  </div>
</div>

  <div v-if="pessoas.lenght == 0">
    <img src="C:\Users\Unicesumar\Desktop\projetos\latest\src\assets/download.jpg" class="imagem">
    <h1 class="registro">Sem registro</h1>
  </div>

<div v-else>
    <table class="table">
    <thead>
    <tr>
    <th>nome</th>
    <th>idade</th>
    <th>cabelo</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="pessoa in pessoas">
    <td>{{pessoa.nome}}</td>
    <td>{{pessoa.idade}}</td>
    <td>{{pessoa.cabelo}}</td>
    </tr>
    </tbody>
    </table>
  </div>

</template>

<style scoped>
.botao{
  margin-top: 12px;
  margin-left: 900px;
  margin-right: 50px;
}
.imagem{
  margin-left: 520px;
  margin-top: 100px;
}
.registro{
  margin-left: 555px;
}
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
.header-container h1 {
    margin: 0;
  }
</style>

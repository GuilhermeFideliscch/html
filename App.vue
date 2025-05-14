<script>
export default{
  data(){
    return{
      controller_table: 0,
      nome: "",
      idade: "",
      cabelo: "",
      pessoas: [],
    };
  },
  methods:{
  salvar_pessoas(){
    this.pessoas.push({"nome": this.nome, "idade": this.idade, "cabelo": this.cabelo})
  },
  mudar_para_produtos(){
    if(this.controller_table > 0){
    this.controller_table --;
    }
  },
  mudar_para_cliente(){
    if(this.controller_table < 1){
    this.controller_table ++;
    }
  }
  }
}
</script>

<template>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Menu</a>
    <button class="btn btn-primary" @click="mudar_para_produtos">Produtos</button>
    <button class="btn btn-primary"@click="mudar_para_cliente">Clientes</button>
  </div>
</nav>

<div v-if="controller_table == 1">
    <a style="margin-left: 10px">Clientes</a>
    <button class="btn btn-primary add" style="margin-left: 1200px">ADD</button>
    <table class="table">
    <thead>
    <tr>
    <th>nome</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="pessoa in pessoas">
    <td>{{pessoa.nome}}</td>
    </tr>
    </tbody>
    </table>
  </div>

  <div v-if="controller_table == 0">
    <a style="margin-left: 10px">Produtos</a>
    <button class="btn btn-primary add ">ADD</button>
    <table class="table">
    <thead>
    <tr>
    <th>Produtos</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="pessoa in pessoas">
    <td>{{pessoa.nome}}</td>
    </tr>
    </tbody>
    </table>
  </div>
</template>

<style>
  a{
    font-weight: bold;
  }
</style>

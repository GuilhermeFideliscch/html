<script>
  export default{
    data(){
      return{
        publicacoes: [
          {imagem:"", descricao: "o dia em que fiz gol", nome_usuario: "cristiano ronaldo", foto_usuario: "", numero_curtida: 10, numero_comentario: 10}
        ]
      }
    }
  }
</script>

<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  <div class="row">
  <div class="col-3"> coluna da esquerda </div>
  <div class="col-6"> 
      <div v-for="publicacao in publicacoes">
          <div class="d-flex align-items-center">
            <img class="foto_perfil me-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUzALizWKNj-z2W_uS3omBhK_Crn2Wye6Bg&s">
          
          <div class="nomeUsuario">
              Cristiano Ronaldo
          </div>
          <div class="">
              <i class="bi bi-three-dots-vertical"></i>
          </div>

          </div>
      </div>
   </div>
  <div class="col-3"> coluna da direita </div>

  </div>

</template>

<style>
.foto_perfil{
  width: 60px;
  height: 60px;
  border-radius: 100px;
}

.nomeUsuario{
  font-size:24px;
}
</style>

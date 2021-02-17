<template>
  <div class="card">
      qwe
      <div class="title">{{recipe.name}}</div>
      <div class="image">
          <img class='thumbnail' :src=recipe.img alt=''>
      </div>
      <div class="methods">
        <p class="reduce"></p>
        <p class="amount">{{$store.getters.getAmount(recipe.id)}}</p>
        <p class="add"></p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['recipe'],
    method: {
        getImageLink(){
            return this.recipe.img
        }
    }
}
</script>

<style>
.card {
    width: 300px;
    height: 300px;
}
.thumbnail {
    width: 150px;
}
</style>
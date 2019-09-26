<template>
  <div id="app">
    <span class="span-edit">
      <Icon icon="edit" />
    </span>
    <span class="span-operator">
      <Icon icon="operator" />
    </span>
    <span class="span-cake">
      <Icon icon="cake" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style scoped>
span{
  display: inline-block;
}
.span-edit svg{
  width: 50px;
  height: 50px;
}
.span-operator svg{
  width: 30px;
  height: 30px;
}
.span-edit:hover svg{
  filter: drop-shadow(0 60px blue);
  top: -60px;
  position: relative;
}
.span-operator:hover svg{
  filter: drop-shadow(0 60px red);
  top: -60px;
  position: relative;
}
.span-cake:hover svg{
  filter: drop-shadow(0 60px pink);
  top: -60px;
  position: relative;
}
</style>
<style>
*{
  margin: 0;
  padding: 0;
}
</style>
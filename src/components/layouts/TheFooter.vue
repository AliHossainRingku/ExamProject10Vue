<template>
    <footer>
        <h4>{{title}}</h4>
    </footer>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
  float: bottom;
  margin-top: 400px;
}

footer h4 {
  color: white;
  margin: 0;
}
</style>
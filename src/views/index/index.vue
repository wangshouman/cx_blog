<template>
  <div class="container">
      <div class="content">
        这是列表页
      </div> 
  </div>

</template> 

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  mounted(){
    this.init();
  },
  methods: {
    init() {
      console.log("kkjjjjjjjjjjjjjjjjjj")
      const self = this;
      this.$ajax.get('/api/index').then(res => {
        console.log("res", res)
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .container {
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;

    .content {
      width: 80%;
      background-color: aqua;
    }

  }


</style>
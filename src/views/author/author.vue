<template>
  <div class="container">
            <!-- <div class="header">
                <div>
                    <div class="blog_name"><span>Morning city</span></div>
                    <div class="instroduce">
                        <span v-for="item in msg" :key="item.id" class="li-item"> {{ item }} </span>
                    </div>
                    </div>
                    <div class="nav">
                    <div class="nav_item">
                        <span @click="jumpDetail(type='index')" :class="color == 'index'?'bgColor': ''">首页</span>
                        <span @click="jumpDetail(type='detail')" :class="color == 'detail'?'bgColor': ''">JS/CSS</span>
                        <span @click="jumpDetail(type='technical')" :class="color == 'technical'?'bgColor': ''">隨筆</span>
                        <span @click="jumpDetail(type='talk')" :class="color == 'talk'?'bgColor': ''">留言</span>
                        <span @click="jumpDetail(type='myself')" :class="color == 'myself'?'bgColor': ''">登錄</span>
                    </div>
                </div>
                
            </div> -->

    这是作者本人 
  </div>

  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    display: absolute;  
    left: 0px;
    top: 0px;
}
</style>

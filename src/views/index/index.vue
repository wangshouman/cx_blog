<template>
  <div class="container">
      <div class="content" v-for="article in  articleList" :key="article.id">
        <div class="title">
          <span class="theme">Python</span>
          <span>Python 中拼音库的用法</span>
        </div>
        <div class="content_item fontSize12">
          <img src="https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2019/04/timg.jpeg&h=123&w=200&q=90&zc=1&ct=1" alt="">
          <p class="note"> 最近碰到了一个问题，项目中很多文件都是接手过来的中文命名的一些素材，结果在部署的时候文件名全都乱码了，导致项目无法正常运行。
后来请教了一位大佬怎么解决文件名乱码的问题，他说这个需要正面解决吗？不需要，把文件名全部改掉，文件名永远不要用中文，永远不要。
我想他这么说的话，一定也是...</p>
        </div>
        <div class="author   fontSize12">
          <div class="author_item marginL10">
            <img src="../../assets/user.svg" alt="">
            <span class="marginL2">崔庆才</span>
          </div>
          <div class="author_item marginL10">
            <img src="../../assets/time-circle.svg" alt="">
            <span class="marginL2">三周前(04-04)</span>
          </div>
          <div class="author_item marginL10">
            <img src="../../assets/eye.svg" alt="">
            <span class="marginL2">浏览次数: 10000</span>
          </div>
          <div class="author_item marginL10"> 
            <img src="../../assets/message.svg" alt="">
            <span class="marginL2">评论</span>
          </div>
          <div class="author_item marginL10">
            <img src="../../assets/like.svg" alt="">
            <span class="marginL2">喜欢</span>
          </div>
        </div>
      </div> 
  </div>

</template> 

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      articleList: [{id: 0}, {id: 1}, {id: 3}, {id: 4},] 
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #eee;
  overflow: hidden;
}
.content {
  margin-top: 10px;
  margin-right: 25%;
  margin-left: 25%;
  width: scan(100%-100px);
  border-radius: 3px;
  background-color: #fff;
  overflow: hidden;
  -moz-box-shadow:2px 2px 5px #333333; 
  -webkit-box-shadow:2px 2px 5px #333333; 
  box-shadow:2px 2px 5px #333333;
}
.content>.title {
  font-size: 16px;
  margin: 10px;
}
.title> .theme {
  background: lightcoral;
  padding: 3px;
  border-radius: 3px;
}
.content_item {
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;

}
.content_item img {
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  box-shadow:2px 2px 2px rgba(207, 201, 201, 0.911);
}
.content_item p {
  margin-left: 20px;

}
.fontSize12 {
  font-size: 14px;
}
.note {
  font-family:'PingFang SC','Microsoft YaHei','SimSun','Arial', sans-serif;
  color: #777;
  line-height: 20px;
  margin-bottom: 0;
  font-weight: 100;
  text-indent: 20px;
}
.author {
  text-align: right;
  margin: 5px 10px 5px;
  font-weight: 400;
}
.marginL10 {
  margin-left: 10px;
}
.author_item {
  display: inline-block;  
  text-align: center;
  position: relative;
}
.author_item img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.author_item span{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

</style>

<template>
  <div class="container">
<<<<<<< HEAD
      <div class="content">
        这是列表页
      </div> 
  </div>
=======
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
        <div class="author fontSize12">
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
      <el-pagination
        class="margin15"
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
>>>>>>> b3f51ca0af54c834ccef2d9b05e3c3c1abc9cbe1

  </div>
</template> 

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
<<<<<<< HEAD
=======
      articleList: [{id: 0}, {id: 1}, {id: 2}, {id: 3}] 
>>>>>>> b3f51ca0af54c834ccef2d9b05e3c3c1abc9cbe1
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
<<<<<<< HEAD
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

=======
<style scoped>
.container {
  /* width: 100%;
  height: 100%; */
  overflow: hidden;
  display: inline-block;
}
.content {
  display: inline-block;
  margin-top: 10px;
  margin-left: 15%;
  width: 700px;
  border-radius: 3px;
  overflow: hidden;
  background-color: #FFFFFF;
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
.container .content:nth-last-child(1) {
  margin-bottom: 15px;
}
.margin15 {
  margin-left: 14%;
  margin-top: 15px;
}
>>>>>>> b3f51ca0af54c834ccef2d9b05e3c3c1abc9cbe1

</style>
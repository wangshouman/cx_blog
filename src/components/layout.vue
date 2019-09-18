<template>
    <div class="container">
        <h2>
            <div class="header">
                <div>
                    <div class="blog_name"><span>Morning city</span></div>
                    <div class="instroduce">
                        <span v-for="item in msg" :key="item.id" class="li-item"> {{ item }} </span>
                    </div>
                    </div>
                    <div class="nav">
                    <div class="nav_item">
                        <span @click="jumpDetail(type='index')" :class="color == 'index'?'bgColor': ''">首页</span>
                        <span @click="jumpDetail(type='detail')" :class="color == 'detail'?'bgColor': ''">资讯</span>
                        <span @click="jumpDetail(type='technical')" :class="color == 'technical'?'bgColor': ''">杂谈</span>
                        <span @click="jumpDetail(type='talk')" :class="color == 'talk'?'bgColor': ''">交流</span>
                        <span @click="jumpDetail(type='myself')" :class="color == 'myself'?'bgColor': ''">关于自己</span>
                    </div>
                </div>
            </div>
        </h2>
        <h2 class="container">
            <div class="route-content-item">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </h2>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '程序员的自我修养',
      color: '111'
    }
  },
  mounted(){
    this.setNavBgColor()
  },
  methods: {
    setNavBgColor() {
      const self = this;
      const name = self.$route.name
      console.log("$", name)
      switch (name) {
        case 'index':
          self.color = 'index';
          return
        case 'detail':
          self.color = 'detail';
          return
        case 'technical':
          self.color = 'technical';
          return 
        case 'talk':
          self.color = 'talk';
          return
        case 'myself':
          self.color = 'myself';
          return
      }
    },
    jumpDetail(type) {
        if (type == 'index') {
            this.$router.push({path: '/'})
        } else if (type == 'detail') {
            this.$router.push({path: '/detail'})
        } else if (type == 'technical') {
            this.$router.push({path: '/technical'})
        } else if (type == 'talk') {
            this.$router.push({path: '/talk'})
        } else if (type == 'myself') {
            this.$router.push('/myself')
        }
        this.setNavBgColor()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: none repeat scroll 0 0 rgb(174, 212, 112); 
  width: 100%;
  height: 150px;
  line-height: 100px;
  font-size: 25px;
  overflow: hidden;
  text-align: center;
}
.li-item {
  display: inline-block;
  cursor: pointer;
  transition: transform  0.25s;
  color: white;
}
.instroduce {
  display: inline-block;
}
.instroduce > span:hover {
  transform: translateY(-10px) rotate(10deg) scale(2);
}
.blog_name {
  display: inline-block;
  color: white;
}
.nav {
  background-color: #555555;
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: white;
  font-size: 16px;
}
.nav_item {
  margin-right: 25%;
  margin-left: 25%; 
  width: scan(100%-100px);
  display: flex;
  justify-content: space-between;
}
.nav_item span {
    width: 100px;
}
.bgColor {
  background-color: rgb(174, 212, 112);
}
.nav_item span:hover {
    cursor: pointer;
    background-color: rgb(174, 212, 112);
}
.container {
    /* position: relative; */
    height: 100%;
}
.route-content-item {
    height: 100%;
}
</style>

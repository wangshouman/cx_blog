<template>
    <div class="height100">
        <h2>
          <router-view name="author" class="posR"></router-view>
        </h2>
        <h2 class="over">
            <!-- <div class="route-content-item">  
                  <router-view></router-view>
            </div> -->
        </h2>
    </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      msg: '程序员的自我修养',
      color: ''
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
.index-item {
  overflow-y: hidden;
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
  margin-right: 15%;
  margin-left: 15%; 
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
.height100 {
  height: 100%;
}
.route-content-item {
  display: flex;
  justify-content: space-between;
}
.over {
  overflow: hidden;
}
.posR {
  display: absolute;
}
</style>

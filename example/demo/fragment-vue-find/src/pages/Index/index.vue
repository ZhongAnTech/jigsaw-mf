<template>
  <div class="p-index-container">
    <div>This is fragment-vue-master</div>
    <div @click="push">切换 master hello</div>
    <div @click="push2">切换 master world</div>
    <div @click="push3">切换 子 application</div>
    <div @click="push4">切换 第2层的 grandson</div>
    <div @click="push5">切换 react </div>

    <div>==============================================</div>
    <div ref="other2" id="other2" style="background:#ccc;border:1px solid;"></div>
    <div>--------------------------------------------------</div>
    <div ref="other3" id="other3" style="background:#666;border:1px solid;"></div>
    <div>--------------------------------------------------</div>
    <div ref="other4" id="other3" style="background:#f90;border:1px solid;"></div>
  </div>
</template>

<script>
import Chaoxi from '../../global'

export default {
  name: 'Index',
  data () {
    return {
      name: Chaoxi.classNamespace
    }
  },
  methods: {
    push() {
      // console.log(Chaoxi)
      this.$router.push({
        name:'hello',
        params: { userId: '123' }
      })
    },
    push2() {
      this.$router.push({
        path: "/world",
        query: { plan: 'private' }
      })
    },
    push3() {
      this.$router.push('/other2/hello')
    },
    push4() {
      // this.$router.push('/other3/hello')
      this.$router.push('/grandson/hello')
    },
    push5() {
      // this.$router.push('/other3/hello')
      this.$router.push('/reactfather')
    }
  },
  mounted() {
    const appinfo = [
      {
        name: "a45",
        application_name: "reactfather",
        entry: "http://localhost:5020/app",
        contain: this.$refs.other3,
        baseUrl: "/reactfather",
        canActive() {
          // path
          // console.log(Chaoxi)
          // console.log(Chaoxi.fullUrl)
          // baseUrl 会被chapxi重写成包含父路径
          // 所以这里可以直接使用
          return location.pathname.startsWith(this.baseUrl);
        }
      },
      // {
      //   name: "a2",
      //   application_name: "child",
      //   entry: "http://localhost:8082/app",
      //   contain: this.$refs.other3,
      //   baseUrl: "/other3",
      //   canActive() {
      //     return location.pathname.startsWith("/other3");
      //   }
      // }
    ]
    Chaoxi.registerApps(appinfo)
  },
}
</script>

<style>

</style>
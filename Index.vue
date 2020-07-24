<template>
  <div>
    <a href="#">欢迎你</a>
    <button @click="load1">1</button>
    <button @click="load2">2</button>
    <button @click="load3">3</button>
    <button @click="load4">4</button>
    <button @click="load5">5</button>
    <div v-loading="loading" style="width: 500px; height: 300px; background-color: #369;"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    // 本事件循环结束时，数据没有改变，队列没有更新，所以DOM不会变化
    load1 () {
      this.loading = true
      let time = new Date().getTime()

      this.loading = false
      console.log(new Date().getTime() - time)
    },
    // 使用异步setTimeout，可以触发变化
    load2 () {
      this.loading = true
      let time = new Date().getTime()

      setTimeout(() => {
        this.loading = false
        console.log(new Date().getTime() - time)
      }, 0)
    },
    // 海量的遍历会导致浏览器假死
    load3 () {
      this.loading = true
      let time = new Date().getTime()

      const arr = []
      for (var i = 0; i < 40000000; i++) {
        arr.push(i)
      }

      this.loading = false
      console.log(arr.length, new Date().getTime() - time)
    },
    // 海量的遍历会导致浏览器假死，哪怕使用setTimeout也不行
    load4 () {
      this.loading = true
      let time = new Date().getTime()

      setTimeout(() => {
        const arr = []
        for (var i = 0; i < 40000000; i++) {
          arr.push(i)
        }

        this.loading = false
        console.log(arr.length, new Date().getTime() - time)
      }, 200)
    },
    // 海量的遍历会导致浏览器假死，解决方法是分批次遍历，假死的情况可以得到部分改善
    // 每次遍历的条数需要斟酌，数字太大，浏览器假死出现频率高，数字太小，则遍历耗时过长
    load5 () {
      this.loading = true
      let time = new Date().getTime()

      const arr = []

      // 总条数
      const total = 40000000
      // 每次遍历的条数
      const every = 2000000
      // 当前条数
      let current = 0

      const iteration = () => {
        for (var i = current; i < current + every && i < total; i++) {
          arr.push(i)
        }

        current = i
        console.log(current)

        if (current < total) {
          setTimeout(iteration, 0)
        } else {
          this.loading = false
          console.log(arr.length, new Date().getTime() - time)
        }
      }
      setTimeout(iteration, 0)
    }
  },
  created () {
  }
}
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>hello</h2>
    <input type="text" v-model="newItem" @keyup.enter="newPro">
    <ul>
      <li v-for="item in current" :class="{finished:item.finish}" @click="toggle(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
//  data () {
//    return {
//      msg: '这是我的测试'
//    }
//  }
  data: function () {
    return {
      msg: '这是es5的写法，上面的是es6',
      current: [],
      newItem: ''
    }
  },
  methods: {
    toggle: function (item) {
      console.log(item)
    },
    newPro: function () {
      this.current.push({
        label: this.newItem,
        finish: false
      })
      this.newItem = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .finished{
    color: red;
  }
</style>

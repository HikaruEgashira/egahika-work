<template>
  <div class="mt-5">
    <h2>1. TODOアプリ</h2>
    <form v-on:submit.prevent>
      <input type="text" v-model="newItem">
      <button v-on:click="addItem">Add</button>
    </form>
    <br><br>
    <h3>TODO List</h3>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.isDone">
        <span v-bind:class="{ done: todo.isDone }">{{ todo.item }}</span>
      </li>
    </ul>
    <hr>
    <h3>解説</h3>
    <br>
    <li>todo.vue</li>
    <br>
    <code>
    &lt;template><br>
    　&lt;form v-on:submit.prevent><br>
    　　&lt;input type="text" v-model="newItem"><br>
    　　&lt;button v-on:click="addItem">Add&lt;/button><br>
    　&lt;/form><br>
    　<br>
    　&lt;h3>TODO List&lt;/h3><br>
    　&lt;ul><br>
    　　&lt;li v-for="todo in todos"><br>
    　　　&lt;input type="checkbox" v-model="todo.isDone"><br>
    　　　&lt;span v-bind:class="{ done: todo.isDone }">{{ todo.item };}&lt;/span><br>
    　　&lt;/li><br>
    　&lt;/ul><br>
    &lt;/template><br>
    <br>
    &lt;script><br>
    export default {<br>
    　name: 'todo',<br>
    　data () {<br>
    　　return {<br>
    　　　newItem: '',<br>
    　　　todos: [{item: 'remove semicolon', isDone: false}]<br>
    　　}<br>
    　},<br>
    　methods: {<br>
    　　addItem: function (event) {<br>
    　　　if (this.newItem === '') return<br>
    　　　var todo = {<br>
    　　　　item: this.newItem,<br>
    　　　　isDone: false<br>
    　　　}<br>
    　　　this.todos.push(todo)<br>
    　　　this.newItem = ''<br>
    　　}<br>
    　}<br>
  }<br>
    &lt;/script>
    </code>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      newItem: '',
      todos: [{item: 'remove semicolon', isDone: false}]
    }
  },
  methods: {
    addItem: function (event) {
      if (this.newItem === '') return
      var todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)
      this.newItem = ''
    }
  }
}
</script>

<style>
#app ul {
	list-style: none
}
#app li > span.done {
	text-decoration: line-through
}
</style>

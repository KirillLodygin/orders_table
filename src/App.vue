<template>
  <OrdersTable msg="Таблица заказов"/>
</template>

<script>
import OrdersTable from './components/OrdersTable.vue'

export default {
  name: 'App',
  components: {
    OrdersTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

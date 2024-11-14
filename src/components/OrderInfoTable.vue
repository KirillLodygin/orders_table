<template>
  <div class="table-wrapper">
    <table class="data-table">
      <thead>
      <tr>
        <th colspan="2">Общие сведения</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="object in orderFields" :key="object.field">
          <template v-if="object.field !== 'payment_status'">
            <td>{{ object.label }}</td>
            <td>
              <div v-if="simpleFields.includes(object.field)">{{ orderData[object.field] }}</div>
              <div v-if="object.field === 'client'">{{ getClientsName(orderData[object.field]) }}</div>
              <div v-if="object.field === 'client_phone'">{{ orderData.client.phone }}</div>
              <div v-if="object.field === 'shop'">{{ orderData.shop.title }}</div>
              <div v-if="object.field === 'payment_method'">{{ orderData.payment.method.title }}</div>
            </td>
          </template>
          <template v-if="object.field === 'payment_status' && orderData.payment.method.id !== 1">
            <td>{{ object.label }}</td>
            <div v-if="object.field === 'payment_status'">
              {{ orderData.payment.status.title }}
            </div>
          </template>
        </tr>
      </tbody>
    </table>
    <template v-for="(object, index) in orderData.items" :key="`item_${index}`">
      <table class="data-table">
        <thead>
          <tr>
            <th colspan="2">Состав заказа</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="field in itemFields" :key="`${field.field}_${index}`">
            <td>{{ field.label }}</td>
            <td>{{ object[field.field] }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
import { orderFields, itemFields, simpleFields } from '@/constants/projectConstants'
import { getClientsName, getNumberWithSpaces } from '@/utils/projectUtils'

export default {
  name: 'OrderInfoTable',

  props: {
    orderData: Object,
  },

  data() {
    return {
      getClientsName,
      getNumberWithSpaces,
      simpleFields,
      orderFields,
      itemFields,
    }
  },
}
</script>

<style scoped>
tbody {
  font-size: 12px;
  text-align: left;
}

.table-wrapper {
  width: 100%;
  padding: 5px;
  max-height: 600px;
  overflow-y: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table td,
.data-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.data-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.data-table tbody tr:hover {
  background-color: #ddd;
}

.data-table th {
  padding-top: 12px;
  padding-bottom: 12px;
}

.data-datatable__progress td {
  padding: 0;
  position: relative;
  border: none;
}
</style>

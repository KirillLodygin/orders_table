<template>
  <h1>{{ msg }}</h1>
  <h3>{{ `Заказов найдено: ${getNumberWithSpaces(data.length)}` }}</h3>
  <SearchSection
    :is-data-not-update="isDataNotUpdate"
    @searchById="searchById"
    @searchByDate="searchByDate"
    @isClearFilters="closeModal"
  />
  <div class="content-div">
    <TableBody
      :table-data="data.slice(entriesCounter, entriesCounter + 10)"
      :data-length="data.length"
      :entries-counter="entriesCounter"
      @handlePreviousPageAction="handlePreviousPageAction"
      @handleNextPageAction="handleNextPageAction"
      @searchById="searchById"
    />
  </div>
  <ModalWindow v-show="isModalVisible" :modal-header-string="modalHeaderString" @close="closeModal">
    <template v-slot:body>
      <div v-if="isDataNotUpdate">{{ dataNotUpdateText }}</div>
      <div v-if="isClientDataNotEmpty">
        <OrderInfoTable :order-data="clientData" />
      </div>
    </template>
  </ModalWindow>
</template>

<script>
import axios from 'axios'
import { isEmpty, cloneDeep } from 'lodash'
import { getNumberWithSpaces } from '@/utils/projectUtils'
import { ordersEndpoint, oneOrderEndpoint } from '@/constants/projectConstants'

import TableBody from './TableBody'
import SearchSection from './SearchSection'
import ModalWindow from './ModalWindow'
import OrderInfoTable from './OrderInfoTable'

export default {
  name: 'OrdersTable',
  components: { TableBody, SearchSection, ModalWindow, OrderInfoTable },

  props: {
    msg: String,
  },

  data() {
    return {
      data: [],
      clientData: {},
      entriesCounter: 0,
      dateFrom: '',
      dateTo: '',
      orderStatus: '',
      modalHeaderString: '',
      dataNotUpdateText: '',
      isModalVisible: false,
      isDataNotUpdate: false,
      ordersEndpoint,
      oneOrderEndpoint,
      getNumberWithSpaces,
    }
  },

  mounted: function () {
    this.getOrdersData()
  },

  computed: {
    isClientDataNotEmpty: function () {
      return !isEmpty(this.clientData)
    },
  },

  methods: {
    handlePreviousPageAction() {
      this.entriesCounter -= 10
    },

    handleNextPageAction() {
      this.entriesCounter += 10
    },

    searchById(uid1c) {
      const index = this.data.findIndex((obj) => obj.uid1c === uid1c)

      if (index === -1) {
        this.modalHeaderString = 'Заказ не найден!'
        this.dataNotUpdateText = 'В указанном временном промежутке заказ не найден!'
        this.isDataNotUpdate = true
        this.showModal()
        return
      }

      const url = `${this.oneOrderEndpoint}${this.data[index].id}`
      axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
            token: '57db00716501ed8680306e40f08401ea',
          },
        })
        .then((response) => {
          this.clientData = cloneDeep(response.data.order)
          this.isModalVisible = true
          this.modalHeaderString = 'Данные о клиенте и заказе'
        })
        .catch((error) => console.log(error.response.data))
    },

    getOrdersData() {
      console.log('getOrdersData', this.dateFrom, this.dateTo, this.orderStatus)
      axios
        .get(this.ordersEndpoint, {
          headers: {
            'Content-Type': 'application/json',
            token: '57db00716501ed8680306e40f08401ea',
          },
          params: {
            dateFrom: this.dateFrom,
            dateTo: this.dateTo,
            orderStatus: this.orderStatus,
          },
        })
        .then((response) => {
          if (this.data.length && !response.data.orders.length) {
            this.modalHeaderString = 'Заказов не обнаружено!'
            this.dataNotUpdateText = 'За указанный период заказов не обнаружено!'
            this.isDataNotUpdate = true
            this.showModal()
            return
          }
          this.data = cloneDeep(response.data.orders)
        })
        .catch((error) => console.log(error.response.data))
    },

    searchByDate(dateFrom, dateTo, orderStatus) {
      this.orderStatus = orderStatus
      this.dateFrom = dateFrom
      this.dateTo = dateTo
      this.getOrdersData()
    },

    showModal() {
      this.isModalVisible = true
    },

    closeModal() {
      this.modalHeaderString = ''
      this.isDataNotUpdate = !this.isDataNotUpdate
      this.isModalVisible = false
      this.clientData = cloneDeep({})
      this.dateFrom = ''
      this.dateTo = ''
      this.orderStatus = ''
      this.getOrdersData()
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

.content-div {
  margin-top: 20px;
  min-height: 400px;
  max-height: 900px;
  overflow-y: auto;
  overflow-x: auto;
}
</style>

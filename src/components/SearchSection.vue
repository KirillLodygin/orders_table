<template>
  <div class="wrapper">
    <div class="text-field">
      <button class="text-field__btn" type="button" @click="isClearFilters">Сбросить фильтры</button>
    </div>

    <div class="text-field">
      <label class="text-field__label" for="search">Номер заказа</label>
      <div class="text-field__group">
        <input v-model="idName" class="text-field__input" type="search" id="search" name="search" />
        <button class="text-field__btn" type="button" :disabled="!idName" @click="searchById">Найти</button>
      </div>
    </div>

    <div class="group-field">
      <div class="text-field">
        <label class="text-field__label" for="search">Начало периода</label>
        <div class="text-field__group">
          <input v-model="dateFrom" class="text-field__input" type="date" id="dateFromSearch" name="search" />
        </div>
      </div>

      <div class="text-field__group">—</div>

      <div class="text-field">
        <label class="text-field__label" for="search">Конец периода</label>
        <div class="text-field__group">
          <input v-model="dateTo" class="text-field__input" type="date" id="dateToSearch" name="search" />
        </div>
      </div>

    </div>

    <div class="text-field">
      <label class="text-field__label" for="multi-select">Статус заказа</label>
      <div class="text-field__group">
        <select :key="String(isDataNotUpdate)" multiple id="multi-select" v-model="orderStatus">
          <option v-for="option in orderStatusDropdown" :key="option.label" :value="option.value">
            {{ option.label }}
          </option>
        </select>
        <span class="focus"></span>
        <button class="text-field__btn" type="button" @click="searchByDate">Найти</button>
      </div>
    </div>
  </div>
</template>

<script>
import { orderStatusDropdown } from '@/constants/projectConstants'
// import Multiselect from 'vue-multiselect'

export default {
  name: 'SearchSection',
  // components: { Multiselect },

  props: {
    isDataNotUpdate: Boolean,
  },

  data() {
    return {
      idName: '',
      dateFrom: '',
      dateTo: '',
      orderStatus: [],
      orderStatusDropdown,
    }
  },

  watch: {
    isDataNotUpdate: function (val, oldVal) {
      console.log('watch ', val, oldVal)
      if (val) {
        this.dateFrom = ''
        this.dateTo = ''
        this.orderStatus = []
      }
    },
  },

  methods: {
    searchById() {
      this.$emit('searchById', this.idName)
    },

    searchByDate() {
      this.$emit('searchByDate', this.dateFrom, this.dateTo, this.orderStatus.join(','))
    },

    isClearFilters() {
      this.idName = ''
      this.$emit('isClearFilters')
    }
  },
}
</script>

<style scoped>
.wrapper {
  margin: 10px;
  padding-left: 10px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 50px;
}

.text-field {
  text-align: left;
}

.group-field {
  display: flex;
  justify-content: left;
  gap: 5px;
}

.text-field__group {
  display: flex;
  align-items: center;
  gap: 5px;
}

.text-field__input {
  height: 40px;
}
/* кнопка */
.text-field__btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: #eee;
  border: 1px solid #bdbdbd;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease-in-out;
}
.text-field__btn:hover {
  background-color: #bdbdbd;
}
/*.text-field__group .text-field__input {*/
/*  border-top-right-radius: 0;*/
/*  border-bottom-right-radius: 0;*/
/*  position: relative;*/
/*  z-index: 2;*/
/*}*/
/*.text-field__group .text-field__btn {*/
/*  position: relative;*/
/*  border-top-left-radius: 0;*/
/*  border-bottom-left-radius: 0;*/
/*  border-left-width: 0;*/
/*}*/
</style>

<template>
  <table class="data-table">
    <thead>
      <tr :class="{ 'data-table__row_loading': !tableData.length }">
        <th
          v-for="cell in tableHeaders"
          :key="cell.field"
          :style="{ width: cell.label.width, minWidth: cell.label.width }"
        >
          {{ cell.label }}
        </th>
      </tr>

      <tr v-if="!tableData.length" class="data-datatable__progress">
        <td :colspan="tableHeaders.length">
          <div class="progress-bar">
            <div class="progress-bar__value"></div>
          </div>
        </td>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="object in tableData"
        :key="object.field"
        :class="{ 'data-table__row_loading': !tableData.length }"
        @dblclick="$emit('searchById', object.uid1c)"
      >
        <td
          v-for="cell in tableHeaders"
          :key="`${cell.field}_${object.uid1c}`"
          :style="{ width: cell.label.width, minWidth: cell.label.width }"
        >
          <div v-if="simpleFields.includes(cell.field)">
            {{ object[cell.field] }}
          </div>
          <div v-if="fieldsWithMethod.includes(cell.field)">
            {{ object[cell.field].method.title }}
          </div>
          <div v-if="cell.field === 'client'">
            {{ getClientsName(object[cell.field]) }}
          </div>
          <div v-if="cell.field === 'amount'">
            {{ getNumberWithSpaces(object[cell.field]) }}
          </div>
          <div
            v-if="cell.field === 'status'"
            :style="{ color: getStatusStyle(object.status.id) }"
          >
            {{ object.status.title }}
          </div>
          <div v-if="cell.field === 'date'">
            {{ object.shipment[cell.field] }}
          </div>
          <div v-if="cell.field === 'shop'">{{ object[cell.field].title }}</div>
        </td>
      </tr>
    </tbody>

    <tfoot v-if="dataLength">
      <tr>
        <td :colspan="tableHeaders.length">
          <div class="data-table__footer-content">
            <button
              class="icon-btn"
              :disabled="entriesCounter === 0"
              @click="$emit('handlePreviousPageAction')"
            >
              <SvgIcon type="mdi" :path="previousIcon"></SvgIcon>
            </button>
            {{
              ` page #${entriesCounter / 10 + 1} from ${Math.floor(
                dataLength / 10
              )}`
            }}
            <button
              class="icon-btn"
              :disabled="entriesCounter >= dataLength"
              @click="$emit('handleNextPageAction')"
            >
              <SvgIcon type="mdi" :path="nextIcon"></SvgIcon>
            </button>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import {
  tableHeaders,
  simpleFields,
  fieldsWithMethod,
} from "@/constants/projectConstants";
import {
  getClientsName,
  getNumberWithSpaces,
  getStatusStyle,
} from "@/utils/projectUtils";
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiArrowLeft as previousIcon,
  mdiArrowRight as nextIcon,
  mdiArrowDown as ascSortIcon,
  mdiArrowUp as descSortIcon,
} from "@mdi/js";

export default {
  name: "TableBody",
  components: { SvgIcon },

  props: {
    tableData: Object,
    dataLength: Number,
    entriesCounter: Number,
  },

  data() {
    return {
      getNumberWithSpaces,
      getClientsName,
      getStatusStyle,
      tableHeaders,
      simpleFields,
      fieldsWithMethod,
      previousIcon,
      nextIcon,
      ascSortIcon,
      descSortIcon,
    };
  },

  methods: {},
};
</script>

<style scoped>
thead {
  vertical-align: top;
  text-align: center;
  position: sticky;
  top: 0;
  background-color: #a5a5a5;
}

tbody {
  font-size: 12px;
  text-align: left;
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

.data-table__row_loading {
  opacity: 0.5;
}

.data-datatable__progress td {
  padding: 0;
  position: relative;
  border: none;
}

.data-datatable__progress .progress-bar {
  position: absolute;
  left: 0;
  bottom: 0;
}

.data-table__footer-content {
  display: flex;
  align-items: center;
  justify-content: right;
}
</style>

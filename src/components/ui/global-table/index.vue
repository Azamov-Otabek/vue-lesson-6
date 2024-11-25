<script setup>
    import {defineProps} from 'vue'

    const props = defineProps({
        data: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: true
        }
    })

    
const toggleActive = (act) => {
    act.status = act.status == "Active" ? "Inactive" : "Active" 
}

</script>


<template>
  <a-table :columns="columns" :data-source="data">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'customerName'">
        <span>
          <smile-outlined />
          Customer Name
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'status'">
        <a-button type="primary" :class="record.status == 'Active' ? 'activeToggle' : 'inactiveToggle'" @click="toggleActive(record)">{{record.status}}</a-button>
      </template>
    </template>
  </a-table>
</template>


<style lang="scss" scoped src="./_style.scss"></style>

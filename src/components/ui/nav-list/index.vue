<script setup>
  import {defineProps} from 'vue'
  import ArrowRight from '../../../assets/icons/arrow-right.svg'

  const props = defineProps({
    item: {
      type: Object,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  })

</script>

<template>
    <li class="nav-lists">
      <RouterLink class="nav-router-link" :to="props.item.path">
        <img :src="props.icon" alt="Navbar Icons">
        <h3>{{ props.item.name }}</h3>
        <img class="arrow-right" :src="ArrowRight" alt="Icon Arrow Right" />
      </RouterLink>
    </li>
</template>


<style lang="scss" src="./_style.scss" scoped></style>

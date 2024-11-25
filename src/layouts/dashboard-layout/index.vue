<script setup>
import Header from "../../components/header/index.vue";
import Footer from "../../components/footer/index.vue";
import Sidebar from "../../components/sidebar/index.vue";
</script>

<template>
  <div class="dashboard-layout">
    <Sidebar />
    <div class="content-layout">
      <Header />
      <main>
        <RouterView />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" src="./_style.scss" scoped></style>

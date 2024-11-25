<script setup>
    import Logo from '../../assets/icons/side-logo.svg'
    import { routes } from '../../router/index.js'
    import {NavIcons} from '../../constans/index.js'
    import NavList from '../ui/nav-list/index.vue'
    import UserImg from '../../assets/icons/userImg.png'
</script>

<template>
    <aside class="sidebar">
        <div class="sidebar-logo">
            <img :src="Logo" alt="Sidebar Logo">
            <h1>Dashboard</h1>
            <small>v.01</small>
        </div>
        
        <ul class="sidebar-nav">
            <NavList v-for="(item, index) in routes[0].children" :key="index" :item="item" :icon="NavIcons[index]"/>
        </ul>

        <div class="sidebar-premium">
            <h4>Upgrade to  PRO to get access all Features!</h4>
            <button>Get Pro Now!</button>
        </div>

        <div class="sidebar-user-profile">
            <img :src="UserImg" alt="User img profile">
            <div class="sidebar-user-profile--body">
                <h5>Evano</h5>
                <p>Project Manager</p>
            </div>
        </div>

    </aside>
</template>


<style lang="scss" src="./_style.scss" scoped>

</style>
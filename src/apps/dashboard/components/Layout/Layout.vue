<template>
    <div class="flex h-full">
        <Sidebar/>
        <div class="flex flex-col h-full">
            <Header />
            <div class="flex-1">
                <router-view />
            </div>
        </div>
    </div>    
</template>

<script setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';

</script>

<style lang="scss" scoped>

</style>
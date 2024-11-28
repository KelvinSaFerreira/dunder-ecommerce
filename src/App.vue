<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
</script>

<template>
  <div>
    <layout-header />
    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="fade">
          <keep-alive :include="activePageComponentNames">
            <component
              :is="Component"
              :key="route.path"
            />
          </keep-alive>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="scss" module>
.app {
  
}
</style>

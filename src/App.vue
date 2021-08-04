<template lang="pug">

router-view

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ContentModule from '@/store/modules/content'

@Component
export default class App extends Vue {

    mounted (): void {
        ContentModule.fetchData()
    }
}
</script>

<style lang="scss">
@import 'assets/scss/critical';
@import 'assets/scss/main';
</style>

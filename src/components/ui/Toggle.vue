<template lang="pug">
    include ../../tools/mixins

    +b.toggle(
        :class="{'active': isActive}"
        v-on:click="toggleActive"
    )

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class Toggle extends Vue {
    isActive = false

    toggleActive (): void {
        this.isActive = !this.isActive
        this.$emit('change', this.isActive)
        this.$emit('input', this.isActive)
    }
}

</script>


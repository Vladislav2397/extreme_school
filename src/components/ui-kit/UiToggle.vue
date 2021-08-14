<template lang="pug">
include ../../tools/mixins

+b.ui-toggle(
    :class="{'active': isActive}"
    v-on:click="toggleActive"
)

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class UiToggle extends Vue {
    isActive = false

    toggleActive (): void {
        this.isActive = !this.isActive
        this.$emit('change', this.isActive)
        this.$emit('input', this.isActive)
    }
}

</script>

<style lang="scss">
.ui-toggle {
    width: 3rem;
    height: 2rem;
    background-color: rgba(#434aff, 0.08);
    border-radius: 2rem;
    padding: 0.133rem;
    position: relative;
    cursor: pointer;

    &::before {
        position: absolute;
        content: '';
        width: 20 / 12 * 1rem;
        height: 20 / 12 * 1rem;
        border-radius: 50%;
        background-color: #fff;
        left: 2 / 12 * 1rem;
        transition: left 0.3s ease;
    }

    &.active {
        background-color: #434aff;

        &::before {
            left: 14 / 12 * 1rem;
        }
    }
}
</style>

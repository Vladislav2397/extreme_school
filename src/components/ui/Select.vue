<template lang="pug">
    include ../../tools/mixins
    +b.LABEL.select(
        v-on:click="toggleActive()"
    )
        +e.INPUT-COMPONENT.input(
            size="s"
            readonly
            v-on:click="onClick"
            v-model="value"
        )
        +e.UL.list(
            v-show="isActive"
        )
            +e.LI.item(
                v-for="(option, index) in options"
                :key="index"
                v-on:click="setActive(index)"
            ) {{ option.value }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Select extends Vue {
    value = ''

    isActive = false

    @Prop({
        required: true
    }) readonly options!: {id: string | number, value: string}[]

    toggleActive (): void {
        this.isActive = !this.isActive
    }

    setActive (index: number) {
        this.value = this.options[index].value
        this.isActive = false
    }

    onClick (): void {
        console.log('click')
    }

    mounted (): void {
        if (this.options[0]) {
            this.value = this.options[0]?.value
        }
    }
}

</script>

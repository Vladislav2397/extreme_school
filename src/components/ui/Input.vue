<template lang="pug">
    include ../../tools/mixins
    +b.LABEL.input
        +e.INPUT.field(
            :class="fieldClasses"
            :placeholder="placeholder"
            :readonly="readonly"
            :value="value"
            v-on:input="onInput($event.target.value)"
            v-on:click="$emit('click')"
        )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Input extends Vue {
    @Prop({required: true}) value!: string

    @Prop() readonly size!: string

    @Prop() readonly placeholder!: string

    @Prop() readonly readonly!: boolean

    get inputValue (): string {
        return this.value
    }

    set inputValue (value: string) {
        this.value = value
    }

    onInput (value: string): void {
        this.$emit('input', value)
        this.$emit('change', value)
    }

    get fieldClasses (): string[] {
        const classes = []

        if (this.size) classes.push(`input__field--size-${this.size}`)

        return classes
    }
}

</script>

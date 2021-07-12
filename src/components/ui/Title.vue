<template lang="pug">
include ../../tools/mixins

component.title(
    :is="tag"
    :class="classes"
)
    slot

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
    props: {
        tag: {
            type: String,
            default: 'h1'
        },
        align: {
            type: String,
            default: 'left'
        },
        size: {
            type: String,
            default: 'h1'
        },
        weight: {
            type: String,
            default: 'regular'
        }
    }
})
export default class Title extends Vue {
    tag!: string
    align!: string
    size!: string
    weight!: string

    get classes (): string[] {
        const classes = []

        if (this.align) classes.push(`title--align-${this.align}`)

        if (this.size) classes.push(`title--size-${this.size}`)

        if (['light', 'regular', 'medium'].includes(this.weight)) {
            classes.push(`title--weight-${this.weight}`)
        }

        return classes
    }
}
</script>

<template lang="pug">
include ../../tools/mixins

component.title(
    :is="tag"
    :class="classes"
)
    slot

</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
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
    }
})
export default class Title extends Vue {
    tag!: string
    align!: string
    size!: string

    get classes (): string[] {
        const classes = []

        if (this.align) classes.push(`title--align-${this.align}`)

        if (this.size) classes.push(`title--size-${this.size}`)

        return classes
    }
}
</script>

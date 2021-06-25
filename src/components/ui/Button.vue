<template lang="pug">
include ../../tools/mixins

+b.COMPONENT.button(
    :is="tag"
    :class="classes"
)
    +e.SPAN.content(
        v-if="isIconOnly"
    )
        slot
    slot(
        v-else
    )

</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
    props: {
        theme: {
            type: String,
            default: 'primary'
        },
        tag: {
            type: String,
            default: 'button'
        },
        isIconOnly: Boolean,
        icon: String,
    }
})
export default class Button extends Vue {
    theme!: string
    tag!: string
    isIconOnly!: boolean
    icon!: string

    get classes (): string[] {
        const classes = []

        if (this.theme) classes.push(`button--theme-${this.theme}`)

        if (this.isIconOnly) classes.push(
            `button--only-icon button--icon-${this.icon}`
        )

        return classes
    }
}
</script>

<template lang="pug">
include ../../tools/mixins

+b.COMPONENT.button(
    :is="tag"
    :class="classes"
)
    +e.SPAN.content
        slot

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
        isOnlyIcon: String,
        isIcon: Boolean,
    }
})
export default class Button extends Vue {
    theme = 'primary'

    tag = 'button'

    isOnlyIcon = null

    get classes (): string[] {
        const classes = []

        if (this.theme) classes.push(`button--theme-${this.theme}`)

        if (this.isOnlyIcon) classes.push(
            `button--only-icon button--icon-${this.isOnlyIcon}`
        )

        return classes
    }
}
</script>

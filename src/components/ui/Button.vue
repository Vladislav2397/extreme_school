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
        tag: {
            type: String,
            default: 'button'
        },
        theme: {
            type: String,
            default: 'primary'
        },
        icon: String,
        isIconOnly: Boolean
    }
})
export default class Button extends Vue {
    theme!: string
    tag!: string
    icon!: string
    iconState!: string
    isIconOnly!: boolean

    get classes (): string[] {
        const classes = []

        if (this.theme) classes.push(`button--theme-${this.theme}`)

        if (['arrow'].includes(this.icon)) {
            classes.push(`button--icon-${this.icon}`)
        }

        if (this.isIconOnly)
            classes.push('button--shape-circle')
        else
            classes.push('button--shape-standard')

        return classes
    }
}
</script>

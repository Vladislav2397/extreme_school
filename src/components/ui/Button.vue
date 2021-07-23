<template lang="pug">
include ../../tools/mixins

+b.COMPONENT.button(
    :is="tag"
    :class="classes"
    @click="$emit('click', $event)"
)
    slot(
        v-if="type === 'icon'"
    )
    +e.SPAN.content(
        v-else
    )
        slot

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Button extends Vue {

    @Prop({
        default: 'button',
        validator(value: string) {
            return ['button', 'a', 'div'].includes(value)
        }
    }) readonly tag!: string

    @Prop({
        default: 'primary',
        validator(value: string) {
            return ['primary', 'secondary'].includes(value)
        }
    }) readonly theme!: string

    @Prop({
        validator(value: string) {
            return ['text', 'icon', 'text-icon', 'icon-text'].includes(value)
        }
    }) readonly type!: string

    @Prop({
        validator(value: string) {
            return ['chevron-left', 'chevron-right'].includes(value)
        }
    }) readonly icon!: string

    get classes (): string[] {
        const classes = []

        if (this.theme) classes.push(`button--theme-${this.theme}`)

        if (this.type) classes.push(`button--type-${this.type}`)

        if (this.icon) classes.push(`button--icon-${this.icon}`)

        return classes
    }
}
</script>

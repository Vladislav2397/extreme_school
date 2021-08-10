<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'
import {
    buttonViewNameTypes,
    tagNameTypes,
} from '@/types/mixins'
// import IsIcon from '@/mixins/ui/button/IsIcon'
import { themeNameTypes } from '@/types/mixins'

@Component
export default class ButtonRender extends Vue {
    @Prop({default: 'button'}) readonly tag!: tagNameTypes

    @Prop({default: 'text'}) readonly view!: buttonViewNameTypes

    @Prop({default: 'primary'}) readonly theme!: themeNameTypes

    @Prop() readonly href!: string | undefined

    @Prop() readonly icon!: string | undefined

    @Prop() readonly content!: string | undefined

    @Prop() readonly iconLeft!: boolean

    get classes (): string[] {
        const classes = ['button']

        if (this.theme) classes.push(`button--theme-${this.theme}`)

        if (this.view) classes.push(`button--view-${this.view}`)

        if (this.icon) {
            classes.push(`button--icon button--icon-${this.icon}`)

            if (this.iconLeft) {
                classes.push('button--icon-left')
            } else {
                classes.push('button--icon-right')
            }
        }

        return classes
    }

    get target (): string | undefined {
        return this.tag === 'a' && this.href && /(tel|mailto)/.test(this.href)
            ? '_blank' : undefined
    }

    get rel (): string | undefined {
        return this.target ? 'noopener noreferrer' : undefined
    }

    clickHandler (): void {
        this.$emit('click')
    }

    render (createElement: CreateElement): VNode {
        const tag = this.tag

        const settings = {
            class: this.classes,
            attrs: {
                target: this.target,
                rel: this.rel,
            },
            on: {
                click: this.clickHandler
            }
        }

        const content = this.view !== 'icon'
            ? this.content || this.$slots.default
            : ''
        return createElement(tag, settings, content)
    }
}
</script>

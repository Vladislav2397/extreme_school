<template lang="pug">
include ../../tools/mixins

+b.ui-kit
    +e.container.container
        +e.inner
            +e.component(
                v-for="component in components"
            )
                +e.preview
                    component(
                        :is="`${component.name}-component`"
                        :tag="component.state.tag"
                        :theme="component.state.theme"
                        :type="component.state.type"
                    ) {{ component.name }}
                +e.settings
                    template(
                        v-for="(elem, name) in component"
                    )
                        +e.item(
                            v-if="name !== 'name' && name !== 'state'"
                        )
                            +e.name {{ name }}
                            +e.COMPONENT.field(
                                :is="elem.type"
                                @change="onChange({ name, state: component.state, value: $event.target.value })"
                            )
                                template(
                                    v-if="elem.type === 'select'"
                                )
                                    +e.OPTION.option(
                                        v-for="item in elem.list"
                                    ) {{ item }}
                +e.code

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

declare type IComponent = {
    value: string
    type: string
    list?: string[]
}

@Component
export default class UiKit extends Vue {
    components = [
        {
            name: 'button',
            tag: {
                type: 'select',
                list: [
                    'button',
                    'a',
                    'div'
                ],
            } as IComponent,
            theme: {
                type: 'select',
                list: [
                    'primary',
                    'secondary'
                ]
            } as IComponent,
            type: {
                type: 'select',
                list: [
                    'text',
                    'icon',
                    'icon-text',
                    'text-icon'
                ]
            } as IComponent,
            state: {
                tag: 'button',
                theme: 'primary',
                type: 'text'
            },
        }
    ]

    typeField (attr: string | string[]): string {
        if (typeof attr === 'string') return 'span'
        if (typeof attr === 'object') return 'select'
        return ''
    }

    onChange (payload: any): void {
        payload.state[payload.name] = payload.value
    }
}
</script>

<style lang="scss" scoped>
.ui-kit {
    padding-top: 10rem;

    &__component {
        width: 100%;
        min-height: 20rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__preview,
    &__settings,
    &__code {
        display: inline-block;
        width: 30%;
        height: 20rem;
        vertical-align: top;
        box-shadow: 0 0 12px 1px #000000;
    }

    &__preview {
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__settings {
        background-color: #aaa;
    }

    &__code {
        background-color: #111;
    }
}
</style>

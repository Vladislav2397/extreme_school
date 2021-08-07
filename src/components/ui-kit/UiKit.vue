<template lang="pug">
include ../../tools/mixins

+b.ui-kit
    +e.container.container
        +e.inner
            +e.component(
                v-for="component in components"
            )
                +e.TITLE-COMPONENT.title(
                    tag="h1"
                    size="h1"
                    align="center"
                ) {{ component.name }}
                +e.body
                    +e.preview
                        component(
                            :is="`${component.name}-component`"
                            v-bind="component.state"
                            v-on="component.listeners"
                            v-model="component['v-model']"
                        ) {{ component.name }}
                        p(
                            v-if="'v-model' in component"
                        ) {{ component['v-model'] }}
                    +e.settings
                        template(
                            v-for="(value, key) in component.attrs"
                        )
                            +e.SETTING-COMPONENT.item(
                                :title="key"
                                :attribute="value"
                                v-model="component.state[key]"
                            )

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ButtonRender from '@/components/ui/ButtonRender.vue'
import Toggle from '@/components/ui/Toggle.vue'
import Setting from '@/components/ui-kit/Setting.vue'
import Select from '@/components/ui/Select.vue'

declare type IAttribute = string[] | string | boolean

declare type IComponent = {
    name: string
    attrs?: Record<string, IAttribute>
    'v-model'?: string | boolean
    listeners?: Record<string, (payload: any) => void>
    state?: Record<string, string | any>
}

@Component({
    components: {
        'button-render-component': ButtonRender,
        'setting-component': Setting,
        'toggle-component': Toggle,
        'select-component': Select,
    }
})
export default class UiKit extends Vue {
    components: IComponent[] = [
        {
            name: 'button-render',
            attrs: {
                tag: [
                    'button',
                    'a',
                    'div'
                ],
                view: [
                    'text',
                    'icon',
                    'icon-text',
                    'text-icon'
                ],
                theme: [
                    'primary',
                    'secondary'
                ],
                icon: 'brand-facebook'
            },
            listeners: {
                change (payload: { value: string }): void {
                    console.log('change', payload)
                }
            },
            state: {
                tag: 'button',
                view: 'text',
                theme: 'primary'
            }
        },
        {
            name: 'input',
            'v-model': '',
            attrs: {
                size: [
                    's',
                    'm',
                    'l'
                ],
                placeholder: '',
                readonly: true
            },
            listeners: {
                input (payload: string): void {
                    console.log('input', payload)
                }
            },
            state: {
                placeholder: 'Placeholder',
                size: 's'
            }
        },
        {
            name: 'toggle',
            'v-model': false,
            listeners: {
                input (value: string): void {
                    console.log('toggle v-model value', value)
                }
            }
        },
        {
            name: 'select',
            state: {
                options: [
                    {
                        id: 1,
                        value: 'some'
                    },
                    {
                        id: 2,
                        value: 'unknown'
                    },
                    {
                        id: 3,
                        value: 'variable'
                    }
                ]
            }
        },
        {
            name: 'title',
            attrs: {
                tag: [
                    'h1',
                    'h2',
                    'h3'
                ],
                size: [
                    'h1',
                    'h2',
                    'h3'
                ],
                align: [
                    'left',
                    'center'
                ],
                weight: [
                    'light',
                    'regular',
                    'medium'
                ]
            },
            state: {
                tag: 'h1',
                size: 'h1',
                align: 'left',
                weight: 'regular'
            }
        }
    ]

    onChange (payload: any): void {
        payload.state[payload.name] = payload.value
    }
}
</script>

<style lang="scss">
.ui-kit {
    padding: 10rem 0;

    &__component {
        & + & {
            margin-top: 50px;
        }
    }

    &__title {
        margin-bottom: 40px;
    }

    &__body {
        width: 100%;
        min-height: 20rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & + & {
            margin-top: 30px;
        }
    }

    &__preview,
    &__settings {
        width: 30%;
        height: 20rem;
        vertical-align: top;
        box-shadow: 0 0 12px 1px #000000;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__preview {
        width: 65%;
        flex-direction: column;
        justify-content: space-evenly;
    }

    &__settings {
        flex-direction: column;
        align-items: baseline;
        background-color: #aaa;
    }

    &__code {
        background-color: #111;
    }

    &__item {
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 100%;

        & + & {
            margin-top: 16px;
        }

        h4 {
            display: inline-block;
            min-width: 100px;
        }
    }
}
</style>

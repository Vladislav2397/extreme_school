import { Vue, Component } from 'vue-property-decorator'

declare type IAttribute = string[] | string | boolean

declare type IComponent = {
    name: string
    attrs?: Record<string, IAttribute>
    'v-model'?: string | boolean
    listeners?: Record<string, (payload: any) => void>
    state?: Record<string, string | any>
}

@Component
export default class Components extends Vue {
    components: IComponent[] = [
        // =============== BUTTON ===============
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
        // =============== INPUT ===============
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
        // =============== TOGGLE ===============
        {
            name: 'toggle',
            'v-model': false,
            listeners: {
                input (value: string): void {
                    console.log('toggle v-model value', value)
                }
            }
        },
        // =============== SELECT ===============
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
        // =============== TITLE ===============
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
}

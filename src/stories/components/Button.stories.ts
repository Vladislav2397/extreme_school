import '../../assets/scss/critical.scss'
import '../../assets/scss/main.scss'

import Button from '../../components/ui/Button.vue'

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        },
        tag: {
            control: {
                type: 'select',
                options: ['button', 'a', 'div']
            }
        },
        type: {
            control: {
                type: 'select',
                options: ['text', 'icon', 'text-icon', 'icon-text']
            }
        },
        theme: {
            control: {
                type: 'inline-radio',
                options: [
                    'primary', 'secondary'
                ]
            }
        }
    },
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Template = (args: never, { argTypes: any }) => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    props: Object.keys(argTypes),
    components: { Button },
    template:
        '<Button v-bind="$props" v-on="$listeners">Content</Button>',
})

export const Basic = Template.bind({})

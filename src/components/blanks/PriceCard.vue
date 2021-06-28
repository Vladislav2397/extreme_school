<template lang="pug">
include ../../tools/mixins

+b.price-card(
    :class="classes"
)
    +e.TITLE-COMPONENT.title(
        tag="h3"
        size="h3"
    ) {{ title }}
    +e.body
        +e.section.text(
            v-for="card in cardInfo"
        )
            h4 {{ card.service }}
            p(
                v-for="price in card.prices"
            ) {{ price }}

</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
    props: {
        title: {
            type: String
        },
        size: {
            type: String,
            default: 'medium'
        },
        align: {
            type: String,
            default: 'left'
        },
        cardInfo: {
            type: Array,
            required: true
        }
    }
})
export default class PriceCard extends Vue {
    size!: string
    align!: string

    get classes(): string[] | [] {
        let classes = []

        if (this.size) classes.push(`price-card--size-${this.size}`)

        if (this.align) classes.push(`price-card--align-${this.align}`)

        return classes
    }
}
</script>

<template lang="pug">
include ../../tools/mixins

+b.price-card
    +e.TITLE-COMPONENT.title(
        tag="h3"
        size="h3"
    ) {{ title }}
    +e.information(
        v-for="card in cardInfo"
    )
        +e.subtitle {{ card.title }}
        +e.count(
            v-for="price in card.prices"
        ) {{ price }}

</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

export declare type CardInfo = {
    title: string
    prices: string[]
}

@Options({
    props: {
        title: {
            type: String
        },
        cardInfo: {
            type: Array,
            required: true
        }
    }
})
export default class PriceCard extends Vue {
    cardInfo!: CardInfo[]
}
</script>

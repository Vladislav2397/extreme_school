<template lang="pug">
include ../../tools/mixins

+b.price
    +e.container.container
        +e.inner
            +e.TITLE-COMPONENT.title(
                tag="h2"
                size="h2"
                align="center"
            ) Стоимость
            +e.tab-list
                +e.tab(
                    v-for="(product, index) in content.products"
                    :class="{ 'active': index === productIndex }"
                    v-on:click="setActive(index)"
                ) {{ product.tabName }}
                +e.tab-button Ещё
            +e.card-list
                // TODO: Modificators for view [table, column, row]
                +e.PRICE-CARD-COMPONENT.card(
                    v-for="(card, index) in content.products[productIndex].cards"
                    :size="cardSize"
                    :align="cardAlign(index)"
                    :title="card.title"
                    :cardInfo="card.info"
               )
            +e.BUTTON-COMPONENT.button(
                tag="button"
            ) Оставить заявку


</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PriceCard from '../blanks/PriceCard.vue'
import { IPrice } from '@/store/types/content'
import { IProduct } from '@/store/types'
import ContentModule from '@/store/modules/content'

@Component({
    components: {
        'price-card-component': PriceCard,
    }
})
export default class Price extends Vue {
    productIndex = 0

    get cardSize (): string {
        if (this.activeProduct.cards.length === 1) {
            if (this.activeProduct.cards.length === 1 || this.activeProduct.cards.length === 3) {
                return 'medium'
            } else {
                return 'large'
            }
        }
        return 'small'
    }

    get activeProduct (): IProduct {
        return this.content.products[this.productIndex]
    }

    cardAlign (index: number): string {
        return index !== 0 && index % 2 === 0 ? 'center' : 'left'
    }

    setActive (index: number): void {
        this.productIndex = index
    }

    get content (): IPrice {
        return ContentModule.price
    }
}
</script>

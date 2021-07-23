<template lang="pug">
include ../../tools/mixins

+b.price#costs
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
                +e.PRICE-CARD-COMPONENT.card(
                    v-for="(card, index) in content.products[productIndex].cards"
                    :size="cardSize"
                    :align="cardAlign"
                    :title="card.title"
                    :cardInfo="card.info"
                    :view="cardView"
               )
            +e.BUTTON-COMPONENT.button(
                type="text"
            ) Оставить заявку


</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import PriceCard from '../blanks/PriceCard.vue'
import { IProduct } from '@/store/types'
import ContentModule from '@/store/modules/content'

import device from '@/mixins/utility/device'

@Component({
    components: {
        'price-card-component': PriceCard,
    }
})
export default class Price extends Mixins(device) {
    productIndex = 0
    content = ContentModule.price

    get cardSize (): string {
        if ( !this.device.size.mobile) {
            if (this.activeProduct.cards.length === 1) {
                if (this.activeProduct.cards[0].info.length === 1) {
                    return 'medium'
                } else {
                    return 'large'
                }
            }
        }
        return 'small'
    }

    get activeProduct (): IProduct {
        return this.content.products[this.productIndex]
    }

    get cardView (): string {
        if ( !this.device.size.mobile) {
            if (this.cardSize === 'large' && this.activeProduct.cards.length === 1) {
                return 'row'
            }
        }
        return 'column'
    }

    get cardAlign (): string {
        return this.content.products[this.productIndex].cards.length > 1
            ? 'left'
            : 'center'
    }

    setActive (index: number): void {
        this.productIndex = index
    }
}
</script>

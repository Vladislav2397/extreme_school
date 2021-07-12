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

declare type Product = {
    id: number
    tabName: string
    cards: {
        title: string
        info: {
            service: string
            prices: string[]
        }[]
    }[]
}

@Component({
    components: {
        'price-card-component': PriceCard,
    }
})
export default class Price extends Vue {
    content = {
        products: [
            {
                tabName: 'Скейтборд',
                cards: [
                    {
                        title: 'Тренер',
                        info: [
                            {
                                service: 'Индивидуальные занятия',
                                prices: [
                                    '2 000 ₽/60 мин',
                                    '3 000 ₽/120 мин'
                                ]
                            },
                            {
                                service: 'Групповые занятия',
                                prices: [
                                    '1 000 ₽/60 мин',
                                    '4 500 ₽/5 занятий'
                                ]
                            },
                        ]
                    },
                    {
                        title: 'Топ-Тренер',
                        info: [
                            {
                                service: 'Индивидуальные занятия',
                                prices: [
                                    '2 000 ₽/60 мин',
                                    '3 000 ₽/120 мин'
                                ]
                            },
                            {
                                service: 'Групповые занятия',
                                prices: [
                                    '1 000 ₽/60 мин',
                                    '4 500 ₽/5 занятий'
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                tabName: 'BMX',
                cards: [
                    {
                        title: 'Тренер',
                        info: [
                            {
                                service: 'Индивидуальные занятия',
                                prices: [
                                    '2 000 ₽/60 мин',
                                    '3 000 ₽/120 мин'
                                ]
                            },
                            {
                                service: 'Групповые занятия',
                                prices: [
                                    '1 000 ₽/60 мин',
                                    '4 500 ₽/5 занятий'
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                tabName: 'Самокат',
                cards: [
                    {
                        title: 'Тренер',
                        info: [
                            {
                                service: 'Индивидуальные занятия',
                                prices: [
                                    '2 000 ₽/60 мин',
                                    '3 000 ₽/120 мин'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tabName: 'Лонгборд',
                cards: [
                    {
                        title: 'Тренер',
                        info: [
                            {
                                service: 'Будние дни',
                                prices: [
                                    '2 000 ₽/60 мин',
                                    '3 000 ₽/120 мин'
                                ]
                            },
                            {
                                service: 'Выходные дни',
                                prices: [
                                    '3 000 ₽/60 мин',
                                    '5 000 ₽/120 мин'
                                ]
                            },
                            {
                                service: 'Групповые занятия',
                                prices: [
                                    '1 500 ₽/60 мин',
                                    '7 000 ₽/5 занятий'
                                ]
                            }
                        ]
                    }
                ]
            },
        ] as Product[],
    }

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

    get activeProduct (): Product {
        return this.content.products[this.productIndex]
    }

    cardAlign (index: number): string {
        return index !== 0 && index % 2 === 0 ? 'center' : 'left'
    }

    setActive (index: number): void {
        this.productIndex = index
    }
}
</script>

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
                    v-for="tab in content.tabs"
                    :class="{ 'active': content.activeTabId === tab.id }"
                    v-on:click="setActive(tab.id)"
                ) {{ tab.text }}
                +e.tab-button Ещё
            +e.card-list
                +e.PRICE-CARD-COMPONENT.card(
                    v-for="card in content.cards"
                    :class="{ 'price-card--small' : content.cards.length >= 2 }"
                    :title="card.title"
                    :cardInfo="card.info"
                )
            +e.BUTTON-COMPONENT.button(
                tag="button"
            ) Оставить заявку

</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import PriceCard, { CardInfo } from '../blanks/PriceCard.vue'

declare type PriceCardInfo = {
    title: string,
    info: CardInfo[]
}

@Options({
    components: {
        'price-card-component': PriceCard,
    }
})
export default class Price extends Vue {
    content = {
        activeTabId: 1,
        tabs: [
            {
                id: 1,
                text: 'Скейтборд'
            },
            {
                id: 2,
                text: 'BMX'
            },
            {
                id: 3,
                text: 'Самокат'
            },
            {
                id: 4,
                text: 'Лонгборд'
            },
            {
                id: 5,
                text: 'Ролики'
            }
        ],
        cards: [
            {
                title: 'Тренер',
                info: [
                    {
                        title: 'Индивидуальные занятия',
                        prices: [
                            '2 000 ₽/60 мин',
                            '3 000 ₽/120 мин'
                        ]
                    },
                    {
                        title: 'Групповые занятия',
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
                        title: 'Индивидуальные занятия',
                        prices: [
                            '2 000 ₽/60 мин',
                            '3 000 ₽/120 мин'
                        ]
                    },
                    {
                        title: 'Групповые занятия',
                        prices: [
                            '1 000 ₽/60 мин',
                            '4 500 ₽/5 занятий'
                        ]
                    },
                ]
            }
        ] as PriceCardInfo[]
    }

    setActive (tabId: number): void {
        this.content.activeTabId = tabId
    }
}
</script>

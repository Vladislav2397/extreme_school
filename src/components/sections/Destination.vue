<template lang="pug">
include ../../tools/mixins

+b.SECTION.destination
    +e.container.container
        +e.inner
            +e.TITLE-COMPONENT.title(
                tag="h2"
                size="h2"
                align="center"
            ) Наши направления
            +e.SWIPER.swiper(
                ref="swiper"
                :options="swiperOptions"
            )
                +e.SWIPER-SLIDE.slide(
                    v-for="(card, index) in content.cards"
                    :key="index"
                )
                    +e.image
                        img(
                            :src="card.image"
                           alt=""
                        )
                    +e.caption {{ card.caption }}
            +e.BUTTON-COMPONENT.button--prev.button(
                theme="secondary"
                @click="slidePrev"
                isIconOnly
            )
            +e.BUTTON-COMPONENT.button--next.button(
                theme="secondary"
                @click="slideNext"
                isIconOnly
            )

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import device from '../../mixins/utility/device'

import { SwiperOptions } from 'swiper'

@Component
export default class Destination extends Mixins(device) {
    $refs!: {
        swiper: any
    }

    swiperOptions: SwiperOptions = {
        // lazy: true,
        navigation: {
            nextEl: '.destination__button--next',
            prevEl: '.destination__button--prev'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 16
            },
            414: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            650: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    }

    content = {
        cards: [
            {
                image: 'images/destination/skateboard.jpg',
                caption: 'Скейтборд'
            },
            {
                image: 'images/destination/longboard.jpg',
                caption: 'Лонгборд'
            },
            {
                image: 'images/destination/bmx.jpg',
                caption: 'BMX'
            },
            {
                image: 'images/destination/scooter.jpg',
                caption: 'Самокат'
            },
            {
                image: 'images/destination/skateboard.jpg',
                caption: 'Скейтборд'
            },
            {
                image: 'images/destination/longboard.jpg',
                caption: 'Лонгборд'
            },
            {
                image: 'images/destination/bmx.jpg',
                caption: 'BMX'
            },
            {
                image: 'images/destination/scooter.jpg',
                caption: 'Самокат'
            },
        ]
    }

    mounted (): void {
        console.log(this.$refs.swiper.swiperInstance)
        document.documentElement.addEventListener('resize', this.onResize)
    }

    beforeDestroy (): void {
        document.documentElement.removeEventListener('resize', this.onResize)
    }

    onResize (): void {
        console.log('resize')
        this.$refs.swiper.swiperInstance.init()
    }

    slideNext (): void {
        console.log('slide next')
        this.$refs.swiper.swiperInstance.slideNext(500)
    }

    slidePrev (): void {
        console.log('slide prev')
        this.$refs.swiper.swiperInstance.slidePrev(500)
    }
}
</script>

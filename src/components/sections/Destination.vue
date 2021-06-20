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
                :navigation="swiperNavigation"
                :breakpoints="swiperBreakpoint"
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
            )
            +e.BUTTON-COMPONENT.button--next.button(
                theme="secondary"
            )

</template>

<script lang="ts">
import { Options, mixins } from 'vue-class-component'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import device from '../../mixins/utility/device'

// import 'swiper/swiper.scss'

SwiperCore.use([Navigation])

@Options({
    components: {
        Swiper,
        SwiperSlide
    },
})
export default class Destination extends mixins(device) {
    $refs!: {
        swiper: any
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

    swiperNavigation = {
        nextEl: '.destination__button--next',
        prevEl: '.destination__button--prev'
    }

    swiperBreakpoint = {
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

    mounted (): void {
        document.documentElement.addEventListener('resize', this.onResize)
    }

    beforeDestroy (): void {
        document.documentElement.removeEventListener('resize', this.onResize)
    }

    onResize (): void {
        console.log('resize')
        
        this.$refs.swiper.init()
    }

    slideNext (): void {
        this.$refs.swiper.slideNext()
    }

    slidePrev (): void {
        this.$refs.swiper.slidePrev(500)
    }
}
</script>

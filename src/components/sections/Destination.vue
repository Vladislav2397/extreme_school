<template lang="pug">
include ../../tools/mixins

+b.SECTION.destination
    +e.container.container(
        ref="transitionTrigger"
    )
        transition(
            name="fade-bottom"
        )
            +e.inner(
                v-show="isShow"
            )
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
                        +e.IMAGE-COMPONENT.image(
                            :path="card.image"
                            fallbackExt="jpg"
                        )
                        +e.caption {{ card.caption }}
                +e.BUTTON-COMPONENT.button--prev.button(
                    theme="secondary"
                    type="icon"
                    @click="slidePrev"
                )
                    i.icon-chevron-left
                +e.BUTTON-COMPONENT.button--next.button(
                    theme="secondary"
                    type="icon"
                    @click="slideNext"
                )
                    i.icon-chevron-right

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { SwiperOptions } from 'swiper'

import device from '../../mixins/utility/device'
import ContentModule from '@/store/modules/content'
import FadeTransitionSection from '@/mixins/fadeTransitionSection'

@Component
export default class Destination extends Mixins(device, FadeTransitionSection) {
    content = ContentModule.destination

    $refs!: {
        transitionTrigger: HTMLElement
        swiper: HTMLElement & {
            swiperInstance: {
                init: () => void,
                slideNext: (speed: number) => void,
                slidePrev: (speed: number) => void,
            }
        }
    }

    swiperOptions: SwiperOptions = {
        lazy: true,
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

    mounted (): void {
        document.documentElement.addEventListener('resize', this.onResize)
    }

    beforeDestroy (): void {
        document.documentElement.removeEventListener('resize', this.onResize)
    }

    onResize (): void {
        this.$refs.swiper.swiperInstance.init()
    }

    slideNext (): void {
        this.$refs.swiper.swiperInstance.slideNext(500)
    }

    slidePrev (): void {
        this.$refs.swiper.swiperInstance.slidePrev(500)
    }
}
</script>

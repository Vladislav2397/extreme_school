<template lang="pug">
include ../../tools/mixins

+b.SECTION.skill
    +e.container.container
        +e.inner(
            ref="transitionTrigger"
        )
            transition(
                name="fade-left"
            )
                +e.TITLE-COMPONENT.title(
                    v-show="isShow"
                    tag="h2"
                    size="h2"
                    align="center"
                    v-html="content.title"
                )
            transition(
                name="fade-bottom"
            )
                +e.images(
                    v-show="isShow"
                )
                    +e.SWIPER.swiper(
                        ref="swiper"
                        :options="swiperOptions"
                    )
                        +e.SWIPER-SLIDE.slide(
                            v-for="(image, index) in content.images"
                            :key="index"
                        )
                            +e.image
                                image-component(
                                    :path="image.src"
                                    fallbackExt="jpg"
                                )
                                +e.caption
                                    span(
                                        v-html="image.caption"
                                    )
                    div(
                        v-if="device.size.desktop"
                    )
                        +e.BUTTON-COMPONENT.button--prev(
                            theme="secondary"
                            type="icon"
                            @click="slidePrev"
                        )
                            i.icon-chevron-left
                        +e.BUTTON-COMPONENT.button--next(
                            theme="secondary"
                            type="icon"
                            @click="slideNext"
                        )
                            i.icon-chevron-right

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import device from '@/mixins/utility/device'

import { SwiperOptions } from 'swiper'
import ContentModule from '@/store/modules/content'
import FadeTransitionSection from '@/mixins/fadeTransitionSection'

@Component
export default class Skill extends Mixins(device, FadeTransitionSection) {
    $refs!: {
        swiper: HTMLElement & {
            swiperInstance: {
                init: () => void,
                slideNext: (speed: number) => void,
                slidePrev: (speed: number) => void,
            }
        }
    }

    content = ContentModule.skill

    swiperOptions: SwiperOptions = {
        slidesPerView: 1,
        lazy: true,
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

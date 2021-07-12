<template lang="pug">
include ../../tools/mixins

+b.SECTION.skill
    +e.container.container
        +e.inner
            +e.TITLE-COMPONENT.title(
                tag="h2"
                size="h2"
                align="center"
                v-html="content.title"
            )
            +e.images
                +e.SWIPER.swiper(
                    ref="swiper"
                    :options="swiperOptions"
                )
                    +e.SWIPER-SLIDE.slide(
                        v-for="image in content.images"
                    )
                        +e.image
                            img(
                                :src="image.src"
                                :alt="image.alt"
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
                        @click="slidePrev"
                        isIconOnly
                    )
                    +e.BUTTON-COMPONENT.button--next(
                        theme="secondary"
                        @click="slideNext"
                        isIconOnly
                    )

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import device from '@/mixins/utility/device'

import { SwiperOptions } from 'swiper'

@Component
export default class Skill extends Mixins(device) {
    $refs!: {
        swiper: any
    }

    swiperOptions: SwiperOptions = {
        slidesPerView: 1,
        lazy: true
    }

    content = {
        title: 'Вы точно&nbsp;<u class="blue">научитесь</u>',
        images: [
            {
                src: 'images/skill/1.jpg',
                alt: '',
                caption: 'уверено кататься, выполнять<br>трюки и спортивные элементы '
            },
            {
                src: 'images/skill/2.jpg',
                alt: '',
                caption: 'уверено кататься, выполнять<br>трюки и спортивные элементы '
            },
            {
                src: 'images/skill/3.jpg',
                alt: '',
                caption: 'уверено кататься, выполнять<br>трюки и спортивные элементы '
            },
            {
                src: 'images/skill/4.jpg',
                alt: '',
                caption: 'уверено кататься, выполнять<br>трюки и спортивные элементы '
            },
        ]
    }

    mounted (): void {
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
        this.$refs.swiper.swiperInstance.slideNext(500)
    }

    slidePrev (): void {
        this.$refs.swiper.swiperInstance.slidePrev(500)
    }
}
</script>

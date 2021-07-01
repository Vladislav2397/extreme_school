<template lang="pug">
include ../../tools/mixins

+b.skill
    +e.container.container
        +e.inner
            +e.TITLE-COMPONENT.title(
                tag="h2"
                size="h2"
                align="center"
                v-html="content.title"
            )
            +e.SWIPER.swiper(
                :pagination="{ clickable: true }"
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

</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination } from 'swiper'

SwiperCore.use([ Pagination ])

@Options({
    components: {
        Swiper,
        SwiperSlide,
    }
})
export default class Skill extends Vue {
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
}
</script>

<template lang="pug">
include ../../tools/mixins

+b.SECTION.destination
    +e.container.container
        +e.inner
            +e.SWIPER.swiper(
                :slides-per-view="3"
                :space-between="50"
            )

</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { Swiper, SwiperSlide } from 'swiper/vue'

@Options({
    components: {
        Swiper,
        SwiperSlide
    }
})
export default class Destination extends Vue {}
</script>

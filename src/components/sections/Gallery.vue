<template lang="pug">
include ../../tools/mixins

+b.gallery
    +e.container.container
        +e.inner
            +e.image(
                v-for="image in device.size.mobile ? content.images.small : content.images.large"
            )
                img(
                    :src="image.src"
                    :alt="image.alt"
                )

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import device from '../../mixins/utility/device'

@Component
export default class Gallery extends Mixins(device) {
    content = {
        images: {
            large: [
                {
                    src: 'images/gallery/large/1.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/large/2.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/large/3.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/large/4.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/large/5.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/large/6.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/large/7.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/large/8.jpg',
                    alt: ''
                }
            ],
            small: [
                {
                    src: 'images/gallery/small/1.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/small/2.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/small/3.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/small/4.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/small/5.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/small/6.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/small/7.jpg',
                    alt: ''
                },
                {
                    src: 'images/gallery/small/8.jpg',
                    alt: ''
                }
            ]
        },
        rows: this.device.size.mobile ? 4 : 2
    }
}
</script>

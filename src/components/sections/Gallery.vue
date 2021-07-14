<template lang="pug">
include ../../tools/mixins

+b.gallery
    +e.container.container
        +e.inner
            +e.image(
                v-for="image in content.images"
            )
                image-component(
                    fallbackExt="jpg"
                    :path="`${content.imagePath}/${imageSize}/${image.name}`"
                    :alt="image.alt"
                )

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import device from '@/mixins/utility/device'

@Component
export default class Gallery extends Mixins(device) {
    content = {
        imagePath: 'images/gallery',
        images: [
            {
                name: '1',
                alt: ''
            },
            {
                name: '2',
                alt: ''
            },
            {
                name: '3',
                alt: ''
            },
            {
                name: '4',
                alt: ''
            },
            {
                name: '5',
                alt: ''
            },
            {
                name: '6',
                alt: ''
            },
            {
                name: '7',
                alt: ''
            },
            {
                name: '8',
                alt: ''
            }
        ],
        rows: 4
    }

    get imageSize (): string {
        return this.device.size.mobile ? 'small' : 'large'
    }
}
</script>

<template lang="pug">
include ../../tools/mixins

+b.gallery
    +e.container.container
        +e.inner
            +e.image(
                v-for="image in content.images"
            )
                img(
                    :src="image.src"
                    :alt="image.alt"
                )

</template>

<script lang="ts">
import { Options, mixins } from 'vue-class-component'

import device from '../../mixins/utility/device'

@Options({})
export default class Gallery extends mixins(device) {
    content = {
        images: [
            {
                src: 'images/gallery/1.jpg',
                alt: ''
            },
            {
                src: 'images/gallery/2.jpg',
                alt: ''
            },
            {
                src: 'images/gallery/3.jpg',
                alt: ''
            },
            {
                src: 'images/gallery/4.jpg',
                alt: ''
            },
            {
                src: 'images/gallery/5.jpg',
                alt: ''
            },
            {
                src: 'images/gallery/6.jpg',
                alt: ''
            },
            {
                src: 'images/gallery/7.jpg',
                alt: ''
            },
            {
                src: 'images/gallery/8.jpg',
                alt: ''
            }
        ],
        rows: this.device.size.mobile ? 4 : 2
    }

    get images (): {src: string, alt: string}[][] {
        const images: [{src: string, alt: string}[]] | [] = []
        // let row: {src: string, alt: string}[] = []
        // this.content.images.forEach((value, index) => {
        //     if (index % 2 !== 0) {
        //         // images.push(row)
        //         row = []
        //     } else {
        //         row.push(value)
        //     }
        // })
        return images
    }
}
</script>

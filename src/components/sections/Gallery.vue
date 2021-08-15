<template lang="pug">
include ../../tools/mixins

+b.gallery
    +e.container.container
        +e.inner(
            ref="transitionTrigger"
        )
            +e.image(
                v-for="(image, index) in content.images"
                :key="index"
            )
                transition(
                    :name="fadeNames[index]"
                )
                    image-component(
                        v-show="isShow"
                        fallbackExt="jpg"
                        :path="`${content.imagePath}/${imageSize}/${image.name}`"
                        :alt="image.alt"
                    )

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import device from '@/mixins/utility/device'
import ContentModule from '@/store/modules/content'
import FadeTransitionSection from '@/mixins/fadeTransitionSection'

@Component
export default class Gallery extends Mixins(device, FadeTransitionSection) {
    content = ContentModule.gallery

    fadeNames = [
        'fade-left',
        'fade-top',
        'fade-top',
        'fade-right',
        'fade-left',
        'fade-bottom',
        'fade-bottom',
        'fade-right'
    ]

    get imageSize (): string {
        return this.device.size.mobile ? 'small' : 'large'
    }
}
</script>

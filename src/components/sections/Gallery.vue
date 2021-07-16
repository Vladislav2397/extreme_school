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
import { IGallery } from '@/store/types/content'
import ContentModule from '@/store/modules/content'

@Component
export default class Gallery extends Mixins(device) {
    get imageSize (): string {
        return this.device.size.mobile ? 'small' : 'large'
    }

    get content (): IGallery {
        return ContentModule.gallery
    }
}
</script>

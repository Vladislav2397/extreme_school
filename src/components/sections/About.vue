<template lang="pug">
include ../../tools/mixins

+b.about
    +e.container.container
        +e.inner
            +e.image
                img(
                    :src="imageSize"
                    :alt="content.image.desktop.alt"
                )
            +e.author
                +e.TITLE-COMPONENT.name(
                    tag="h2"
                    size="h2"
                ) {{ content.author.name }}
                +e.status {{ content.author.status }}
                +e.description(
                    v-html="content.author.description"
                )
                +e.UL.links
                    +e.LI.link(
                        v-for="link in content.author.links"
                    )
                        a(
                            :href="link.href"
                        ) {{ link.text }}
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import ContentModule from '@/store/modules/content'

import device from '@/mixins/utility/device'

@Component
export default class About extends Mixins(device) {
    content = ContentModule.about

    get imageSize (): string {
        return this.device.size.mobile && this.content.image.mobile
            ? this.content.image.mobile.src
            : this.content.image.desktop.src
    }
}
</script>

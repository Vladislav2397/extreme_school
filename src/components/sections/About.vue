<template lang="pug">
include ../../tools/mixins

+b.about
    +e.container.container
        +e.inner
            +e.IMAGE-COMPONENT.image(
                :path="imagePath"
                fallbackExt="jpg"
                :alt="content.image.alt"
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
import { IAbout } from '@/store/types/content'

@Component
export default class About extends Mixins(device) {
    get content (): IAbout {
        return ContentModule.about
    }

    get imagePath (): string {
        if (this.content && this.device) {
            return this.device?.size?.mobile
                ? this.content?.image?.mobile?.src || ''
                : this.content?.image?.desktop?.src || ''
        }
        return ''
    }
}
</script>

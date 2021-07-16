<template lang="pug">
include ../../tools/mixins

+b.SECTION.intro
    +e.container.container
        +e.image(
            v-if="isMounted"
            :style="backgroundImageStyle"
        )
            // maybe will need img tag
        +e.inner
            +e.TITLE-COMPONENT.title(
                v-html="content.title"
            )
            +e.description(
                v-html="content.description"
            )
            +e.BUTTON-COMPONENT(
                tag="button"
                theme="primary"
            ) Записаться

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import device from '@/mixins/utility/device'
import { IIntro } from '@/store/types/content'
import ContentModule from '@/store/modules/content'

@Component
export default class Intro extends Mixins(device) {
    isMounted = false

    mounted (): void {
        this.isMounted = true
    }

    get content (): IIntro {
        return ContentModule.intro
    }

    get backgroundImageStyle (): Record<string, string> {
        return { 'background-image': `url(${this.getImage})` }
    }

    get getImage (): string {
        return this.device.size.mobile
            ? this.content.image.mobile.src
            : this.content.image.desktop.src
    }
}
</script>

<template lang="pug">
include ../../tools/mixins

+b.SECTION.intro
    +e.container.container
        +e.image(
            v-if="isMounted"
            :style="backgroundImageStyle"
        )
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
                type="text"
            ) Записаться

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import device from '@/mixins/utility/device'
import ContentModule from '@/store/modules/content'

// todo: Fix container max-width on 2560px
@Component
export default class Intro extends Mixins(device) {
    isMounted = false
    content = ContentModule.intro

    mounted (): void {
        this.isMounted = true
    }

    get backgroundImageStyle (): Record<string, string> {
        return { 'background-image': `url(${this.getImage})` }
    }

    get getImage (): string | undefined {
        return this.device.size.mobile
            ? this.content.image.mobile?.src
            : this.content.image.desktop.src
    }
}
</script>

<template lang="pug">
include ../../tools/mixins

+b.HEADER.header(
    :class="{ 'header--fixed': isScroll }"
)
    +e.container.container
        +e.inner
            +e.logo True #[br] School
            +e.menu
                +e.list
                    +e.A.item(
                        v-for="link in content.links"
                        :href="link.href"
                    ) {{ link.name }}
                +e.A.phone(
                    :href="content.phone.href"
                ) {{ content.phone.name }}
            //+e.BUTTON-COMPONENT.button(
            //    tag="button"
            //) Записаться

            +e.burger(
                v-if="!device.size.desktop"
            )
                i
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import ContentModule from '@/store/modules/content'

import device from '@/mixins/utility/device'

// todo: Create header collapse on mobile
@Component
export default class TheHeader extends Mixins(device) {
    $refs!: {
        header: HTMLElement
    }

    isScroll = false
    content = ContentModule.header

    mounted (): void {
        this.content.links[0].name
        window.addEventListener('scroll', this.onScroll)
    }

    onScroll (): void {
        this.isScroll =
            document.documentElement.getBoundingClientRect().top < -30 + 12
    }
}
</script>

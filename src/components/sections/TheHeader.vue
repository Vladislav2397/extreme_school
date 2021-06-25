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
import { mixins } from 'vue-class-component'

import device from '../../mixins/utility/device'

export default class TheHeader extends mixins(device) {
    $refs!: {
        header: HTMLElement
    }

    content = {
        links: [
            {
                name: 'Направления',
                href: '#'
            },
            {
                name: 'Тренеры',
                href: '#'
            },
            {
                name: 'Стоимость',
                href: '#'
            },
            {
                name: 'Контакты',
                href: '#'
            },
            {
                name: 'Блог',
                href: '#'
            },
        ],
        phone: {
            name: '8 977 811-23-56',
            href: '#'
        },
    }

    isScroll = false

    mounted (): void {
        window.addEventListener('scroll', this.onScroll)
    }

    onScroll (): void {
        this.isScroll =
            document.documentElement.getBoundingClientRect().top < -30 + 12
    }
}
</script>

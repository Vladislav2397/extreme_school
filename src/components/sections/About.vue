<template lang="pug">
include ../../tools/mixins

+b.about
    +e.container.container
        +e.inner
            +e.image
                img(
                    :src="content.image.src"
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
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class About extends Vue {
    content = {
        image: {
            src: 'images/about/about.jpg',
            alt: ''
        },
        author: {
            name: 'Дмитрий',
            status: 'Основатель школы',
            description:
                'Я собрал лучших специалистов для вашего комфортного ' +
                'обучения по разным направлениям.<br><br>' +
                'Мы очень ценим каждого нашего ученика и для тех, ' +
                'кто планирует развиваться вместе с нами ' +
                'на&nbsp;постоянной основе, мы предоставляем очень ' +
                'приятные бонусы: скидки на абонементы, интенсивы ' +
                'и нашу фирменную одежду.',
            links: [
                {
                    href: '#',
                    text: 'Instagram'
                },
                {
                    href: '#',
                    text: 'VK'
                },
                {
                    href: '#',
                    text: 'Facebook'
                },
            ]
        }
    }
}
</script>

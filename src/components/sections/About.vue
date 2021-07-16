<template lang="pug">
include ../../tools/mixins

+b.about
    +e.container.container
        +e.inner
            +e.image
                img(
                    :src="content.image.desktop.src"
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
import { Vue, Component } from 'vue-property-decorator'
import ContentModule from '@/store/modules/content'

@Component
export default class About extends Vue {
    content = ContentModule.about
}
</script>

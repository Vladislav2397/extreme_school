<template lang="pug">
    include ../../tools/mixins
    +b.the-footer
        +e.container.container
            +e.logo TRUE#[br]SCHOOL
            +e.list
                +e.column(
                    v-for="(column, index) in content.columns"
                    :key="index"
                    :class="columnClasses(index)"
                )
                    h5 {{ column.title }}
                    +e.link(
                        v-for="(link, index) in column.links"
                        :key="index"
                        :is="link.href ? 'a' : 'span'"
                        :href="link.href"
                    ) {{ link.text }}
            +e.information {{ content.information }}

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import ContentModule from '@/store/modules/content'

@Component
export default class TheFooter extends Vue {
    content = ContentModule.footer

    columnClasses (index: number): string[] {
        const classes = []

        if (index <= 1) classes.push('the-footer__column--top')

        if (index % 2 === 1) classes.push('the-footer__column--even')

        return classes
    }
}

</script>

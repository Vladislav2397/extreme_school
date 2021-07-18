<template lang="pug">
    include ../../tools/mixins

    +b.social
        +e.container.container
            +e.TITLE-COMPONENT.title(
                tag="h2"
                size="h2"
                align="center"
                v-html="content.title"
            )
            +e.list
                +e.item(
                    v-for="(item, index) in content.links"
                    :key="index"
                )
                    i(
                        :class="`icon-${item.icon}`"
                    )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ContentModule from '@/store/modules/content'

@Component
export default class Social extends Vue {
    content = ContentModule.social
}

</script>

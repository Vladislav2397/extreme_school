<template lang="pug">
include ../../tools/mixins

+b.feedback
    +e.container.container--wide
        +e.inner
            +e.TITLE-COMPONENT.title(
                tag="h2"
                size="h2"
                align="center"
                v-html="content.title"
            )
            +e.comments
                +e.card(
                    v-for="(comment, index) in content.comments"
                    :key="index"
                )
                    +e.image
                        img(
                            :src="comment.image.src"
                            :alt="comment.image.alt"
                        )
                    +e.content
                        +e.name {{ comment.name }}
                        +e.text {{ comment.text }}

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { IFeedback } from '@/store/types/content'
import ContentModule from '@/store/modules/content'

@Component
export default class Feedback extends Vue {
    get content (): IFeedback {
        return ContentModule.feedback
    }
}
</script>

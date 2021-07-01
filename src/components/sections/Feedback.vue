<template lang="pug">
include ../../tools/mixins

+b.feedback
    +e.container.container
        +e.inner
            +e.TITLE-COMPONENT.title(
                tag="h2"
                size="h2"
                align="center"
                v-html="content.title"
            )
            +e.comments
                +e.card
                    +e.image
                        img(
                            src=""
                            alt=""
                        )
                    +e.name
                    +e.text


</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({})
export default class Feedback extends Vue {
    content = {
        title: 'Ученики <u class="blue">о нас</u>',
        comments: [
            {
                image: {
                    src: '',
                    alt: ''
                },
                name: '',
                text: ''
            }
        ]
    }
}
</script>

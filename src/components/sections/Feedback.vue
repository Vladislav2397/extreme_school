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

@Component({})
export default class Feedback extends Vue {
    content = {
        title: 'Ученики <u class="blue">о нас</u>',
        comments: [
            {
                image: {
                    src: '',
                    alt: ''
                },
                name: 'Анна',
                text: 'Нашла в инстаграме инструктора @true_school. Дим, спасибо! Без нудятины, чётко по делу, встали и поехали))'
            },
            {
                image: {
                    src: '',
                    alt: ''
                },
                name: 'Владимир',
                text: 'Дмитрий, спасибо за тренировку! Вы хороший тренер!'
            },
            {
                image: {
                    src: '',
                    alt: ''
                },
                name: 'Кристина',
                text: 'Дима меньше чем за час поставил сына на доску! То ли ещё будет :))'
            },
        ]
    }
}
</script>

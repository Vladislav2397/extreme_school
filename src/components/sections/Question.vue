<template lang="pug">
include ../../tools/mixins

+b.question
    +e.container.container
        +e.inner
            +e.TITLE-COMPONENT.title(
                tag="h2"
                size="h2"
                align="center"
                v-html="content.title"
            )
            +e.list
                +e.CARD-QUESTION-COMPONENT.item(
                    v-for="(question, index) in content.questions"
                    :key="index"
                    :title="question.title"
                    :content="question.content"
                    :isActive="content.activeIndexes.includes(index)"
                )

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CardQuestion from '../blanks/CardQuestion.vue'

@Component({
    components: {
        'card-question-component': CardQuestion
    }
})
export default class Question extends Vue {
    content = {
        title: 'Есть вопросы?<br>Сейчас ответим',
        activeIndexes: [0],
        questions: [
            {
                title: 'По каким направлениям проходят тренировки?',
                content: ''
            },
            {
                title: 'Кто тренирует?',
                content: ''
            },
            {
                title: 'А взрослым можно обучаться экстремальному спорту?',
                content: ''
            },
            {
                title: 'Какие есть площадки и где проходят тренировки?',
                content: ''
            },
            {
                title: 'С какого возраста берёте детей? Есть ли групповые занятия?',
                content: ''
            },
            {
                title: 'Сколько стоят тренировки?',
                content: ''
            },
        ]
    }
}
</script>

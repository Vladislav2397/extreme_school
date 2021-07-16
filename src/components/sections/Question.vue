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
import { IQuestion } from '@/store/types/content'
import ContentModule from '@/store/modules/content'

@Component({
    components: {
        'card-question-component': CardQuestion
    }
})
export default class Question extends Vue {
    get content (): IQuestion {
        return ContentModule.question
    }
}
</script>

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
                +e.COLLAPSE-COMPONENT.item(
                    v-for="(question, index) in content.questions"
                    :key="index"
                    :content="question.content"
                    :initActive="index === 0"
                )
                    template(
                        v-slot:header
                    )
                        +e.name {{ question.title }}
                        +e.I.icon

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import ContentModule from '@/store/modules/content'

import Collapse from '@/components/ui/Collapse.vue'

@Component({
    components: {
        'collapse-component': Collapse
    }
})
export default class Question extends Vue {
    content = ContentModule.question

    show = true
}
</script>

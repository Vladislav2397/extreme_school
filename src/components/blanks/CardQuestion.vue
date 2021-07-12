<template lang="pug">
include ../../tools/mixins

+b.card-question(
    :class="{ 'active': isActive }"
)
    +e.title {{ title }}
    +e.icon
        i
    +e.content {{ content }}

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CardQuestion extends Vue {

    @Prop() readonly title!: string
    @Prop() readonly content!: string
    @Prop() readonly isActive!: boolean

}
</script>

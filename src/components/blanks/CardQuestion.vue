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
import { Vue, Options } from 'vue-class-component'

@Options({
    props: {
        title: String,
        content: String,
        isActive: Boolean
    }
})
export default class CardQuestion extends Vue {}
</script>

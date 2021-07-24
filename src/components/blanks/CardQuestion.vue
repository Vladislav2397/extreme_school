<template lang="pug">
include ../../tools/mixins

+b.card-question(
    :class="{ 'active': isActive }"
    @click="onClick"
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

    @Prop() readonly active!: boolean

    isActive = this.active

    onClick (): void {
        console.log('card click')
        this.toggle()
    }

    toggle (): void {
        this.isActive = !this.isActive
    }
}
</script>

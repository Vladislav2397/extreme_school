<template lang="pug">
include ../../tools/mixins

+b.price-card(
    :class="classes"
)
    +e.TITLE-COMPONENT.title(
        tag="h3"
        size="h3"
    ) {{ title }}
    +e.body
        +e.section.text(
            v-for="card in cardInfo"
            :class="sectionClasses"
        )
            h4 {{ card.service }}
            p(
                v-for="price in card.prices"
            ) {{ price }}

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class PriceCard extends Vue {
    @Prop() readonly title!: string

    @Prop() readonly size!: string

    @Prop() readonly align!: string

    @Prop() readonly cardInfo!: { service: string, prices: string[] }[]

    @Prop({
        validator(value: string): boolean {
            return ['table', 'column', 'row'].includes(value)
        }
    }) readonly view!: string

    get classes(): string[] | [] {
        let classes = []

        if (this.size) classes.push(`price-card--size-${this.size}`)

        if (this.align) classes.push(`price-card--align-${this.align}`)

        return classes
    }

    get sectionClasses(): string[] | [] {
        const classes = []

        if (this.view) classes.push(`price-card__section--view-${this.view}`)

        return classes
    }
}
</script>

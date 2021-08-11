<template lang="pug">
include ../../tools/mixins

div
    h4 {{ title }}
    template(
        v-if="typeof attribute === 'object' && attribute.length <= 3"
    )
        button.ui-kit-button(
            v-for="attr in attribute"
            v-on:click="onChange(attr)"
        ) {{ attr }}
    template(
        v-else-if="typeof attribute === 'object'"
    )
        select(
            v-on:change="onChange($event.target.value)"
        )
            option(
                v-for="item in attribute"
            ) {{ item }}
    template(
        v-else-if="typeof attribute === 'string'"
    )
        input(
            size="s"
            v-on:change="onChange($event.target.value)"
        )
    template(
        v-else-if="typeof attribute === 'boolean'"
    )
        ui-toggle-component(
            @change="onChange"
            v-model="attribute"
        )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import UiToggle from '@/components/ui-kit/UiToggle.vue'

@Component({
    components: {
        'ui-toggle-component': UiToggle
    }
})
export default class Setting extends Vue {
    @Prop() readonly title!: string

    @Prop() readonly attribute!: string[]

    onChange (value: string | boolean): void {
        this.$emit('input', value)
        console.log('change', value)
    }
}
</script>

<style lang="scss">
button.ui-kit-button {
    padding: 4px 12px;
    background-color: #3c6ea3;
    color: #ffffff;
    border-radius: 8px;
}
</style>

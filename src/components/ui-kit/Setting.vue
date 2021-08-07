<template lang="pug">
include ../../tools/mixins

div
    h4 {{ title }}
    template(
        v-if="typeof attribute === 'object'"
    )
        select(
            v-on:change="onChange($event.target.value)"
        )
            option(
                v-for="item in attribute"
            ) {{ item }}
    template(
        v-if="typeof attribute === 'string'"
    )
        input-component(
            size="s"
            @change="onChange"
        )
    template(
        v-if="typeof attribute === 'boolean'"
    )
        toggle-component(
            @change="onChange"
        )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Toggle from '@/components/ui/Toggle.vue'

@Component({
    components: {
        'toggle-component': Toggle
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

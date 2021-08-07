<template lang="pug">
    include ../../tools/mixins
    +b.collapse(
        :class="{'active': collapse.isActive }"
        v-on:click="toggleCollapse"
    )
        slot(
            name="header"
        )
        +e.content(
            v-if="collapse.isActive"
        )
            +e.container(
                v-html="content"
            )
                slot(
                    name="content"
                )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
class Collapse extends Vue {
    @Prop() readonly title: string | undefined

    @Prop({ default: '' }) readonly content: string | undefined

    @Prop({ default: false }) readonly initActive: boolean | undefined

    $refs!: {
        collapse: HTMLElement
    }

    collapse = {
        isActive: false,
        style: {
            height: '0px' as string | null
        }
    }

    created () : void {
        if (this.initActive) {
            this.collapse.isActive = this.initActive
        }
    }

    mounted () : void {
        //
    }

    toggleCollapse () : void {
        this.collapse.isActive = !this.collapse.isActive
    }
}

export default Collapse

</script>

<template lang="pug">

include ../../tools/mixins

+b.collapse(
    :class="{'active': collapse.active }"
    v-on:click="toggleCollapse"
)
    slot(
        name="header"
    )
    +e.content(
        :style="collapse.style"
    )
        +e.container(
            ref="collapse"
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
    @Prop({default: ''}) readonly content: string | undefined

    @Prop({default: false}) readonly initActive: boolean | undefined

    @Prop() readonly init: boolean | undefined;

    $refs!: {
        collapse: HTMLElement
    }

    collapse = {
        active: false,
        style: {
            height: '0px' as string | null
        }
    }

    created(): void {
        if (this.init) {
            this.collapse.active = this.init
            this.collapse.style.height = null
        }
    }

    mounted(): void {
        if (this.init) {
            this.heightCollapse()
        }
    }

    heightCollapse(): void {
        this.collapse.style.height = `${ this.$refs.collapse.getBoundingClientRect().height }px`
    }

    toggleCollapse(): void {
        if ( !this.collapse.active) {
            setTimeout(() => {
                this.collapse.active = true
            }, 150)
            this.heightCollapse()
        } else {
            this.collapse.active = false
            setTimeout(() => {
                this.collapse.style.height = '0px'
            }, 150)
        }
    }
}

export default Collapse

</script>

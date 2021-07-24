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
            :style="collapse.style"
            v-on:click.stop
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
    @Prop() readonly title: string | undefined

    @Prop() readonly content: string

    @Prop() readonly initActive: boolean

    $refs!: {
        collapse: HTMLElement
    }

    collapse = {
        isActive: false,
        style: {
            height: '0px'
        }
    }

    created () : void {
        if (this.initActive) {
            this.collapse.isActive = this.initActive
            this.collapse.style.height = null
        }
    }

    mounted () : void {
        if (this.initActive) {
            this.heightCollapse()
        }
    }

    heightCollapse () : void {
        this.collapse.style.height =
            `${this.$refs.collapse.getBoundingClientRect().height}px`
    }

    toggleCollapse () : void {
        if (!this.collapse.isActive) {
            setTimeout(() => {
                this.collapse.isActive = true
            }, 150)
            this.heightCollapse()
        } else {
            this.collapse.isActive = false
            setTimeout(() => {
                this.collapse.style.height = '0px'
            }, 150)
        }
    }
}

export default Collapse

</script>

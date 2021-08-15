import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FadeTransitionSection extends Vue {
    isShow = false

    $refs!: {
        transitionTrigger: HTMLElement
    }

    onScroll (): void {
        if (this.$refs?.transitionTrigger.getBoundingClientRect().top <= 600)
            this.isShow = true
    }

    mounted (): void {
        window.addEventListener('scroll', this.onScroll)
    }
}

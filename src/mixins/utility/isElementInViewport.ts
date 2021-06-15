import { Component, Vue } from 'vue-property-decorator'

@Component
export default class IsElementInViewport extends Vue {
    isElementInViewport(el: HTMLElement): boolean {
        const rect = el.getBoundingClientRect()
        return (
            rect.top >= 0
            && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        )
    }
}

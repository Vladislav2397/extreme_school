import { Component, Vue } from 'vue-property-decorator'

@Component
export default class IsAnyElementInViewport extends Vue {
    isAnyElementInViewport(el: HTMLElement): boolean {
        const rect = el.getBoundingClientRect()
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight)
        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0)
        return vertInView
    }
}

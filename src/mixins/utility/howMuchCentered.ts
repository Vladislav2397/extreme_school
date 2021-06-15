import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HowMuchCentered extends Vue {
    howMuchCentered(el: HTMLElement): number {
        const sectionRect = el.getBoundingClientRect()
        return ((sectionRect.top - ((window.innerHeight - sectionRect.height) / 2)) / (sectionRect.height + ((window.innerHeight - sectionRect.height) / 2)))
    }
}

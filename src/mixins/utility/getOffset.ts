import { Component, Vue } from 'vue-property-decorator'

interface IOffset {
    top: number,
    left: number
}

@Component
export default class GetOffset extends Vue {
    getOffset(el : HTMLElement) : IOffset {
        const rect = el.getBoundingClientRect()
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

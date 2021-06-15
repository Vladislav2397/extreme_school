import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HandlerOnEsc extends Vue {
    handlerOnEsc (handler: Function, e: KeyboardEvent) : void {
        const event : KeyboardEvent = e || window.event
        let isEscape = false
        if ('key' in event) {
            isEscape = (event.key === 'Escape' || event.key === 'Esc')
        } else {
            isEscape = (event!.keyCode === 27)
        }
        if (isEscape) {
            handler()
        }
    }
}

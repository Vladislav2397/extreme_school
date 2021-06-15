import { Component, Vue } from 'vue-property-decorator'

@Component
export default class handlerOnEnter extends Vue {
    handlerOnEnter (handler: Function, e: KeyboardEvent) {
        const event: KeyboardEvent = e || window.event
        let isEnter = false
        if ('key' in event) {
            isEnter = (event.key === 'Enter')
        } else {
            isEnter = (event!.keyCode === 13)
        }
        if (isEnter) {
            handler()
        }
    }
}

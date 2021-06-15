import { Component, Vue } from 'vue-property-decorator'

@Component
export default class animateNumber extends Vue {
    animateNumber (start: any, fieldName: string, finish: number | string, time: number): void {
        /* eslint-disable */
        const frameDuration = 1000 / 60
        const totalFrames = Math.round(time / frameDuration)
        const easeOutQuad = t => t * (2 - t)

        let frame = 0

        const finishValue = parseFloat(finish.toString().replace(/\s/g, '').replace(',', '.'))

        const counter = setInterval((): void => {
            frame += 1

            const progress = easeOutQuad(frame / totalFrames)
            const currentCount = parseFloat((finishValue * progress))

            if (start[fieldName] !== currentCount) {
                start[fieldName] = currentCount.toFixed(2)
            }

            if (frame === totalFrames) {
                clearInterval(counter)
            }
        }, frameDuration)
        /* eslint-enable */
    }
}

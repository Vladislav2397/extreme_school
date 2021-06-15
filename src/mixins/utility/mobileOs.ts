import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MobileOs extends Vue {
    isOldIOS = false

    getIOSVersion (): number | boolean {
        const match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/)
        let version

        if (typeof match !== 'undefined' && match !== null) {
            version = [
                parseInt(match[1], 10),
                parseInt(match[2], 10),
                parseInt(match[3] || '0', 10)
            ]
            return parseFloat(version.join('.'))
        }
        return false
    }

    isAndroid () {
        return navigator.userAgent.toLowerCase().indexOf('android') !== -1
    }

    mounted (): void {
        this.isOldIOS = !!this.getIOSVersion() && this.getIOSVersion() < 12
    }
}

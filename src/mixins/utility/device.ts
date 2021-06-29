import { Vue } from 'vue-class-component'

interface IDevice {
    size: {
        mobile: boolean,
        mobileLate: boolean,
        tablet: boolean,
        tabletLate: boolean,
        desktop: boolean
        desktopLate: boolean
    },
    breakpoints: {
        tablet: number,
        tabletLate: number,
        desktop: number
        desktopLate: number
    },
    type: null | string
}

export default class Device extends Vue {
    device: IDevice = {
        size: {
            mobile: false,
            mobileLate: false,
            tablet: false,
            tabletLate: false,
            desktop: false,
            desktopLate: false
        },
        breakpoints: {
            tablet: 650,
            tabletLate: 768,
            desktop: 1024,
            desktopLate: 1440
        },
        type: null
    }

    mounted (): void {
        this.getDeviceSize()
        this.getDeviceType()

        window.addEventListener('resize', this.getDeviceSize)
    }

    beforeDestroy (): void {
        window.removeEventListener('resize', this.getDeviceSize)
    }

    getDeviceSize (): void {
        this.device.size.mobile = window.innerWidth < this.device.breakpoints.tablet
        this.device.size.mobileLate = window.innerWidth < this.device.breakpoints.tabletLate
        this.device.size.tablet = window.innerWidth >= this.device.breakpoints.tablet && window.innerWidth < this.device.breakpoints.desktop
        this.device.size.tabletLate = window.innerWidth >= this.device.breakpoints.tabletLate && window.innerWidth < this.device.breakpoints.desktop
        this.device.size.desktop = window.innerWidth >= this.device.breakpoints.desktop
        this.device.size.desktopLate = window.innerWidth >= this.device.breakpoints.desktopLate
    }

    getDeviceType (): void {
        this.device.type = document.querySelector('meta[property="device"]') ? (document.querySelector('meta[property="device"]') as HTMLMetaElement).content : null
    }
}

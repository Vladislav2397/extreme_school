import { Component, Vue } from 'vue-property-decorator'

@Component
class GetRem extends Vue {
    rem = 0;

    setRemSize () : void {
        this.rem = 12
        if (window.innerWidth >= 400) this.rem = 13.2
        if (window.innerWidth >= 650) this.rem = 12
        if (window.innerWidth >= 1200) this.rem = window.innerWidth / 100
        if (window.innerWidth >= 1440) this.rem = 14.4
    }

    getRemsByPx (px : number) : number {
        return px / 12
    }

    getPxByRems (px : number) : number {
        return (px / 12) * this.rem
    }

    mounted (): void {
        this.setRemSize()
    }
}

export default GetRem

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class decimalNumber extends Vue {
    decimalNumber (value : number) : string {
        if (Number.isNaN(value) || value === null) {
            return '0'
        }

        return parseFloat(value.toString().replace(/\s/g, '').replace(',', '.')).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ').replace('.', ',')
    }
}

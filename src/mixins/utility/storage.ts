import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Storage extends Vue {
    storage = {
        domain: 'https://experts.finaxe.ru' as string,
        imagesDir: 'images' as string
    }
}

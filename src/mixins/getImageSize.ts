import { Component, Mixins } from 'vue-property-decorator'

import device from '@/mixins/utility/device'

declare type Image = {
    desktop: ImageSize,
    tablet?: ImageSize,
    mobile: ImageSize
}

declare type ImageSize = {
    src: string,
    alt: string,
    width: number,
    height: number
}

@Component
export default class GetImageSize extends Mixins(device) {}

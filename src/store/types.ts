export type ILink = {
    name: string
    href: string
}

export type IImageData = {
    src: string
    alt?: string
    width?: number
    height?: number
}

export type IImage = {
    alt?: string
    desktop: IImageData
    medium?: IImageData
    mobile?: IImageData
}

export type ISlide = {
    image: IImageData
    caption: string
}


export type IProduct = {
    tabName: string
    cards: {
        title: string
        info: {
            service: string
            prices: string[]
        }[]
    }[]
}

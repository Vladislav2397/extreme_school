export type ILink = {
    name: string
    href: string
}

export type IImage = {
    desktop: IImageData
    medium?: IImageData
    mobile?: IImageData
}

export type IImageData = {
    src: string
    alt: string
    width?: number
    height?: number
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

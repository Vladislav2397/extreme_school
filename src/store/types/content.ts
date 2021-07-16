import {
    ILink,
    IImage,
    IProduct,
    IImageData
} from '@/store/types'

export type IHeader = {
    links: ILink[]
    phone: ILink
}

export type IIntro = {
    title: string
    description: string
    image: IImage
}

export type IDestination = {
    cards: {
        image: string
        caption: string
    }[]
}

export type IBenefit = {
    image: IImage
    table: {
        title: string
        content: string
    }[][]
}

export type IAbout = {
    image: IImage
    author: {
        name: string
        status: string
        description: string
        links: ILink[]
    }
}

export type ISkill = {
    title: string
    images: {
        src: string
        alt: string
        caption: string
    }[]
}

export type IGallery = {
    imagePath: string
    images: {
        name: string
        alt: string
    }[]
}

export type IPrice = {
    products: IProduct[]
}

export type IFeedback = {
    title: string
    comments: {
        image: IImageData
        name: string
        text: string
    }[]
}

export type IQuestion = {
    title: string
    activeIndexes: number[]
    questions: {
        title: string
        content: string
    }[]
}

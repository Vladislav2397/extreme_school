import store from '@/store/index'
import { getModule, Module, VuexModule } from 'vuex-module-decorators'
import {
    IHeader,
    IIntro,
    IDestination,
    IAbout,
    IBenefit,
    ISkill,
    IGallery,
    IPrice,
    IFeedback,
    IQuestion,
    ISocial,
    IOrder,
    IFooter
} from '@/store/types/content'

@Module({
    name: 'content',
    dynamic: true,
    store,
})
class ContentModule extends VuexModule {
    private _header: IHeader = {
        links: [
            {
                name: 'Направления',
                href: '#'
            },
            {
                name: 'Тренеры',
                href: '#'
            },
            {
                name: 'Стоимость',
                href: '#'
            },
            {
                name: 'Контакты',
                href: '#'
            },
            {
                name: 'Блог',
                href: '#'
            },
        ],
        phone: {
            name: '8 977 811-23-56',
            href: '#'
        },
    }

    private _intro: IIntro = {
        title: 'Школа <u>№1</u> в&nbsp;Москве',
        description: 'Обучаем детей и взрослых: скейт, лонгробрд, BMX, самокат, ролики и&nbsp;другие направления',
        image: {
            // FIXME: Change this image on jpg
            mobile: {
                src: 'images/intro/intro-small.png',
                alt: ''
            },
            desktop: {
                src: 'images/intro/intro-large.png',
                alt: ''
            }
        }
    }

    private _destination: IDestination = {
        cards: [
            {
                image: 'images/destination/skateboard',
                caption: 'Скейтборд'
            },
            {
                image: 'images/destination/longboard',
                caption: 'Лонгборд'
            },
            {
                image: 'images/destination/bmx',
                caption: 'BMX'
            },
            {
                image: 'images/destination/scooter',
                caption: 'Самокат'
            },
            {
                image: 'images/destination/skateboard',
                caption: 'Скейтборд'
            },
            {
                image: 'images/destination/longboard',
                caption: 'Лонгборд'
            },
            {
                image: 'images/destination/bmx',
                caption: 'BMX'
            },
            {
                image: 'images/destination/scooter',
                caption: 'Самокат'
            },
        ]
    }

    private _benefit: IBenefit = {
        image: {
            desktop: {
                src: 'images/benefit/benefit',
                alt: '',
                width: 398,
                height: 318
            },
            mobile: {
                src: 'images/benefit/benefit-small',
                alt: '',
                width: 373,
                height: 220
            }
        },
        table: [
            [
                {
                    title: 'От новичка <br> до профи',
                    content: 'Комплексный подход к&nbsp;тренировкам: занимаемся общей физической подготовкой'
                },
                {
                    title: 'Результат от&nbsp;каждой <br> тренировки',
                    content: 'Сделаем всё, чтобы вы добились нужных результатов'
                }
            ],
            [
                {
                    title: 'Площадки <br> по&nbsp;всей Москве',
                    content: 'Приедем к вам в пределах МКАД'
                },
                {
                    title: 'Бесплатно',
                    content: 'Предоставим защиту и спорт инвертарь'
                },
            ]
        ]
    }

    private _about: IAbout = {
        image: {
            desktop: {
                src: 'images/about/about.jpg',
                alt: '',
                width: 200,
                height: 200
            },
            mobile: {
                src: 'images/about/about.jpg',
                alt: '',
                width: 200,
                height: 200
            }
        },
        author: {
            name: 'Дмитрий',
            status: 'Основатель школы',
            description:
                'Я собрал лучших специалистов для вашего комфортного ' +
            'обучения по разным направлениям.<br><br>' +
            'Мы очень ценим каждого нашего ученика и для тех, ' +
            'кто планирует развиваться вместе с нами ' +
            'на&nbsp;постоянной основе, мы предоставляем очень ' +
            'приятные бонусы: скидки на абонементы, интенсивы ' +
            'и нашу фирменную одежду.',
            links: [
                {
                    href: '#',
                    name: 'Instagram'
                },
                {
                    href: '#',
                    name: 'VK'
                },
                {
                    href: '#',
                    name: 'Facebook'
                },
            ]
        }
    }

    private _skill: ISkill = {
        title: 'Вы точно&nbsp;<u class="blue">научитесь</u>',
        images: [
            {
                src: 'images/skill/1',
                alt: '',
                caption: 'уверено кататься, выполнять<br>трюки и спортивные элементы '
            },
            {
                src: 'images/skill/2',
                alt: '',
                caption: 'уверено кататься, выполнять<br>трюки и спортивные элементы '
            },
            {
                src: 'images/skill/3',
                alt: '',
                caption: 'уверено кататься, выполнять<br>трюки и спортивные элементы '
            },
            {
                src: 'images/skill/4',
                alt: '',
                caption: 'уверено кататься, выполнять<br>трюки и спортивные элементы '
            },
        ]
    }

    private _gallery: IGallery = {
        imagePath: 'images/gallery',
        images: [
            {
                name: '1',
                alt: ''
            },
            {
                name: '2',
                alt: ''
            },
            {
                name: '3',
                alt: ''
            },
            {
                name: '4',
                alt: ''
            },
            {
                name: '5',
                alt: ''
            },
            {
                name: '6',
                alt: ''
            },
            {
                name: '7',
                alt: ''
            },
            {
                name: '8',
                alt: ''
            }
        ],
    }

    private _price: IPrice = {
        products: [
            {
                tabName: 'Скейтборд',
                cards: [
                    {
                        title: 'Тренер',
                        info: [
                            {
                                service: 'Индивидуальные занятия',
                                prices: [
                                    '2 000 ₽/60 мин',
                                    '3 000 ₽/120 мин'
                                ]
                            },
                            {
                                service: 'Групповые занятия',
                                prices: [
                                    '1 000 ₽/60 мин',
                                    '4 500 ₽/5 занятий'
                                ]
                            },
                        ]
                    },
                    {
                        title: 'Топ-Тренер',
                        info: [
                            {
                                service: 'Индивидуальные занятия',
                                prices: [
                                    '2 000 ₽/60 мин',
                                    '3 000 ₽/120 мин'
                                ]
                            },
                            {
                                service: 'Групповые занятия',
                                prices: [
                                    '1 000 ₽/60 мин',
                                    '4 500 ₽/5 занятий'
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                tabName: 'BMX',
                cards: [
                    {
                        title: 'Тренер',
                        info: [
                            {
                                service: 'Индивидуальные занятия',
                                prices: [
                                    '2 000 ₽/60 мин',
                                    '3 000 ₽/120 мин'
                                ]
                            },
                            {
                                service: 'Групповые занятия',
                                prices: [
                                    '1 000 ₽/60 мин',
                                    '4 500 ₽/5 занятий'
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                tabName: 'Самокат',
                cards: [
                    {
                        title: 'Тренер',
                        info: [
                            {
                                service: 'Индивидуальные занятия',
                                prices: [
                                    '2 000 ₽/60 мин',
                                    '3 000 ₽/120 мин'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tabName: 'Лонгборд',
                cards: [
                    {
                        title: 'Тренер',
                        info: [
                            {
                                service: 'Будние дни',
                                prices: [
                                    '2 000 ₽/60 мин',
                                    '3 000 ₽/120 мин'
                                ]
                            },
                            {
                                service: 'Выходные дни',
                                prices: [
                                    '3 000 ₽/60 мин',
                                    '5 000 ₽/120 мин'
                                ]
                            },
                            {
                                service: 'Групповые занятия',
                                prices: [
                                    '1 500 ₽/60 мин',
                                    '7 000 ₽/5 занятий'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

    private _feedback: IFeedback = {
        title: 'Ученики <u class="blue">о нас</u>',
        comments: [
            {
                image: {
                    src: '',
                    alt: ''
                },
                name: 'Анна',
                text: 'Нашла в инстаграме инструктора @true_school. Дим, спасибо! Без нудятины, чётко по делу, встали и поехали))'
            },
            {
                image: {
                    src: '',
                    alt: ''
                },
                name: 'Владимир',
                text: 'Дмитрий, спасибо за тренировку! Вы хороший тренер!'
            },
            {
                image: {
                    src: '',
                    alt: ''
                },
                name: 'Кристина',
                text: 'Дима меньше чем за час поставил сына на доску! То ли ещё будет :))'
            },
        ]
    }

    private _question: IQuestion = {
        title: 'Есть вопросы?<br>Сейчас ответим',
        activeIndexes: [0],
        questions: [
            {
                title: 'По каким направлениям проходят тренировки?',
                content: ''
            },
            {
                title: 'Кто тренирует?',
                content: ''
            },
            {
                title: 'А взрослым можно обучаться экстремальному спорту?',
                content: ''
            },
            {
                title: 'Какие есть площадки и где проходят тренировки?',
                content: ''
            },
            {
                title: 'С какого возраста берёте детей? Есть ли групповые занятия?',
                content: ''
            },
            {
                title: 'Сколько стоят тренировки?',
                content: ''
            },
        ]
    }

    private _social: ISocial = {
        title: 'Мы в <u class="blue">соц.сетях</u>',
        links: [
            {
                icon: 'chevron-left',
                href: '#'
            },
            {
                icon: 'chevron-right',
                href: '#'
            },
            {
                icon: 'chevron-left',
                href: '#'
            },
            {
                icon: 'chevron-right',
                href: '#'
            }
        ]
    }

    private _order: IOrder = {
        title: 'Ждем вас на первое занятие',
        inputs: [
            {
                placeholder: 'Ваше имя',
                value: ''
            },
            {
                placeholder: 'Номер телефона',
                value: ''
            }
        ],
        description: 'Отправляя заявку, вы даете согласие на обработку ваших персональных данных.',
        button: 'Записаться'
    }

    private _footer: IFooter = {
        columns: [
            {
                title: 'Контакты',
                links: [
                    {
                        href: 'tel://89999999999',
                        text: '8 999 999 99 99'
                    },
                    {
                        href: 'mailto://pochta@mail.ru',
                        text: 'pochta@mail.ru'
                    },
                    {
                        href: '#',
                        text: 'Оставить заявку'
                    },
                ]
            },
            {
                title: 'Направления',
                links: [
                    {
                        href: '#',
                        text: 'Скейтборд'
                    },
                    {
                        href: '#',
                        text: 'Лонгборд'
                    },
                    {
                        href: '#',
                        text: 'Самокат'
                    },
                    {
                        href: '#',
                        text: 'Ролики'
                    },
                    {
                        href: '#',
                        text: 'BMX'
                    },
                    {
                        href: '#',
                        text: 'Лыжи'
                    },
                    {
                        href: '#',
                        text: 'Сноуборд'
                    },
                    {
                        href: '#',
                        text: 'Батут'
                    },
                    {
                        href: '#',
                        text: 'Растяжка'
                    }
                ]
            },
            {
                title: 'Мы в соц.сетях',
                links: [
                    {
                        href: '#',
                        text: 'Instagram'
                    },
                    {
                        href: '#',
                        text: 'facebook'
                    },
                    {
                        href: '#',
                        text: 'TikTok'
                    },
                    {
                        href: '#',
                        text: 'YouTube'
                    },
                ]
            },
            {
                title: 'Адреса',
                links: [
                    {
                        href: '',
                        text: 'ул. Лестера 19к3'
                    },
                    {
                        href: '',
                        text: 'ул. Москвичная 2'
                    },
                ]
            },
        ],
        information: 'ИП Костыль А.А.'
    }

    get header (): IHeader {
        return this._header
    }

    get intro (): IIntro {
        return this._intro
    }

    get destination (): IDestination {
        return this._destination
    }

    get benefit (): IBenefit {
        return this._benefit
    }

    get about (): IAbout {
        return this._about
    }

    get skill (): ISkill {
        return this._skill
    }

    get gallery (): IGallery {
        return this._gallery
    }

    get price (): IPrice {
        return this._price
    }

    get feedback (): IFeedback {
        return this._feedback
    }

    get question (): IQuestion {
        return this._question
    }

    get social (): ISocial {
        return this._social
    }

    get order (): IOrder {
        return this._order
    }

    get footer (): IFooter {
        return this._footer
    }
}

export default getModule(ContentModule)

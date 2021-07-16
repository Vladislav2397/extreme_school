import store from '@/store/index'
import { getModule, Module, VuexModule } from 'vuex-module-decorators'
import {
    IHeader,
    IIntro,
    IDestination,
    IBenefit,
    IAbout,
    ISkill,
    IGallery,
    IPrice,
    IFeedback,
    IQuestion
} from '@/store/types/content'

@Module({
    name: 'content',
    dynamic: true,
    store,
})
class ContentModule extends VuexModule {
    header: IHeader = {
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

    intro: IIntro = {
        title: 'Школа <u>№1</u> в&nbsp;Москве',
        description: 'Обучаем детей и взрослых: скейт, лонгробрд, BMX, самокат, ролики и&nbsp;другие направления',
        image: {
            mobile: {
                src: 'images/intro/intro-small.webp',
                alt: ''
            },
            desktop: {
                src: 'images/intro/intro-large.webp',
                alt: ''
            }
        }
    }

    destination: IDestination = {
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

    benefit: IBenefit = {
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

    about: IAbout = {
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

    skill: ISkill = {
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

    gallery: IGallery = {
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

    price: IPrice = {
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

    feedback: IFeedback = {
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

    question: IQuestion = {
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
}

export default getModule(ContentModule)

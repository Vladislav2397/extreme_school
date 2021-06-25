<template lang="pug">
include ../../tools/mixins

+b.SECTION.benefit
    +e.container.container
        +e.inner
            +e.TITLE-COMPONENT.title(
                tag="h2"
                size="h2"
                align="left"
            ) С нами&nbsp;
                u.blue безопасно
            +e.content
                +e.image
                    img(
                        :src="device.size.mobile ? content.image.small.src : content.image.large.src"
                        :alt="device.size.mobile ? content.image.small.alt : content.image.large.alt"
                    )
                +e.table
                    +e.row(
                        v-for="row in content.table"
                    )
                        +e.column(
                            v-for="column in row"
                        )
                            +e.TITLE-COMPONENT.table-title(
                                tag="h3"
                                size="h3"
                                v-html="column.title"
                            )
                            +e.table-content(
                                v-html="column.content"
                            )

</template>

<script lang="ts">
import { Options, mixins } from 'vue-class-component'

import device from '../../mixins/utility/device'

@Options({})
export default class Benefit extends mixins(device) {
    content = {
        image: {
            large: {
                src: 'images/benefit/benefit.png',
                alt: ''
            },
            small: {
                src: 'images/benefit/benefit-small.png',
                alt: ''
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
}
</script>

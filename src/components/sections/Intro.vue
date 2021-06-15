<template lang="pug">
include ../../tools/mixins

+b.SECTION.intro
    +e.container.container
        +e.image
            img(
                :src="content.image.large.src"
                alt="intro"
            )
        +e.inner
            +e.H1.title(
                v-html="content.title.text"
            )
            +e.description(
                v-html="content.description.text"
            )
            +e.BUTTON.button Записаться

</template>

<script lang="ts">
import { mixins } from 'vue-class-component'

import device from '../../mixins/utility/device'

export default class Intro extends mixins(device) {
    content = {
        title: {
            text: 'Школа №1 в&nbsp;Москве',
        },
        description: {
            text: 'Обучаем детей и взрослых: скейт, лонгробрд, BMX, самокат, ролики и&nbsp;другие направления'
        },
        image: {
            small: {
                src: 'images/intro/intro-small.png',
            },
            large: {
                src: 'images/intro/intro-large.png',
            }
        }
    }
}
</script>

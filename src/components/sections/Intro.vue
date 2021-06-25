<template lang="pug">
include ../../tools/mixins

+b.SECTION.intro
    +e.container.container
        +e.image(
            :style="backgroundImageStyle"
        )
            // maybe will need img tag
        +e.inner
            +e.TITLE-COMPONENT.title(
                v-html="content.title.text"
            )
            +e.description(
                v-html="content.description.text"
            )
            +e.BUTTON-COMPONENT(
                tag="button"
                theme="primary"
            ) Записаться

</template>

<script lang="ts">
import { Options, mixins } from 'vue-class-component'

import device from '../../mixins/utility/device'

@Options({})
export default class Intro extends mixins(device) {
    content = {
        title: {
            text: 'Школа <u>№1</u> в&nbsp;Москве',
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

    backgroundImageStyle = {
        'background-image': `url(${this.getImage})`
    }

    get getImage(): string {
        return this.device.size.mobile
            ? this.content.image.small.src
            : this.content.image.large.src
    }
}
</script>

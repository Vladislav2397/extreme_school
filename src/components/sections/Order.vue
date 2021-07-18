<template lang="pug">
    include ../../tools/mixins

    +b.order
        +e.container.container
            +e.TITLE-COMPONENT.title(
                align="center"
                :tag="device.size.mobile ? 'h3' : 'h2'"
                :size="device.size.mobile ? 'h3' : 'h2'"
            ) {{ content.title }}
            +e.body
                +e.list
                    +e.INPUT.input(
                        v-for="(input, index) in content.inputs"
                        :key="index"
                        v-model="input.value"
                        :placeholder="input.placeholder"
                    )
                +e.description {{ content.description }}
                +e.BUTTON-COMPONENT.button(
                    type="text"
                ) {{ content.button }}

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import device from '@/mixins/utility/device'
import ContentModule from '@/store/modules/content'

@Component
export default class Order extends Mixins(device) {
    content = ContentModule.order
}

</script>

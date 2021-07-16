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
                +e.IMAGE-COMPONENT.image(
                    fallbackExt='png'
                    :path='device.size.mobile ? content.image.mobile.src : content.image.desktop.src'
                    :alt='device.size.mobile ? content.image.mobile.alt : content.image.desktop.alt'
                    :width='device.size.mobile ? content.image.mobile.width : content.image.desktop.width'
                    :height='device.size.mobile ? content.image.mobile.height : content.image.desktop.height'
                )
                +e.table
                    +e.row(
                        v-for="row in content.table"
                    )
                        +e.column(
                            v-for="column in row"
                        )
                            +e.TITLE-COMPONENT.table-title(
                                tag="h4"
                                size="h4"
                                weight="medium"
                                v-html="column.title"
                            )
                            +e.table-content(
                                v-html="column.content"
                            )

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import device from '@/mixins/utility/device'
import ContentModule from '@/store/modules/content'

@Component
export default class Benefit extends Mixins(device) {
    content = ContentModule.benefit
}
</script>

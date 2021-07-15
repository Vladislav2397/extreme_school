<template lang="pug">
.image
    picture

        //:srcset="`${path}.webp`"
        source(
            type="image/webp"
            :data-srcset="`${path}.webp`"
            :width="width"
            :height="height"
        )

        //:srcset="fallbackSrc"
        source(
            :type="`image/${fallbackExt}`"
            :data-srcset="fallbackSrc"
            :width="width"
            :height="height"
        )

        //:src="fallbackSrc"
        img(
            v-lazy="fallbackSrc"
            :width="width"
            :height="height"
            :alt="alt"
        )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

// import lazyload from '@/utils/directive/lazysizes'
// import lazyload from '@/utils/lazy'

@Component
class ImageLazy extends Vue {
    @Prop({ required: true }) readonly fallbackExt!: string

    @Prop({ required: true }) readonly path!: string

    @Prop({ default: '' }) readonly size!: string

    @Prop({ default: '' }) readonly alt!: string

    @Prop({ default: '' }) readonly blur!: string

    @Prop({ default: 100 }) readonly width!: number

    @Prop({ default: 100 }) readonly height!: number

    get fallbackSrc (): string {
        return `${this.path}.${this.fallbackExt}`
    }
}

export default ImageLazy
</script>

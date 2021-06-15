<template lang="pug">

the-header-component
intro-component
destination-component
.benefit
.about
.skill
.image-line
.price
.feedback
.question
.social
.order
.footer
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

import TheHeader from '../sections/TheHeader.vue'
import Intro from '../sections/Intro.vue'
import Destination from '../sections/Destination.vue'

@Options({
    components: {
        'the-header-component': TheHeader,
        'intro-component': Intro,
        'destination-component': Destination
    }
})
export default class IndexPage extends Vue {}
</script>
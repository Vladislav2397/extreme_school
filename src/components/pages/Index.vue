<template lang="pug">

the-header-component
intro-component
destination-component
benefit-component
about-component
skill-component
gallery-component
price-component
feedback-component
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
import Benefit from '../sections/Benefit.vue'
import About from '../sections/About.vue'
import Skill from '../sections/Skill.vue'
import Gallery from '../sections/Gallery.vue'
import Price from '../sections/Price.vue'
import Feedback from '../sections/Feedback.vue'

@Options({
    components: {
        'the-header-component': TheHeader,
        'intro-component': Intro,
        'destination-component': Destination,
        'benefit-component': Benefit,
        'about-component': About,
        'skill-component': Skill,
        'gallery-component': Gallery,
        'price-component': Price,
        'feedback-component': Feedback,
    }
})
export default class IndexPage extends Vue {}
</script>

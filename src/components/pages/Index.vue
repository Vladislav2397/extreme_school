<template lang="pug">

div
    the-header-component
    intro-component
    destination-component
    benefit-component
    about-component
    skill-component
    gallery-component
    price-component
    feedback-component
    question-component
//.social
//.order
//.footer
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import TheHeader from '@/components/sections/TheHeader.vue'
import Intro from '@/components/sections/Intro.vue'
import Destination from '@/components/sections/Destination.vue'

const Benefit = () => ({
    component: import(
        /* webpackPrefetch: true */
        /* webpackMode: "lazy" */
        '@/components/sections/Benefit.vue'
    )
})

const About = () => ({
    component: import(
        /* webpackPrefetch: true */
        /* webpackMode: "lazy" */
        '@/components/sections/About.vue'
    )
})

const Gallery = () => ({
    component: import(
        /* webpackPrefetch: true */
        /* webpackMode: "lazy" */
        '@/components/sections/Gallery.vue'
    )
})

const Skill = () => ({
    component: import(
        /* webpackPrefetch: true */
        /* webpackMode: "lazy" */
        '@/components/sections/Skill.vue'
    )
})

const Price = () => ({
    component: import(
        /* webpackPrefetch: true */
        /* webpackMode: "lazy" */
        '@/components/sections/Price.vue'
    )
})

const Feedback = () => ({
    component: import(
        /* webpackPrefetch: true */
        /* webpackMode: "lazy" */
        '@/components/sections/Feedback.vue'
    )
})

const Question = () => ({
    component: import(
        /* webpackPrefetch: true */
        /* webpackMode: "lazy" */
        '@/components/sections/Question.vue'
    )
})

@Component({
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
        'question-component': Question,
    }
})
export default class IndexPage extends Vue {}
</script>

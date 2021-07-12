<template lang="pug">

div
    the-header-component
    intro-component
    destination-component
    benefit-component
    about-component
    skill-component
    //- gallery-component
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
import Benefit from '@/components/sections/Benefit.vue'
import About from '@/components/sections/About.vue'
// import Skill from '@/components/sections/Skill.vue'
import Gallery from '@/components/sections/Gallery.vue'
// import Price from '@/components/sections/Price.vue'
// import Feedback from '@/components/sections/Feedback.vue'
// import Question from '@/components/sections/Question.vue'

const Skill = () => ({
    component: import(/* webpackPreload: true */ '@/components/sections/Skill.vue')
})

const Price = () => ({
    component: import(/* webpackPreload: true */ '@/components/sections/Price.vue')
})

const Feedback = () => ({
    component: import(/* webpackPreload: true */ '@/components/sections/Feedback.vue')
})

const Question = () => ({
    component: import(/* webpackPreload: true */ '@/components/sections/Question.vue')
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

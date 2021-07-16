import { GetterTree } from 'vuex'

export default {
    theHeaderContent: state => state.theHeader,
    introContent: state => state.intro,
    destinationContent: state => state.destination,
    benefitContent: state => state.benefit,
    aboutContent: state => state.about,
    skillContent: state => state.skill,
    galleryContent: state => state.gallery,
    priceContent: state => state.price,
    feedbackContent: state => state.feedback,
    questionContent: state => state.question,
} as GetterTree<any, any>

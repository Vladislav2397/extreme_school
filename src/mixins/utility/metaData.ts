import { Component, Vue } from 'vue-property-decorator'

@Component({
    title () {
        return this.$router.history.current.meta.title
    },

    meta () {
        return this.$router.history.current.meta.description
    },

    shareImage () {
        return this.$router.history.current.meta.shareImage
    }
})

class MetaData extends Vue {

}

export default MetaData

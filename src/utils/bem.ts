import fs from 'fs'

function vueTemplate(scssName: string, vueName: string, nesting: number) {
    return `<template lang="pug">
include ../${'../'.repeat(nesting)}tools/mixins
+b.${scssName}
    
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({})
export default class ${vueName} extends Vue {}
</script>`
}

declare type Parameters = {
    type: string,
    namePath: string[]
}

class BemGenerator {
    private readonly vueDirectory = './src/components'
    private readonly scssDirectory = './scr/assets/scss'

    private params: Parameters
    private validTypes = ['ui', 'blanks', 'popups', 'sections']

    constructor(args: string[]) {
        this.params = this.parseArgs(args)
        this.create()
    }

    parseArgs (args: string[]): Parameters {

        return {
            type: args[0],
            namePath: args[1].split('/')
        }
    }

    create (): void {
        //
    }

    addScssFiles (): void {
        //
    }

    addVueFile (): void {
        //
    }
}
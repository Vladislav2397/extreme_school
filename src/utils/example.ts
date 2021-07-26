import path from 'path'
import fs from 'fs'
import { toCamelCase, toPascalCase } from 'js-convert-case'
import pathParse from 'path-parse'

class NotEnoughArgumentsError extends Error {
    constructor() {
        super('Недостаточно аргументов для работы')
    }
}

console.log('$============================$\n')

declare type FileGeneratorOptions = {
    vuePath: string
    scssPath: string
    validTypes: string[],
}

class FileGenerator {
    private readonly type: string
    private readonly name: string

    private readonly options: FileGeneratorOptions = {
        vuePath: path.join(__dirname, 'src', 'components'),
        scssPath: path.join(__dirname, 'src', 'assets', 'scss'),
        validTypes: [
            'ui', 'pages', 'sections', 'blanks', 'popups'
        ],
    }

    constructor (args: string[]) {
        [this.type, this.name] = this.validateArgs(this.parseArgs(args))
        this.createFolders()
    }

    parseArgs (args: string[]): string[] {
        if (args.length === 3) {
            return args[args.length - 1].split('=')
        }
        throw new NotEnoughArgumentsError()
    }

    validateArgs (args: string[]) {
        const [type, name] = args

        if (this.options.validTypes.includes(type)) {
            return [type, name]
        }
        throw Error('')
    }

    createFolders () {
        fs.mkdirSync(
            path.join(this.options.vuePath, this.type, this.name.split('/')[0] + '/'),
            { recursive: true }
        )
    }

    log (): void {
        console.log(this)
    }
}

const file = new FileGenerator(process.argv)
file.log()

console.log('\n$============================$')

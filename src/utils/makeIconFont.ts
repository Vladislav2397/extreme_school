import fs from 'fs'
import * as crypto from 'crypto'
import { webfont } from 'webfont'

const fontPath = './public/fonts/icons/'
const srcPath = './src/assets/icons/template/'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const opentype = require('opentype.js')

function generateChecksum (
    str: string | Buffer,
    algorithm = 'md5',
    encoding = 'hex'
): string {
    return crypto
        .createHash(algorithm)
        .update(<string>str, 'utf8')
        .digest(<crypto.BinaryToTextEncoding>encoding)
}

const iconfont = function () {
    let existingSelection: null | string | { icons: string[] } = null
    if (fs.existsSync(`${srcPath}selection.json`)) {
        existingSelection = JSON.parse(fs.readFileSync(`${srcPath}selection.json`, 'utf8'))
    }

    const selection = {
        icons: []
    }

    let counter = 0

    webfont({
        files: './src/assets/icons/**/*.svg',
        template: './src/utils/template.html.njk',
        templateFontPath: fontPath,
        fontName: 'iconfont',
        formats: [
            'woff',
            'woff2'
        ],
        prependUnicode: true,
        glyphTransformFn: obj => {
            const icon = {
                unicode: undefined as string[] | undefined,
                checksum: undefined as string | Buffer | undefined,
            }
            icon.unicode = obj.unicode
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const checksum = fs.readFileSync(obj.path)

            icon.checksum = generateChecksum(checksum)

            if (existingSelection &&
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                existingSelection?.icons.length > counter &&
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                icon.checksum === existingSelection.icons[counter].checksum
            ) {
                console.log('equal')
            } else if (existingSelection) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const sameIcon = existingSelection.icons.find(el => el.checksum === icon.checksum)
                if (typeof sameIcon !== 'undefined') {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const filename = obj.path.replace(/^.*[\\/]/, '').split('-')
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const path = `${obj.path.substring(0, obj.path.lastIndexOf('/'))}/`
                    fs.renameSync(`${path}${filename[0]}-${filename[1]}`, `${path}u${sameIcon.unicode[0].charCodeAt(0).toString(16).toUpperCase()}-${filename[1]}`)
                }
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            selection.icons.push(icon)
            counter += 1

            return obj
        },
        fontHeight: 600,
        normalize: true
    })
        .then(result => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            fs.writeFileSync(`${srcPath}demo.html`, result.template)
            fs.writeFileSync(`${srcPath}selection.json`, JSON.stringify(selection))
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            fs.writeFileSync(`${fontPath}iconfont.woff`, result.woff)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            fs.writeFileSync(`${fontPath}iconfont.woff2`, result.woff2)

            return result
        })
        .catch(error => {
            throw error
        })
}

iconfont()

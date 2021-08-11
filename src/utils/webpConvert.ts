import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'
import fs, { PathLike } from 'fs'
import { promises as fsPromises } from 'fs'
import chokidar from 'chokidar'
import { ncp } from 'ncp'
import sharp from 'sharp'

console.log('webp')

const src = './src/assets/images/'
const dist = './public/images/'

function removeBrackets(str: string): string {
    const brackets = str.match(/\[(.*)\]/)
    return brackets ? str.replace(brackets[0], '') : str
}

const needToWatch = process.argv.indexOf('--webp') !== 1
let watcher: chokidar.FSWatcher | null = null
if (needToWatch) {
    watcher = chokidar.watch(src, {
        cwd: '.'
    })
}

watcher?.on('add', (path, stats) => {
    //
})

function fileWatch(path: string, stats: fs.Stats | undefined): void {
    //
}

declare type IWatcher = typeof watcher

// function startWatch(watcher: IWatcher) {
//     console.log(`\n\n watching ${ src } directory for changes\n\n`)
//
//     watcher?.on('all', (event, path) => {
//         const relativePath = path.split('\\').join('/')
//         const publicPath = `./public/${ relativePath.replace('src/assets/', '') }`
//         switch (event) {
//             case 'add':
//                 // fs.copyFile(relativePath, publicPath, (err)=> {
//                 //     if(err) {
//                 //         console.log(err);
//                 //     }
//                 // })
//                 break
//             case 'addDir':
//                 fsPromises.mkdir(publicPath)
//                     .catch(err => {
//                         console.log(err)
//                     })
//                 break
//             case 'unlink':
//                 fsPromises.access(removeBrackets(publicPath), fs.constants.F_OK)
//                     .then(() => fsPromises.unlink(removeBrackets(publicPath)))
//                     .then(() => fsPromises.unlink(`${ removeBrackets(publicPath).substring(0, removeBrackets(publicPath).lastIndexOf('.')) }.webp`))
//                     .catch(() => console.error('not exists'))
//                 break
//             case 'unlinkDir':
//                 fsPromises.mkdir(`./${ publicPath }`)
//                 break
//             default:
//                 break
//         }
//         const ext = relativePath.substring(relativePath.lastIndexOf('.') + 1, relativePath.length)
//
//         fsPromises.access(relativePath, fs.constants.F_OK)
//             .then(() => {
//                 if (ext === 'png' || ext === 'jpg') {
//                     const filename = relativePath.replace(/^.*[\\\/]/, '')
//                     const matches = filename.match(/\[(.*?)\]/)
//                     let width: number | null = null
//                     if (matches) {
//                         width = parseInt(matches[1], 10)
//                     }
//
//                     let brackets: RegExpMatchArray | string | null =
//                         publicPath.match(/\[(.*?)\]/)
//
//                     if (brackets) {
//                         brackets = brackets[0]
//                     } else {
//                         brackets = ''
//                     }
//
//                     sharp(relativePath)
//                         .resize(width)
//                         .webp({quality: 80})
//                         .toFile(`${ removeBrackets(publicPath).substring(0, removeBrackets(publicPath).lastIndexOf('.')) }.webp`)
//                         .then(() => sharp(relativePath)
//                             .resize(width)
//                             .toFile(removeBrackets(publicPath)))
//                         .then(() => imagemin([removeBrackets(publicPath)], {
//                             destination: `${ removeBrackets(publicPath).substring(0, publicPath.lastIndexOf('/')) }/`,
//                             plugins: [
//                                 imageminMozjpeg(),
//                                 imageminPngquant({
//                                     quality: [0.6, 0.8]
//                                 })
//                             ]
//                         }))
//                         .then(res => {
//                             console.log(`image ${ relativePath } is optimized and copied to ${ publicPath }`)
//                         })
//                         .catch(error => {
//                             console.log(error)
//                         })
//                 } else {
//                     fsPromises.copyFile(relativePath, publicPath)
//                         .catch(copyFileError => {
//                             console.log(`file copy was interrupted by an error: \n${ copyFileError }`)
//                         })
//                 }
//             })
//             .catch(() => console.error('file not exists'))
//     })
// }

// function that will recursively check images directory
async function walkSync (dir: PathLike | string) {
    try {
        const files = await fsPromises.readdir(dir)

        for (const file of files) {
            console.log('file', file)
            const fileData = parseFile(`${dir}/${file}`)

            const path = fileData.fullPath
            const ext = fileData.ext
            const filename = fileData.filename
            const width = fileData.width ? +(fileData.width) : null

            if (fs.statSync(path).isDirectory()) {
                walkSync(path)
            } else if (ext && ['png', 'jpg'].includes(ext)) {

                console.log('width', width)
                console.log(parseFile(path))

                /* resize and generate webp */
                await sharp(path)
                    .resize(width)
                    .webp({ quality: 80 })
                    .toFile(`${dir}/${filename}.webp`)

                /* resize and output to buffer */
                const buffer = await sharp(path)
                    .resize(width)
                    .toBuffer()

                /* write buffer into a file */
                await fsPromises.access(path, fs.constants.F_OK)

                await fs.writeFileSync(path, buffer)
                console.log(`starting optimize ${path}`)

                /* optimize rewrited image */
                await imagemin([path], {
                    destination: `${dir}/`,
                    plugins: [
                        imageminMozjpeg(),
                        imageminPngquant({
                            quality: [0.6, 0.8]
                        })
                    ]
                })
                // console.log(`image ${dir}/${removeBrackets(file)} optimized`)
            }
        }
    } catch (error) {
        console.log(`Cannot optimize ${dir} image because of an error: \n${error}`)
        console.error(error)
        return process.exit(1)
    }
}

function parseFile(path: string): any {
    const match = path.match(/^\.*[\\/](?<path>.*[\\/])(?<brackets>\[(?<width>\d+)\])?(?<filename>.+)\.(?<ext>\w+)$/)
    return {
        fullPath: path,
        path: match?.groups?.path || null,
        brackets: match?.groups?.brackets || null,
        width: match?.groups?.width || null,
        filename: match?.groups?.filename || null,
        ext: match?.groups?.ext || null,
    }
}

// entry point
export function buildImages (): void {
    // removing existing directory
    fsPromises.rmdir(dist, {recursive: true})
        .then(() => fsPromises.mkdir(dist))
        .then(() => {
            console.log('images folder created')
            ncp(src, dist, () => {
                // optimizing and creating webp
                walkSync(dist.substring(0, dist.length - 1))

                // if (needToWatch) {
                //     startWatch(watcher)
                // }
                // adding watcher to serve images in ./src/assets/images
            })
        })
}

if (process.argv.indexOf('optimize') !== -1) {
    buildImages()
}

buildImages()

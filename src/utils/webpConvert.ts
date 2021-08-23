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

const needToWatch = process.argv.indexOf('--webp') !== 1
let watcher: chokidar.FSWatcher | null = null
if (needToWatch) {
    watcher = chokidar.watch(src, {
        cwd: '.'
    })
}

declare type IWatcher = typeof watcher

declare type OptimizeImagesOptions = {
    src: string | null
    dist: string | null
    needToWatch: boolean
}

declare type IParsingPath = {
    path: string | PathLike | null,
    brackets: string | null,
    width: number | null,
    filename: string | null,
    ext: string | null
}

// function that will recursively check images directory
async function walkSync (dir: PathLike | string) { // dir = ./public/images
    try {
        const files = await fsPromises.readdir(dir)

        for (const file of files) {
            // path = ./public/images/about/about.jpg || ./public/images/about
            const path: PathLike = `${dir}/${file}`

            if (fs.statSync(path).isDirectory()) {
                await walkSync(path)
            }

            const { brackets, width, filename, ext }
                = parseFile(path)

            if (ext && ['png', 'jpg'].includes(ext)) {

                const file = `${dir}/${filename}.${ext}`
                const fileWebp = `${dir}/${filename}.webp`

                await createWebp({
                    path: <string>path,
                    width: <number>width,
                    outputFile: <string>filename,
                    quality: 80
                })

                /* resize and output to buffer */
                const buffer = await sharp(<string>path)
                    .resize(width)
                    .toBuffer()

                /* write buffer into a file */
                await fsPromises.access(<string>path, fs.constants.F_OK)
                await fs.writeFileSync(`./${parent}${filename}.${ext}`, buffer)
                console.log(`starting optimize ${path}`)

                /* optimize rewrited image */
                await imagemin([`./${parent}${filename}.${ext}`], {
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

type createImage = {
    path: string,
    width: number,
    quality?: number,
    outputFile: string,
    extension?: string
}

async function createFallback(
    {
        path,
        width,
        outputFile,
        extension
    }: createImage
): Promise<imagemin.Result[]> {

    /* resize and output to buffer */
    const buffer = await sharp(<string>path)
        .resize(width)
        .toBuffer()

    /* write buffer into a file */
    await fsPromises.access(<string>path, fs.constants.F_OK)
    await fs.writeFileSync(path, buffer)
    console.log(`starting optimize ${path}`)

    /* optimize rewrited image */
    return await imagemin([path], {
        // destination: `${dir}/`,
        plugins: [
            imageminMozjpeg(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    })
}

async function createWebp(
    {
        path,
        width,
        outputFile,
        quality = 80,
    }: createImage
): Promise<sharp.OutputInfo> {
    return await sharp(path)
        .resize(width)
        .webp({ quality: quality })
        .toFile(outputFile)
}

function parseFile(path: string): IParsingPath {
    const match = path.match(
        /^\.*[\\/](?<path>.*[\\/])(?<brackets>\[(?<width>\d+)\])?(?<filename>.+)\.?(?<ext>\w+)?$/
    )
    return {
        path: match?.groups?.path || null,
        brackets: match?.groups?.brackets || null,
        width: match?.groups?.width && +(match.groups.width) || null,
        filename: match?.groups?.filename || null,
        ext: match?.groups?.ext || null,
    }
}

// entry point
export async function buildImages (): Promise<void> {

    // removing existing directory
    await fsPromises.rmdir(dist, {recursive: true})
    await fsPromises.mkdir(dist)

    console.log('images folder created')
    ncp(src, dist, () => {
        console.log('ncp function')

        // optimizing and creating webp
        walkSync(dist.substring(0, dist.length - 1))
    })
}

buildImages()

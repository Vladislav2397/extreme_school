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

// function that will recursively check images directory
async function walkSync (dir: PathLike | string) {
    try {
        const files = await fsPromises.readdir(dir)

        for (const file of files) {
            console.log('file', file)
            const fileData = parseFile(`${dir}/${file}`)
            console.log('fileData', fileData)

            const path = fileData.fullPath
            const parent = fileData.path
            const ext = fileData.ext
            const filename = fileData.filename
            const width = fileData.width ? +(fileData.width) : null

            if (fs.statSync(path).isDirectory()) {
                walkSync(path)
            } else if (ext && ['png', 'jpg'].includes(ext)) {

                console.log('width', width)
                console.log('dir', dir)
                console.log('path', `./${parent}${filename}.${ext}`)
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

function parseFile(path: string): IParsingPath {
    const match = path.match(
        /^\.*[\\/](?<path>.*[\\/])(?<brackets>\[(?<width>\d+)\])?(?<filename>.+)\.(?<ext>\w+)$/
    )
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

declare type OptimizeImagesOptions = {
    src: string | null
    dist: string | null
    needToWatch: boolean
}

declare type IParsingPath = {
    fullPath: string,
    path: string | null,
    brackets: string | null,
    width: string | null,
    filename: string | null,
    ext: string | null
}

class OptimizeImages {
    private _path: string | null = null
    private _options: OptimizeImagesOptions | null = null

    constructor (
        path: string,
        options: OptimizeImagesOptions = {
            src: null,
            dist: null,
            needToWatch: false
        }
    ) {
        this._options = options

        this.optimize()
    }

    optimize (): void {
        //
    }

    private async createOptimizedWebp (
        pathFrom: string,
        pathTo: string,
        width: number | undefined,
    ): Promise<void> {
        await sharp(pathFrom)
            .resize(width)
            .webp({ quality: 80 })
            .toFile(pathTo)
    }

    public async createOptimizedFallback (
        pathFrom: string,
        pathTo: string,
        width: number | undefined,
    ) {
        const buffer = await sharp(pathFrom)
            .resize(width)
            .toBuffer()

        await fsPromises.access(pathFrom, fs.constants.F_OK)
        await fs.writeFileSync(pathTo, buffer)
        console.log(`starting optimize ${pathFrom}`)

        await imagemin([pathTo], {
            destination: pathTo,
            plugins: [
                imageminMozjpeg(),
                imageminPngquant({
                    quality: [0.6, 0.8]
                })
            ]
        })
    }

    removeBrackets (str: string): string {
        const brackets = str.match(/\[(.*)\]/)
        return brackets ? str.replace(brackets[0], '') : str
    }

    parseFile(path: string): IParsingPath {
        const match = path.match(
            /^.*[\\/](?<path>.*[\\/])(?<brackets>\[(?<width>\d+)\])?(?<filename>.+).(?<ext>\w+)$/
        )
        return {
            fullPath: path,
            path: match?.groups?.path || null,
            brackets: match?.groups?.brackets || null,
            width: match?.groups?.width || null,
            filename: match?.groups?.filename || null,
            ext: match?.groups?.ext || null,
        }
    }
}

if (process.argv.indexOf('optimize') !== -1) {
    buildImages()
}

import compressImages from 'compress-images'

const inputPath = 'src/assets/images/**/*.{jpg,JPG,jpeg,JPEG,png}'
const outputPath = 'public/images/'

compressImages(
    inputPath,
    outputPath,
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: 'webp', command: false }},
    { png: { engine: 'webp', command: false }},
    { svg: { engine: false, command: false }},
    { gif: { engine: false, command: false }},
    function (error, completed, statistic) {
        if (error === null) {
            compressImages(
                inputPath,
                outputPath,
                { compress_force: false, statistic: true, autoupdate: false },
                false,
                { jpg: { engine: 'mozjpeg', command: false }},
                { png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] }},
                { svg: { engine: false, command: false }},
                { gif: { engine: false, command: false }},
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                function () {}
            )
        } else {
            console.log('-------------')
            console.error(error)
            console.log(completed)
            console.log(statistic)
            console.log('-------------')
        }
    }
)
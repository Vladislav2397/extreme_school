import express from 'express'
import path from 'path'

const app: express.Application = express()
const router = express.Router()
const port = 3000

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'src/utils/toolUI/templates/pages'))

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index.pug')
})

app.use(router)

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`)
})
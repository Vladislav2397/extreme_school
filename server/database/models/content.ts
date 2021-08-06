import { Schema, model, createConnection } from 'mongoose'

createConnection('', {})

export const HeaderSchema: Schema = new Schema(
    {
        links: [
            {
                name: String,
                href: String
            }
        ]
    }
)

export const Header = model('general', HeaderSchema)

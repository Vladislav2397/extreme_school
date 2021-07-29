import { Schema, model } from 'mongoose'

export const GeneralSchema: Schema = new Schema(
    {
        phone: String,
        email: String,
        director: String,
    }
)

export const General = model('general', GeneralSchema)

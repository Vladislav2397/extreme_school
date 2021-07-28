import { Document, Schema, Model, model } from 'mongoose'

export interface GeneralDocument extends Document {
    phone: string,
    email: string,
    director: string
}

export interface GeneralModel extends GeneralDocument {}

export const GeneralSchema: Schema = new Schema(
    {
        phone: String,
        email: String,
        director: String,
    }
)

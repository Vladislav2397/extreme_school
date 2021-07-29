// Получение через стандартный mongodb модуль
//
// import { MongoClient } from 'mongodb'
//
// const client = new MongoClient('mongodb://localhost:27017')
//
// export async function main(): Promise<void> {
//     await client.connect()
//     const db = client.db('extreme_school_db')
//     const connection = db.collection('general')
//     console.log(await connection.find({}))
// }
//
// main().then()

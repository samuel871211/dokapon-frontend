import dotenv from 'dotenv'
dotenv.config()
const baseUrl = `${process.env.BASEURL}/graph`

class Graph {
    async get () {
        return await (await fetch(baseUrl)).json()
    }

    async update (cells: any) {
        const res = await fetch(baseUrl, {
            method: 'PUT',
            body: cells
        })
        const resJson = await res.json()
        return resJson
    }
}

export default new Graph()
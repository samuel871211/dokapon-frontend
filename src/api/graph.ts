import axios, {
    // AxiosResponse,
    // AxiosError
} from 'axios'

const graphAPI = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_BASEURL || ''}/graph`,
    timeout: 3000,
    headers: { 'content-type': 'application/json' }
})
const errData = { status: 500, data: { cells: [], name: '' } }
type cells = Array<joint.dia.Cell>
export type resData = { cells: cells, name: string }

export async function getAllGraphs (): Promise<{ status: number, data: resData[] }> {
    try {
        const response = await graphAPI.get('/')
        return response
    } catch (e: any) {
        if (axios.isAxiosError(e) && e.response) {
            return { status: e.response.status, data: [{ cells: [], name: '' }] }
        }
        console.log(e, 'is not axiosError')
        return { status: 500, data: [{ cells: [], name: '' }] }
    }
}

export async function findGraph (name: string): Promise<{ status: number, data: resData }> {
    try {
        const response = await graphAPI.get(`/${name}`)
        return response
    } catch (e: any) {
        if (axios.isAxiosError(e) && e.response) {
            return { ...errData, status: e.response.status }
        }
        console.log(e, 'is not axiosError')
        return errData
    }
}

export async function createGraph (name: string): Promise<{ status: number, data: resData }> {
    try {
        const response = await graphAPI.post(`/${name}`)
        console.log(response)
        return response
    } catch (e: any) {
        if (axios.isAxiosError(e) && e.response) {
            return { ...errData, status: e.response.status}
        }
        console.log(e, 'is not axiosError')
        return errData
    }
}

export async function updateGraph (name: string, graph: { cells: cells }): Promise<{ status: number, data: resData }> {
    try {
        const response = await graphAPI.put(`/${name}`, graph)
        return response
    } catch (e: any) {
        if (axios.isAxiosError(e) && e.response) {
            return { ...errData, status: e.response.status }
        }
        console.log(e, 'is not axiosError')
        return errData
    }
}
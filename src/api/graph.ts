import axios, { AxiosResponse, AxiosError } from 'axios'

const graphAPI = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_BASEURL || ''}/graph`,
    timeout: 3000,
    headers: { 'content-type': 'application/json' }
})
type cells = {
    cells: Array<joint.dia.Cell>
}
type customResponse = {
    status: number,
    data: cells
}

export async function getCells(): Promise<customResponse | AxiosResponse> {
    try {
        const response = await graphAPI.get('/')
        return response
    } catch (e: any) {
        const error = e as AxiosError
        if (error.response === undefined) {
            return {
                status: 499,
                data: { cells: [] }
            }
        }
        return error.response
    }
}

export async function updateCells(cells: cells): Promise<customResponse | AxiosResponse> {
    try {
        const response = await graphAPI.put('/', cells)
        return response
    } catch (e: any) {
        const error = e as AxiosError
        if (error.response === undefined) {
            return {
                status: 499,
                data: { cells: [] }
            }
        }
        return error.response
    }
}
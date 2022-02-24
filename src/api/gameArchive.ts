import axios from 'axios'
import { userSelect } from '../reducers/userSelect'

const gameArchiveAPI = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_BASEURL || ''}/gameArchive`,
    timeout: 3000,
    headers: { 'content-type': 'application/json' }
})
class gameArchive {
    constructor () {
        //
    }
    async get (): Promise<{ status: number, data: userSelect[] }> {
        try {
            const response = await gameArchiveAPI.get<userSelect[]>('/')
            return { status: response.status, data: response.data }
        } catch (e: any) {
            if (axios.isAxiosError(e) && e.response) {
                return { status: e.response.status, data: [] }
            }
            console.log(e, 'is not axiosError')
            return { status: 500, data: [] }
        }
    }
    async findBackup (slotIdx: number): Promise<{ status: number, data: userSelect | null }> {
        try {
            const response = await gameArchiveAPI.get<userSelect>(`backup/${slotIdx}`)
            return { status: response.status, data: response.data }
        } catch (e: any) {
            if (axios.isAxiosError(e) && e.response) {
                return { status: e.response.status, data: null }
            }
            console.log(e, 'is not axiosError')
            return { status: 500, data: null }
        }
    }
    async find (slotIdx: number): Promise<{ status: number, data: userSelect | null }> {
        try {
            const response = await gameArchiveAPI.get<userSelect>(`/${slotIdx}`)
            return { status: response.status, data: response.data }
        } catch (e: any) {
            if (axios.isAxiosError(e) && e.response) {
                return { status: e.response.status, data: null }
            }
            console.log(e, 'is not axiosError')
            return { status: 500, data: null }
        }
    }
    async put (slotIdx: number, data: userSelect): Promise<{ status: number, data: userSelect | null }> {
        try {
            const response = await gameArchiveAPI.put<userSelect>(`/${slotIdx}`, data )
            return { status: response.status, data: response.data }
        } catch (e: any) {
            if (axios.isAxiosError(e) && e.response) {
                return { status: e.response.status, data: null }
            }
            console.log(e, 'is not axiosError')
            return { status: 500, data: null }
        }
    }
}

export default new gameArchive()
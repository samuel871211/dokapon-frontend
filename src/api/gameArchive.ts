import axios from 'axios'
import Dokapon from '../global'

const gameArchiveAPI = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_BASEURL || ''}/gameArchive`,
    timeout: 3000,
    headers: { 'content-type': 'application/json' }
})
type response = { status: number, data: Dokapon.GameProgress | null }

class gameArchive {
    async get (): Promise<{ status: number, data: Dokapon.GameProgress[] }> {
        try {
            const response = await gameArchiveAPI.get<Dokapon.GameProgress[]>('/')
            return { status: response.status, data: response.data }
        } catch (e: any) {
            if (axios.isAxiosError(e) && e.response) {
                return { status: e.response.status, data: [] }
            }
            console.log(e, 'is not axiosError')
            return { status: 500, data: [] }
        }
    }
    async findBackup (slotIdx: number): Promise<response> {
        try {
            const response = await gameArchiveAPI.get<Dokapon.GameProgress>(`backup/${slotIdx}`)
            return { status: response.status, data: response.data }
        } catch (e: any) {
            if (axios.isAxiosError(e) && e.response) {
                return { status: e.response.status, data: null }
            }
            console.log(e, 'is not axiosError')
            return { status: 500, data: null }
        }
    }
    async find (slotIdx: number): Promise<response> {
        try {
            const response = await gameArchiveAPI.get<Dokapon.GameProgress>(`/${slotIdx}`)
            return { status: response.status, data: response.data }
        } catch (e: any) {
            if (axios.isAxiosError(e) && e.response) {
                return { status: e.response.status, data: null }
            }
            console.log(e, 'is not axiosError')
            return { status: 500, data: null }
        }
    }
    async put (slotIdx: number, data: Dokapon.GameProgress): Promise<response> {
        try {
            const response = await gameArchiveAPI.put<Dokapon.GameProgress>(`/${slotIdx}`, data )
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
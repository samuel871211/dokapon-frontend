import axios from 'axios'
import Dokapon from '../global'
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL
type response = { status: number, data: Dokapon.GameProgress | null }

const gameProgressClient = axios.create({
    baseURL: `${backendBaseUrl}/gameProgress`,
    timeout: 3000,
    headers: { 'content-type': 'application/json' }
})

export {
    getGameProgress,
    findGameProgress,
    findGameProgressBackup,
    updateGameProgress
}

async function getGameProgress (): Promise<{ status: number, data: Dokapon.GameProgress[] }> {
    try {
        const response = await gameProgressClient.get<Dokapon.GameProgress[]>('/')
        return { status: response.status, data: response.data }
    } catch (e: any) {
        if (axios.isAxiosError(e) && e.response) {
            return { status: e.response.status, data: [] }
        }
        console.log(e, 'is not axiosError')
        return { status: 500, data: [] }
    }
}
async function findGameProgressBackup (slotIdx: number): Promise<response> {
    try {
        const response = await gameProgressClient.get<Dokapon.GameProgress>(`backup/${slotIdx}`)
        return { status: response.status, data: response.data }
    } catch (e: any) {
        if (axios.isAxiosError(e) && e.response) {
            return { status: e.response.status, data: null }
        }
        console.log(e, 'is not axiosError')
        return { status: 500, data: null }
    }
}
async function findGameProgress (slotIdx: number): Promise<response> {
    try {
        const response = await gameProgressClient.get<Dokapon.GameProgress>(`/${slotIdx}`)
        return { status: response.status, data: response.data }
    } catch (e: any) {
        if (axios.isAxiosError(e) && e.response) {
            return { status: e.response.status, data: null }
        }
        console.log(e, 'is not axiosError')
        return { status: 500, data: null }
    }
}
async function updateGameProgress (slotIdx: number, data: Dokapon.GameProgress): Promise<response> {
    try {
        const response = await gameProgressClient.put<Dokapon.GameProgress>(`/${slotIdx}`, data )
        return { status: response.status, data: response.data }
    } catch (e: any) {
        if (axios.isAxiosError(e) && e.response) {
            return { status: e.response.status, data: null }
        }
        console.log(e, 'is not axiosError')
        return { status: 500, data: null }
    }
}
const baseUrl = `${process.env.REACT_APP_BACKEND_BASEURL}/graph`

export async function getCells () {
    const res = await fetch(baseUrl)
    const resJson = await res.json()
    return resJson
}

export async function updateCells (cells: { cells: Array<joint.dia.Cell> }) {
    const res = await fetch(baseUrl, {
        method: 'PUT',
        body: JSON.stringify(cells),
        headers: {
            'content-type': 'application/json'
        },
    })
    const resJson = await res.json()
    return resJson
}
import { errorRender } from "./errorRender"
export const getJSON = async function() {
    try {

        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) {
            throw new Error(` ${res.status}`)
        }
        return data = await res.json()
    } catch (err) {

        errorRender(err)
    }
}
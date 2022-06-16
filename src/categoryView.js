const ul = document.querySelector('.dropdown-menu')
import { errorRender } from "./errorRender"
import { getJSON } from "./getJSON"
export const categoryView = async() => {
    try {
        const data = await getJSON()
        ul.addEventListener('click', function(e) {
            const btn = e.target.closest('.dropdown-item')
            if (!btn) return
            console.log(btn)
            const filteredItems = btn.textContent === 'All' ? data : data.filter(entry => entry.category === btn.textContent)
            return filteredItems
        })
    } catch (err) {
        errorRender(err)
    }
}
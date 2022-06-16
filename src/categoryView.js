const ul = document.querySelector('.dropdown-menu')
const search = document.querySelector('.seach-anchor')
const cardContainer = document.querySelector('.main__section--cards-grid')
const input = document.querySelector('.navInput')
import { errorRender } from "./errorRender"
import { getJSON } from "./getJSON"

export const categoryView = async() => {
    try {
        const data = await getJSON()
            // filtering with options dropdown list
        selectByDropdown(data)

        // Searching in input field
        search.addEventListener('click', (e) => {
            const singleCard = document.querySelector('.card')
            const inputValue = input.value.toLowerCase()
            e.preventDefault()
            data.filter(dts => {
                if (dts.category.toLowerCase().indexOf(inputValue) > -1) {
                    console.log(`${dts.category}: matched`);
                    singleCard.style.display = 'block'
                } else {
                    singleCard.style.display = 'none'
                    console.log(`${dts.category}: not matched`);
                }
            })
        })
    } catch (err) {
        errorRender(err)
    }
}
const selectByDropdown = function(data) {
    ul.addEventListener('click', function(e) {
        const btn = e.target.closest('.dropdown-item')
        const filteredItems = btn.textContent === 'All' ? data : data.filter(entry => entry.category === btn.textContent)
        console.log(filteredItems);
        return filteredItems
    })
}

const selectBySeachInput = function(data) {

}
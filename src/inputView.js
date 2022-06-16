const searchIcon = document.querySelector('.seach-anchor')
const input = document.querySelector('.navInput')
export const inputView = () => {
    searchIcon.addEventListener('click', (e) => {
        e.preventDefault()
        const icon = e.target.closest('.icon-search')
        if (!icon) return
        input.classList.add('inputActive')

    })
}
inputView()
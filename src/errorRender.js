const main = document.querySelector('.main')
const header = document.querySelector('.header')
export const errorRender = function(err) {
    const markup = `
    <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="text-center">
        <h1 class="display-1 fw-bold">${err}</h1>
        <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
    </div>
</div>
   
    `
    header.innerHTML = ''
    main.innerHTML = ''
    main.insertAdjacentHTML('afterbegin', markup)
}
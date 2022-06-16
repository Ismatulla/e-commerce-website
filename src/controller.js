import { cardsView } from "./cardsView";
import cardView from "./cardView";
import { errorRender } from "./errorRender";
import { parseRequestUrl } from "./util";
import { inputView } from "./inputView";

inputView()
const card = document.querySelector('.main__section--cards-grid')
const routes = {
    '/': cardsView,
    '/products/:id': cardView
}
const router = async() => {
    try {
        const request = parseRequestUrl()
        const parseUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '')
        const screen = routes[parseUrl] ? routes[parseUrl] : errorRender()
        const render = await screen.render()
        card.innerHTML = render
    } catch (err) {
        errorRender(err)
    }

}
window.addEventListener('load', router)
window.addEventListener('hashchange', router)
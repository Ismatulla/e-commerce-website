import { errorRender } from "./errorRender";
import { getJSON } from "./getJSON";
import ratingView from "./ratingView";
import { parseRequestUrl } from "./util"
const slider = document.querySelector('.main__section--slider')

const cardView = {
    render: async() => {
        try {
            const data = await getJSON();
            console.log(data);
            const parseUrl = parseRequestUrl()
            const obj = data.find(entry => entry.id === +parseUrl.id)
            slider.style.display = 'none'
            return `<div class="card__view--container  ">
                      <div class=" card mt-lg-5">
                        <div class=" bg-body  single__card">
                        <img src="${obj.image}" class="card-img-top single__card--img" alt="img" />
                        <div class="card-body">
                            <h5 class="card-title pb-2">${obj.title}</h5>
                            <p class="card-text">
                                ${obj.description}
                            </p>
                            <a href="#/products/${obj.id}" class="btn bg-dark text-light w-40 view-product">add to cart</a>
                        </div>
                    </div>
                </div>
               
                <div class="card text-center card__view--specification">
                <div class="card-header">
                  <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="true" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ">link2</a>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <h5 class="card-title">${obj.category}</h5>
                  <p class="card-text">$${obj.price}</p>
                  ${ratingView.render()}
                </div>
              </div>
            </div>`
        } catch (err) {
            errorRender(err)
        }

    }
}

export default cardView
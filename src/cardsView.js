import { getJSON } from "./getJSON";
import ratingView from "./ratingView";
import { categoryView } from "./categoryView";
import { parseRequestUrl } from "./util";
const spinner = document.querySelector('.spinner')
const card = document.querySelector('.main__section--cards-grid')


//time before execution of async function 
const start = +new Date().getSeconds()

///////////
export const cardsView = {
    render: async() => {
        try {
            /// parsel
            const parseUrl = parseRequestUrl()
            console.log(parseUrl);
            //////////////////////////
            const datas = await getJSON()
            const filteredData = await categoryView()
            const data = typeof(filteredData) === 'undefined' ? datas : filteredData;
            console.log(data);
            card.innerHTML = ''
            return data.map(item => {
                return `
       <div class="col">
       <div class="card cards p-3 mb-5 bg-body" style="width: 18rem">
           <img src="${item.image}" class="card-img-top" alt="img" />
           <div class="card-body">
               <h5 class="card-title pb-2">${item.title.length > 18 ? item.title.slice(0, 18) : item.title}</h5>
               ${ratingView.render()}
           <p class="card-text">
               ${item.description.length > 60 ? item.description.slice(0, 60) : item.description}
               </p>
               <a href="#/products/${item.id}" class="btn bg-dark text-light w-100 view-product">View Product</a>
           </div>
       </div>
   </div>
       `
                    //  time after execution of async function 
                const end = +new Date().getSeconds()
                    /////////////////////////////////////
                setTimeout(() => spinner.style.display = "none", (end - start))
            }).join('')
        } catch (err) {
            console.log(err);
        }
        ``
    }
}
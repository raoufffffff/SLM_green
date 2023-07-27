let data = [
    {
        name: 'gust-1',
        price: 500,
        decreptions: "gust-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugiat.",
        imgs: ['a1.jpg', 'a2.jpg', 'a3.jpg'],
        id: 1
    },
    {
        name: 'gust-2',
        price: 1500,
        decreptions: "gust-2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugiat.",
        imgs: ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg', 'b5.jpg'],
        id: 2
    },
    {
        name: 'gust-3',
        price: 2500,
        decreptions: "gust-3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugiat.",
        imgs: ['o1.jpg', 'o2.jpg', 'o3.jpg', 'o4.jpg'],
        id: 3
    },
    {
        name: 'gust-4',
        price: 1000,
        decreptions: "gust-4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugiat.",
        imgs: ['or1.jpg', 'or2.jpg', 'or3.jpg', 'or4.jpg'],
        id: 4
    }
]


let main = document.querySelector(".row");
const raouf = () => {
    let prodouit = data.map((e) => {
        return (
            `<a href="about.html?id=${e.id}" data-id="${e.id}"
        class="col-lg-3 col-sm-3  col-md-6 d-flex
                                flex-column text-decoration-none text-light text-center pro m-lg-0 m-md-0 m-sm-0 rounded-3">
                                <div class="img h-75 rounded-3 w-100">
                        <img src="img/${e.imgs[0]}" alt="photo">
                        </div>
                    <span class="titel">${e.name}</span>
                    <span class="prix">${e.price} DA</span>
                    </a>`
        )
    }).join("")
    main.innerHTML = prodouit;
    document.querySelectorAll(".pro").forEach((e) => {
        e.addEventListener("click", () => {

            n()
        })
    })
}


let n = () => {
    main.classList.add("d")
    document.querySelector(".head").classList.add("b")
}
console.log("raouf")

setTimeout(() => {
    raouf()
    console.log("hello")
}, 10);




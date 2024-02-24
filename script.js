const menu = document.getElementsByClassName("menu")[0];
const hamburgerMenu = document.getElementById("menu");

hamburgerMenu.addEventListener("click", function(e) {
    menu.classList.toggle("active")
    e.preventDefault()
})

// data menu kelapa
const data = [{
        id: 1,
        image: "img/es-kelapa.jpg",
        header: "Es-Kelapa",
        decription: `Es kelapa adalah minuman segar yang terbuat dari air kelapa dan es batu, disajikan sebagai minuman penyegar dengan rasa manis alami.
    `
    },
    {
        id: 2,
        image: "img/kelapa_parut.jpg",
        header: "Kelapa Parut",
        decription: ` Kelapa parut adalah daging kelapa yang diparut menjadi serpihan kecil, sering digunakan dalam berbagai hidangan sebagai bahan tambahan atau bumbu.
    `
    }, {
        id: 3,
        image: "img/minyak_kelapa.jpg",
        header: "Minyak Kelapa",
        decription: ` Minyak kelapa adalah minyak nabati yang diekstrak dari daging kelapa. Biasanya digunakan untuk memasak, perawatan kulit, dan rambut karena kandungan asam lemaknya yang sehat.
    `
    }, {
        image: "img/santan_kelapa.jpg",
        header: "Santan Kelapa",
        description: ` Santan kelapa adalah cairan kental yang diekstrak dari parutan daging kelapa, digunakan sebagai bahan dalam masakan untuk memberikan rasa kaya dan konsistensi yang lembut.
    `
    },
]

const rowCart = document.querySelectorAll(".row-kartu");
for (let i = 0; i < rowCart.length; i++) {
    if (rowCart[i].innerHTML) {
        `
            <div class="row-kartu">
                <img src=${data.image} alt="menu1" class="menu-kartu-img" />
                <h3 class="menu-kartu-text">${data.header}</h3>
                <p class="menu-card-deskripsi">
                    ${data.description}	
                </p>
            </div>
        `
    }

}
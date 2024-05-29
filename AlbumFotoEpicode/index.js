const url = "https://api.pexels.com/v1/search?query=";

const fetchMontagna = async (query) => {
  const res = await fetch(url + query, {
    headers: {
      Authorization: "tPld8mVOQfp4xHfaARUkB8SzCZtbPc4vSiIawb1qO3aZrThyepIXKVSX",
    },
  });
  if (res.ok) {
    let { photos: foto } = await res.json();
    console.log(foto);
    let row = document.querySelector("#montagna");
    foto.forEach((e) => {
      row.innerHTML += `<div class= "col-3"><div class="card me-3 mb-5" style="width: 18rem; height: 25rem">
      <img src=${e.src.large} class="card-img-top" alt="pic di ${query}>
      <div class="card-body">
        <p class="card-text text-center mt-2" >${e.alt}</p>
      </div>
    </div></div>`;
    });
  } else {
    console.log("Qualcosa è andato storto con la nostra chiamata!");
  }
};

const fetchMare = async (query) => {
  const res = await fetch(url + query, {
    headers: {
      Authorization: "tPld8mVOQfp4xHfaARUkB8SzCZtbPc4vSiIawb1qO3aZrThyepIXKVSX",
    },
  });
  if (res.ok) {
    let { photos: foto } = await res.json();
    console.log(foto);
    let row = document.querySelector("#mare");
    foto.forEach((e) => {
      row.innerHTML += `<div class= "col-3"><div class="card me-3 mb-5" style="width: 18rem; height: 25rem">
      <img src=${e.src.large} class="card-img-top" alt="pic di ${query}>
      <div class="card-body">
        <p class="card-text text-center mt-2" >${e.alt}</p>
      </div>
    </div></div>`;
    });
  } else {
    console.log("Qualcosa è andato storto con la nostra chiamata!");
  }
};

window.onload = () => {
  fetchMontagna("montagna");
  fetchMare("summer");
};

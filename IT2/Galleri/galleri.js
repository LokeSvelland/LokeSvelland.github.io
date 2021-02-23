//@ts-check

const $ = (id) => document.getElementById(id);

const mineBilder = [ ];

function setup() {
    const divBilder = $("bilder");

    for(let i = 1; i < 101; i += 1) {
        const img = new Image();
        img.addEventListener(onload,  (e) => {
            mineBilder.push(`Media/B${i}.jpg`);
        })
        img.src = `Media/B${i}.jpg`;
    }

    setTimeout(() => {
        for (let i = 0; i < mineBilder.length; i += 1) {
          const navn = mineBilder[i];
          const div = document.createElement("div");
          divBilder.append(div);
          div.style.backgroundImage = `url("Media/${navn}")`;
          div.style.left = `${250 * (i  % 3)}px`;
          div.style.top = `${200 * Math.floor(i / 3)}px`;
          div.addEventListener("click", framvis);
        }
      }, 1000);
    
      function framvis(e) {
        const div = e.target;
        div.classList.remove("animert");
        void div.offsetWidth;
        div.classList.add("animert");
      }
    }    


    for (let i = 1; i<5; i += 1) {
        const div = document.createElement("div");
        divBilder.append(div);
        div.style.backgroundImage =`url("Media/b${i}.jpg")`;
        div.style.left = `$(100*1)px` ;
        div.style.top = `$(100 = math.floor(1/31)px` ;
    }

}

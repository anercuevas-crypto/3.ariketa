// 1. Testu-Aldatzailea
function aldatuTestua() {
    const p =document.getElementById("testu_aldagarria");
        p.textContent ="Testua JavaScript-ex aldatu du";
}

// 2. Kolore Txandakatzailea (Estiloak JS-tik aplikatuz)

function aldatuKolorea()  {
const p  = document.getElementById("kolore_aldagarria");
    const unekoKolorea= p.style.color;
    if (unekoKolorea === "purple") {
        p.style.color = "black"; 
    } else {
        p.style.color = "purple";
    }
}

 
// 3. Elementuen Ezkutagailua (display propietatea aldatuz)
function txandakatuEzkutatzea() {
const p = document.getElementById("ezkutatu_hau");
  // Txandakatu display propietatea
  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
}

// 4. Batuketa Kalkulagailua
function batuketaEgin() {
const a = parseFloat(document.getElementById("zenbaki1").value) || 0;
  const b = parseFloat(document.getElementById("zenbaki2").value) || 0;
  const emaitza = a + b;

  document.getElementById("emaitza4").textContent = emaitza;

}

// 5. Testu-Gehitzailea (Elementu berriak sortzea)
function gehituElementua() {
 const testua = document.getElementById("elementu_berria").value.trim();
  if (testua === "") return; // ez gehitu hutsik

  const li = document.createElement("li");
  li.textContent = testua;

  const ul = document.getElementById("zerrenda_dinamikoa");
  ul.appendChild(li);

  // garbitu input-a
  document.getElementById("elementu_berria").value = "";
}

// 6. Kontagailua (aldagai globalak erabiliz)
// Oharra: klikKopurua HTML amaierako <script> blokean hasieratuta dago
function kontatuKlik() {
   klikKopurua= klikKopurua+1;
    document.getElementById("kontagailu_emaitza").textContent = klikKopurua;
}

// 7. Zenbaki Asmatzearen Jokoa
// Oharra: zenbakiSekretua HTML amaierako <script> blokean hasieratuta dago
function konprobatuZenbakia() {
// Número aleatorio entre 1 y 5
    const zenbakiaSecreto = Math.floor(Math.random() * 5) + 1;

    // Número que puso el usuario
    const usuario = parseInt(document.getElementById("asmatutako_zenbakia").value);

    // Validar input
    if (isNaN(usuario) || usuario < 1 || usuario > 5) {
        document.getElementById("joko_emaitza").textContent = "Mesedez, idatzi 1 eta 5 arteko zenbaki bat.";
        return;
    }

    // Comprobar si acierta
    if (usuario === zenbakiaSecreto) {
        document.getElementById("joko_emaitza").textContent = `Oso ondo! Asmatze zenuen: ${zenbakiaSecreto}.`;
    } else {
        document.getElementById("joko_emaitza").textContent = `Ez da zuzena. Zenbakia zen: ${zenbakiaSecreto}. Saiatu berriro!`;
    }

    // Limpiar input
    document.getElementById("asmatutako_zenbakia").value = "";

}

// 8. Atzeko Planoaren Kolore-Aldatzailea (Random)
function aldatuAtzekoPlanoarenKolorea() {
// Array con algunos colores
    const koloreak = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6"];
    
    // Elegir un color aleatorio
    const koloreBerria = koloreak[Math.floor(Math.random() * koloreak.length)];
    
    // Cambiar el color de fondo del body
    document.body.style.backgroundColor = koloreBerria;
}
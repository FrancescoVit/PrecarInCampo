// script.js

// Array dei comunicati
const comunicati = [
  {
    data: "12 Novembre 2025",
    titolo: "«La ricerca non si fa a tempo determinato» Precari in Campo (CREA) in piazza a Roma per chiedere stabilizzazioni e investimenti nella ricerca pubblica",
    testo: `
    Prova testo complesso
    a capo

    `
  },
  {
    data: "12 Novembre 2025",
    titolo: "Nascita della pagina comunicati di PIC",
    testo: "Post di prova"
  }
];

// Seleziona il contenitore
const container = document.getElementById("comunicati-container");

// Genera dinamicamente il contenuto
comunicati.forEach(c => {
  const div = document.createElement("div");
  div.classList.add("comunicato");

  div.innerHTML = `
    <h2>${c.titolo}</h2>
    <div class="data">${new Date(c.data).toLocaleDateString("it-IT")}</div>
    <p>${c.testo}</p>
  `;

  container.appendChild(div);
});

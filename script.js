// script.js

// Array dei comunicati
const comunicati = [
  {
    data: "2025-11-10",
    titolo: "Nuovo Progetto Avviato",
    testo: "Oggi annunciamo l'avvio di un nuovo progetto per la sostenibilità ambientale..."
  },
  {
    data: "2025-10-25",
    titolo: "Evento Annuale di Innovazione",
    testo: "Si è concluso con successo l'evento annuale dedicato all'innovazione e alla ricerca..."
  },
  {
    data: "2025-09-15",
    titolo: "Comunicato Importante",
    testo: "L'organizzazione ha siglato un accordo strategico con partner internazionali..."
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

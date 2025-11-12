// script.js

// Array dei comunicati
const comunicati = [
  {
    data: "12 Novembre 2025",
    titolo: `«La ricerca non si fa a tempo determinato»
    Precari in Campo (CREA) in piazza a Roma per chiedere stabilizzazioni e investimenti nella ricerca pubblica`,
    testo: `
    Precari in Campo (CREA) in piazza a Roma per chiedere stabilizzazioni e investimenti nella ricerca pubblica
Roma, 12 novembre 2025 –
Ieri le lavoratrici e i lavoratori precari del CREA – Consiglio per la Ricerca in Agricoltura e l’Analisi dell’Economia Agraria sono scesi in piazza a Roma per chiedere stabilizzazioni reali e un piano di investimenti strutturali nella ricerca pubblica. La manifestazione, con circa 400 partecipanti di tutti gli enti pubblici di ricerca, organizzata insieme a FLC CGIL, si è svolta inizialmente in Piazza Capranica e si è conclusa davanti a Montecitorio, dove hanno preso parola anche alcuni parlamentari in sostegno della mobilitazione.
Con due striscioni che sintetizzavano il senso della giornata – «Sovranità alimentare, precarietà abituale» e «La ricerca non si fa a tempo determinato» – il gruppo Precari in Campo (PIC) ha portato la voce di chi, pur garantendo ogni giorno la ricerca scientifica che sostiene il sistema agroalimentare italiano, vive nell’incertezza di un contratto a termine.
“Spesso ci chiamano giovani ricercatori, ma siamo lavoratrici e lavoratori che con competenza e passione tengono in piedi laboratori, uffici, campi sperimentali delle sedi di ricerca in tutta Italia”, ha dichiarato una rappresentante di Precari in Campo dalla piazza. “Non chiediamo riconoscenza: chiediamo giustizia, il diritto a un futuro e a un lavoro stabile.”
Oggi circa il 20% del personale del CREA – oltre 450 persone – è impiegato con forme di lavoro precario: contratti a tempo determinato, assegni di ricerca, borse di studio, collaborazioni o contratti agricoli stagionali.Una condizione che non solo penalizza chi la vive, ma compromette anche la continuità e la qualità della ricerca pubblica, impedendo la piena valorizzazione delle competenze acquisite.
“Un Governo che parla di merito e innovazione, ma dimentica chi la ricerca la fa davvero è un Governo dell’abbandono”, hanno ricordato i precari. “La precarietà nella ricerca non è una scelta: è una ferita aperta nel futuro del Paese.”
Durante la manifestazione, le lavoratrici e i lavoratori precari del CREA hanno indossato un’“etichetta del precario”, una provocatoria parodia delle etichette alimentari, che riportava la composizione del lavoratore precario:
“Competenze e passione 48%, Impegno e flessibilità 48%, Prospettive 3,9%, Certezze 0,1%. Avvertenze: Prodotto instabile. Può contenere tracce di sogni.”
I Precari in Campo hanno inoltre distribuito piccoli sacchetti di semi con la scritta «Un seme per la ricerca al CREA»: un gesto simbolico per ricordare che la conoscenza, come la terra, ha bisogno di essere coltivata, curata e fatta crescere nel tempo, non precarizzata.
Nati poco più di un anno fa come iniziativa spontanea, i Precari in Campo hanno dato vita a un movimento che ha saputo unire lavoratrici e lavoratori di ogni area dell’Ente — tecnici, ricercatori, amministrativi, operai — costruendo un nuovo spazio di partecipazione, solidarietà e rivendicazione collettiva.

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

// script.js

// Array dei comunicati
const comunicati = [
  {
    data: "18 Dicembre 2025",
    titolo: `Assemblea Precari in Campo 2025`,
    testo: `
    <p>Il 17 dicembre 2025 si è tenuta, presso l’Aula Zocchi della sede del CREA-DC di Firenze, l’assemblea dei Precari in Campo.</p>
    <p> L’evento è stato supportato da CGIL, nella persona di Giampiero Golisano, che ha indetto l’assemblea sindacale e provveduto all’organizzazione
    della mattinata insieme alle precarie e ai precari di Firenze. Erano inoltre presenti giornalisti della testata “Collettiva” che hanno documentato
    l'assemblea ed intervistato alcuni colleghi precari. </p>
    <p> L’assemblea si è aperta con i saluti di Giampiero Golisano, seguiti da un ampio momento di confronto e di testimonianze di “ex- precari” del CREA che
    hanno partecipato attivamente al movimento che ha portato all’ultima grande stabilizzazione del 2019. In tutti gli interventi delle colleghe e dei colleghi
    strutturati del CREA-DC e del CREA-AA di Firenze è stata evidenziata l’importanza della partecipazione, anche minima, per ottenere dei risultati e l’attenzione
    politica e mediatica che meritiamo. E’ intervenuta anche una collega del CREA-CI, principale promotrice del movimento precari del CREA che ha ottenuto le
    stabilizzazioni nel 2019. Infine, è stato presentato un breve resoconto dell'attività del gruppo PIC nel suo primo anno di attività. Il risultato più importante
    che l’iniziativa è riuscita ad ottenere è stato, senz’altro, il censimento dei precari, che ha dato un’idea di quale fosse il numero dei dipendenti a tempo
    determinato assunti nell’ente e quale fosse la loro anzianità. L'assemblea è anche stata l'occasione per lanciare l'aggiornamento del censimento al 2025.</p>`
  },
  {
    data: "12 Novembre 2025",
    titolo: `«La ricerca non si fa a tempo determinato»
    Precari in Campo (CREA) in piazza a Roma per chiedere stabilizzazioni e investimenti nella ricerca pubblica`,
    testo: `
    <p>Precari in Campo (CREA) in piazza a Roma per chiedere stabilizzazioni e investimenti nella ricerca pubblica Roma, 12 novembre 2025 </p>
    <p>Ieri, le lavoratrici e i lavoratori precari del CREA - Consiglio per la Ricerca in Agricoltura e l’Analisi
    dell’Economia Agraria - sono scesi in piazza a Roma per chiedere un piano di stabilizzazione del
    personale e un programma concreto di investimenti strutturali per la ricerca pubblica. Alla
    manifestazione, organizzata insieme a FLC CGIL, hanno partecipato circa 400 lavoratori provenienti
    da tutti gli enti pubblici di ricerca italiani. L’iniziativa, che si è svolta inizialmente in Piazza
    Capranica, si è conclusa davanti a Montecitorio dove hanno preso la parola anche alcuni parlamentari
    che hanno voluto esprimere il proprio sostegno alla mobilitazione.</p>
    <p>Il gruppo Precari in Campo (PIC) del CREA, ha dato voce a chi, pur garantendo ogni giorno la ricerca
    scientifica che sostiene il sistema agroalimentare italiano, vive nell’incertezza di un contratto a
    termine. Con i due striscioni mostrati in piazza - <i>«Sovranità alimentare, precarietà abituale» e «La
    ricerca non si fa a tempo determinato»</i> - il gruppo ha voluto ribadire chiaramente il proprio messaggio
    per la politica. <i>“Spesso ci chiamano giovani ricercatori, ma siamo lavoratrici e lavoratori che con competenza e
    passione tengono in piedi i laboratori, gli uffici e i campi sperimentali delle sedi di ricerca CREA in
    tutta Italia”</i>, ha dichiarato una rappresentante di Precari in Campo dalla piazza. <i>“Non chiediamo
    riconoscenza: chiediamo giustizia, il diritto a un futuro e a un lavoro stabile.”</i>
    Oggi circa il 20% del personale del CREA – oltre 450 persone – è impiegato con forme di lavoro
    precario: contratti a tempo determinato, assegni di ricerca, borse di studio, collaborazioni o contratti
    agricoli stagionali. Una condizione che non solo penalizza chi la vive, ma compromette anche la
    continuità e la qualità della ricerca pubblica, impedendo la piena valorizzazione delle competenze
    acquisite.</p>
    <p><i>“Un Governo che parla di merito e innovazione, ma dimentica chi la ricerca la fa davvero è un
    Governo dell’abbandono”</i>, hanno ricordato i precari. <i>“La precarietà nella ricerca non è una casualità:
    è una scelta precisa che apre una ferita nel futuro del Paese.”</i></p>
    <p>Durante la manifestazione, le lavoratrici e i lavoratori precari del CREA hanno indossato l’“etichetta
    del precario”, una provocatoria parodia delle etichette alimentari, che indicava la composizione del
    lavoratore precario:<i>“Competenze e passione 48%, Impegno e flessibilità 48%, Prospettive 3,9%,
    Certezze 0,1%. Avvertenze: Prodotto instabile conservare in ambienti motivazionali. Può contenere tracce di sogni
    non realizzati. Può causare ansia da rinnovo o sindrome da scadenza”<i>. I Precari in Campo hanno inoltre distribuito
    piccoli sacchetti di semi con la scritta «Un seme per la
    ricerca al CREA»: un gesto simbolico per ricordare che la conoscenza, come la terra, ha bisogno di
    essere coltivata, curata e fatta crescere nel tempo, non precarizzata.</p>
    <p>Nati poco più di un anno fa come iniziativa spontanea, i Precari in Campo hanno dato vita a un
    movimento che ha saputo unire lavoratrici e lavoratori di ogni area dell’Ente - tecnici, ricercatori,
    amministrativi, operai - costruendo un nuovo spazio di partecipazione, solidarietà e rivendicazione
    collettiva. <i>“In un anno siamo riusciti a passare dal silenzio all’azione. Oggi siamo in piazza perché crediamo nel
    valore della ricerca pubblica e di chi la fa vivere ogni giorno”</i>, hanno affermato dal gruppo. <i>“Noi il
    futuro lo costruiamo con passione e competenza, ma vogliamo anche poterlo vivere.”</i></p>`
  },
  {
    data: "12 Novembre 2025",
    titolo: "Nascita della pagina comunicati di PIC",
    testo: "Post di prova"
  }
];

// Seleziona il contenitore
const container = document.getElementById("comunicati-container");

// Genera dinamicamente ogni comunicato
comunicati.forEach(c => {
  const div = document.createElement("div");
  div.classList.add("comunicato");

  div.innerHTML = `
    <h2>${c.titolo}</h2>
    <div class="data">${new Date(c.data).toLocaleDateString("it-IT")}</div>
    <div class="testo">${c.testo}</div>
  `;

  container.appendChild(div);
});

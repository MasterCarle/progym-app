# proGYM 2.4 — inserimento schede senza AI

Nuova installazione: **nessun programma predefinito**. La pagina di benvenuto offre 5 percorsi: creazione manuale giorno/esercizio, incolla esercizi come testo, foto/PDF come riferimento per la trascrizione, importa JSON, creazione via ChatGPT.

- **Manuale:** scegli nome e giorno, aggiungi esercizi con serie, ripetizioni, recupero e muscolo. Puoi modificare la scheda attiva da **Scheda > Crea / modifica scheda manualmente**. Il sistema salva una bozza temporanea sul dispositivo. Controlla l'anteprima prima di attivarla.
- **Testo:** usa una intestazione come `# Lunedì - Pull` e righe `Lat machine | 3x8-12 | 180 | Dorso`. L'importazione mostra anteprima.
- **Foto/PDF:** apertura come **riferimento alla trascrizione**, non OCR, non conversione automatica: i file non sono caricati su un server.
- **AI:** il flusso precedente è disponibile; non è obbligatorio.
- **Dati preesistenti:** programma e sedute già in localStorage non sono cancellati. Prima dell'aggiornamento esporta un backup completo JSON. La modifica manuale conserva gli identificativi degli esercizi con nome invariato, così lo storico può restare associato. Se cambi il nome dell’esercizio, viene assegnato un nuovo ID per evitare confronti impropri.
- **GitHub Pages:** carica tutti i file nella root del repository e fai commit. Mantieni il nome `index.html`.

La cache service worker è `progym-v24-20261104`.

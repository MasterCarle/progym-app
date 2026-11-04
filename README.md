# proGYM 2.3 — installazione senza scheda predefinita

- Un nuovo utente vede **nessuna scheda**. Deve configurare il profilo e importare il JSON creato dal suo coach o da una AI.
- Le schede e i dati allenamento vengono salvati nel browser di ciascun dispositivo: non sono nel repository GitHub.
- I dati già salvati in localStorage non vengono cancellati dall'aggiornamento. Se avevi utilizzato la vecchia scheda preimpostata senza averla importata, importa il file personale di ripristino separato dopo aver fatto un backup.
- Carica tutti i file di questa cartella **nella root** del repository GitHub Pages; fai un commit e ricarica l'app.
- Il service worker ora usa la cache `progym-v23-20261104`.

**Privacy:** non caricare in GitHub file JSON di backup che contengono dati personali o di allenamento.

# proGYM 3.2.0 — Coach e Analytics

- Cronometro: durata reale per differenza di timestamp, con ore:minuti:secondi, ora iniziale/finale e correzione manuale dell’ora iniziale; NON è somma dei recuperi.
- Diagnosi del dato: due tempi identici arrotondati ai minuti non provano un errore. Sono ora visibili gli orari effettivi.
- Report post-workout con indicatori verde / rosso / grigio. Verde/rosso sulle ripetizioni solo a parità di numero di serie e carichi; se differenti, risultato grigio non confrontabile. Volume-carico = carico esterno × ripetizioni, non una misura di ipertrofia.
- Coaching 3.2: tiene conto dell'obiettivo e dell'esperienza del profilo, indica il target del range e un incremento minimo suggerito e personalizzabile. Suggerimenti non bloccanti; tecnica e RIR rimangono valutazioni dell'atleta. Non cambia automaticamente schede e target importati.
- Preservate le chiavi dei dati e la compatibilità dei backup precedenti. Nuovo schema di backup non necessario: incremento minimo incluso nel profilo.
- Aggiornare tutti i file nella radice del repository GitHub Pages. Prima esportare un backup. Non pubblicare backup personali.
- Il timer recupero con schermo spento rimane soggetto ai limiti PWA e non è stato trasformato in allarme nativo Android.
- Test effettuati: controllo sintassi e test logici isolati. Test end-to-end su Samsung Internet ancora da fare.

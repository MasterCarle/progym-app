# proGYM 2.7 — Unità kg/lb e fine allenamento

- **Carichi personalizzabili per esercizio**: Scheda → Modifica e riordina → Unità del carico (kg o lb). Le registrazioni e i backup conservano i carichi in **kg internamente**, anche quando sono visualizzati o inseriti in lb. Il valore reale dei vecchi carichi resta invariato. 1 lb = 0,45359237 kg.
- **Fine giornata**: quando tutte le serie della giornata risultano completate, l'ultimo flag non avvia il timer; interrompe un recupero già in corso e mostra «Allenamento completato», da chiudere manualmente.
- **Storico e progressione**: i carichi sono mostrati nell'unità scelta per l'esercizio; grafico e PR usano la conversione di visualizzazione. Volume nello storico resta in kg totali.

## Aggiornamento su GitHub Pages

Prima esporta un backup completo dei dati. Estrai lo ZIP nella root del repository e sostituisci index.html, manifest.json, sw.js, icone. Non caricare backup personali nel repository pubblico. Non cancellare i dati del browser.

Il timer a schermo bloccato rimane soggetto ai limiti delle PWA e non viene trasformato in un allarme nativo da questo aggiornamento.

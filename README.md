# proGYM 2.6 — Editor scheda riordinabile

Questa versione aggiunge le frecce ↑ ↓ all'editor manuale per riordinare esercizi e giornate, senza cancellare lo storico degli allenamenti.

## Uso

1. Esegui un backup completo dall'app prima di aggiornare.
2. Vai in **Scheda → Modifica e riordina esercizi / giornate**.
3. Usa le frecce ↑ ↓ per cambiare la sequenza e modifica i campi degli esercizi a piacere.
4. Tocca **Controlla e salva scheda** e conferma l'anteprima.
5. Le modifiche valgono per la scheda attiva. Lo storico precedente non viene rimosso; cambiando il nome di un esercizio, la nuova versione tratta l'esercizio come diverso ai fini dei confronti.

## Timer Android a schermo spento

La PWA GitHub Pages NON garantisce suoni o vibrazioni quando il browser è sospeso. Serve un'app Android nativa: soluzione consigliata **Capacitor + Local Notifications**, con permesso notifiche e gestione degli allarmi esatti. Per una notifica *persistente* con conteggio visibile nella barra di stato servono componenti Android aggiuntivi (Foreground Service / notifiche aggiornate dal sistema). Il progetto web qui incluso non dichiara di avere questa capacità.

## Pubblicazione

Estrai lo ZIP e carica **tutti i file** nella root del repository GitHub Pages, sovrascrivendo la versione precedente. Conserva un backup JSON personale prima di installare o testare.

---

# proGYM 2.5 — Timer e turni flessibili

## Nuove funzioni

- **Timer:** parte dopo la conferma di ogni serie; conta con timestamp reale anche se Android sospende il browser. A tempo scaduto il messaggio **TEMPO FINITO** resta visibile finché premi **Ho ripreso ✓**. Se l'app è attiva ripete suono e vibrazione ogni 8 secondi (dove consentito). Si configura in **Impostazioni → Suono, vibrazione e notifiche recupero**.
- **Notifiche:** permesso da concedere esplicitamente. La pianificazione mentre lo schermo è spento è tentata solo quando il browser espone `TimestampTrigger`, una funzione sperimentale. **Senza supporto, nessuna notifica puntuale affidabile con app sospesa**: le notifiche normali vengono visualizzate al ritorno dell'app. La schermata di blocco non può mostrare un countdown live garantito da una PWA. Per questo requisito è consigliata un'app nativa Android con notifiche locali.
- **Turni:** in Profilo scegli `Giorni flessibili / lavoro a turni` e imposta il numero di sedute/settimana; dalla schermata di allenamento selezioni manualmente Pull, Push, Gambe ecc. in qualunque data. I dati rimangono associati alla **data effettiva** e al tipo di giornata. L'app propone la prossima seduta in rotazione in base alla più recente registrata, senza obbligare né cancellare nulla.
- **Schede:** creazione manuale, testo e JSON accettano giornate senza giorno fisso `weekday:null` quando l'utente lavora a turni. Il prompt AI tiene conto di `scheduleMode` e `sessionsPerWeek`.
- **Compatibilità:** manteniamo le chiavi storage per profili, storico, scheda e timer. Esporta sempre un backup completo prima di aggiornare.

## Installazione GitHub Pages

Estrai lo ZIP, carica i file nella **root** del repository `progym-app`, facendo commit con i medesimi nomi. Non caricare backup personali. Se il browser mostra la vecchia UI, chiudi/riapri la PWA dopo che la nuova cache si è attivata.

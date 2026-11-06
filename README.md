# proGYM 2.5 — Timer e turni flessibili

## Nuove funzioni

- **Timer:** parte dopo la conferma di ogni serie; conta con timestamp reale anche se Android sospende il browser. A tempo scaduto il messaggio **TEMPO FINITO** resta visibile finché premi **Ho ripreso ✓**. Se l'app è attiva ripete suono e vibrazione ogni 8 secondi (dove consentito). Si configura in **Impostazioni → Suono, vibrazione e notifiche recupero**.
- **Notifiche:** permesso da concedere esplicitamente. La pianificazione mentre lo schermo è spento è tentata solo quando il browser espone `TimestampTrigger`, una funzione sperimentale. **Senza supporto, nessuna notifica puntuale affidabile con app sospesa**: le notifiche normali vengono visualizzate al ritorno dell'app. La schermata di blocco non può mostrare un countdown live garantito da una PWA. Per questo requisito è consigliata un'app nativa Android con notifiche locali.
- **Turni:** in Profilo scegli `Giorni flessibili / lavoro a turni` e imposta il numero di sedute/settimana; dalla schermata di allenamento selezioni manualmente Pull, Push, Gambe ecc. in qualunque data. I dati rimangono associati alla **data effettiva** e al tipo di giornata. L'app propone la prossima seduta in rotazione in base alla più recente registrata, senza obbligare né cancellare nulla.
- **Schede:** creazione manuale, testo e JSON accettano giornate senza giorno fisso `weekday:null` quando l'utente lavora a turni. Il prompt AI tiene conto di `scheduleMode` e `sessionsPerWeek`.
- **Compatibilità:** manteniamo le chiavi storage per profili, storico, scheda e timer. Esporta sempre un backup completo prima di aggiornare.

## Installazione GitHub Pages

Estrai lo ZIP, carica i file nella **root** del repository `progym-app`, facendo commit con i medesimi nomi. Non caricare backup personali. Se il browser mostra la vecchia UI, chiudi/riapri la PWA dopo che la nuova cache si è attivata.

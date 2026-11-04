# Palestra Coach 2.2 — GitHub Pages

PWA statica (HTML/CSS/JS) utilizzabile su GitHub Pages. Profilo, schede e allenamenti sono memorizzati nel browser e non sincronizzati tra telefoni.

## Pubblicazione
1. Esporta prima un backup JSON dalla vecchia app.
2. Estrai lo ZIP, carica tutti i file alla radice del repository GitHub.
3. Abilita Settings > Pages > Deploy from a branch > main / root.
4. Apri l'URL HTTPS e installa l'app dalla funzione Aggiungi alla schermata Home.
5. Aggiorna l'URL esistente, senza cambiarne origine, per preservare i dati salvati su quel sito; se cambi origine/importi dal file locale, importa il backup.

## Novità 2.2
- Navigazione inferiore Allenati / Scheda / Progressi / Profilo.
- Banner di benvenuto per nuovi utenti e guida di 3 passaggi: profilo > copia prompt AI > importa JSON.
- Profilo: obiettivo specifico, durata, attrezzatura, preferenze, giorni selezionati.
- Tempo di recupero personalizzabile: per impostazione usa quello previsto dalla scheda; in Profilo puoi forzare un tempo globale (15–600 secondi). Da ogni esercizio puoi impostare un recupero specifico, con priorità massima.
- Anteprima dettagliata della scheda prima della conferma importazione.
- Il backup include il profilo, la scheda attiva, i dati delle sedute e i recuperi specifici.

## Sicurezza e limiti
- I dati restano sul dispositivo; non pubblicare backup personali nel repository GitHub.
- Il motore di coaching è basato su regole, non su diagnosi o un modello AI integrato.
- Il formato accettato è illustrato in esempio-scheda.json.
- Il recupero è *tra le serie*, non tra ogni ripetizione.

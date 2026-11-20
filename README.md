# proGYM 3.1.0
Aggiornamento da 3.0.3. Esportare un backup prima della pubblicazione. Caricare i file nella radice di GitHub Pages, lasciando invariato URL e scope. Non pubblicare backup personali.

- Griglia dei sei pulsanti esercizio e correzione etichetta kg/lb.
- Target esplicito del coach, aumento suggerito soltanto dopo tutte le serie al massimo del range con carico costante e tecnica/RIR adeguati (autovalutati).
- Avvia allenamento: timestamp locale, persistente, fallback al primo flag; durata trascorsa inclusiva delle pause. Nessuna durata inventata per sedute precedenti.
- Report a fine seduta e riapertura tramite Riepilogo seduta. Confronto con ultima seduta identificabile attraverso ID giornata o maggioranza di esercizi confrontabili (minimo due); solo esercizi in comune, carico esterno registrato kg × ripetizioni, non una misura fisiologica. Le serie completate prima di uno skip contano nel totale.
- Backup con metadati durata. Chiavi precedenti mantenute.
- Avviso versione tramite version.json (rete, non cache); da questa versione, service worker con cache navigazione e attivazione esplicita se in attesa. La prima installazione da 3.0.3 non è protetta: avvisare gli utenti prima della pubblicazione. Il browser può attivare automaticamente il worker a finestre chiuse; l'avviso non garantisce un blocco assoluto. Verificare download prima di confermare. Per future release aumentare APP_VERSION, version.json e CACHE, pubblicare insieme.
- Timer recupero in background: invariato, limiti PWA.

Test: sintassi JS e SW; controlli di funzioni isolate. Collaudo su dispositivo e simulazione aggiornamento fra versioni ancora necessari.

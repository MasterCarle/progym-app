# proGYM 3.0.2 — Fix importazione ChatGPT su Samsung Internet

Patch compatibile con proGYM 3.0.1, senza reset delle chiavi dati.

- Ripara i caratteri `\[` / `\]` / `\{` / `\}` quando sono fuori dalle stringhe JSON, frequenti nella copia da alcune interfacce AI.
- Mantiene integri nomi, note e varianti, anche se contengono caratteri speciali.
- Continua ad accettare JSON puro, JSON in blocchi Markdown e scheda nel formato testuale guidato.
- Rifiuta JSON realmente incompleto senza salvarne una parte.
- L'importazione propone sempre l'anteprima prima di sostituire la scheda.

## Aggiornamento
Esegui prima un backup JSON completo dall'app. Carica nel repository i file estratti dallo ZIP, sovrascrivendo quelli esistenti. Il backup dell'atleta non va caricato su GitHub.

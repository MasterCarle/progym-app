# proGYM 3.0.3 — Archivio schede e collegamento storico

## Novità
- Archivio: rinomina, data di archiviazione, data di creazione (soltanto se conosciuta), eliminazione confermata della singola copia. L’eliminazione non cancella le sedute.
- Riconoscimento automatico conservativo se il nome normalizzato coincide e c’è un unico ID storico. Negli altri casi comando «Collega storico»: conferma manuale della variante, senza alterare ID o carichi.
- Lo storico collegato alimenta «Ultima volta», suggerimenti e grafico delle prestazioni anche dopo l’importazione di una nuova scheda.
- I collegamenti vengono inclusi nei backup e ripristinati in caso di importazione.

## Precauzioni
- Esportare un backup JSON completo dall'app PRIMA di aggiornare o eliminare archivi. Mai caricare backup personali sul repository pubblico.
- Collegare soltanto esercizi biomeccanicamente equivalenti sulla stessa macchina comparabile. Prese e macchine diverse vanno tenute separate.
- I backup 3.0.2 senza metadati non consentono di ricavare con certezza la vera data di creazione delle versioni storiche; l'app mostra la data di archiviazione.
- Non cancellare la cronologia di Samsung Internet e non disinstallare la PWA durante l'aggiornamento.

## Collaudo
La sintassi JavaScript è stata verificata con Node.js. È necessario confermare su Samsung Internet l’associazione storica e il ripristino di backup prima di distribuirla ad altri.

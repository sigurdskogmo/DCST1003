# Øving: Beslutninger

Du skal i hele denne øvingen ta hensyn til at **inngangsdata** er korrekte. Merk at løsningen er
laget som flere filer.

## Oppgave 1 - Lek med tall
Lag et program som leser det tallet (kun ett tall) som brukeren har skrevet inn i et tekstfelt.
Dette skal skje når en knapp trykkes. Skriv ut til websiden hva **halvparten** av tallet er, hva det
**dobbelte** av tallet er, hva det **tredobbelte** av tallet er, og hva tallet **ganget med seg selv** er.
Husk å benytte forklarende tekst til hver linje som skrives ut - det skal være lett å
lese programmet for en utenforstående.

## Oppgave 2 - Pensjonister, myndige og barn
Lag et program som ber om en alder i et tekstfelt, og skriver ut meldingen **\"Du er
myndig\"** dersom personen er over 18 år, **\"Du er dessuten pensjonist\"** dersom
personen også er over 67 år, og **\"Du er ikke myndig enda\"** dersom personen er
under 18 år. Husk å sjekke inngangsdata. Her forventes tall, altså må du sjekke at
ikke for eksempel et navn skrives inn.

## Oppgave 3 - Tippeprogram med if - else if - else
Lag et program som lar brukeren skrive inn tippetegnet for en fotballkamp i et
tekstfelt. Skriv ut teksten "Hjemme" når ”H” skrives inn, "Uavgjort" ved ”U” og "Borte"
ved ”B”. Merk: du skal bruke **if-else if-else**. Husk å sjekke inngangsdata. Her
forventes bokstavene ”H”, ”U” eller ”B”, altså må du gi beskjed til brukeren om hva
som forventes dersom noe annet skrives inn.

## Oppgave 4 - Tippeprogram med switch - case
Lag samme program som i oppgave 3, men bruk nå **switch-case** i stedet for **if-else if-else**.

## Oppgave 5 - Tippeprogram store og små bokstaver
Ta utgangspunkt i tippeprogrammet du tidligere har laget. Gjør slik at brukeren kan skrive
inn både "H” og ”h”, ”U” og ”u”, ”B” og ”b”, og uavhengig av hvorvidt brukeren velger å
skrive inn stor eller liten bokstav, skal riktig beskjed vises (”Hjemme”, "Uavgjort", "Borte").

## Oppgave 6 – Rabatt til pensjonister og barn
Lag et program som beregner kostnad på bussreiser etter følgende regler:

- 50% for barn under 12 år.
- 20% for pensjonister, dvs. folk over 67 år.
- Ingen rabatt for de øvrige aldersgruppene.

I tillegg skal prisen beregnes utfra en enhetspris per kilometer på 3,52 kroner. Data som skal
gis inn er alder og antall valgte kilometer. Du står helt fritt til å lage det slik du vil. Logikken i
programmet er det viktigste.

Husk å sjekke inngangsdata. Alder og antall kilometer må være tall for at programmet skal
kunne regne med disse. Gi en passende beskjed til brukeren om hva som forventes dersom
noe annet skrives inn.
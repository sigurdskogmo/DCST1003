# Øving: GitHub og arrays

Dette kan synes å være en stor øving, men dette er meget viktig stoff. Du trenger bare å gjøre
oppgave 1 til 5 for å få godkjent øvingen (oppgavene er lettere enn nr 6 og 7, siden de første
bygger direkte på leksjonen). 

Dersom du ikke får til alt, så lever inn det du har. Det viktigste er å gjøre et hederlig forsøk!
Antall oppgaver kan også virke avskrekkende mye sammenliknet med at dette er en leksjon
på lik linje med andre leksjoner. Arrays er sentralt i pensum, og det er derfor bra at du har
mange oppgaver å bryne deg på. Du trenger jo ikke gjøre alle med en gang, men kan gjøre de
obligatoriske nå og komme tilbake til de frivillige utover i faget. Dette er en bra taktikk, siden
arrays er modningsstoff og tar tid å innøve en dypere forståelse av.

## Oppgave 1 - Enkel array: Hardkoding
Lag en array som du fyller med tallene 3, 8, 7, 3, 6 og 2. Tallene skal legges inn direkte i
koden. Altså skal tallene hardkodes, som betyr at du ikke trenger å bruke tekstfelt eller
inputbokser for å få tallene inn i tabellen.

## Oppgave 2 - Varetabell: Løkke og tekstfelt
Lag et program som leser inn 5 varer og legger disse inn i en array. Legg selve
innlesningen inne i en løkke og bruk gjerne tekstfelter. 

## Oppgave 3 - Pristabell: Finn høyeste og laveste pris
Les inn prisen til hver enkelt av de 5 varene inn i **en ny array**. Regn deretter ut
gjennomsnittsprisen og summen av alle varene ved hjelp av en løkke. Finn også høyeste og
laveste pris.

## Oppgave 4 - Søk etter vare og tilhørende pris
Lag et program som tar utgangspunkt i et varenavn som brukeren skriver inn i et tekstfelt.
Programmet skal lete opp varen (bruk varetabellen fra oppgave 2), og skrive ut prisen
(pristabellen fra oppgave 3), men bare hvis varen er registrert.

Dersom for eksempel varenavnet ”Coca Cola” skrives inn i tekstfeltet og søke-knappen
trykkes, skal utskriften se slik ut: "Varen med navn Coca Cola koster 15 kroner". Dette
forutsetter at Coca Cola eksisterer og er registrert til å koste 15 kroner. Hvis ikke varen
eksisterer, skal det gis følgende beskjed: ”Varen med navn Coca Cola og tilhørende pris ble
ikke funnet i tabellene”.

## Oppgave 5 - Todimensjonale arrays: Divisjonstabellen
Lag et program som fyller DIVISJONStabellen med innhold og skriver denne ut. Du skal
bruke arrays. Dvs. at du kan lese fra rad 1 og kolonne 3 at 1/3 er 0.3333. Du kan tilsvarende
lese fra krysningspunktet mellom rad 3 og kolonne 1 at 3/1 er 3.
MERK: Du skal ha **to funksjoner** i løsningen din:
1. Den første skal legge inn selve divisjonstabellen i en array
2. Den andre skal hente ut hele tabellens innhold, og vise denne fram (fint presentert).

## XTRA (frivillig): Oppgave 6 - Todimensjonale arrays: Plusstabellen
Lag en PLUSS-tabell som regner ut summen av rad-indeksen og kolonne-indeksen.

## XTRA (frivillig): Oppgave 7 - Todimensjonale arrays: Enda bedre utskrift
Lag en rutine som **skriver ut** multiplikasjonstabellen (evt. divisjon/pluss), der
du kan velge med radioknapper hvilken tabell du skal skrive ut. Du skal også formatere med
overskriftsrader. Dersom du skriver ut divisjonstabellen, skal det begrenses til bare to
desimaler. 
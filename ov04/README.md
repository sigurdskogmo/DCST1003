# Øving: Løkker
I denne øvingen er det en del oppgaver. Merk at de mot slutten er frivillige (men anbefales).
Som du ser er det denne gangen et vidt spekter av oppgaver fra vanskelige til lette. God
trening på et meget sentralt tema :-)

## Oppgave 1 - For-løkker og while-løkker kan gjøre det samme
Lag et program tilsvarende første eksempel i timen (som står forklart i form av en for-løkke),
bare at du nå skal bruke en while-løkke. Det som skal skrives ut på websiden er
altså: "Jeg er tall nummer X" der X varierer fra 1 til 7.

## Oppgave 2 - Løkker = fleksibilitet!
Lag deretter et tilsvarende program som over, men la X variere mellom 12 og 98, og gjør det
slik at bare hvert 5. tall skrives ut. Bruk fortsatt while. Det første tallet som skal skrives ut er
altså 12, men hva blir da det siste tallet som skrives ut? Hvorfor?

## Oppgave 3 - Brukeren får selv velge start og slutt
Lag et program som skriver ut alle tall mellom de start- og sluttall som brukeren skriver inn.
Du skal skrive ut alle sammen i en lang tekststreng

## Oppgave 4 - Den store multiplikasjonstabell
Lag en prosedyre som skriver ut den store multiplikasjonstabellen (fra 10 til 19). Skriv til
websiden.

## Oppgave 5 - Sanger kan skrives med løkker!
Lag et program som skriver ut denne sangen (på samme form som vist her). Programmet
skal bruke løkker for å få dette til – hvis ikke må jo du som programmerer skrive inn 40 linjer
og det vil du vel ikke…

```10 green bottles, hanging on a wall,
10 green bottles, hanging on a wall,
If 1 green bottle were to accidentally fall
There'd be 9 green bottles, hanging on the wall
9 green bottles, hanging on a wall,
9 green bottles, hanging on a wall,
If 1 green bottle were to accidentally fall
There'd be 8 green bottles, hanging on the wall
8 green bottles, hanging on a wall,
8 green bottles, hanging on a wall,
If 1 green bottle were to accidentally fall
There'd be 7 green bottles, hanging on the wall
... og så videre...
1 green bottles, hanging on a wall,
1 green bottles, hanging on a wall,
If 1 green bottle were to accidentally fall
There'd be 0 green bottles, hanging on the wall
```

Ekstra utfordring: Du ser at det i siste vers er 1 green bottles, alså flertalls-s. Dette er jo ikke
helt bra. Hva må til for å endre dette slik at flertalls-s settes inn for alle vers uten det siste?

## Oppgave 6 - Kun tre forsøk på riktig passord
I timen viste vi et enkelt passordsystem. Du skal nå lage et system som tester om passord er
riktig, men som bare gir brukeren tre forsøk. Ta også hensyn til tre mulige
brukernavn med forskjellig passord.

## XTRA (frivillig): Oppgave 7 - Vanskelig trekant
Lag et program som produserer følgende output (trekant) til websiden:

```1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10
```

Du har ikke lov til å skrive 10 setninger ut direkte, og skal bruke nøsting (altså to løkker der
den ene er inne i den andre). Hint - bygg deg gradvis opp en streng av tall.

## XTRA (frivillig): Oppgave 8 - Enda en vanskelig trekant
Bare dersom du klarte forrige oppgave: Lag et program som produserer følgende output:

```1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
```

## XTRA (frivillig): Oppgave 9 - Partall og oddetall, nokså vanskelig
Du skal lage et program som gir brukeren mulighet til å velge at bare oddetall eller partall
mellom 1 og 10 skal skrives ut.

Hint: Sjekk modulo-operatoren. Dersom du skriver alert(10%3), så får du 1 som svar, fordi
resten blir 3 dersom en utfører divisjonen 10/3. Skriver du 11%3, får du 2, fordi resten blir 2.
En kan tenke motsatt, slik: 3*3 = 9, og 9+2 = 11. Skriver du derimot 12%3, får du 0, fordi
resten er 0 (fordi 12 går opp i 3). Dette eksempelet forklarer modulo-operatoren, og hintet i
denne oppgaven er at denne modulo-operatoren kan brukes til å løse problemet med
partall/oddetall.

## XTRA (frivillig): Oppgave 10 - Primtall, ganske vanskelig
Lag et program som finner ut om et tall er et _primtall_, altså kun delelig med seg selv og 1.

Hint: La programmet gå i løkke slik at flere tall kan analyseres.
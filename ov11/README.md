# Øving: Funksjonelle algoritmer
I denne øvingen er det ikke lov å bruke ```for```- eller ```while```-løkker.

Du trenger bare å løse 2/3 av denne øvingen for å få godkjent.

## Oppgave 1
Gitt følgende tabeller:

```js
let v = [1, 2, 3];
```
Nedenfor er noen uttrykk med tilhørende løsninger. Løsningene finner dere etter ```: ```. Bruk funksjonelle algoritmer til å lage disse løsningene.

```add 2 to each element of v: [ 3, 4, 5 ]
multiply each element of v by 2: [ 2, 4, 6 ]
sum of v: 6
mean of v: 2
each element of v as string: [ '1', '2', '3' ]
v as string: v[0] = 1, v[1] = 2, v[2] = 3
```
For eksempel kan det første uttrykket løses slik:
```js
console.log("add 2 to each element of v:", v.map(e => e + 2));
```

## Oppgave 2
Gitt følgende klasse og tabell:

```js
let students = [{ name: 'Ola', grade: 'A' }, { name: 'Kari', grade: 'C' }, { name: 'Knut', grade: 'C' }];
```

Som i Oppgave 1, bruk funksjonelle algoritmer til å lage følgende løsninger fra uttrykkene:

```students-elements as strings: [ 'Ola got A', 'Kari got C', 'Knut got C' ]
Kari got: C
Did everyone get C: No
How many got C: 2
Percentage of C grades: 66.66666666666667
Did anyone get A: Yes
Did anyone get F: No
```
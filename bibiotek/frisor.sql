create table klipp(
klippid serial primary key,
klipptime date not null,
betalt text DEFAULT 'nei' check (
    betalt = 'ja'
    or ikke-betalt = 'nei'
),
pris int
);

create table frisor(
frisorid serial primary key,
fornavn text not null,
etternavn text not null,
mobil text not null,
klippid int REFERENCES klipp (klippid)
);

create table kunde(
kundeid serial primary key,
fornavn text not NULL,
etternavn text not NULL,
mobil text,
kjonn text check (
    kjonn = 'f'
    or kjonn = 'm'
),
klippid int REFERENCES klipp (klippid)
);
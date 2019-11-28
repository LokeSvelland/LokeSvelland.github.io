--drop table bok, laaner, forfatter, eksemplar, utlaan CASCADE;

create table forfatter 
(
forfatterid serial primary KEY,
fornavn text not null,
etternavn text not null,
fodselsadato date,
kjonn text check (
    kjonn = 'm'
    or kjonn = 'f'
)
);

create table laaner
(
laanerid serial primary key,
fornavn text not null,
etternavn text not null,
adresse text,
telefonnr text not null,
epost text,
kjonn text
);

create table bok
(
bokid serial primary KEY,
tittel text not null,
isbn text,
antallsider int check (antallsider > 0),
sjanger text,
publisertdato date,
spraak text,
forfatterid INT REFERENCES forfatter (forfatterid)
);

create table eksemplar 
(
eksemplarid serial primary key,
tillstand text,
bokid INT REFERENCES bok (bokid)
);

create table utlaan
(
utlaanid serial primary key,
utlaansdato date not null,
innlevert text default 'nei' check (
    innlevert = 'ja'
    or innlevert = 'nei'
),
laanerid int REFERENCES laaner (laanerid),
eksemplarid INT REFERENCES eksemplar (eksemplarid)
);



select l.fornavn.f.fornavn = leo from laaner l
inner join utlaan ut on (l.laanerid = ut.utlaanid)
inner join eksemplar e on (ut.utlaanid = e.eksemplarid)
inner join bok b on (e.eksemplarid = b.bokid)
inner join forfatter f on (b.bokid = f.forfatterid);
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

create table utlaan
(
utlaanid serial primary key,
utlaansdato date not null,
innlevert text default 'nei',
laanerid int,
eksemplarid INT
);

create table eksemplar 
(
eksemplarid serial primary key,
tillstand text,
bokid INT
);

create table bok
(
bokid serial primary KEY,
tittel text not null,
isbn text,
antallsider int,
sjanger text,
publisertdato date,
spraak text,
forfatterid INT
);

create table forfatter
(
forfatterid serial primary KEY,
fornavn text not null,
etternavn text not null,
fodselsadato date,
kjonn text
);
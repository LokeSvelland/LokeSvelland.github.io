create table frisor(
frisorid serial primary key,
fornavn text not null,
etternavn text not null,
mobil text
);

create table kunde(
kundeid serial primary key,
fornavn text not NULL,
etternavn text not NULL,
mobil text,
kjonn text check (
    kjonn = 'f'
    or kjonn = 'm'
)
);

create table klipp(
klippid serial primary key,
klipptime date not null,
betalt text DEFAULT 'nei' check (
    betalt = 'ja'
    or ikke-betalt = 'nei'
),
pris int DEFAULT = 1200,
frisorid int REFERENCES frisor (frisorid),
kundeid int REFERENCES kunde (kundeid)
);

insert into kunde (fornavn,etternavn,mobil) values ('ole','olsen','12345678'),('anne','olsen','87654321');

delete from kunde where fornavn = 'ole';

update klipp set pris = 200;

select * from kunde where fornavn ~ 'kri';
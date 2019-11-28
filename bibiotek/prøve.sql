create table hotell 
(
hotellid serial primary KEY,
navn text not NULL,
epost text,
tlf text
);

CREATE table turist 
(
turistid serial primary key,
navn text not null,
epost text
);

CREATE table overnatting 
(
overnattingid serial primary key,
rom int,
pris int DEFAULT 1200,
betalt text,
hotellid int REFERENCES hotell (hotellid),
turistid int REFERENCES turist (turistid)
);

select t.*, h.navn from
hotell h inner join overnatting o  on (h.hotellid = o.overnattingid)
inner join turist t on (o.overnattingid = t.turistid);

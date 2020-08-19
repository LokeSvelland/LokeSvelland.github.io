CREATE TABLE lege (
    legeid int SERIAL PRIMARY KEY,
    navn text NOT NULL
)

CREATE TABLE behandling (
    behandlingid int SERIAL PRIMARY KEY,
    pris int,
    dato date,
    legeid int NOT NULL,
    pasientid int NOT NULL
)



CREATE TABLE pasient (
    pasientid int SERIAL PRIMARY KEY,
    navn text NOT NULL,
    adresse text
)

ALTER TABLE  behandling  ADD FOREIGN KEY ( pasientid ) REFERENCES  pasient  ( pasientid );
ALTER TABLE  behandling  ADD FOREIGN KEY ( legeid ) REFERENCES  lege  ( legeid );
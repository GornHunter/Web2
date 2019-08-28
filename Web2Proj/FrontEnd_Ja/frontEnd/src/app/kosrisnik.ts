export class Korisnik{
    Email: string;
    Ime: string;
    Prezime: string;
    Lozinka: string;
    DatumRodjenja: string;
    Adresa: string;
    TipKorisnika: TipKorisnika
}

export enum TipKorisnika{
    Djak, Penzioner, RegularniPutnik
}
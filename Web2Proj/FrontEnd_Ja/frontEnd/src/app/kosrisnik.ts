export class Korisnik{
    Email: string;
    Ime: string;
    Prezime: string;
    Lozinka: string;
    DatumRodjenja: string;
    Adresa: string;
    TipKorisnika: TipKorisnika;
    Slika: string
}

export enum TipKorisnika{
    Djak, Penzioner, RegularniPutnik
}
import { Linija } from './linija';

export class Polasci{
    Linija: Linija;
    Vreme: string;
    TipDana: TipDana;
}

export enum TipDana{
    RadniDan, Subota, Nedelja
}

export class PolasciZahtev{
    LinijaIme: string;
    TipDana: TipDana;
}
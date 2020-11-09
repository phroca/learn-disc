export class Disc {

    titre: string;
    pointAppui: string[];
    limites: string[];
    besoins: string[];
    moteurs: string[];
    peur: string[];
    irritePar: string[];
    sousStress: string[];

    constructor(disc?: Disc) {
        if (disc != null) {
            this.titre = disc.titre;
            this.pointAppui = disc.pointAppui;
            this.limites = disc.limites;
            this.besoins = disc.besoins;
            this.moteurs = disc.moteurs;
            this.peur = disc.peur;
            this.irritePar = disc.irritePar;
            this.sousStress = disc.sousStress;
        } else {

            this.titre = '';
            this.pointAppui = [];
            this.limites = [];
            this.besoins = [];
            this.moteurs = [];
            this.peur = [];
            this.irritePar = [];
            this.sousStress = [];
        }
    }
}

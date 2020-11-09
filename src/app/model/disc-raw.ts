import { DiscTuple } from './disc-tuple';

export class DiscRaw {
    titre: string;
    pointAppui: DiscTuple[];
    limites: DiscTuple[];
    besoins: DiscTuple[];
    moteurs: DiscTuple[];
    peur: DiscTuple[];
    irritePar: DiscTuple[];
    sousStress: DiscTuple[];


    constructor(discRaw?: DiscRaw) {
        if (discRaw != null) {
            this.titre = discRaw.titre;
            this.pointAppui = discRaw.pointAppui;
            this.limites = discRaw.limites;
            this.besoins = discRaw.besoins;
            this.moteurs = discRaw.moteurs;
            this.peur = discRaw.peur;
            this.irritePar = discRaw.irritePar;
            this.sousStress = discRaw.sousStress;
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

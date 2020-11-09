export class DiscTuple {
    valeur: string;
    isChecked: boolean;

    constructor(discTuple?: DiscTuple) {
        if (discTuple != null) {
            this.valeur = discTuple.valeur;
            this.isChecked = discTuple.isChecked;
        } else {
            this.valeur = '';
            this.isChecked = false;
        }
    }
}

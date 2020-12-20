export class DiscTitleDone {

    title: string;
    numberQuizzDone: number;

    constructor(discTitleDone?: DiscTitleDone) {
        if (discTitleDone != null) {
            this.title = discTitleDone.title;
            this.numberQuizzDone = discTitleDone.numberQuizzDone;
        } else {
            this.title = '';
            this.numberQuizzDone = 0;
        }
    }
}

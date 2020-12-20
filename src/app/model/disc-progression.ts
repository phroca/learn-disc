export class DiscProgression {
    progression: number;
    quizReussite: number;
    quizEchec: number;
    quizAbandonne: number;

    constructor(discProgression?: DiscProgression) {
        if (discProgression != null) {
            this.progression = discProgression.progression;
            this.quizReussite = discProgression.quizReussite;
            this.quizEchec = discProgression.quizEchec;
            this.quizAbandonne = discProgression.quizAbandonne;
        } else {
            this.progression = 0;
            this.quizReussite = 0;
            this.quizEchec = 0;
            this.quizAbandonne = 0;

        }
    }
}


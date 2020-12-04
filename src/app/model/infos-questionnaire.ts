export class InfosQuestionnaire {
    discChoisi: string;
    reponsePointAppui: {
        bonne: number,
        mauvaise: number
      };
      reponseLimites: {
        bonne: number,
        mauvaise: number
      };
      reponseBesoins: {
        bonne: number,
        mauvaise: number
      };
      reponseMoteurs: {
        bonne: number,
        mauvaise: number
      };
      reponsePeur: {
        bonne: number,
        mauvaise: number
      };
      reponseIrritePar: {
        bonne: number,
        mauvaise: number
      };
      reponseSousStress: {
        bonne: number,
        mauvaise: number
      };

      constructor(infosQuestionnaire?: InfosQuestionnaire) {
        if (infosQuestionnaire != null) {
            this.discChoisi = infosQuestionnaire.discChoisi;
            this.reponsePointAppui = infosQuestionnaire.reponsePointAppui;
            this.reponseLimites = infosQuestionnaire.reponseLimites;
            this.reponseBesoins = infosQuestionnaire.reponseBesoins;
            this.reponseMoteurs = infosQuestionnaire.reponseMoteurs;
            this.reponsePeur = infosQuestionnaire.reponsePeur;
            this.reponseIrritePar = infosQuestionnaire.reponseIrritePar;
            this.reponseSousStress = infosQuestionnaire.reponseSousStress;
        } else {
            this.discChoisi = '';
            this.reponsePointAppui = {
            bonne: 0,
            mauvaise: 0
            };
            this.reponseLimites = {
            bonne: 0,
            mauvaise: 0
            };
            this.reponseBesoins = {
            bonne: 0,
            mauvaise: 0
            };
            this.reponseMoteurs = {
            bonne: 0,
            mauvaise: 0
            };
            this.reponsePeur = {
            bonne: 0,
            mauvaise: 0
            };
            this.reponseIrritePar = {
            bonne: 0,
            mauvaise: 0
            };
            this.reponseSousStress = {
            bonne: 0,
            mauvaise: 0
            };
        }
    }
}

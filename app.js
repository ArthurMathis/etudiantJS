function etudiantNomPrenom(nom, prenom)  {
    return {
        nom : nom.toUpperCase(),
        prenom: prenom[0].toUpperCase() +
            prenom.slice(1).toLowerCase()
    }; 
}

function etudiantFormaté(e) {
    return `NOM : ${e.nom}, Prénom : ${e.prenom}`
}

function testEtudiant() {
    const nom = 'talus';
    const prenom = 'jean';
    const e1 = { nom, prenom };
    console.log(etudiantFormaté(e1));
    
    const e2 = etudiantNomPrenom(nom, prenom);
    console.log(etudiantFormaté(e2));
}

class Compteur{
    constructor(valeur, limite){
        this.valeur = valeur || 0;
        this.limite = limite || 100;
    }

    valeur(){
        return this.valeur;
    } 

    limiteAtteinte(){
        return this.valeur === this.limite ? true : false;
    }

    augmente(){
        if(!this.limiteAtteinte()){ ++this.valeur; }
    }

    static aPartirObjet(objc){
        return new Compteur(objc.valeur, objc.limite);
    }
}

function testCompteur1(){
    console.log('Test de compteur 1 !');
    let comp = new Compteur(5, 12);
    while(!comp.limiteAtteinte()){
        comp.augmente();
        console.log(comp.valeur);
    }
}

function testCompteur2(){
    console.log('Test de compteur 2 !');
    const c = Compteur.aPartirObjet({valeur: 5, limite: 12});
    while(!c.limiteAtteinte()){
        c.augmente();
        console.log(c.valeur);
    }
}


testEtudiant();
testCompteur1();
testCompteur2();

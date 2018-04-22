/*
Aufgabe: Nr.3
Name: Lina-Maria Straub
Matrikel: 257767
Datum: 22.04.2018

Der TS Code von Aufgabe 2 orientiert sich gr��tenteils an dem von Marco Bohn. Er wurde 
interpretiert und verstanden

*/

/*hier alle karten inhalte (Array) und die dazu geh�rigen zust�nde mit leerem Array */
namespace memorie {
    window.addEventListener("load", memorie_komplett);  //evtl auch kein window 
            
    /*listener
        Das Objekt, welches eine Benachrichtigung erh�lt
        Das load Ereignis wird ausgel�st, sobald eine Ressource 
        und die von ihr abh�ngigen Ressourcen das Laden beendet haben.*/
    
    let karten_inhalt: string[] = ["Reh", "Maus", "Hund", "Ele", "Eule", "Igel", "Wal", "Tiger", "Laus", "Ente"];
    let karten_offen: string[] = [] /*das Array hier leer da karten_zustand hier dann sichtbar machen*/
    let karten_zustand: string[] = ["verdeckt", "genommen", "sichtbar"];


    /*neue Variablen f�r die Karten, welche dann immer eine eigene ID haben
    2 IDs da ja auch 2 Karten f�r insgesamt einen Spielzug, um deren Inhalt dann zu vergleichen
    any (um selbst typ auszusuchen)*/
    
    //KEIN ANY!

    let idKarte1: string;
    let idKarte2: string; 

    /*neue Variablen f�r die Klassen der karten*/

    let classKarte1: string;
    let classKarte2: string;

    /* variable Conter, der z�hlt wie viele Karten offen sind*/

    let zaehler_counter: number = 0;

    //neue Arrays f�r die erziehlte Punktezahl der Spieler sp�ter abzuspeichern

    let spieler_eingabe: string[] = []; //welche Variablenbezeichnung????

    let punkteanzahl: number[] = [0, 0, 0, 0,] //Punktestand vorinstalliert auf 0.

    
    function memorie_komplett(): void { /*void..irgendetwas*/

        kartenanzahl_doppelt(anzahl);

        karten_erstellen(anzahl);

        spieler_erstellen(spieler);
    }
    

  
    //Neue Funktion f�r das Event

window.addEventListener("click", eventfunct);

    function eventfunct(_event: Event): void {

        let target: HTMLDivElement = <HTMLDivElement>_event.target;

        console.log(_event);

        if (zaehler_counter == 0) {

            document.getElementById(target.id).classList.remove("verdeckt");
            classKarte1 = target.className;
            idKarte1 = target.id;
            document.getElementById(target.id).classList.add("sichtbar");

            zaehler_counter++;

        } else if (zaehler_counter == 1) {
            document.getElementById(target.id).classList.remove("verdeckt");
            classKarte2 = target.className;
            idKarte2 = target.id;
            document.getElementById(target.id).classList.add("sichtbar");
            console.log(zaehler_counter);

            //Timerfunktion, wie lange es dauert bis sich die Karten wieder umdrehen und die verschiednen F�lle
            //setTimeout ist ein fester begriff
            
            //Keine ANONYMEN Funktionen!!! VL anschauen
           setTimeout(function() {

// hier werden die Namen der CSS-Klassen der angeklickten Karten verglichen, nicht die Inhalte. Sinnvoll?
                if (classKarte1 == classKarte2) {
                    document.getElementById(idKarte1).classList.remove("sichtbar");
                    document.getElementById(idKarte2).classList.remove("sichtbar");


                    document.getElementById(idKarte1).classList.add("genommen");
                    document.getElementById(idKarte2).classList.add("genommen");

                } else {
                    document.getElementById(idKarte1).classList.remove("sichtbar");
                    document.getElementById(idKarte2).classList.remove("sichtbar");


                    document.getElementById(idKarte1).classList.add("verdeckt");
                    document.getElementById(idKarte2).classList.add("verdeckt");


                }
                
                /*Verbessern aber wie..:Es wird also auf jeden Fall die Klasse "sichtbar" entfernt, daher sollten die Anweisungen hierzu nicht in der Fallunterscheidung auftauchen
               Es ist au�erdem wenig elegant achtmal getElementById zu schreiben...*/

            }, 2000);

            zaehler_counter = 0;

        }
    }


    /* HAUPTPROGRAMM*/

    /*Anzahl der Spieler anzeigen und ausw�hlen lassen bevor das Spiel beginnt
        Promt ist ein Dialogfenster mit Eingabefunktion
        Die parseInt Funktion konvertiert das erste Argument zu einem String, 
        analysiert diesen und gibt eine ganze Zahl zur�ck*/
    function spieler_eingang(): number {
        let spieler_eingabe: string = prompt("Spieleranzahl zwischen 1 und 4 Spielern w�hlen");
        let spieler: number = parseInt(spieler_eingabe);

        if (spieler >= 1 && spieler <= 4) {
            return spieler;
        }
        else {
            alert("nur eine Zahl zwischen 1 und 4");
            spieler_eingang();
        }
    }

    /*Anzahl der Karten anzeigen und ausw�hlen lassen bevor das Spiel beginnt*/
    function kartenanzahl_eingang(): number {
        let kartenpaaranzahl_eingabe: string = prompt("Kartenpaaranzahl zwischen 5 und 10 w�hlen");
        let kartenpaaranzahl: number = parseInt(kartenpaaranzahl_eingabe);

        if (kartenpaaranzahl >= 5 && kartenpaaranzahl <= 10) {
            return kartenpaaranzahl;
        }
        else {
            alert("nur eine Zahl zwischen 5 und 10");
            kartenanzahl_eingang();
        }
    }

    let spieler: number = spieler_eingang();
    let anzahl: number = kartenanzahl_eingang();


    /* Karten Verdoppeln da im Array karten_inhalt nur einmal Vorhanden  */
    function kartenanzahl_doppelt(i: number): void {
        for (let n: number = 1; n <= i; n++) {

            let inhalt: string = karten_inhalt[0];
            karten_offen.push(inhalt);
            karten_offen.push(inhalt);

            let entfernen = karten_inhalt.splice(0, 1);
        }
    }

    /* Spieler�bersicht   */
    function spieler_erstellen(_spieler: number): void {
        let node: any = document.getElementById("spielerbereich");
        let childNodeHTML: string;

        for (let z: number = 1; z <= _spieler; z++) { /*_spieler greift bis auf das Eingabefeld vom Spieler zur�ck*/

            childNodeHTML = "<div class='spielerbereich" + z + "'>";
            childNodeHTML += "Spieler " + z; /*Spieler z = Spieler1 Spieler2 Spieler3 Spieler4*/
            childNodeHTML += "<p> Punkte: </p>"; /*Punktanzahl unter den Spielern*/
            childNodeHTML += "</div>";
            node.innerHTML += childNodeHTML;

        }

    }

    /* Erstellen der Karten mit unterschiedlichem Status */
    function karten_erstellen(_anzahl: number): void {
        let node: any = document.getElementById("spielbrett");
        let childNodeHTML: string;
        let n: number = 0;

        for (let n: number = 0; n < (_anzahl * 2); n++) { /*_anzahl 5 bis 10 mal 2*/
            let min: number = 0;
            let max: number = (karten_offen.length * 2);

            let gemischt: number = Math.floor(Math.random() * karten_offen.length); /*Math-floor: Rundet eine Zahl auf eine ganze Zahl ab.*/
            /*Math.random: Gibt eine Pseudozufallszahl zwischen 0 und 1 zur�ck.*/

            childNodeHTML = "<div class='karte" + zustand_zufall() + "' id='Karte" + n + "'>"; /*um CSS anzuwenden mit n hier die kartenzahl Karte0, Karte1...*/
            childNodeHTML += karten_offen[gemischt];
            childNodeHTML += "</div>";
            node.innerHTML += childNodeHTML;

            let content: string = karten_offen[gemischt];

            let entfernen = karten_offen.splice(gemischt, 1);

            n++;
        }
    }

    /*Zustand der Karten festlegen wie oben im namespace & karten_zustand genannt */
    function zustand_zufall(): string {

        return "verdeckt";

    }
}
namespace memory_4 {//Variablen definieren

    let anzahlSpieler: number = 0;//Variable f�r die Anzahl der Spieler um im Popup Anzahl der Spieler von 1-4 zu w�hlen

    export let anzahlKartenpaare : number = 5;//Variable f�r die Kartenanzahl um im Popup die Anzahl der Kartenpaare zu w�hlen
    
    let offeneKarten: HTMLElement[] = []; //leeres Array, hier landen die 2 angeklickten Karten und hier vergleich ob sie gleich sind

    let currentCardDeck: Deck = undefined;//Variable des momentanen Kartendecks, wenn keine Eingaben getätigt werden

    let counter: number = 0;//Variable counter anlegen

    let l: number = 0;//f�r gratulation

    let nehmeKlicksAn: boolean = true;

    let kartenArray: string[] = [];//leeres Array, damit hier sp�ter Karten abgespeichert werden k�nnen /zwischengespeichert die Karten hier

    let playerNames: string[] = []; //Arrays erstellen um  den punktezahl und Anzahl der Spieler später abzuspeichern
    //let score: number[] = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert
    let punktezahl: number[] = [0, 0, 0, 0];//Array um Punktezahl abzuspeichern
                                            //Punktestand = 0, ist vordefiniert, da Spieler anfangs ja noch keine Punkte haben
    
    window.addEventListener( "click", verarbeiteKlick );//window.addEventListener wird ausgef�hrt sobald ein Klick (durch funktion verarbeiteKlick) ausgef�hrt wird

    populateDecks();//Funktion populateDecks wird aufgerufen, damit spiel startet (funktion im interface)
//-----------------------------------------------------------------------------------------------------------------------------------
    function verarbeiteKlick( _event: Event ): void {//Funktion erstellen
        let target: HTMLDivElement = <HTMLDivElement>_event.target;//target ist kein div aber ich weise ihm ein Div zu (<HTMLDivElement>)

        console.log( _event );//Konsolenausgabe

        if ( target.classList.contains( "verdeckt" ) && nehmeKlicksAn ) {//Klasse 'verdeckt' (diese Karten) und Klick auf die muss angenommen werden
                                                                        //nehmeKlicksAn true wenn 'verdeckte' Karte
            
            if ( counter < 2 ) {//Wenn counter kleiner 2 : (1 angeklickte Karte)
                target.classList.remove( "verdeckt" );// dann verschwindet 'verdeckt'e Karte und Karte wird aufgedeckt
                offeneKarten.push( target );//angeklickte Karte ('offen') wird in offeneKarten Array gepusht(siehe push) target=ziel
            }                                //in dem Array liegen immer nur die 2 angeklicken Karten, 
                                            //welche dort auf Gleichheit �berpr�ft und am Ende aus dem Array wieder genommen werden, welches dann wieder leer ist

            counter++;//Counter wird hochgez�hlt / vorher counter<2 jetzt counter==2

            if ( counter == 2 ) {//Counter == 2 (2 angeklickte Karten)

                nehmeKlicksAn = false;//2 Klicks sind schon da. deswegen false. keine weiteren Klicks

                counter = 0;//Counter wird zur�ck auf 0 gesetzt (neue Spielrunde)

                //(Gleichheit der 2 Karten pr�fen) if Bedingung wird in jedem Spielzug abgefragt ob beide Karten gleich sind
                if ( offeneKarten[0].innerText === offeneKarten[1].innerText ) {//offeneKarte0 ==offeneKarte1??
                                                                                //�berpr�fung ob die Karten gleich sind

                    setTimeout(() => {//setTimeout Funktion f�r den Fall: Gleiches Kartenpaar super (werden genommen)

                        offeneKarten[0].classList.add( "genommen" );//Karte [0] wird genommen / Array offeneKarten immer nur mit den 2 Karten 'voll' dann wieder gelert
                        offeneKarten[1].classList.add( "genommen" );//Karte [1] wird genommen

                        offeneKarten = [];//leeren des Arrays offeneKarten, da Spielzug zuende / im n�chsten Spielzug wieder 2 karten drinnen

                        nehmeKlicksAn = true;//neuer Spielzug. 2 Klicks werden wieder angenommen und nur wenn karte 'verdeckt' da dann true

                        if ( document.getElementsByClassName( "verdeckt" ).length == 0 ) {//wenn keine Karte mehr in Klasse 'verdeckt'
                                                                                        //sprich: verdeckt.length==0  
                                                                                        //dann: Spiel vorbei
                            alert( "Glückwunsch, du hast gewonnen!" )//und: Gratulationsbox erscheint  
                        }

                    }, 2000 );//2000 = die 2 sekunden in denen Karten von Spielfl�che entfernt werden


                }
                else {//andernfalls f�r den Fall: Karten sind nicht gleich 

                    setTimeout(() => {//setTimeout Funktion f�r den Fall: 2 Karten sind nicht Identisch (bleiben verdeckt)

                        offeneKarten[0].classList.add( "verdeckt" );//Karte [0] wird verdeckt
                        offeneKarten[1].classList.add( "verdeckt" );//Karte [1] wird verdeckt

                        offeneKarten = [];//leeren des Arrays offeneKarten, da Spielzug zuende

                        nehmeKlicksAn = true;//neuer Spielzug. 2 Klicks werden wieder angenommen

                    }, 2000 );//2000 = die 2 sekunden in denen Karten von Spielfl�che entfernt werden
                }
            }
        }
    }

    //Funktion erstellen, damit alle Karten umgedreht sind beim Spielbeginn
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
    export function randomState(): string {//diese Funktion sorgt daf�r, das alle Karten zum Spielbeginn 'verdeckt' sind
        
        return "verdeckt";//Alle Karten sind umgedreht/'verdeckt'
    }
 //---------------------------------------------------------------------------------------------------------------------------------------------------------------
    function mischeKarten(): void {//shuffleFunktion, damit Karten immer unterschiedlich auf Spielfeld liegen
                                    //die Funktion unten im spielfeldErzeugen aufrufen!

        let i: number = kartenArray.length;//Variable i wird definiert & ist gleich gro� wie die L�nge des kartenArray

        let j: number = 0;//Variable j wird definiert mir der Zahl 0

        let temp: string = "";  //Variable temp wird definiert als string und ohne Textinhalt

        while ( --i > 0 ) {//variable i (wie oben genannt die L�nge des kartenArray)
                            // (--i) wird um 1 heruntergez�hlt und muss gr��er 0 sein

            //j=0, eine random Zahl zwischen 0 und 1 tritt dadurch auf
            j = Math.floor( Math.random() * ( i + 1 ) );//f�r Zuf�lligkeit
            temp = kartenArray[j];//ohne Textinhalt =0
            kartenArray[j] = kartenArray[i];
            kartenArray[i] = temp;//temp ist Variable als string ohne Textinhalt
        }
    }
//------------------------------------------------------------------------------------------------------------------------------------------------------
    function spielfeldErzeugen(): void {//funktion um spielfeld zu erzeugen

        let node: any = document.getElementById( "Spielfeld" );//id spielfeld aus dem HTML wird aufgerufen

        mischeKarten();//Funktion von oben'mischenKarten' wird hier aufgerufen, damit bei jedem Spiel die Karten auch gemischt werden

        let header = document.createElement( "h2" );//element h2 im "spielfeld" erzeugen durch ts
        header.innerText = "Spielfeld";//spielfeld als �berschrift
        node.appendChild( header );

        let spielFeld = document.createElement( "div" );//das Spielfeld soll in ein div "gebunden" sein

        for ( let i: number = 0; i < kartenArray.length; i++ ) {//Schleife erstellen & i=0 
                                                                //und: i kleiner als kartenarray.length
                                                                //und: wird hochgez�hlt

            let card = document.createElement( "div" );//Karten sollen ein div sein
            card.id = i.toString();//string
            card.setAttribute( "attr", i.toString() );//Karte bekommt ein Attribut 

            card.classList.add( kartenArray[i] );
            card.classList.add( randomState() );

            card.textContent = kartenArray[i];//Karteninhalt wird im kartenArray gespeichert

            card.style.backgroundColor = currentCardDeck.farbe; //CSS wird definiert (Dynamische Erzeugung) 
            card.style.fontFamily = currentCardDeck.schrift;//aus DECK-> schrift (interface)
            card.style.fontSize = currentCardDeck.size + "px";//fontSize soll im DECk bei size in px angegeben werden 
            card.style.color = currentCardDeck.schriftfarbe;//Schriftfarbe (FileDecks.ts)

            spielFeld.appendChild( card );//Var card an spielFeld geheftet als kind
        }//forschleife hier geschlossen

        node.appendChild( spielFeld );//Var spielFeld als kind  an Knoten geheftet
    }//Funktion spielfelderzeugen hier geschlossen
//---------------------------------------------------------------------------------------------------------------------------unten Spielerinfo Anzeige
    function spielerInfo(): void {//Funktion spielerInfo erstellen

        let node: any = document.getElementById( "Spielerinfo" );//Aufruf der id "Spielerinfo" im Html Dokument auf das ts

        let childNodeHTML: string = "";//HTML string mit leerem Inhalt

        childNodeHTML += "<div>";//Div erzeugen f�r die spielerInfo

        //Schleife erstellen, i=0, i ist größer als die Länge des Spieler Arrays, i wird hochgezählt

        for ( let i: number = 0; i < playerNames.length; i++ ) {//Schleife erstellen. i=0
                                                                //und: i kleiner spieler.length
                                                                // i++ i wird hochgez�hlt

            childNodeHTML += "<div id=Spieler";//Id "Spieler" wird erzeugt (untergeordnete id von Spielerinfo)
            childNodeHTML += i;
            childNodeHTML += ">";//div ende 

            childNodeHTML += "<p>Spielername: ";//hier <p> um auch Spielernamen neben der Anzahl der Spieler anzugeben
            childNodeHTML += playerNames[i];
            childNodeHTML += "</p>";

            childNodeHTML += "<p>Punktestand: ";//hier <p> um den Punktestand zu erzeugen

            childNodeHTML += punktezahl[i];//um zugriff auf den PunktestandArray zu haben
            childNodeHTML += "</p></div>";
        }

        childNodeHTML += "</div>";//Div wird geschlossen

        node.innerHTML += childNodeHTML;//Inhalt der Knoten mit childNodeHTML bef�llen

        console.log( childNodeHTML );//Ausgabe auf die Konsole
    }//ende funktion spielerInfo
//---------------------------------------------------------------------------------------------------------------------------Gratulation am Ende des Spiels
    function gratulation(): void {//funktion gratulation, welche am ende erscheint, wenn alle karten weg sind und alle paare in l sind

        if ( l == anzahlKartenpaare ) {//Pr�fung ob Anzahl der richtigen Paare die Anzahl auf dem Spielfeld sind, damit ende des Spiels analysiert werden kann

            alert( "Gl�ckwunsch, du bist der Gewinner!" )//Alertbox erstellen f�r die Gratulation zum Spielende
        }
    }
//HAUPTFUNKTION----------------------------------------------------------------------------------------------------------------------------------------------
    export function main(): void {//Funtion f�r Spielerabfrage, wie viele Spieler spielen wollen

        let spielerAnzahl: number;//Variable f�r Spieleranzahl def. hier eine number

        //Variable collection als NodeListOfElement
                                 //NodeList Objekte sind Sammlungen von Knoten
                                                         //Zugriff auf die id spieleranzahl und auf die inputs
        let sammlung: NodeListOf<Element> = document.getElementById( "spieleranzahl" ).getElementsByTagName( "input" );

        for ( let i = 0; i < sammlung.length; i++ ) {// i=0, gr��er als die L�nge von sammlung und wird hochgez�hlt

            //Spieleranzahl wird hochgez�hlt 

            if ( ( <HTMLInputElement>sammlung[i] ).checked ) {//Variable sammlung als HTMLInputElement

                spielerAnzahl = i + 1;//Spieleranzahl hochz�hlen

                break;//Abbruch
            }
        }
        //--------------------------------------------------------------------------------------------------------------------------------------Eingabe Spielernamen
        sammlung = document.getElementById( "name" ).getElementsByTagName( "input" );//Zugriff auf die id name (aus HTML Spieler Namen)  und auf die inputs (aus HTML Spielernamen)

        for ( let i = 0; i < sammlung.length; i++ ) {//Variable i=0, ist kleiner als die L�nge von sammlung, wird hochgez�hlt

            if ( ( <HTMLInputElement>sammlung[i] ).value == "" && i == 0 ) {//wenn kein Spielername eingegeben

                playerNames.push( "NoName" )//Name wird gepusht /NoName tritt auf, wenn kein Spielername eingegeben wurde
            }

            else if ( ( <HTMLInputElement>sammlung[i] ).value != "" ) {//Ansonsten wird der Spielername ins Spiel gepusht der eingegeben wurde
                playerNames.push(( <HTMLInputElement>sammlung[i] ).value )
            }
        }//Ende der for-schleife
        //-------------------------------------------------------------------------------------------------------------------------------------------Kartensatz
        sammlung = document.getElementById( "kartensatz" ).getElementsByTagName( "input" );//Auswahl des Kartensatzes, Zugriff auf die id kartensatz und auf die inputs

        if ( currentCardDeck == undefined )//wenn beim Kartensatz in einstellungen nichts ausgew�hlt wird
            currentCardDeck = decks["zahlen"];//dann erscheint Deck Zahlen

        populatekartenArray( currentCardDeck.inhalt );//Karten werden erzeugt

        spielfeldErzeugen();//Spielbrett erzeugen 

        spielerInfo();//Spielerinfo erzeugen

        document.getElementById( "grundeinstellungen" ).remove()//Starteinstellung wird nach der Einstellung gelöscht
    }//ende export function main
    //---------------------------------------------------------------------------------------------------------------------------------------------------Kartenanzahl
    export function onInputEvent( value: number ) {//Parameter value wird als number übergeben

        document.getElementById( "kartenpaare-label" ).innerText = value.toString();//auf id kartenpaare-label wird zugegriffen u wert wird von number zum string
        anzahlKartenpaare = value;//hier value jetzt string u nicht mehr number
    }

    function populatekartenArray( karten: string[] ) { //hinzuf�gen von Karten

        for ( let i = 0; i < anzahlKartenpaare; i++ ) {//erzeugen von Kartenpaaren
            kartenArray.push( karten[i] );//karten ins array gepusht
            kartenArray.push( karten[i] );//karten ins array gepusht
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------------------------------------
    export function kartenSatzbearbeiten( element: HTMLInputElement ) {//Kartensatz-l�nge soll sich bei Auswahl anpassen
        currentCardDeck = decks[element.value];
        repopulateCardForm();
    }
    function repopulateCardForm() {//damit sich die kartensatz-l�nge auch �ndern kann (Fehlererkennung)

        let kartenPaareElement = <HTMLInputElement>document.getElementById( "kartenpaare" );//var kartenPaareElement soll als HTMLInputElement auf die ID kartenpaare zugreifen

        kartenPaareElement.max = currentCardDeck.inhalt.length.toString();//max-l�nge der var ist l�nge der verschiedenen DECKS

        let maxWert = currentCardDeck.inhalt.length;//var maxWert ist L�nge des Inhalts der var curentCardDecks

        let momentanerWert = parseInt( kartenPaareElement.value );//var mementanerWert ist stringu wird zu ganzzahligen Zahl umgewandelt

        //Wenn der maxWert kleiner als der momentanerWert ist

        if ( maxWert < momentanerWert ) {//wenn maxWert kleiner als MimentanerWert
            kartenPaareElement.value = maxWert.toString()//dann
        }
        document.getElementById( "kartenpaare-label" ).innerText = kartenPaareElement.value;//�ndert sich der Slider u somit andre grundeinstellung
    }
    //-----------------------------------------------------------------------------------------------------------------------------------------------Spieleranzahl und Namen
    export function spielerAnzahlBearbeiten( element: HTMLInputElement ) {

        let spielerZahl = parseInt( element.value );//var spielerZahl ist string u wird zu ganzen Zahl umgewandelt

        for ( let i = 1; i <= 4; i++ ) {//i=1 und kleiner gleich 4 und hochgez�hlt (Spieleranzahl die m�glich ist)

            let inputElement = <HTMLInputElement>document.getElementById( `player${i}` );//`player${i}`: Innerhalb eines String wird Javascripts aufgerufen, zur Bearbeitung  
            let labelElement = document.getElementById( `player${i}-label` );

            if ( i <= spielerZahl ) {//wenn i kleiner gleich spielerZahl u eingabe eintritt, dann erscheint das Feld wo man seinen Namen eintragen kann
                inputElement.disabled = false;//false da nicht deaktiviertes Feld
                labelElement.style.opacity = "1";//1 damit kein grauschleier und man erkennt das man hier reinschreiben kann
            }

            else {//kenn keine Eingabe, dann Feld mit namen grau u man kann nichts eintragen
                inputElement.disabled = true;//true da deaktiviertes Feld (dieser spieler spielt nicht
                labelElement.style.opacity = "0.5";//deckkraft, wo man nichts mehr eintragen kann in grau
                inputElement.value = "";
            }
        }
    }
}
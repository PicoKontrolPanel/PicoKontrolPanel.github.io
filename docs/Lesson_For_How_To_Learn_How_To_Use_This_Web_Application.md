Trin 1 Fjernstyring af Raspberry Pi Pico W

Nu skal du se, hvad du kan bygge.

Med Pico Kontrol Panel kan du styre en Raspberry Pi Pico W direkte fra en browser. Det kan være en robotbil, en LED-lampe, en motor, en sensor-test, en lille maskine eller noget helt andet.

Du kan selv bygge dit kontrolpanel med knapper og slidere. De kan flyttes, roteres og gøres større eller mindre, så panelet passer til netop din robot.

Appen kan bruges på:





bærbare computere



stationære computere



Chromebooks



Android-telefoner



iPhones og iPads med Bluefy-browseren

Telefoner er bedst som controllere. Kodeværkstedet skal bruges på en bærbar, stationær computer eller en stor Chromebook-skærm, fordi kodeskærmen kræver mere plads.

Når du er færdig med guiden, kan du:





forbinde til din Pico W med Bluetooth



bygge et kontrolpanel



styre din Pico W trådløst



ændre koden trådløst, uden at forbinde til computeren



dele robotten med en ven, hvis du giver lov

[Skærmbillede/video anbefales: en kort video eller GIF af en robotbil, LED-test eller motor, der styres fra kontrolpanelet. Vis også et færdigt kontrolpanel med knapper og slidere.]

Trin 2 Førstegangs-opsætning af browser

Før du kan forbinde til Picoen, skal din browser kunne bruge Web Bluetooth.

Hvis appen allerede siger, at Bluetooth er tilgængelig, kan du gå videre til næste trin. Hvis den siger, at Web Bluetooth ikke er tilgængelig, skal du bruge listen her.

Google Chrome på Windows, Mac, Chromebook og Android





Skriv 'chrome://flags/' i adressefeltet.



Søg efter 'Bluetooth'.



Sæt 'Web Bluetooth API' til 'Enabled', hvis den findes.



Sæt 'Use the new permissions backend for Web Bluetooth' til 'Enabled', hvis den findes.



Luk og åbn Chrome igen.

Microsoft Edge på Windows og Mac





Skriv 'edge://flags/' i adressefeltet.



Søg efter 'Bluetooth'.



Sæt 'Web Bluetooth API' til 'Enabled', hvis den findes.



Sæt 'Use the new permissions backend for Web Bluetooth' til 'Enabled', hvis den findes.



Luk og åbn Edge igen.

Brave på Windows, Mac, Chromebook og Android





Skriv 'brave://flags/' i adressefeltet.



Søg efter 'Bluetooth'.



Sæt 'Web Bluetooth API' til 'Enabled'.



Sæt 'Use the new permissions backend for Web Bluetooth' til 'Enabled'.



Lad 'Web Bluetooth confirm pairing support' stå på 'Default', medmindre en underviser siger noget andet.



Luk og åbn Brave igen.

Vigtigt i Brave: Hvis direkte MicroPython-installation ikke virker senere, skal du downloade UF2-filen og selv kopiere den til 'RPI-RP2'-drevet. Bluetooth kan stadig bruges, når Web Bluetooth er slået til.

Opera på Windows, Mac, Linux, Android, iPhone og iPad





Skriv 'opera://flags/' i adressefeltet.



Søg efter 'Bluetooth'.



Slå Web Bluetooth-indstillinger til, hvis de findes.



Luk og åbn Opera igen.

Hvis det ikke virker, brug Chrome eller Edge.

Safari på iPhone, iPad og Mac

Safari understøtter ikke Web Bluetooth til denne app.





På iPhone/iPad: brug Bluefy-browseren.



På Mac: brug Chrome, Edge eller Brave.

Bluefy på iPhone og iPad





Installer Bluefy fra App Store.



Åbn Pico Kontrol Panel-linket inde i Bluefy.



Når Bluefy spørger om Bluetooth, skal du give tilladelse.

Når browseren spørger om Bluetooth-tilladelse

Vælg ja/tillad, når browseren spørger, om siden må finde eller forbinde til Bluetooth-enheder.

[Skærmbillede anbefales: browserens 'flags'-side med søgning efter Bluetooth. Et ekstra skærmbillede af appens besked "Web Bluetooth er ikke tilgængelig..." er nyttigt for fejlfinding.]

Trin 3 Åbn web-applikationen og opret din bruger





Åbn: 'https://picokontrolpanel.github.io'



Skriv et brugernavn.



Tryk 'Fortsæt'.

Dit brugernavn gemmes i din browser. Picoen bruger det til at kende forskel på dig, ejeren og andre brugere.

Vælg et navn, du gerne vil ses som, når andre forbinder til dine enheder. Brug ikke følsomme oplysninger.

Du lander nu i 'Hovedmenu'.

I hovedmenuen er der to faner:





'Mine Enheder': dine egne Picoer



'Andre Enheder': Picoer, som andre har delt med dig

Hvis der ikke er nogen enheder endnu, er det helt normalt. Din Pico skal først gøres klar.

[Skærmbillede anbefales: velkomstskærmen med feltet "Brugernavn" og knappen "Fortsæt". Næste billede: Hovedmenu med "Mine Enheder", "Andre Enheder" og plus-knappen.]

Trin 4 Åbn Kodeværkstedet

Kodeværkstedet bruges til at installere og ændre kode på Picoen.

Dette trin skal laves på en bærbar, stationær computer eller stor Chromebook-skærm. Hvis skærmen er for lille, viser appen beskeden 'Brug en bærbar for at bruge Kodeværkstedet'.





Åbn side-menuen fra 'Hovedmenu'.



Tryk 'Kodeværksted'.

Du ser nu:





'Filer' til venstre



'USB udvikling' eller 'Forbundet Pico'



editoren til Python-kode



terminalen nederst

[Skærmbillede anbefales: side-menuen på Hovedmenu med "Kodeværksted" markeret. Næste billede: hele Pico Kodeværksted-skærmen.]

Trin 5 Hvis Picoen er helt ny: installer MicroPython

Spring dette trin over, hvis Picoen allerede har MicroPython og kan forbindes med USB i Kodeværkstedet.

En helt ny Pico W kan ikke køre Python-kode endnu. Først skal den have MicroPython.





Tag USB-kablet ud af Picoen.



Hold 'BOOTSEL'-knappen nede på Picoen.



Sæt USB-kablet i computeren, mens du stadig holder 'BOOTSEL'.



Slip 'BOOTSEL'.



Picoen vises som et drev, der hedder 'RPI-RP2'.



I Kodeværkstedet: tryk 'MicroPython'.



Følg appens besked.

Hvis browseren kan installere direkte:





Tryk 'Installer på Pico'.



Vælg drevet 'RPI-RP2', hvis browseren spørger.



Vent til appen er færdig.



Picoen genstarter automatisk.

Hvis browseren ikke kan installere direkte:





Tryk 'Download MicroPython UF2'.



Kopier den downloadede '.uf2'-fil til drevet 'RPI-RP2'.



Vent til Picoen genstarter.

Når Picoen genstarter, forsvinder 'RPI-RP2'-drevet. Det er et godt tegn.

[Skærmbillede anbefales: MicroPython-dialogen med BOOTSEL-vejledningen. Ekstra billede: operativsystemets drev 'RPI-RP2', hvis du vil gøre det meget tydeligt.]

Trin 6 Forbind Picoen med USB

Nu skal Kodeværkstedet tale med Picoen gennem USB.





Sørg for, at Picoen er sat i computeren med USB.



Sørg for, at Picoen ikke er i BOOTSEL-tilstand.



I Kodeværkstedet: tryk 'Forbind USB'.



Vælg Picoens serial/USB-enhed i browserens liste.



Tryk 'Connect', 'Forbind' eller tilsvarende i browser-dialogen.

Når forbindelsen virker, skifter knappen til 'Afbryd USB'.

Kodeværkstedet læser også filer fra Picoen og tjekker, om projektets filer mangler eller skal opdateres.

Hvis forbindelsen fejler:





Picoen er måske stadig i BOOTSEL-tilstand.



MicroPython er måske ikke installeret.



USB-kablet kan være et opladerkabel uden data.



Browseren understøtter måske ikke Web Serial.

[Skærmbillede anbefales: USB-udvikling-panelet med knappen "Forbind USB". Ekstra billede: browserens dialog til valg af serial-enhed.]

Trin 7 Installer startprogram og biblioteker

Nu skal Picoen have de filer, der får den til at virke med Pico Kontrol Panel.





Sørg for, at USB er forbundet.



Tryk 'Installer'.



Vælg ét startprogram under 'Startprogrammer'.



Vælg de biblioteker, projektet skal bruge under 'Biblioteker'.



Tryk 'Installer valgte'.

Startprogrammer:





'OnboardLED/main.py': god til første test med Picoens indbyggede LED.



'TankControl/main.py': god til robotbil med to motorslidere.

Vigtige biblioteker:





'BLEPeripheral.py': får Picoen til at tale Bluetooth med appen.



'PicoRobotics.py': bruges til Kitronik Pico Robotics Board.



'hcsr04.py': bruges til HC-SR04 afstandssensor.



'neopixel.py': bruges til NeoPixel LED-strips og LED-ringe.

Hvis du er i tvivl første gang:





Vælg 'OnboardLED/main.py'.



Vælg 'BLEPeripheral.py'.



Vælg andre biblioteker kun hvis din opgave bruger dem.

Efter installationen kan du trykke 'Tjek filer'. Hvis alt er klar, viser terminalen, at filerne er opdaterede eller installerede.

Vigtigt: 'BLEPeripheral.py' er Bluetooth-motoren. Hvis den mangler, kan appen ikke forbinde til Picoen med Bluetooth.

[Skærmbillede anbefales: dialogen "Installer filer" med "Startprogrammer" og "Biblioteker". Ekstra billede: terminalen efter en vellykket installation.]

Trin 8 Første test af kode

Før Bluetooth bruges, kan du teste, at Picoen kører kode.





Klik på en Python-fil i listen 'Filer'.



Kig på koden i editoren.



Tryk 'Kør'.



Se beskeder i 'Terminal'.



Tryk 'Stop', hvis koden skal afbrydes.

Hvis du ændrer noget:





Tryk 'Gem'.



Vælg 'Gem på Pico'.



Kør igen eller genstart Picoen, hvis du har ændret 'main.py'.

Vigtigt: 'main.py' er den fil, Picoen kører automatisk, når den tænder.

[Skærmbillede anbefales: Kodeværkstedet med en åben 'main.py', knapperne "Kør", "Stop", "Gem" og terminalen.]

Trin 9 Afbryd USB og gå tilbage til Hovedmenu

Når Picoen har MicroPython, startprogram og biblioteker, kan du bruge Bluetooth.





Tryk 'Afbryd USB', hvis USB stadig er forbundet i Kodeværkstedet.



Åbn side-menuen.



Tryk 'Hovedmenu'.

Du er nu klar til at finde Picoen med Bluetooth.

[Skærmbillede anbefales: side-menuen i Kodeværkstedet med "Hovedmenu".]

Trin 10 Forbind til Picoen med Bluetooth





Sørg for, at Picoen har strøm.



Sørg for, at Picoens 'main.py' kører.



Gå til 'Hovedmenu'.



Tryk på plus-knappen.



Vælg Picoen i browserens Bluetooth-liste.

Picoens navn starter typisk med 'PicoW-'. Appen viser navnet uden 'PicoW-'.

Appen viser en forbindelsesskærm med statuslinje. Den gennemgår:





Bluetooth-forbindelse



HELLO



ejerskab



tilladelse



hentning af kontrolpanel

Hvis Picoen aldrig er blevet oprettet før, kommer du videre til 'Opret Enhed'.

[Skærmbillede anbefales: Hovedmenu med plus-knappen. Ekstra billede: browserens Bluetooth-liste. Ekstra billede: "Forbinder til..."-skærmen.]

Trin 11 Opret Picoen som din enhed

Dette trin vises kun første gang en Pico ikke har en ejer endnu.





Vælg et ikon til enheden.



Vælg om andre må forbinde:





'Privat': kun dig.



'Offentlig': andre kan bruge den, hvis de finder den.



Hvis den er offentlig, vælg om andre må redigere layoutet:





'Nej': andre kan styre, men ikke ændre kontrolpanelet.



'Ja': andre kan også ændre layoutet.



Behold normalt gitteret på standardstørrelsen.



Tryk 'Opret'.

Anbefalet første gang:





Brug 'Privat', hvis det er din egen robot.



Brug 'Offentlig', hvis en makker skal kunne forbinde.



Brug kun 'Andre må redigere: Ja', hvis I arbejder sammen om samme layout.

Gitteret bestemmer, hvor præcist knapper og slidere kan placeres. Standardstørrelsen er god til de fleste projekter.

[Skærmbillede anbefales: "Opret Enhed"-skærmen med ikon, Privat/Offentlig og gitterfelter.]

Trin 12 Forstå kontrolpanelet

Nu åbner 'Kontrol Panel'.

Hvis kontrolpanelet er tomt, betyder det ikke nødvendigvis, at noget er galt. Knapper og slidere kan være klar i koden, men endnu ikke placeret på panelet.

Kontroller kommer fra 'BluetoothControls' i 'main.py'.

Eksempel:





en 'button' bliver til en knap



en 'slider' bliver til en slider

Når du trykker en knap, sender appen:

'button,NAVN'

Når du flytter en slider, sender appen:

'slider,NAVN:VÆRDI'

Picoens kode bestemmer, hvad der sker, når beskeden modtages.

[Skærmbillede anbefales: et tomt kontrolpanel og et kontrolpanel med placerede kontroller. Det hjælper eleverne med at forstå forskellen.]

Trin 13 Byg dit kontrolpanel





Åbn side-menuen.



Tryk 'Rediger'.



Tryk på plus-knappen i redigering.



Vælg 'Knapper' eller 'Slidere'.



Tryk på den kontrol, du vil tilføje.



Træk kontrollen til den ønskede plads.



Tryk på kontrollen for at vælge den.



Brug værktøjerne til at:





rotere



gøre smallere



gøre bredere



gøre lavere



gøre højere



slette fra layoutet



Tryk 'Gem'.

Hvis 'Gem' ikke kan trykkes:





To kontroller overlapper måske hinanden.



Flyt dem fra hinanden og prøv igen.

Hvis 'Rediger' er slået fra:





Du ejer måske ikke enheden.



Ejeren har måske ikke tilladt, at andre må redigere layoutet.

Vigtigt: Når du sletter en kontrol i layoutet, sletter du ikke koden. Den kommer tilbage i plus-menuen, så den kan placeres igen.

[Skærmbillede anbefales: side-menuen med "Rediger". Ekstra billede: redigeringstilstand med gitterprikker. Ekstra billede: "Tilføj kontrol"-dialogen. Ekstra billede: en valgt kontrol med roter/størrelse/slet-værktøjer.]

Trin 14 Test dit kontrolpanel

Når layoutet er gemt, er du tilbage ved kontrolpanelet.





Tryk på en knap.



Flyt en slider.



Kig på robotten eller Picoen.



Hvis noget ikke virker, tænk i denne rækkefølge:





Er Picoen tændt?



Er Bluetooth stadig forbundet?



Findes kontrollen i 'main.py'?



Staver kontrolnavnet ens i 'BluetoothControls' og i din on_button/on_slider/on_toggle funktion?



Skal koden gemmes eller Picoen genstartes?

[Skærmbillede/video anbefales: færdigt kontrolpanel ved siden af den fysiske Pico/robot, mens en knap eller slider bruges.]

Trin 15 Opdater koden trådløst

Når Picoen allerede er forbundet med Bluetooth, kan du åbne Kodeværkstedet uden at sætte USB i igen.





Åbn side-menuen fra 'Kontrol Panel'.



Tryk 'Kodeværksted'.



Nu står der 'Forbundet Pico' og 'Bluetooth forbundet'.



Klik på en fil i listen.



Ret koden.



Tryk 'Gem'.



Vælg 'Gem på Pico'.

Hvis du gemmer 'main.py', kører Picoen stadig den gamle version, indtil den genstartes.

Når appen viser 'main.py er gemt', kan du vælge:





'Genstart og åbn kontrolpanel'



'Genstart og bliv i Kodeværksted'



'Senere'

Appen prøver selv at genforbinde efter genstart.

Vigtigt: 'BLEPeripheral.py' kan ikke ændres over Bluetooth, mens Bluetooth-forbindelsen bruger den. Hvis den skal opdateres, skal du bruge USB-installation i Kodeværkstedet.

[Skærmbillede anbefales: side-menuen fra Kontrol Panel med "Kodeværksted". Ekstra billede: Kodeværksted i Bluetooth-tilstand med "Bluetooth forbundet". Ekstra billede: dialogen "main.py er gemt".]

Trin 16 Lav nye knapper og slidere i koden

Hvis du vil have en ny kontrol på panelet, skal den først findes i koden.





Åbn 'main.py'.



Find 'BluetoothControls'.



Tilføj en ny 'button' eller 'slider'.



Gem på Picoen.



Genstart Picoen, hvis du ændrede 'main.py'.



Åbn kontrolpanelet igen.



Gå i 'Rediger'.



Tryk plus.



Placer den nye kontrol.



Tryk 'Gem'.

Husk: Navnet i 'BluetoothControls' skal passe med navnet i den kode, der modtager beskederne. Hvis du kalder en slider 'SPEED', skal din on_slider funktion også lede efter 'SPEED'.

[Skærmbillede anbefales: 'BluetoothControls' i editoren. Ekstra billede: den nye kontrol i "Tilføj kontrol"-dialogen.]

Trin 17 Forbind til en andens Pico W

Du kan også forbinde til en Pico, som en sidemakker ejer.

Det virker kun hvis:





deres Pico er sat til 'Offentlig'



de har givet dig lov til at forbinde



Bluetooth er tændt



Picoen er i nærheden og kører

Sådan gør du:





Gå til 'Hovedmenu'.



Tryk på fanen 'Andre Enheder', hvis den allerede er gemt.



Hvis den ikke er gemt, tryk plus-knappen.



Vælg deres Pico i Bluetooth-listen.

Hvis ejeren har tilladt redigering, kan du også bruge 'Rediger'. Hvis ikke, kan du kun styre kontrolpanelet.

[Skærmbillede anbefales: Hovedmenu med fanen "Andre Enheder". Ekstra billede: en gemt enhedskort med indstillingsknap.]

Trin 18 Gå tilbage, afbryd og ryd op

Når du er færdig:





Åbn side-menuen fra 'Kontrol Panel'.



Tryk 'Forlad' for at afbryde Picoen.



Du kommer tilbage til 'Hovedmenu'.

Hvis du vil glemme en gemt enhed i denne browser:





Find enheden i 'Hovedmenu'.



Tryk på indstillingsknappen på enhedskortet.



Tryk 'Glem enhed'.

Hvis du vil ændre dit brugernavn:





Åbn side-menuen i 'Hovedmenu'.



Tryk 'Bruger'.



Skriv nyt navn.



Tryk 'Gem bruger'.

[Skærmbillede anbefales: side-menuen med "Forlad". Ekstra billede: "Enhedsindstillinger" for gemt enhed med "Glem enhed".]

Fejlfinding

Jeg kan ikke se Picoen i Bluetooth-listen





Tjek at Picoen har strøm.



Tjek at den rigtige 'main.py' kører.



Tjek at 'BLEPeripheral.py' er installeret.



Gå tættere på Picoen.



Genstart Picoen.



Prøv Chrome eller Edge, hvis browseren driller.

Web Bluetooth er ikke tilgængelig





På iPhone/iPad: brug Bluefy.



På Android: brug Chrome.



På Mac: brug Chrome, Edge eller Brave.



I Brave/Chrome/Edge: tjek browser flags fra trin 2.

USB-forbindelse virker ikke





Tjek at Picoen ikke er i BOOTSEL-tilstand.



Tjek at MicroPython er installeret.



Prøv et andet USB-kabel.



Prøv en anden USB-port.



Brug Chrome eller Edge på desktop.

Kontrolpanelet er tomt





Kontrollerne er måske ikke placeret endnu.



Gå i 'Rediger' og tryk plus.



Tjek at 'BluetoothControls' findes i 'main.py'.

Min nye kode virker ikke





Tryk 'Gem'.



Vælg 'Gem på Pico'.



Hvis du ændrede 'main.py', genstart Picoen.



Tjek terminalen for fejl.



Tjek at kontrolnavne er stavet ens i layout og kode.

Jeg kan ikke redigere layoutet





Du ejer måske ikke enheden.



Ejeren har måske valgt, at andre ikke må redigere.



Forbind til din egen Pico, eller bed ejeren ændre indstillingen.

Jeg kan ikke ændre 'BLEPeripheral.py' over Bluetooth

Det er meningen. Den fil holder Bluetooth-forbindelsen i gang. Brug USB-installation for at opdatere den.

Forslag til website-opbygning

Hvert trin bør have:





en kort titel



3-8 handlinger



ét tydeligt mål: "Når dette er klar, kan du gå videre"



ét skærmbillede eller én video



en lille "Hvis det ikke virker"-boks, men kun hvor det er relevant

De vigtigste steder at bruge skærmbilleder er:





Browser Bluetooth-indstillinger.



Første brugernavnsskærm.



Hovedmenu med plus-knap.



Kodeværkstedets layout.



MicroPython-dialogen.



USB-forbindelsesdialog.



Installer filer-dialog.



Bluetooth-enhedsvalg.



Opret Enhed.



Rediger kontrolpanel.



Tilføj kontrol.



Trådløst Kodeværksted.



'main.py er gemt'-genstartsdialog.

Validering af manglende trin fra den første draft

Draften havde den rigtige hovedretning, men manglede disse vigtige trin:





At Kodeværkstedet kun fungerer godt på stor skærm.



At en helt ny Pico først skal have MicroPython via BOOTSEL/UF2.



At USB Serial-forbindelsen er nødvendig til første installation og recovery.



At startprogram og biblioteker vælges i 'Installer filer'.



At 'BLEPeripheral.py' er obligatorisk for Bluetooth.



At første Bluetooth-forbindelse kan føre til 'Opret Enhed'.



At kontrolpanelet kan være tomt, fordi kontrollerne findes i kode men ikke er placeret endnu.



At nye knapper/slidere først skal defineres i 'BluetoothControls'.



At 'main.py' kræver genstart for at den nye version kører.



At 'BLEPeripheral.py' er låst over Bluetooth.



At 'Mine Enheder' og 'Andre Enheder' afhænger af ejerskab og deling.



At der bør være et afslutnings-/oprydningsflow: 'Forlad', 'Glem enhed', ændr bruger.
function NovaZiv(zivotinja,vrsta,ime,spol,godine,velicina,boja,aktivnost,cijepljen,kastriran,cipiran,opis,slika){
	this.zivotinja=zivotinja;
	this.vrsta=vrsta;
	this.ime=ime;
	this.spol=spol;
	this.godine=godine;
	this.velicina=velicina;
	this.boja=boja;
	this.aktivnost=aktivnost;
	this.cijepljen=cijepljen;
	this.kastriran=kastriran;
	this.cipiran=cipiran;
	this.opis=opis;
	this.slika=slika;
}

var zivotinje=[

	//PSI
	new NovaZiv("pas","Golden Retriever","Elton John","M","7","M","Yellow","Lazy","Yes","Yes","Yes","Elton John is friendly and loves kids. He has a few tricks up his sleeve."),

	new NovaZiv("pas","Labrador","Cuni","M","5","M","Black","Calm","No","No","No","Cuni is very good to the caretakers, but he doesn't trust strangers. He doesn't mind kids, but he isn't fond of other dogs."),

	new NovaZiv("pas","Irish setter","Atos","M","3","L","Brown","Active","Yes","No","Yes","Atos is very curious and loves to run. He rarely listens, but never gets into trouble."),

	new NovaZiv("pas","Labrador","Betty","F","1","M","White","Active","Yes","Yes","Yes","Betty loves attention and tends to be jealous. She loves toys and is a picky eater."),

	new NovaZiv("pas","Rottweiler","Max","M","6","L","Black","Lazy","Yes","No","No","Max doesn't love strangers and he's a good guard dog. Loves to cuddle with the right person."),

	new NovaZiv("pas","Poodle","Baldi","M","8","L","White","Active","Yes","No","No","Baldi loves to play and jump on people. His fur requires a lot of care."),

	new NovaZiv("pas","Shi-tzu","Gizmo","M","4","S","Yellow","Calm","Yes","Yes","No","Loves people and loves to cuddle. Sometimes gets into dog fights."),

	new NovaZiv("pas","Maltese","Lili","F","15","S","White","Lazy","No","Yes","No","Lili has a bad relationship with dogs and people, but that can change with enough love."),

	new NovaZiv("pas","Shiba inu","Takumi","M","2","M","White","Calm","Yes","Yes","Yes","Takumi loves being in the center of attention and his fur requires a lof of care."),

	new NovaZiv("pas","Golden Retriever","Cooper","M","9","M","Yellow","Calm","No","No","No","Cooper loves swimming and hanging out with other dogs. Cats are friends to him as well."),
	//PASI

	//MACKE
	new NovaZiv("macka","Siamese cat","Safer","M","3","M","White","Calm","Yes","Yes","No","Safer acts like he's tough, but loves to cuddle."),

	new NovaZiv("macka","Persian cat","Puffy","F","5","M","Brown","Lazy","Yes","No","No","Puffy is a real queen, loves to eat and look around."),

	new NovaZiv("macka","Donskoy cat","Katy","F","4","S","Gray","Active","No","No","No","Katy is very playful and she isn't scared of anyone."),

	new NovaZiv("macka","European Shorthair","Kenny","M","1","M","White/Orange","Calm","Yes","Yes","No","As a kitten, Kenny was a little devil, but now he's calm (although people still taste good)."),

	new NovaZiv("macka","Siamese cat","Tiara","F","3","M","White","Calm","Yes","No","No","Tiara is a princess who only loves premium food, loves to cuddle and hates messy fur."),

	new NovaZiv("macka","European Shorthair","Sivko","M","1","L","siva","Calm","No","No","No","Sivko is a big cat that likes to eat and lie down, but loves to show off in front of females."),

	new NovaZiv("macka","European Shorthair","Miki","M","3","M","naran??asta","Active","Yes","Yes","No","Miki is always first when it comes to food. Loves to play with other cats."),

	new NovaZiv("macka","Norwegian Forest cat","Ruzica","F","4","M","White","Calm","No","No","No","Ru??ica doesn't mind messy fur, loves sitting on chairs and cuddle."),

	new NovaZiv("macka","Persian cat","Roko","M","3","L","Black","Lazy","Yes","Yes","No","Perfect cat for people who aren't home very often. Roko lies all day and goes about his day."),

	new NovaZiv("macka","European Shorthair","Macak","M","7","L","Black","Calm","Yes","No","No","King of cats. You can't find a better cat."),
	//MACKE

	//KUNICI
	new NovaZiv("kunic","Dwarf rabbit","Sneki","M","7","S","White","Active","No","No","N/A","Sneki is very playful, he loves to cuddle and eat banana."),

	new NovaZiv("kunic","Lionhead rabbit","Gricko","M","6","M","Brown","Calm","No","No","N/A","Gricko bites everything he shouldn't, but he's cute and happy."),

	new NovaZiv("kunic","Lop rabbit","Smoki","M","2","S","Yellow","Active","Yes","Yes","N/A","Smoki is an interesting bunny with long ears and a large curiosity."),

	 new NovaZiv("kunic","Lionhead rabbit","Njuskica","F","4","L","White","Lazy","Yes","No","N/A","Nju??kica looks for food with her snout, doesn't move a lot and loves to cuddle."),

	new NovaZiv("kunic","Dwarf rabbit","Bubi","M","1","S","Black","Active","Yes","No","N/A","Bubi loves jumping like crazy and he doesn't spend a moment standing still. Very picky bunny, but a carrot is always a good option."),

	new NovaZiv("kunic","Lop rabbit","Zeko","M","6","L","Gray","Calm","Yes","Yes","N/A","An older bunny who's very calm and loves being around people. Very good for small children."),

	new NovaZiv("kunic","Lionhead rabbit","Lav","M","3","M","Brown","Active","Yes","No","N/A","Lav is a bunny with an attitude. He loves being the boss and he never listens, but he's always around others."),

	new NovaZiv("kunic","Dwarf rabbit","Pahulja","F","2","S","White","Calm","Yes","No","N/A","Pahulja is the cutest thing in the world, very puffy and often jumps around from joy."),

	new NovaZiv("kunic","Dwarf rabbit","Mala","F","1","S","Gray","Calm","Yes","No","N/A","Mala is shy around other bunnies, but with the right person, she's very pleasant."),

	new NovaZiv("kunic","Lop rabbit","Ovan","M","7","L","White","Lazy","Yes","Yes","N/A","Ovan is a couch potato, no one ever saw him move. Food is the only thing he's interested in."),
	//KUNICI

	//OSTALO
	new NovaZiv("ostalo","Royal python","Rikki","M","5","L","Yellow","Calm","N/A","N/A","N/A","Rikki loves to crawl and look around his habitat."),

	new NovaZiv("ostalo","Corn snake","Crvenko","M","6","S","Red","Calm","N/A","N/A","N/A","Crvenko lets everyone handle him."),

	new NovaZiv("ostalo","Royal python","Julije Cezar","M","10","L","Black","Calm","N/A","N/A","N/A","Julije Cezar rules over his habitat empire."),

	new NovaZiv("ostalo","Corn snake","Dugi","M","3","S","Red","Calm","N/A","N/A","N/A","Dugi will live for a long time... that's about it."),

	new NovaZiv("ostalo","Corn snake","Komi","M","4","S","Red","Calm","N/A","N/A","N/A","Glory to Komi."),
	//OSTALO

	//PTICE
	new NovaZiv("papiga","Popinjay","Ljutko","M","6","M","Green","Active","N/A","N/A","N/A","Ljutko often bites and screeches, but he's interesing if you let him have his way."),

	new NovaZiv("papiga","Ara","Ari","F","4","S","Blue","Calm","N/A","N/A","N/A","Ari repeats every song she hears like a parrot. Wait a minute..."),

	new NovaZiv("papiga","Popinjay","Mango","M","3","S","Orange","Active","N/A","N/A","N/A","Mango is not to be eaten but to be cuddled with and he's very loud."),

	new NovaZiv("papiga","Ara","Rio","M","8","L","Blue","Active","N/A","N/A","N/A","Rio always gets into trouble and he doesn't know how to fly, but loves people and repeating words."),

	new NovaZiv("papiga","Popinjay","Klepetalo","F","12","L","Gray","Active","N/A","N/A","N/A","Klepetalo always talks. Nobody knows how to shut him off.")
	//PTICE
	
];

for (var i=0; i<40; i++){
	zivotinje[i].slika = "./slikezazivotinje/"+zivotinje[i].zivotinja+"/"+zivotinje[i].ime+".jpg";
}

/*
var zivotinje = [

//PSI
{"zivotinja":"pas","vrsta":"Zlatni Retriever","ime":"Elton John","spol":"M","godine":"7","velicina":"M","boja":"??uta","aktivnost":"Lijen/Lijena","cijepljen":"Da","kastriran":"Da","cipiran":"Da","opis":"Elton je prijateljski nastrojen i voli djecu. Poslu??an je i zna osnovne trikove."},

{"zivotinja":"pas","vrsta":"Labrador","ime":"Cuni","spol":"M","godine":"5","velicina":"M","boja":"crna","aktivnost":"Miran/Mirna","cijepljen":"Ne","kastriran":"Ne","cipiran":"Ne","opis":"Cuni je jako dobar prema vlasnicima, ali ne vjeruje strancima. Ne smetaju mu djeca, me??utim nije najbolji s drugim psima."},

{"zivotinja":"pas","vrsta":"Irski setter","ime":"Atos","spol":"M","godine":"3","velicina":"L","boja":"sme??a","aktivnost":"Aktivan/Aktivna","cijepljen":"Da","kastriran":"Ne","cipiran":"Da","opis":"Atos je jako znati??eljan i voli puno tr??ati. Rijetko slu??a, ali nikada ne radi probleme."},

{"zivotinja":"pas","vrsta":"Labrador","ime":"Betty","spol":"F","godine":"1","velicina":"M","boja":"bijela","aktivnost":"Aktivan/Aktivna","cijepljen":"Da","kastriran":"Da","cipiran":"Da","opis":"Betty voli puno pa??nje i mo??e nekada biti ljubomorna. Voli razne igra??ke i po hrani je izbirljiva."},

{"zivotinja":"pas","vrsta":"Rottweiler","ime":"Max","spol":"M","godine":"6","velicina":"L","boja":"crna","aktivnost":"Lijen/Lijena","cijepljen":"Da","kastriran":"Ne","cipiran":"Ne","opis":"Max ne voli strance i jako je za??titni??ki nastrojen. Sa pravom osobom je prava maza."},

{"zivotinja":"pas","vrsta":"Pudlica","ime":"Baldi","spol":"M","godine":"8","velicina":"L","boja":"bijela","aktivnost":"Aktivan/Aktivna","cijepljen":"Da","kastriran":"Ne","cipiran":"Ne","opis":"Voli se igrati s drugima i skakati na ljude. Njegova dlaka zahtjeva puno pa??nje."},

{"zivotinja":"pas","vrsta":"Shi-tzu","ime":"Gizmo","spol":"M","godine":"4","velicina":"S","boja":"??uta","aktivnost":"Miran/Mirna","cijepljen":"Da","kastriran":"Da","cipiran":"Ne","opis":"Voli se maziti i voli sve ljude. Nekada zna praviti problem s drugim psima."},

{"zivotinja":"pas","vrsta":"Maltezer","ime":"Lili","spol":"F","godine":"15","velicina":"S","boja":"bijela","aktivnost":"Lijen/Lijena","cijepljen":"Ne","kastriran":"Da","cipiran":"Ne","opis":"Jako lo?? odnos prema drugim psima i ljudima, ali sa dovoljno ljubavi to se mo??e promijeniti."},

{"zivotinja":"pas","vrsta":"Shiba inu","ime":"Takumi","spol":"M","godine":"2","velicina":"M","boja":"bijela","aktivnost":"Miran/Mirna","cijepljen":"Da","kastriran":"Da","cipiran":"Da","opis":"Takumi voli biti u centru pa??nje i njegova dlaka zahtjeva puno pa??nje."},

{"zivotinja":"pas","vrsta":"Zlatni Retriever","ime":"Cooper","spol":"M","godine":"9","velicina":"M","boja":"??uta","aktivnost":"Miran/Mirna","cijepljen":"Ne","kastriran":"Ne","cipiran":"Ne","opis":"Cooper voli plivati i dru??iti se s drugim psima. Tako??er mu ne smetaju ma??ke."},
//PSI

//MA??KE
{"zivotinja":"macka","vrsta":"Sijamska ma??ka","ime":"Safer","spol":"M","godine":"3","velicina":"M","boja":"bijela","aktivnost":"Miran/Mirna","cijepljen":"Da","kastriran":"Da","cipiran":"Ne","opis":"Safer glumi da je glavni, ali je prava maza."},

{"zivotinja":"macka","vrsta":"Perzijska ma??ka","ime":"Puffy","spol":"F","godine":"5","velicina":"M","boja":"sme??a","aktivnost":"Lijen/Lijena","cijepljen":"Da","kastriran":"Ne","cipiran":"Ne","opis":"Puffy je prava kraljica, voli jesti i promatrati sve oko sebe."},

{"zivotinja":"macka","vrsta":"Donskoy ma??ka","ime":"Katy","spol":"F","godine":"4","velicina":"S","boja":"siva","aktivnost":"Aktivan/Aktivna","cijepljen":"Ne","kastriran":"Ne","cipiran":"Ne","opis":"Katy je jako razigrana i ne boji se nikoga."},

{"zivotinja":"macka","vrsta":"Europska kratkodlaka ma??ka","ime":"Kenny","spol":"M","godine":"1","velicina":"M","boja":"bijelo-naran??asta","aktivnost":"Miran/Mirna","cijepljen":"Da","kastriran":"Da","cipiran":"Ne","opis":"Kenny je kao ma??i?? bio pravi vrag, ali sada se smirio i najdra??e mu je ponekad gricnuti ljude. (Ka??e da su jako ukusni)"},

{"zivotinja":"macka","vrsta":"Sijamska ma??ka","ime":"Tiara","spol":"F","godine":"3","velicina":"M","boja":"bijela","aktivnost":"Miran/Mirna","cijepljen":"Da","kastriran":"Ne","cipiran":"Ne","opis":"Tiara je princeza koja voli samo skupu hranu, voli se maziti i mrzi neurednu dlaku."},

{"zivotinja":"macka","vrsta":"Europska kratkodlaka ma??ka","ime":"Sivko","spol":"M","godine":"1","velicina":"L","boja":"siva","aktivnost":"Miran/Mirna","cijepljen":"Ne","kastriran":"Ne","cipiran":"Ne","opis":"Sivko je veliki ma??ak koji voli jesti i le??ati, ali u dru??tvu ??enki se voli iskazivati."},

{"zivotinja":"macka","vrsta":"Europska kratkodlaka ma??ka","ime":"Miki","spol":"M","godine":"3","velicina":"M","boja":"naran??asta","aktivnost":"Aktivan/Aktivna","cijepljen":"Da","kastriran":"Da","cipiran":"Ne","opis":"Miki je uvijek prvi kada je u pitanju hrana. Voli se igrati s drugim ma??kama."},

{"zivotinja":"macka","vrsta":"Norve??ka ??umska ma??ka","ime":"Ruzica","spol":"F","godine":"4","velicina":"M","boja":"bijela","aktivnost":"Miran/Mirna","cijepljen":"Ne","kastriran":"Ne","cipiran":"Ne","opis":"Ru??ici ne smeta neuredna dlaka, voli le??ati po stolicama i ??esto se maziti."},

{"zivotinja":"macka","vrsta":"Perzijska ma??ka","ime":"Roko","spol":"M","godine":"3","velicina":"L","boja":"crna","aktivnost":"Lijen/Lijena","cijepljen":"Da","kastriran":"Da","cipiran":"Ne","opis":"Savr??en ma??ak za ljude koji nisu ??esto ku??i. Roko ide za svojim poslom i le??i cijeli dan."},

{"zivotinja":"macka","vrsta":"Europska kratkodlaka ma??ka","ime":"Macak","spol":"M","godine":"7","velicina":"L","boja":"crna","aktivnost":"Miran/Mirna","cijepljen":"Da","kastriran":"Ne","cipiran":"Ne","opis":"Kralj ma??aka. Bolju ma??ku ne mo??ete prona??i."},
//MA??KE

//KUNI??I
{"zivotinja":"kunic","vrsta":"Patuljasti kuni??","ime":"Sneki","spol":"M","godine":"7","velicina":"S","boja":"bijela","aktivnost":"Aktivan/Aktivna","cijepljen":"Ne","kastriran":"Ne","cipiran":"N/A","opis":"Sneki je jako razigrani kuni??, voli se maziti i najdra??e vo??e mu je banana."},

{"zivotinja":"kunic","vrsta":"Lavljoglavi kuni??","ime":"Gricko","spol":"M","godine":"6","velicina":"M","boja":"sme??a","aktivnost":"Miran/Mirna","cijepljen":"Ne","kastriran":"Ne","cipiran":"N/A","opis":"Gricko voli gristi sve ??to ne smije, ali je sretan i sladak."},

{"zivotinja":"kunic","vrsta":"Ovnoliki kuni??","ime":"Smoki","spol":"M","godine":"2","velicina":"S","boja":"??uta","aktivnost":"Aktivan/Aktivna","cijepljen":"Da","kastriran":"Da","cipiran":"N/A","opis":"Smoki je jako zanimljiv zeko sa jako dugim u??ima i velikom znati??eljom."},

{"zivotinja":"kunic","vrsta":"Lavljoglavi kuni??","ime":"Njuskica","spol":"F","godine":"4","velicina":"L","boja":"bijela","aktivnost":"Lijen/Lijena","cijepljen":"Da","kastriran":"Ne","cipiran":"N/A","opis":"Nju??kica koristi svoju nju??kicu samo za tra??iti hranu, ne kre??e se puno, ali ma??enje joj je drago."},

{"zivotinja":"kunic","vrsta":"Patuljasti kuni??","ime":"Bubi","spol":"M","godine":"1","velicina":"S","boja":"crna","aktivnost":"Aktivan/Aktivna","cijepljen":"Da","kastriran":"Ne","cipiran":"N/A","opis":"Bubi voli skakati kao lud i nikada nema mira. Jako je izbirljiv, ali mrkva je uvijek dobar izbor."},

{"zivotinja":"kunic","vrsta":"Ovnoliki kuni??","ime":"Zeko","spol":"M","godine":"6","velicina":"L","boja":"siva","aktivnost":"Miran/Mirna","cijepljen":"Da","kastriran":"Da","cipiran":"N/A","opis":"Malo stariji zeko koji je jako miran i voli biti u dru??tvu. Jako dobar za malu djecu."},

{"zivotinja":"kunic","vrsta":"Lavljoglavi kuni??","ime":"Lav","spol":"M","godine":"3","velicina":"M","boja":"sme??a","aktivnost":"Aktivan/Aktivna","cijepljen":"Da","kastriran":"Ne","cipiran":"N/A","opis":"Lav je zeko sa stavom. Voli biti glavni i ??esto ne slu??a, ali je uvijek tamo gdje je dru??tvo."},

{"zivotinja":"kunic","vrsta":"Patuljasti kuni??","ime":"Pahulja","spol":"F","godine":"2","velicina":"S","boja":"bijela","aktivnost":"Miran/Mirna","cijepljen":"Da","kastriran":"Ne","cipiran":"N/A","opis":"Pahulja je najsla??e bi??e na svijetu, jako pufasta i ??esto se koprca od sre??e."},

{"zivotinja":"kunic","vrsta":"Patuljasti kuni??","ime":"Mala","spol":"F","godine":"1","velicina":"S","boja":"siva","aktivnost":"Miran/Mirna","cijepljen":"Da","kastriran":"Ne","cipiran":"N/A","opis":"Mala je pla??ljiva u dru??tvu drugih ze??eva, ali s pravom osobom je jako ljubazna."},

{"zivotinja":"kunic","vrsta":"Ovnoliki kuni??","ime":"Ovan","spol":"M","godine":"7","velicina":"L","boja":"bijela","aktivnost":"Lijen/Lijena","cijepljen":"Da","kastriran":"Da","cipiran":"N/A","opis":"Ovan je lijen??ina, netko bi rekao da je zalijepljen za tlo jer se rijetko mi??e. Hrana je jedino ??to ga zanima, a i ??e??ljanje nije tako lo??e."},
//KUNI??I

//ZMIJE
{"zivotinja":"zmija","vrsta":"Kraljevski piton","ime":"Rikki","spol":"M","godine":"5","velicina":"L","boja":"??uta","aktivnost":"Miran/Mirna","cijepljen":"N/A","kastriran":"N/A","cipiran":"N/A","opis":"Rikki voli gledati kroz svoje stani??te i gmizati."},

{"zivotinja":"zmija","vrsta":"Kukuruzni smuk","ime":"Crvenko","spol":"M","godine":"6","velicina":"S","boja":"crvena","aktivnost":"Miran/Mirna","cijepljen":"N/A","kastriran":"N/A","cipiran":"N/A","opis":"Crvenko dopu??ta da ga svi dr??e."},

{"zivotinja":"zmija","vrsta":"Kraljevski piton","ime":"Julije Cezar","spol":"M","godine":"10","velicina":"L","boja":"crna","aktivnost":"Miran/Mirna","cijepljen":"N/A","kastriran":"N/A","cipiran":"N/A","opis":"Julije Cezar vlada svojim velikim stani??tem."},

{"zivotinja":"zmija","vrsta":"Kukuruzni smuk","ime":"Dugi","spol":"M","godine":"3","velicina":"S","boja":"crvena","aktivnost":"Miran/Mirna","cijepljen":"N/A","kastriran":"N/A","cipiran":"N/A","opis":"Dugi ??e dugo ??ivjeti... to je otprilike to."},

{"zivotinja":"zmija","vrsta":"Kukuruzni smuk","ime":"Komi","spol":"M","godine":"4","velicina":"S","boja":"crvena","aktivnost":"Miran/Mirna","cijepljen":"N/A","kastriran":"N/A","cipiran":"N/A","opis":"Slava Komiju."},
//ZMIJE

//PTICE
{"zivotinja":"papiga","vrsta":"Papagaj","ime":"Ljutko","spol":"M","godine":"6","velicina":"M","boja":"zelena","aktivnost":"Aktivan/Aktivna","cijepljen":"N/A","kastriran":"N/A","cipiran":"N/A","opis":"Ljutko ??esto kri??i i grize, ali ako mu udovoljite jako je zanimljiv."},

{"zivotinja":"papiga","vrsta":"Ara","ime":"Ari","spol":"F","godine":"4","velicina":"S","boja":"plava","aktivnost":"Miran/Mirna","cijepljen":"N/A","kastriran":"N/A","cipiran":"N/A","opis":"Ari ponavlja sve pjesme koje ??uje poput nekakve papige. ??ekaj malo..."},

{"zivotinja":"papiga","vrsta":"Papagaj","ime":"Mango","spol":"M","godine":"3","velicina":"S","boja":"naran??asta","aktivnost":"Aktivan/Aktivna","cijepljen":"N/A","kastriran":"N/A","cipiran":"N/A","opis":"Mango se ne jede nego mazi i jako je glasan."},

{"zivotinja":"papiga","vrsta":"Ara","ime":"Rio","spol":"M","godine":"8","velicina":"L","boja":"plava","aktivnost":"Aktivan/Aktivna","cijepljen":"N/A","kastriran":"N/A","cipiran":"N/A","opis":"Rio uvijek upada u probleme i ne zna ba?? najbolje letiti, ali voli ljude i ponavljati rije??i."},

{"zivotinja":"papiga","vrsta":"Papagaj","ime":"Klepetalo","spol":"F","godine":"12","velicina":"L","boja":"siva","aktivnost":"Aktivan/Aktivna","cijepljen":"N/A","kastriran":"N/A","cipiran":"N/A","opis":"Klepetalo uvijek pri??a. Nitko ne zna kako je ugasiti."}
//PTICE
]
*/
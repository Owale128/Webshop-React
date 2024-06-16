import { Game } from '../models/Game';
import NarutoGame from '../images/Naruto.png';
import GodOfWar from '../images/GodOfWar.png';
import Banishers from '../images/Banishers.png';
import Sonic from '../images/Sonic.png'
import AssasinsCreed from '../images/AssasinsCreed.png';
import ratchetAndClank from '../images/Ratchet&Clank.png';
import LordsOfTheFallen from '../images/LordsOfTheFallen.png';
import ResidentEvil from '../images/ResidentEvil.png';
import callOfDuty from '../images/CallOfDuty.png'
import TheWitcher from '../images/theWitcher.png'




export const gamesData: Game[] = [
    {id: 1, name: 'Naruto', price: 599, imageUrl: NarutoGame, description: 'Det här spelet har den största förteckningen över älskade karaktärer att spela än något Ultimate Ninja STORM-spel tidigare. Nya tillskott inkluderar bröderna som startade legendariska ninjaklaner, Ashura och Indra Otsutsuki. Håll utkik efter fler spelbara karaktärer! För första gången i ett spel, återupplev utvalda scener från Narutos barndom fram till hans sista strid med Sasuke genom anime-scener och strider i spelet.' },
    
    {id: 2, name: 'Assasins Creed', price: 799, imageUrl: AssasinsCreed, description: 'Utforska den fängslande öppna världen i det feodala Japan, från spektakulära slottsstäder och livliga hamnar till fridfulla helgedomar och krigshärjade landskap. Äventyr genom oförutsägbart väder, skiftande årstider och reaktiva miljöer.Bli Naoe, en shinobi Assassin, och Yasuke, en legendarisk samuraj, när du upplever deras fängslande berättelser och bemästrar deras kompletterande spelstilar.'},
    
    {id: 3, name: 'God Of War', price: 349, imageUrl: GodOfWar, description: 'Följ med på en episk och känslosam resa när Kratos och Atreus kämpar med att hålla sig kvar och släppa taget. De har försökt göra sitt bästa för att rädda den nordiska mytologins värld, som härjats av asarnas vrede, från undergång, men trots det rasar fimbulvintern. Bevittna hur far och son-dynamiken ständigt förändras i duons kamp för överlevnad; Atreus törstar efter kunskapen han behöver för att förstå profetian om ”Loke”, samtidigt som Kratos kämpar för att slå sig fri från sitt förflutna och bli den far hans son behöver.'},

    {id: 4, name: 'Ratchet & Clank', price: 400, imageUrl: ratchetAndClank, description: 'Kasta dig mellan dimensioner med Ratchet & Clank och ta dig an en ondskefull kejsare från en annan verklighet. Hoppa mellan actionfyllda världar och ta dig fram i hisnande hastigheter med enastående grafik och en galen vapenarsenal när de intergalaktiska äventyrarna skjuter sig in på PS5'},

    {id: 5, name: 'Lords Of The Fallen', price: 399, imageUrl: LordsOfTheFallen, description: 'Efter flera generationers lidande besegrades äntligen den tyranniska demonguden Adyr. Men gudar är inte lätta att bli av med. Tusentals år har gått sedan dess och Adyr är på väg att återupplivas. Mänsklighetens hopp ligger i Orianska strålarnas kyrka, ljuset sista krigare i en världs som bara blir mörkare. Det här sällskapet har hittat en mäktig men ohelig artefakt – en lykta som låter bäraren färdas mellan de levandes och dödas riken.'},

    {id: 6, name: 'Banishers', price: 699, imageUrl: Banishers, description: 'Nya Eden, 1695. Antea Duarte och Red mac Raith är älskare och förvisare, spökjägare som svurit att skydda de levande mot hotet från kvarblivna spöken och vålnader. Efter ett katastrofalt sista uppdrag skadas Antea dödligt och blir en av de andar hon avskyr. I Nordamerikas hemsökta vildmarker söker paret desperat efter ett sätt att befria Antea från hennes svåra öde. Fördjupa dig i en vacker, intim och kraftfull berättelse mellan två ödesbestämda älskare.'},

    {id: 7, name: 'Sonic', price: 479, imageUrl: Sonic, description: 'Upplev Sonic som aldrig förr! Världar kolliderar i Sonic the Hedgehogs senaste höghastighetsäventyr! På jakt efter de saknade Chaos-smaragderna blir Sonic strandsatt på en gammal ö som kryllar av ovanliga varelser. Kämpa mot horder av kraftfulla fiender när du utforskar en hisnande värld av action, äventyr och mystik. Accelerera till nya höjder och upplev spänningen med höghastighets, öppen plattformsfrihet när du tävlar över de fem massiva Starfall-öarna.'},

    {id: 8, name: 'Resident Evil', price: 599, imageUrl: ResidentEvil, description: 'Det har gått sex år sedan den biologiska katastrofen i Raccoon City. Leon S. Kennedy har fått i uppdrag att rädda USA:s presidents kidnappade dotter. Kan han övervinna galenskaperna som väntar honom? Spela som Ada Wong i det här extrascenariot, upplev Resident Evil 4 ur hennes perspektiv och räta ut frågetecknen från huvudberättelsen. Vilken väg kommer hon välja i sitt uppdrag för att hitta Amber?'},

    {id: 9, name: 'Call of duty', price: 699, imageUrl: callOfDuty, description: 'I den direkta uppföljaren till det rekordstora Call of Duty®: Modern Warfare® II möter Captain Price och Task Force 141 det ultimata hotet. Den ultranationalistiske krigsförbrytaren Vladimir Makarov sträcker ut sitt grepp över världen och får Task Force 141 att slåss som aldrig förr. Strid innebär att göra val — olika belastningar, olika vägar genom uppdraget.'},

    {id: 10, name: 'The Witcher', price: 399, imageUrl: TheWitcher, description: 'Skåda kontinentens mörka fantasivärld som du aldrig sett den förut! Den här utgåvan av The Witcher 3: Wild Hunt har förbättrats med en uppsjö av visuella och tekniska lyft, bland annat betydligt högre detaljrikedom, snabbare laddningstider, en rad communityskapade och nyutvecklade moddar till spelet, ray-tracing i realtid och stöd för 3D-ljud – alltihop optimerat utifrån den imponerande prestandan i PlayStation®5.'}
  
];
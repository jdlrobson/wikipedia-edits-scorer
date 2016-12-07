function Page( opts ) {
  Object.assign( this, opts );
}

Page.fromJSON = function ( json ) {
  var d = new Date();
  if ( !json.trendedAt ) {
    json.trendedAt = json.updated || d.toISOString();
  }
  return new Page( json );
};

var minimal = {
  edits: 10,
  start: new Date(),
  distribution: { a: 5, b: 5 }
};

var agaricAcid = new Page( {
  distribution: { a: 1, b: 1, c: 4, d: 5, e: 7, f: 13},
  anonEdits: 0,
  edits: 60,
  reverts: 13,
  notabilityFlags: 0,
  volatileFlags: 0,
  views: 0,
  start: '2016-10-13T15:04:47.853Z',
  trendedAt: '2016-10-13T15:22:37.952Z'
} );

var battleMosul = new Page( {
  distribution: { a: 1, b: 3, c: 6, d: 7 },
  anonEdits: 6,
  edits: 34,
  reverts: 2,
  anons: Array( 3 ),
  views: 0,
  notabilityFlags: 0,
  volatileFlags: 0,
  start: "2016-10-18T16:39:59.389Z",
  trendedAt: "2016-10-18T18:03:06.731Z"
} );

var deaths2016 = new Page( {
  distribution: { a: 2, b: 4, c: 3, d: 6 },
  anonEdits: 0,
  edits: 130,
  reverts: 2,
  views: 9807,
  notabilityFlags: 0,
  volatileFlags: 0,
  start: "2016-10-14T23:35:44.813Z",
  trendedAt: "2016-10-15T00:25:54.960Z"
} );

var attaUr = new Page( {
  distribution: { a: 2, b: 3, c: 6, d: 8 },
  anonEdits: 5,
  edits: 13,
  reverts: 1,
  start: "2016-10-18T18:13:17.987Z",
  trendedAt: "2016-10-18T20:12:34.933Z",
  contributors: new Array( 4 ),
  views: 0,
  notabilityFlags: 0,
  volatileFlags: 1
} );

var cyberAttacks = new Page( {
  distribution: { a: 4, b: 1, c: 6, d: 10 },
  anonEdits: 1,
  edits: 29,
  reverts: 1,
  start: '2016-10-21T18:03:51.387Z',
  trendedAt: '2016-10-21T19:02:27.229Z',
  views: 0,
  notabilityFlags: 0,
  volatileFlags: 0
} );

const page = new Page( {
  title: 'Page1',
  distribution: { a: 13, b: 12, c: 6, d: 3, e: 3 },
  start: '2016-02-20T00:00:00.007Z',
  trendedAt: '2016-02-22T03:26:00.007Z',
  contributors: new Array( 5 ),
  anonEdits: 0,
  bytesChanged: 2825,
  anons: [],
  edits: 12,
  notabilityFlags: 0,
  volatileFlags: 1,
  reverts: 1,
  views: 0
} );

const page2 = new Page( {
  title: 'Page2',
  distribution: { a: 1, b: 3, c: 3, d: 4 },
  anons: [],
  contributors: new Array(7),
  start: '2016-02-20T00:00:00.007Z',
  trendedAt: '2016-02-22T20:16:00.007Z',
  anonEdits: 13,
  bytesChanged: 606,
  edits: 20,
  notabilityFlags: 0,
  volatileFlags: 0,
  reverts: 3,
  views: 0
} );

const page3 = new Page( {
  title: 'Page3',
  distribution: { a: 13, b: 7, c: 5, d: 9 },
  start: '2016-02-20T00:00:00.007Z',
  trendedAt: '2016-02-27T02:35:00.007Z',
  anonEdits: 14,
  edits: 65,
  anons: [],
  contributors: new Array( 25 ),
  bytesChanged: 4830,
  reverts: 1,
  views: 0,
  notabilityFlags: 0,
  volatileFlags: 0
} );

const page4 = new Page( {
  title: 'Page4',
  distribution: { a: 13, b: 7, c: 5, d: 8, e: 4 },
  start: '2016-02-20T00:00:00.007Z',
  trendedAt: '2016-02-27T00:34:00.007Z',
  anonEdits: 3,
  edits: 65,
  anons: [],
  contributors: new Array( 16 ),
  bytesChanged: 2382,
  reverts: 2,
  visits: 0,
  notabilityFlags: 0,
  volatileFlags: 0
} );

const Hoboken = Page.fromJSON(
  {"title":"Hoboken Terminal","edits":14,"anonEdits":10,"isNew":false,"notabilityFlags":1,"volatileFlags":0,"reverts":0,"start":"2016-09-29T13:32:52.189Z","updated":"2016-09-29T14:17:20.987Z","contributors":["DanTD","Nick Cooper","Realkyhick"],"anons":["66.228.83.116","2600:1000:B129:C270:8CD2:437:6333:56D6","2600:1012:B01D:10A9:2090:CB9F:BDC8:50FB"],"distribution":{"66.228.83.116":8,"2600:1000:B129:C270:8CD2:437:6333:56D6":1,"2600:1012:B01D:10A9:2090:CB9F:BDC8:50FB":1,"DanTD":2,"Nick Cooper":1,"Realkyhick":1},"bytesChanged":690,"id":"Hoboken Terminal","wiki":"enwiki","views":0,"score":-1.4363777908898543,"lang":"en","safe":true,"lastIndex":50,"index":1,"bestIndex":1,"bias":0.5714285714285714,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hoboken_Terminal_waitingroom.jpg/120px-Hoboken_Terminal_waitingroom.jpg","width":120,"height":90}}
);

const ShimonPeres = Page.fromJSON(
  {"title":"Shimon Peres","edits":224,"anonEdits":0,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":11,"start":"2016-09-28T01:15:13.292Z","updated":"2016-09-29T14:21:18.999Z","contributors":["Psteinb","Nutmeg39","HC0502","Howardform","Adog104","To4evr","EdChem","SomePseudonym","Jprg1966","Connormah","Mrceleb2007","Ad Orientem","Graham87","Muboshgu","Valfontis","Knowitall369","Ethangunit","Etamni","Light show","Notecardforfree","Yomybrotha","Stephen","All Hallow's Wraith","Avaya1","Gilabrand","Tobby72","J budissin","DGtal","Valentina Cardoso","Nim205","Aquilasilex","Xyzspaniel","Eitan1989","Deb","Kndimov","Harfarhs","Ajax1995","Yojimbo1941","Cheep","Ericamick","Kremnica","Anonymous from the 21st century","Irondome","MisfitToys","RayneVanDunem","Wavelength","725edwards","Fixuture","Jonathunder","Okedem","Cliftonian","DocWatson42","Cyve","Panam2014","ChefNathan"],"anons":[],"distribution":{"Psteinb":1,"Nutmeg39":3,"HC0502":1,"Howardform":1,"Adog104":12,"To4evr":1,"EdChem":21,"SomePseudonym":1,"Jprg1966":2,"Connormah":4,"Mrceleb2007":1,"Ad Orientem":2,"Graham87":2,"Muboshgu":9,"Valfontis":1,"Knowitall369":8,"Ethangunit":1,"Etamni":1,"Light show":14,"Notecardforfree":1,"Yomybrotha":1,"Stephen":2,"All Hallow's Wraith":2,"Avaya1":90,"Gilabrand":2,"Tobby72":1,"J budissin":2,"DGtal":1,"Valentina Cardoso":3,"Nim205":1,"Aquilasilex":1,"Xyzspaniel":1,"Eitan1989":1,"Deb":1,"Kndimov":1,"Harfarhs":1,"Ajax1995":1,"Yojimbo1941":1,"Cheep":1,"Ericamick":1,"Kremnica":5,"Anonymous from the 21st century":3,"Irondome":6,"MisfitToys":2,"RayneVanDunem":1,"Wavelength":2,"725edwards":1,"Fixuture":1,"Jonathunder":4,"Okedem":1,"Cliftonian":3,"DocWatson42":1,"Cyve":1,"Panam2014":1,"ChefNathan":1},"bytesChanged":16691,"id":"Shimon Peres","wiki":"enwiki","views":254906,"score":709106.0076666668,"lang":"en","safe":true,"trendedAt":"2016-09-28T02:02:09.730Z","thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Shimon_Peres_in_Brazil.jpg/82px-Shimon_Peres_in_Brazil.jpg","width":82,"height":120},"description":"Israeli politician, 8th prime minister and 9th president of Israel","lastIndex":1,"index":1,"bestIndex":1,"bias":0.4017857142857143}
);

const Liliuokalani = Page.fromJSON({"title":"Liliuokalani","edits":205,"anonEdits":1,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":3,"start":"2016-09-26T23:37:49.317Z","updated":"2016-09-29T08:35:11.264Z","contributors":["Mark Miller","KAVEBEAR","Maile66","Kaldari"],"anons":["204.154.122.65"],"distribution":{"Mark Miller":92,"KAVEBEAR":102,"204.154.122.65":1,"Maile66":12,"Kaldari":1},"bytesChanged":20207,"id":"Liliuokalani","wiki":"enwiki","views":0,"score":6.514579096810549e-185,"lang":"en","safe":true,"lastIndex":7,"index":1,"bestIndex":1,"bias":0.4975609756097561,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Queen_Liliuokalani.jpg/97px-Queen_Liliuokalani.jpg","width":97,"height":120},"description":"last monarch of the Kingdom of Hawaii"});


const PacificTyphoon = Page.fromJSON({"title":"2016 Pacific typhoon season","edits":145,"anonEdits":35,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":9,"start":"2016-09-23T01:17:09.187Z","updated":"2016-09-29T14:52:38.307Z","contributors":["Meow","About123","AlphaBetaGamma01","Kaihsu","LilHelpa","Jasper Deng","CVQT","KN2731","Nino Marakot","Typhoon2013","Shubbs03","Skycycle","Jason Rees","2601:547:1102:EFAF:5582:22E2:D524:4E3C","MarioProtIV","Floatjon","Jdcomix"],"anons":["67.224.154.107","60.246.51.20","14.182.204.172","63.135.255.94","219.79.180.157","2607:FB90:82:1850:0:2:FEE2:2A01","60.246.138.64","124.104.166.192","219.79.251.73","219.79.250.237","2600:387:9:5:0:0:0:62","72.50.81.129"],"distribution":{"Meow":38,"About123":10,"AlphaBetaGamma01":3,"67.224.154.107":1,"Kaihsu":2,"LilHelpa":1,"Jasper Deng":6,"CVQT":2,"KN2731":1,"Nino Marakot":2,"60.246.51.20":1,"Typhoon2013":40,"14.182.204.172":6,"63.135.255.94":1,"219.79.180.157":3,"2607:FB90:82:1850:0:2:FEE2:2A01":3,"60.246.138.64":10,"Shubbs03":2,"Skycycle":3,"Jason Rees":1,"124.104.166.192":3,"219.79.251.73":1,"219.79.250.237":3,"2600:387:9:5:0:0:0:62":1,"72.50.81.129":2,"2601:547:1102:EFAF:5582:22E2:D524:4E3C":4,"MarioProtIV":1,"Floatjon":2,"Jdcomix":1},"bytesChanged":10039,"id":"2016 Pacific typhoon season","wiki":"enwiki","views":0,"score":0,"lang":"en","safe":true,"lastIndex":11,"index":1,"bestIndex":1,"bias":0.27586206896551724,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2016_Pacific_typhoon_season_summary.png/120px-2016_Pacific_typhoon_season_summary.png","width":120,"height":108}});

const CascadeMall = Page.fromJSON({"title":"2016 Cascade Mall shooting","edits":84,"anonEdits":13,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":8,"start":"2016-09-25T17:58:53.171Z","updated":"2016-09-29T13:54:04.066Z","contributors":["Mapabo","General Ization","Epson Salts","Lyttle-Wight","MrX","2602:30A:2CE8:44BF:6091:9A35:D503:7B51","Jim Michael","Sally882","NotTheFakeJTP","Ansh666","G0T0","Kelisi","Ferakp","Anthon.Eff","FallingGravity","FriarTuck1981","Somedifferentstuff","Yellowdesk","EvergreenFir","Frietjes","Corn cheese","Parsley Man"],"anons":["2602:304:CFD0:6350:A975:93E1:5CF:D334","108.59.74.107","2601:3C5:8200:B79:E8FC:561:930C:D222","24.68.85.72","95.133.211.190","75.66.124.118","2001:569:705D:8700:2190:EDAA:E346:B3FB","138.75.147.110","82.22.113.75"],"distribution":{"Mapabo":2,"General Ization":12,"Epson Salts":1,"Lyttle-Wight":2,"2602:304:CFD0:6350:A975:93E1:5CF:D334":2,"MrX":2,"108.59.74.107":1,"2602:30A:2CE8:44BF:6091:9A35:D503:7B51":1,"Jim Michael":4,"Sally882":7,"2601:3C5:8200:B79:E8FC:561:930C:D222":1,"NotTheFakeJTP":1,"Ansh666":1,"24.68.85.72":1,"G0T0":15,"95.133.211.190":2,"Kelisi":1,"75.66.124.118":3,"2001:569:705D:8700:2190:EDAA:E346:B3FB":1,"Ferakp":1,"Anthon.Eff":1,"FallingGravity":2,"FriarTuck1981":1,"Somedifferentstuff":20,"138.75.147.110":1,"Yellowdesk":1,"EvergreenFir":1,"Frietjes":1,"82.22.113.75":1,"Corn cheese":1,"Parsley Man":1},"bytesChanged":4729,"id":"2016 Cascade Mall shooting","wiki":"enwiki","views":0,"score":1.981236333844914e-274,"lang":"en","safe":true,"lastIndex":22,"index":1,"bestIndex":1,"bias":0.23809523809523808,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/USA_Washington_location_map.svg/120px-USA_Washington_location_map.svg.png","width":120,"height":85}})

const WideAreaNetwork = Page.fromJSON( {"edits":11,"anonEdits":1,"isVandalism":false,"isNew":false,"isVolatile":false,"reverts":2,"start":"2016-10-21T09:03:20.382Z","contributors":["MY C0CK","MY D1CK","Batman12345678910111213"],"anons":["213.81.68.133"],"distribution":{"MY C0CK":3,"MY D1CK":1,"Batman12345678910111213":6,"213.81.68.133":1},"speed":0.8809384931413599,"anonAuthors":1,"uniqueAuthors":3,"duration":12.476833333333333,"bias":0.5454545454545454,"level":3,"trendedAt":"2016-10-21T09:15:49.583Z"});

const AmericanFootball = Page.fromJSON( {"edits":14,"anonEdits":0,"isVandalism":false,"isNew":false,"isVolatile":false,"reverts":0,"start":"2016-10-21T03:12:25.982Z","contributors":["BelAirRuse","Lizard the Wizard","WikiOriginal-9","BilCat"],"anons":[],"distribution":{"BelAirRuse":5,"Lizard the Wizard":3,"WikiOriginal-9":5,"BilCat":1},"speed":0.30679283156635273,"anonAuthors":0,"uniqueAuthors":4,"duration":45.56015,"bias":0.35714285714285715,"level":3,"trendedAt":"2016-10-21T03:58:03.986Z"});

const JoanneAlbum = Page.fromJSON( {"edits":11,"anonEdits":0,"isVandalism":false,"isNew":false,"isVolatile":false,"reverts":0,"start":"2016-10-21T16:48:31.642Z","contributors":["Chasewc91","SNUGGUMS", "Another Believer","Yamenezes","IndianBio","Eliassarris"],"anons":[],"distribution":{"Chasewc91":2,"Another Believer":2,"Yamenezes":1,"IndianBio":3,"Eliassarris":1},"speed":0.4780639472500699,"anonAuthors":0,"uniqueAuthors":5,"duration":18.57825,"bias":0.3333333333333333,"level":3,"trendedAt":"2016-10-21T17:16:21.198Z"})

const NintendoSwitch = Page.fromJSON( {"edits":9,"anonEdits":2,"isVandalism":false,"isNew":false,"isVolatile":false,"reverts":0,"start":"2016-10-20T14:06:08.529Z","contributors":["Kmkearney","Wonchop","Ferret","Magegg","Masem"],"anons":["66.87.121.70","121.45.210.203"],"distribution":{"Kmkearney":1,"66.87.121.70":1,"Wonchop":3,"Ferret":1,"Magegg":1,"Masem":1,"121.45.210.203":1},"speed":0.5575793621292097,"anonAuthors":2,"uniqueAuthors":5,"duration":15.977233333333334,"bias":0.3333333333333333,"level":3,"trendedAt":"2016-10-20T14:22:17.001Z"});

const PeteBurns = Page.fromJSON({"title":"Pete Burns","edits":46,"anonEdits":23,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":2,"start":"2016-10-24T17:30:59.042Z","updated":"2016-10-24T18:00:15.331Z","contributors":["Hip2020","Anonymous from the 21st century","5 albert square","Doc Strange","BabbaQ","Ivahhc","TheSturgenator"],"anons":["2A02:C7D:3151:5000:753F:7CDC:E77:460F","92.29.47.141","47.202.128.159","86.167.32.125","93.83.39.197","82.132.240.3","71.176.19.149","79.67.215.22","79.76.141.215","178.78.94.227","2A02:C7F:922B:D300:8D16:E2E9:6DA4:E26B","79.68.10.120","92.239.17.215","31.185.159.163"],"distribution":{"2A02:C7D:3151:5000:753F:7CDC:E77:460F":2,"92.29.47.141":2,"Hip2020":2,"Anonymous from the 21st century":13,"47.202.128.159":5,"86.167.32.125":1,"5 albert square":2,"93.83.39.197":1,"82.132.240.3":3,"Doc Strange":3,"71.176.19.149":1,"79.67.215.22":1,"79.76.141.215":2,"BabbaQ":2,"Ivahhc":2,"178.78.94.227":1,"TheSturgenator":1,"2A02:C7F:922B:D300:8D16:E2E9:6DA4:E26B":1,"79.68.10.120":1,"92.239.17.215":1,"31.185.159.163":1},"bytesChanged":435,"id":"Pete Burns","wiki":"enwiki","views":0,"score":23138.330546542278,"lang":"en","bias":0.2826086956521739,"lastIndex":51,"index":1,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Pete_Burns_2012.jpg/80px-Pete_Burns_2012.jpg","width":80,"height":120},"description":"English singer-songwriter"});

const PeteBurns2 = Page.fromJSON({"title":"Pete Burns","edits":65,"anonEdits":23,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":4,"start":"2016-10-24T17:30:59.042Z","updated":"2016-10-24T18:17:30.756Z","contributors":["Hip2020","Anonymous from the 21st century","5 albert square","Doc Strange","BabbaQ","Ivahhc","TheSturgenator","Dean3000","John","Edwardx","PseudoNym","The Rambling Man","Ss112","Masterknighted","Fragglet","Ad Orientem"],"anons":["2A02:C7D:3151:5000:753F:7CDC:E77:460F","92.29.47.141","47.202.128.159","86.167.32.125","93.83.39.197","82.132.240.3","71.176.19.149","79.67.215.22","79.76.141.215","178.78.94.227","2A02:C7F:922B:D300:8D16:E2E9:6DA4:E26B","79.68.10.120","92.239.17.215","31.185.159.163"],"distribution":{"2A02:C7D:3151:5000:753F:7CDC:E77:460F":2,"92.29.47.141":2,"Hip2020":2,"Anonymous from the 21st century":15,"47.202.128.159":5,"86.167.32.125":1,"5 albert square":2,"93.83.39.197":1,"82.132.240.3":3,"Doc Strange":3,"71.176.19.149":1,"79.67.215.22":1,"79.76.141.215":2,"BabbaQ":6,"Ivahhc":2,"178.78.94.227":1,"TheSturgenator":1,"2A02:C7F:922B:D300:8D16:E2E9:6DA4:E26B":1,"79.68.10.120":1,"92.239.17.215":1,"31.185.159.163":1,"Dean3000":2,"John":4,"Edwardx":3,"PseudoNym":1,"The Rambling Man":1,"Ss112":1,"Masterknighted":1,"Fragglet":1,"Ad Orientem":1},"bytesChanged":-2560,"id":"Pete Burns","wiki":"enwiki","views":0,"score":-686.6694934798933,"lang":"en","bias":0.23076923076923078,"safe":true,"lastIndex":8,"index":6});

const Keijo = Page.fromJSON({"title":"Keijo!!!!!!!!","edits":58,"anonEdits":38,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":4,"start":"2016-10-24T23:51:00.084Z","updated":"2016-10-31T12:55:01.420Z","contributors":["IDV","Therainbowsend","Takister","Tainted-wingsz","Gyunyu55"],"anons":["92.26.98.1","131.194.161.1","76.21.37.205","92.26.100.85","204.16.25.237","85.133.27.83"],"distribution":{"IDV":16,"Therainbowsend":1,"92.26.98.1":4,"Takister":2,"Tainted-wingsz":4,"131.194.161.1":1,"76.21.37.205":2,"92.26.100.85":28,"Gyunyu55":1,"204.16.25.237":1,"85.133.27.83":2},"bytesChanged":4859,"id":"Keijo!!!!!!!!","wiki":"enwiki","views":0,"score":4.557500684933107e-92,"lang":"en","bias":0.4827586206896552,"safe":true,"trendedAt":"2016-10-25T01:35:45.457Z","lastIndex":1,"index":14,"description":"Japanese manga series"});

const IcelandElection = Page.fromJSON({"title":"Icelandic parliamentary election, 2016","edits":46,"anonEdits":10,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":0,"start":"2016-10-30T09:01:36.236Z","updated":"2016-10-31T11:24:38.665Z","contributors":["Bedivere.cs","2003:E4:BBCD:9E0F:D184:62B3:EDE1:BDB3","Number 57","Gag0409","Gaia Octavia Agrippa","Amaurea","Togiad","Mark castro","JackWilfred","Izno","Bondegezou","Jim Michael","Ânes-pur-sàng","Lukasb1992"],"anons":["183.83.7.118","93.142.64.211","85.57.193.218","122.106.219.134","82.26.9.234"],"distribution":{"183.83.7.118":1,"93.142.64.211":1,"85.57.193.218":5,"Bedivere.cs":2,"2003:E4:BBCD:9E0F:D184:62B3:EDE1:BDB3":4,"122.106.219.134":1,"Number 57":3,"82.26.9.234":2,"Gag0409":1,"Gaia Octavia Agrippa":3,"Amaurea":3,"Togiad":8,"Mark castro":2,"JackWilfred":1,"Izno":1,"Bondegezou":3,"Jim Michael":1,"Ânes-pur-sàng":3,"Lukasb1992":1},"bytesChanged":4603,"id":"Icelandic parliamentary election, 2016","wiki":"enwiki","views":0,"score":5.798450990822801e-13,"lang":"en","safe":true,"trendedAt":"2016-10-30T11:27:49.418Z","bias":0.17391304347826086,"lastIndex":1,"index":4,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Bjarni_Benediktsson_vid_Nordiska_Radets_session_i_Stockholm.jpg/85px-Bjarni_Benediktsson_vid_Nordiska_Radets_session_i_Stockholm.jpg","width":85,"height":120}});

const NotreDame = Page.fromJSON({"title":"Notre Dame de Sion","edits":18,"anonEdits":11,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":4,"start":"2016-10-28T01:00:24.926Z","updated":"2016-10-28T01:46:00.175Z","contributors":["Yamaguchi先生","2602:304:6FC8:D70:AC89:CECF:B2E4:35F1","2605:A601:42C:1100:F8FD:F154:D3AA:D3FC","Seansullivan220","Hfdjfhdjfh","Oshwah"],"anons":["2605:A601:20D0:400:64C8:6D4D:7142:9095","69.76.165.37","2605:A601:80A:4501:51DF:9539:9768:C28","107.77.207.135"],"distribution":{"2605:A601:20D0:400:64C8:6D4D:7142:9095":6,"69.76.165.37":3,"Yamaguchi先生":1,"2602:304:6FC8:D70:AC89:CECF:B2E4:35F1":1,"2605:A601:42C:1100:F8FD:F154:D3AA:D3FC":1,"2605:A601:80A:4501:51DF:9539:9768:C28":1,"107.77.207.135":1,"Seansullivan220":2,"Hfdjfhdjfh":2,"Oshwah":4},"bytesChanged":-166,"id":"Notre Dame de Sion","wiki":"enwiki","views":0,"score":-3.1424716541985834e-50,"lang":"en","safe":true,"trendedAt":"2016-10-28T01:41:33.369Z","lastIndex":1,"index":7})

const Rainbow = Page.fromJSON({"title":"Rainbow (South Korean band)","edits":24,"anonEdits":8,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":1,"start":"2016-10-28T01:08:19.048Z","updated":"2016-10-31T00:57:26.912Z","contributors":["Niwipe36","Kanghuitari","Drmies","YC52000","LuckyAries","Carrott'","Seungpal"],"anons":["75.143.102.50","73.49.215.11","180.255.248.130","151.38.107.1","125.162.31.145","67.236.94.1"],"distribution":{"Niwipe36":1,"75.143.102.50":1,"Kanghuitari":1,"73.49.215.11":1,"Drmies":8,"YC52000":3,"LuckyAries":1,"180.255.248.130":1,"Carrott'":2,"151.38.107.1":1,"125.162.31.145":3,"Seungpal":1,"67.236.94.1":1},"bytesChanged":10893,"id":"Rainbow (South Korean band)","wiki":"enwiki","views":0,"score":3.2026186658912267e-47,"lang":"en","safe":true,"trendedAt":"2016-10-28T01:43:03.120Z","bias":0.3333333333333333,"lastIndex":1,"index":6,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/%EB%A0%88%EC%9D%B8%EB%B3%B4%EC%9A%B0%28RAINBOW%29_%EC%82%BC%EC%84%B1%EB%82%98%EB%88%94%EC%9B%8C%ED%82%B9%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C_%EA%B3%B5%EA%B0%9C%EB%B0%A9%EC%86%A1_%EC%9A%A9%EC%9D%B8%EC%A2%85%ED%95%A9%EC%9A%B4%EB%8F%99%EC%9E%A5.jpg/120px-%EB%A0%88%EC%9D%B8%EB%B3%B4%EC%9A%B0%28RAINBOW%29_%EC%82%BC%EC%84%B1%EB%82%98%EB%88%94%EC%9B%8C%ED%82%B9%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C_%EA%B3%B5%EA%B0%9C%EB%B0%A9%EC%86%A1_%EC%9A%A9%EC%9D%B8%EC%A2%85%ED%95%A9%EC%9A%B4%EB%8F%99%EC%9E%A5.jpg","width":120,"height":76},"description":"South Korean girl band"});

const TrumpPresident = Page.fromJSON({"title":"Presidency of Donald Trump","edits":88,"anonEdits":44,"isNew":true,"notabilityFlags":0,"volatileFlags":0,"reverts":4,"start":"2016-11-09T07:32:37.475Z","updated":"2016-11-10T17:29:31.851Z","contributors":["CCamp2013","TrumpWin","Hektor","Someguy432","12bigbrother12","Calibrador","Lugnuts","MusikAnimal","Brianhe","Another Believer","Timeloop","Anastan","BD2412","AAAS222","Meiskam","Margalob","Indy beetle","Triggerhippie4","Melcous","Arglebargle79","Thugjoey","Widr"],"anons":["2A02:C7D:6A3D:DB00:85EB:648A:71F8:CF2A","128.227.139.191","108.39.109.123","66.231.137.30","70.214.87.77","2600:1017:B413:E1ED:B16B:BB80:E735:667B","209.147.144.50","169.231.45.48","63.143.200.64","174.137.79.78","63.143.202.186","2600:1016:B020:414C:7D7D:34A4:6B53:6863","63.143.196.42","2601:484:8100:A460:C442:DA54:CABE:ED2D","2601:5C9:4201:231C:808D:764B:585A:C57B","128.244.87.129","68.38.102.2"],"distribution":{"CCamp2013":1,"TrumpWin":1,"Hektor":2,"Someguy432":1,"2A02:C7D:6A3D:DB00:85EB:648A:71F8:CF2A":1,"12bigbrother12":1,"Calibrador":4,"Lugnuts":2,"128.227.139.191":1,"MusikAnimal":1,"Brianhe":9,"Another Believer":7,"Timeloop":1,"Anastan":2,"108.39.109.123":1,"66.231.137.30":3,"70.214.87.77":4,"2600:1017:B413:E1ED:B16B:BB80:E735:667B":1,"BD2412":1,"AAAS222":2,"Meiskam":1,"209.147.144.50":1,"169.231.45.48":1,"63.143.200.64":7,"Margalob":1,"Indy beetle":2,"174.137.79.78":2,"Triggerhippie4":2,"Melcous":1,"63.143.202.186":2,"Arglebargle79":3,"Thugjoey":2,"2600:1016:B020:414C:7D7D:34A4:6B53:6863":1,"Widr":1,"63.143.196.42":14,"2601:484:8100:A460:C442:DA54:CABE:ED2D":1,"2601:5C9:4201:231C:808D:764B:585A:C57B":2,"128.244.87.129":1,"68.38.102.2":1},"bytesChanged":5563,"id":"Presidency of Donald Trump","wiki":"enwiki","views":0,"score":1.5578157795870836e-14,"lang":"en","safe":true,"trendedAt":"2016-11-09T08:36:02.087Z","bias":0.1590909090909091,"lastIndex":1,"index":5});

const PukhrayanTrain = Page.fromJSON({"title":"Pukhrayan train derailment","edits":41,"anonEdits":1,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":2,"start":"2016-11-20T09:26:13.914Z","updated":"2016-11-20T14:03:47.750Z","contributors":["DatGuy","Master Of Ninja","Lugnuts","Quebec99","MBlaze Lightning","Sioo","Oshwah","Phoenix7777","Pratik Bhatade","ARUNEEK","Editor5454"],"anons":["208.96.71.196"],"distribution":{"DatGuy":7,"Master Of Ninja":1,"Lugnuts":2,"Quebec99":2,"MBlaze Lightning":3,"Sioo":2,"Oshwah":1,"Phoenix7777":4,"Pratik Bhatade":15,"ARUNEEK":2,"208.96.71.196":1,"Editor5454":3},"bytesChanged":4233,"id":"Pukhrayan train derailment","wiki":"enwiki","views":0,"score":918.7860861192335,"lang":"en","bias":0.36585365853658536,"lastIndex":1,"index":1,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/India_location_map.svg/111px-India_location_map.svg.png","width":111,"height":120}});

const JeffSessions = Page.fromJSON({"title":"Jeff Sessions","edits":167,"anonEdits":58,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":21,"start":"2016-11-18T12:13:29.631Z","updated":"2016-11-19T09:43:52.860Z","contributors":["Non fui, fui, non sum, non curo","Sport and politics","SovanDara","Snooganssnoogans","Roxy the dog","Jprg1966","TimeForLunch","Archon 2488","JoeM3120","Lutzv","Spartan7W","Yojimbo1941","Israeltefera12","Justin15w","TrajanCentaur","Brianga","Cllgbksr","Abune","2601:1C0:5C00:90F0:B840:F9A2:9D54:FC7C","Fourthords","WeaponOfChoice1","2601:155:8402:340:F919:4D42:E6E9:E71E","Calibrador","Therequiembellishere","Muboshgu","Narsil","Morningmurk","2602:306:80B3:5F80:CD3:9D1B:72CA:F829","Chris-martin","Ma8thew","Rs 46SR","Philip Cross","Coffeefilter","AstroNautilidae","Lewis Goudy","Mksword","MelanieN","Zzuuzz","MrX","NPalgan2","Carwil","GoodDay","Illegitimate Barrister","127W111","Ergo Sum","Donner60","Jab843","All Hallow's Wraith","AsianHippie","Materialscientist","Laboramus"],"anons":["24.241.120.136","136.167.190.51","2600:1000:B026:C379:2D33:CCA9:8949:92E8","2600:8807:A24D:900:21C4:6A47:1A7E:8EB","24.104.78.194","107.77.203.174","2601:647:C801:1A5A:81B2:5F53:52D6:2975","70.91.173.90","50.202.185.114","104.207.219.182","99.188.208.88","40.129.190.254","128.135.100.111","170.185.54.19","152.33.77.122","75.109.63.133","195.137.46.194","184.175.32.61","169.232.246.50","142.157.61.14","24.158.243.198","134.152.252.251","141.195.238.15","216.49.114.4","216.186.97.214","98.116.48.122","107.77.221.22","100.1.141.103","69.12.26.18","2601:184:4301:8BB0:EC14:7E48:C1F7:89D0","205.156.136.229","78.56.237.26","108.56.241.200","92.6.47.146","2607:FB90:5E41:EB1A:AE9B:6D84:E47F:A269","2602:304:781E:5AC0:20AB:B97C:9217:9C05","173.73.181.83","82.28.82.253","24.241.213.33","2600:8807:A24D:900:704C:B648:B639:179E","47.34.47.167","2601:3C8:2:8E60:3816:D9E0:5589:DFC4","2601:5CB:4400:D75:A9F4:AAC8:3465:68F4","63.143.197.164"],"distribution":{"24.241.120.136":1,"Non fui, fui, non sum, non curo":1,"Sport and politics":1,"136.167.190.51":1,"2600:1000:B026:C379:2D33:CCA9:8949:92E8":1,"2600:8807:A24D:900:21C4:6A47:1A7E:8EB":2,"SovanDara":1,"Snooganssnoogans":8,"24.104.78.194":1,"107.77.203.174":1,"2601:647:C801:1A5A:81B2:5F53:52D6:2975":1,"Roxy the dog":1,"Jprg1966":2,"TimeForLunch":1,"Archon 2488":1,"70.91.173.90":1,"JoeM3120":2,"Lutzv":3,"Spartan7W":5,"50.202.185.114":1,"Yojimbo1941":1,"104.207.219.182":1,"99.188.208.88":1,"Israeltefera12":2,"40.129.190.254":1,"128.135.100.111":1,"170.185.54.19":1,"152.33.77.122":1,"75.109.63.133":1,"195.137.46.194":1,"184.175.32.61":1,"Justin15w":2,"TrajanCentaur":1,"Brianga":4,"Cllgbksr":12,"169.232.246.50":1,"142.157.61.14":1,"Abune":2,"2601:1C0:5C00:90F0:B840:F9A2:9D54:FC7C":1,"Fourthords":1,"24.158.243.198":2,"WeaponOfChoice1":1,"134.152.252.251":1,"141.195.238.15":3,"216.49.114.4":1,"2601:155:8402:340:F919:4D42:E6E9:E71E":1,"Calibrador":5,"Therequiembellishere":3,"Muboshgu":1,"Narsil":2,"216.186.97.214":1,"98.116.48.122":1,"Morningmurk":10,"107.77.221.22":1,"2602:306:80B3:5F80:CD3:9D1B:72CA:F829":1,"Chris-martin":1,"Ma8thew":2,"100.1.141.103":1,"Rs 46SR":1,"Philip Cross":4,"69.12.26.18":2,"2601:184:4301:8BB0:EC14:7E48:C1F7:89D0":3,"205.156.136.229":2,"78.56.237.26":2,"108.56.241.200":1,"Coffeefilter":2,"AstroNautilidae":2,"Lewis Goudy":1,"Mksword":1,"MelanieN":2,"92.6.47.146":2,"Zzuuzz":5,"2607:FB90:5E41:EB1A:AE9B:6D84:E47F:A269":4,"2602:304:781E:5AC0:20AB:B97C:9217:9C05":2,"173.73.181.83":1,"MrX":2,"82.28.82.253":1,"24.241.213.33":1,"NPalgan2":10,"2600:8807:A24D:900:704C:B648:B639:179E":1,"Carwil":2,"GoodDay":7,"47.34.47.167":1,"Illegitimate Barrister":2,"127W111":1,"Ergo Sum":1,"2601:3C8:2:8E60:3816:D9E0:5589:DFC4":1,"Donner60":1,"Jab843":1,"All Hallow's Wraith":1,"2601:5CB:4400:D75:A9F4:AAC8:3465:68F4":1,"AsianHippie":1,"63.143.197.164":1,"Materialscientist":1,"Laboramus":3},"bytesChanged":11063,"id":"Jeff Sessions","wiki":"enwiki","views":0,"score":714754544584.379,"lang":"en","bias":0.0718562874251497,"safe":true,"trendedAt":"2016-11-18T13:51:57.003Z","lastIndex":1,"index":2,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Jeff_Sessions_official_portrait.jpg/90px-Jeff_Sessions_official_portrait.jpg","width":90,"height":120},"description":"United States Senator from Alabama"});

const AmistadMemorial = Page.fromJSON({"title":"Amistad Memorial (New Haven)","edits":50,"anonEdits":2,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":1,"start":"2016-11-18T19:08:03.253Z","updated":"2016-11-18T21:15:22.103Z","contributors":["Cawenz","Toshitel","Michaelw1738","Bluecrystal004"],"anons":["173.166.46.97"],"distribution":{"Cawenz":29,"Toshitel":4,"173.166.46.97":2,"Michaelw1738":12,"Bluecrystal004":4},"bytesChanged":4121,"id":"Amistad Memorial (New Haven)","wiki":"enwiki","views":0,"score":49417.0959110875,"lang":"en","bias":0.58,"safe":true,"trendedAt":"2016-11-18T20:06:04.840Z","lastIndex":2,"index":1,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Relief_map_USA_Connecticut.png/120px-Relief_map_USA_Connecticut.png","width":120,"height":102}});

const Rupee = Page.fromJSON({"title":"Indian rupee","edits":61,"anonEdits":23,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":4,"start":"2016-11-08T19:11:48.701Z","updated":"2016-11-10T10:20:07.890Z","contributors":["IshaanSingh","AdityaChanana","Jellyman","VishalB","Hydloc009","NewHikaru07","AkshayAnand","Tekclan","Mukund Shah Shah","MOHAMMED ABDALLAH ALI","Nizil Shah","IM3847","Capankajsmilyo","Aman290669","LoveWikiPedia123","Dharmadhyaksha"],"anons":["122.164.240.54","43.246.246.6","49.180.158.176","2405:204:3106:5A7D:62F4:CBBA:269B:6F66","2602:30A:C0FF:A6E0:A446:1606:4D5:98B4","2405:204:5485:8A8E:532F:8E6B:8773:6019","106.51.29.0","2405:204:B185:ABB2:A5F4:ECDB:4484:7D9C","106.215.157.126","203.89.4.202","122.168.51.29","119.230.28.38","163.47.153.237","43.248.75.60","1.39.51.69","115.111.36.45","202.168.158.90"],"distribution":{"IshaanSingh":2,"AdityaChanana":12,"122.164.240.54":4,"Jellyman":1,"43.246.246.6":1,"VishalB":1,"Hydloc009":5,"49.180.158.176":1,"2405:204:3106:5A7D:62F4:CBBA:269B:6F66":2,"NewHikaru07":1,"2602:30A:C0FF:A6E0:A446:1606:4D5:98B4":1,"AkshayAnand":4,"Tekclan":3,"2405:204:5485:8A8E:532F:8E6B:8773:6019":1,"Mukund Shah Shah":1,"106.51.29.0":1,"MOHAMMED ABDALLAH ALI":2,"Nizil Shah":1,"IM3847":1,"2405:204:B185:ABB2:A5F4:ECDB:4484:7D9C":1,"106.215.157.126":1,"203.89.4.202":1,"Capankajsmilyo":1,"122.168.51.29":1,"119.230.28.38":1,"Aman290669":5,"163.47.153.237":1,"43.248.75.60":1,"LoveWikiPedia123":1,"1.39.51.69":1,"Dharmadhyaksha":1,"115.111.36.45":2,"202.168.158.90":2},"bytesChanged":6366,"id":"Indian rupee","wiki":"enwiki","views":0,"score":3.5923512742091657e-22,"lang":"en","bias":0.19672131147540983,"safe":true,"trendedAt":"2016-11-08T21:31:43.370Z","lastIndex":1,"index":9});

const Maximiliano = Page.fromJSON({"title":"Maximiliano Korstanje","edits":26,"anonEdits":10,"isNew":true,"notabilityFlags":0,"volatileFlags":0,"reverts":2,"start":"2016-11-25T21:04:24.300Z","updated":"2016-11-25T22:52:56.226Z","contributors":["Vanrobert99","Valenciano","Ajitwebinfinity","Fabrictramp"],"anons":["190.230.75.4"],"distribution":{"Vanrobert99":12,"Valenciano":2,"190.230.75.4":10,"Ajitwebinfinity":2,"Fabrictramp":2},"bytesChanged":9390,"id":"Maximiliano Korstanje","wiki":"enwiki","views":0,"score":69381.0377007029,"lang":"en","bias":0.5,"safe":true,"trendedAt":"2016-11-25T22:52:56.218Z","lastIndex":2,"index":1});

const DavidHamilton = Page.fromJSON({"title":"David Hamilton (photographer)","edits":30,"anonEdits":12,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":2,"start":"2016-11-25T21:50:08.292Z","updated":"2016-11-25T22:52:04.805Z","contributors":["Matthewm192","TheKaphox","DatGuy","Crh23","Klow","Rodericksilly"],"anons":["92.19.14.21","79.70.84.226","86.24.76.128","47.138.255.125","107.77.217.128"],"distribution":{"Matthewm192":2,"92.19.14.21":2,"79.70.84.226":2,"86.24.76.128":2,"TheKaphox":6,"DatGuy":2,"47.138.255.125":4,"Crh23":2,"Klow":2,"Rodericksilly":6,"107.77.217.128":2},"bytesChanged":4652,"id":"David Hamilton (photographer)","wiki":"enwiki","views":0,"score":289169.6716476176,"lang":"en","bias":0.2,"safe":true,"trendedAt":"2016-11-25T22:48:10.228Z","lastIndex":1,"index":2,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/David_Hamilton_2011.JPG/80px-David_Hamilton_2011.JPG","width":80,"height":120},"description":"British photographer and film director"});

const Henderson = Page.fromJSON({"title":"Florence Henderson","edits":88,"anonEdits":29,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":4,"start":"2016-11-25T15:16:43.727Z","updated":"2016-11-25T22:44:48.614Z","contributors":["Calibrador","Mrceleb2007","Bigteddy1","PeterMan844","Maineartists","General Ization","Kiraroshi1976","Serols","Rosspz","Siberian Husky","CAWylie","Nwbeeson","Mlpearc","The Rambling Man","Markhh","Krochetnkat","Rms125a@hotmail.com","Medeis"],"anons":["2602:30A:2C29:5290:55F9:7E20:DECB:91CC","2600:8805:3304:4000:D14E:34D6:9F7F:8E87","24.181.32.198","162.194.149.41","2602:30A:2C29:5290:C998:8953:852:9E61","216.66.122.35","97.83.102.252","2601:242:C000:A287:916A:84CE:C14F:812A","2602:301:77AC:A050:40D:3C66:4CA5:E0B8","2602:306:37C9:1FD0:3D11:3C19:117:3919","72.74.136.193","73.45.39.34"],"distribution":{"Calibrador":1,"Mrceleb2007":2,"2602:30A:2C29:5290:55F9:7E20:DECB:91CC":4,"2600:8805:3304:4000:D14E:34D6:9F7F:8E87":1,"24.181.32.198":6,"162.194.149.41":1,"2602:30A:2C29:5290:C998:8953:852:9E61":2,"216.66.122.35":1,"Bigteddy1":1,"PeterMan844":1,"Maineartists":1,"General Ization":2,"Kiraroshi1976":16,"97.83.102.252":1,"Serols":1,"Rosspz":3,"Siberian Husky":1,"CAWylie":2,"Nwbeeson":2,"2601:242:C000:A287:916A:84CE:C14F:812A":1,"Mlpearc":3,"The Rambling Man":4,"Markhh":1,"Krochetnkat":2,"Rms125a@hotmail.com":16,"2602:301:77AC:A050:40D:3C66:4CA5:E0B8":2,"Medeis":4,"2602:306:37C9:1FD0:3D11:3C19:117:3919":4,"72.74.136.193":4,"73.45.39.34":2},"bytesChanged":-2526,"id":"Florence Henderson","wiki":"enwiki","views":0,"score":2193843.0688446914,"lang":"en","safe":true,"bias":0.2,"trendedAt":"2016-11-25T17:31:51.185Z","lastIndex":1,"index":3,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Florence_Henderson_cropped.jpg/99px-Florence_Henderson_cropped.jpg","width":99,"height":120},"description":"American actress"});

const PierrepontPlace = Page.fromJSON({"title":"Pierrepont Place, Bath","edits":32,"anonEdits":4,"isNew":true,"notabilityFlags":0,"volatileFlags":0,"reverts":7,"start":"2016-11-24T14:28:40.110Z","updated":"2016-11-25T08:23:18.386Z","contributors":["Foundershousebath","McGeddon","Theroadislong","Rodw","Hebrides","Fences and windows"],"anons":["2601:188:1:AEA0:65F5:930C:B0B2:CD63"],"distribution":{"Foundershousebath":12,"2601:188:1:AEA0:65F5:930C:B0B2:CD63":4,"McGeddon":11,"Theroadislong":7,"Rodw":2,"Hebrides":1,"Fences and windows":2},"bytesChanged":4378,"id":"Pierrepont Place, Bath","wiki":"enwiki","views":0,"score":101444.5361856286,"lang":"en","safe":true,"trendedAt":"2016-11-24T18:06:23.752Z","bias":0.375,"lastIndex":1,"index":4,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pierrepont_Place%2C_Bath_-_geograph.org.uk_-_940240.jpg/120px-Pierrepont_Place%2C_Bath_-_geograph.org.uk_-_940240.jpg","width":120,"height":90}});

const DearZindagi = Page.fromJSON({"title":"Dear Zindagi","edits":16,"anonEdits":8,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":0,"start":"2016-11-25T21:59:28.649Z","updated":"2016-11-26T01:15:25.122Z","contributors":["M.Billoo2000"],"anons":["79.79.162.167","65.95.201.108","2605:6000:E88B:3D00:B5EC:B03B:74B5:BB22"],"distribution":{"79.79.162.167":4,"M.Billoo2000":4,"65.95.201.108":4,"2605:6000:E88B:3D00:B5EC:B03B:74B5:BB22":4},"bytesChanged":308,"id":"Dear Zindagi","wiki":"enwiki","views":0,"score":null,"lang":"en","safe":true,"bias":0,"lastIndex":1,"index":1,"description":"2016 film by Gauri Shinde"});

const RashaanSalaam = Page.fromJSON({"title":"Rashaan Salaam","edits":11,"anonEdits":7,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":0,"start":"2016-12-06T20:08:22.418Z","updated":"2016-12-06T20:38:08.376Z","contributors":["Fenway617","UW1941","Skycycle"],"anons":["144.183.224.2","129.120.178.53","204.154.151.242","132.194.33.28","67.162.152.199"],"distribution":{"144.183.224.2":1,"Fenway617":1,"129.120.178.53":1,"204.154.151.242":3,"UW1941":2,"132.194.33.28":1,"Skycycle":1,"67.162.152.199":1},"bytesChanged":96,"id":"Rashaan Salaam","wiki":"enwiki","views":0,"score":-310.97407783528274,"lang":"en","safe":true,"bias":0.0202020202020202,"lastIndex":51,"index":1,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Rashaan_Salaam-Heisman.JPG/120px-Rashaan_Salaam-Heisman.JPG","width":120,"height":90},"description":"All-American college football player, professional football player, running back, Heisman Trophy winner"});

const Women = Page.fromJSON(
  {"title":"100 Women (BBC)","edits":96,"anonEdits":15,"isNew":false,"notabilityFlags":0,"volatileFlags":1,"reverts":1,"start":"2016-12-06T15:49:37.693Z","updated":"2016-12-06T19:52:27.889Z","contributors":["Mgmcs2","JohnBlackburne","Megalibrarygirl","BrillLyle","Victuallers","Nev1","Shawn in Montreal","SusunW","KrakatoaKatie","Gamaliel"],"anons":["2A00:23C4:A683:6A00:C414:D65C:FA3:A059","2A00:23C5:268E:B100:A067:4C24:AEBE:87E8"],"distribution":{"2A00:23C4:A683:6A00:C414:D65C:FA3:A059":14,"Mgmcs2":1,"JohnBlackburne":1,"Megalibrarygirl":16,"BrillLyle":41,"Victuallers":6,"Nev1":4,"Shawn in Montreal":1,"SusunW":9,"2A00:23C5:268E:B100:A067:4C24:AEBE:87E8":1,"KrakatoaKatie":1,"Gamaliel":2},"bytesChanged":8616,"id":"100 Women (BBC)","wiki":"enwiki","views":0,"score":8.067889074278886e-10,"lang":"en","safe":true,"bias":1,"lastIndex":51,"index":1,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Stephanie_harvey_crop.jpg/80px-Stephanie_harvey_crop.jpg","width":80,"height":120},"description":"International award managed by BBC"});

const Jayalalithaa = Page.fromJSON( {"title":"Jayalalithaa","edits":85,"anonEdits":0,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":11,"start":"2016-12-06T02:27:56.903Z","updated":"2016-12-06T19:17:07.974Z","contributors":["අනුරාධ","Indopug","Everyking","Vaikunda Raja","Dineshpkm","Sardaga","Aprmunu","Shanthiniketan","Roland zh","Sathish Kumar ravichandiran","Mz7","Kargayichul","Rms125a@hotmail.com","Araghuwanshi","ARUNEEK","PierceBrosnan007","Vensatry","Arjayay","Maxviwe","Dharmadhyaksha","Magentic Manifestations","Jayarathina","Vignyana","Nihoyari","Ad Orientem","Vishalsathyan19952099","Naagam","Masterknighted","Tigercompanion25","Jonathansammy"],"anons":[],"distribution":{"අනුරාධ":1,"Indopug":37,"Everyking":2,"Vaikunda Raja":2,"Dineshpkm":1,"Sardaga":1,"Aprmunu":1,"Shanthiniketan":1,"Roland zh":1,"Sathish Kumar ravichandiran":1,"Mz7":2,"Kargayichul":10,"Rms125a@hotmail.com":1,"Araghuwanshi":3,"ARUNEEK":2,"PierceBrosnan007":1,"Vensatry":5,"Arjayay":1,"Maxviwe":1,"Dharmadhyaksha":2,"Magentic Manifestations":7,"Jayarathina":1,"Vignyana":1,"Nihoyari":1,"Ad Orientem":2,"Vishalsathyan19952099":4,"Naagam":1,"Masterknighted":1,"Tigercompanion25":1,"Jonathansammy":1},"bytesChanged":1440,"id":"Jayalalithaa","wiki":"enwiki","views":1194550,"score":15331996502.13581,"lang":"en","safe":true,"bias":0.5109019607843133,"lastIndex":51,"index":1,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Jayalalithaa.jpg/120px-Jayalalithaa.jpg","width":120,"height":92}});

const TLC = Page.fromJSON({"title":"TLC: Tables, Ladders & Chairs (2016)","edits":161,"anonEdits":5,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":7,"start":"2016-12-02T16:39:49.334Z","updated":"2016-12-06T17:36:44.185Z","contributors":["Saads324","The Ruler Of All Water","Daboyle250","Manuel2k16","Sportsfan 1234","JDC808","Nickag989","PeterMan844","Brianhenke","Donnowin1","Bbundu","Str1977","I Am Awesome 061796","KBH96","ClassicOnAStick","WWEFan1926","Happycat7","ChrisMorris1234","TheDarkShaylin","Dmack79","Screamingangel40","CPUwizzer","Strousem09","OldSkool01","BabyIamdaman","Siddo11","DevinMoney231","AnOrdinaryBoy","Jvip","Skudrafan1","BigRedMonster12","StylesClash18","The Most Beautiful Girl In The World","Jedi Striker","A.lanzetta"],"anons":["174.44.135.205","2A02:C7D:2842:4000:9DC1:945C:C3C:D096","203.87.156.182","103.41.212.74"],"distribution":{"Saads324":4,"The Ruler Of All Water":6,"Daboyle250":2,"Manuel2k16":6,"Sportsfan 1234":3,"JDC808":11,"Nickag989":2,"PeterMan844":1,"Brianhenke":1,"Donnowin1":29,"Bbundu":3,"Str1977":2,"I Am Awesome 061796":3,"KBH96":3,"ClassicOnAStick":11,"WWEFan1926":23,"Happycat7":2,"ChrisMorris1234":6,"TheDarkShaylin":1,"Dmack79":2,"Screamingangel40":1,"CPUwizzer":8,"Strousem09":1,"OldSkool01":1,"BabyIamdaman":2,"Siddo11":1,"DevinMoney231":1,"AnOrdinaryBoy":2,"Jvip":1,"Skudrafan1":2,"BigRedMonster12":5,"StylesClash18":10,"The Most Beautiful Girl In The World":2,"Jedi Striker":2,"A.lanzetta":3,"174.44.135.205":1,"2A02:C7D:2842:4000:9DC1:945C:C3C:D096":1,"203.87.156.182":1,"103.41.212.74":2},"bytesChanged":6708,"id":"TLC: Tables, Ladders & Chairs (2016)","wiki":"enwiki","views":236716,"score":13192392905.012138,"lang":"en","safe":true,"bias":0.22358220306756224,"lastIndex":51,"index":2,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/WWETLC_Poster2016.jpg/82px-WWETLC_Poster2016.jpg","width":82,"height":120}});

const ItalianReferendum = Page.fromJSON({ "title":"Italian constitutional referendum, 2016","edits":99,"anonEdits":26,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":6,"start":"2016-12-04T23:12:34.997Z","updated":"2016-12-06T19:12:20.245Z","contributors":["Anarcho-authoritarian","Loudo89","Joseph A. Spadaro","2601:C3:C200:EAFA:DCD9:4B22:EF62:6D4E","2601:C3:C200:EAFA:F931:1FC6:3E9:5BB9","Evans1982","Jim Michael","Sfs90","The Infobox Strikes Again!","Atmospherica","Lyttle-Wight","Cranberry Products","The Rambling Man","Holapaco77","Nick.mon","Lukasb1992","Scip.","Goemon","Impru20","Number 57"],"anons":["2601:406:C200:2C90:5021:F6C7:818D:42B4","193.48.226.26","98.70.227.33","183.250.250.105","81.157.174.245","168.229.83.15","95.135.110.45","79.70.249.151","209.220.19.18","76.99.216.210"],"distribution":{"Anarcho-authoritarian":1,"Loudo89":21,"Joseph A. Spadaro":2,"2601:C3:C200:EAFA:DCD9:4B22:EF62:6D4E":1,"2601:C3:C200:EAFA:F931:1FC6:3E9:5BB9":3,"Evans1982":1,"2601:406:C200:2C90:5021:F6C7:818D:42B4":1,"193.48.226.26":14,"Jim Michael":1,"Sfs90":1,"The Infobox Strikes Again!":2,"Atmospherica":20,"Lyttle-Wight":1,"Cranberry Products":1,"98.70.227.33":1,"183.250.250.105":1,"The Rambling Man":1,"Holapaco77":3,"Nick.mon":10,"Lukasb1992":1,"81.157.174.245":2,"168.229.83.15":1,"95.135.110.45":2,"Scip.":1,"Goemon":1,"79.70.249.151":2,"209.220.19.18":1,"76.99.216.210":1,"Impru20":2,"Number 57":5},"bytesChanged":7840,"id":"Italian constitutional referendum, 2016","wiki":"enwiki","views":57770,"score":2689016882.993667,"lang":"en","safe":true,"bias":0.35098484848484846,"trendedAt":"2016-12-05T01:01:08.969Z","lastIndex":51,"index":4,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/2016_constitutional_referendum_results_by_province_%28Italy%29.png/97px-2016_constitutional_referendum_results_by_province_%28Italy%29.png","width":97,"height":120},"description":"Referendum in order to approve the so-called \"Renzi-Boschi constitutional reform\""});

const OaklandWarehouse = Page.fromJSON({"title":"2016 Oakland warehouse fire","edits":395,"anonEdits":35,"isNew":false,"notabilityFlags":1,"volatileFlags":0,"reverts":27,"start":"2016-12-03T19:11:29.118Z","updated":"2016-12-06T20:08:30.053Z","contributors":["Another Believer","Derek R Bullamore","Ser Amantio di Nicolao","2605:E000:141E:C15F:38BD:529F:FF9C:994A","Someone Not Awful","2604:6000:1525:107:F5CE:ED6D:6293:6D0E","Rossbawse","Koplimek","Funcrunch","Cyanidethistles","TallCorgi","Parsley Man","Doc Strange","CapitalSasha","Fuebaey","Joseph A. Spadaro","Zackmann08","Jeremyb-phone","KConWiki","Daniel Case","Lugnuts","Einstein2","Yellowdesk","Koavf","Mild Bill Hiccup","Epicgenius","Xaosflux","NewYorkActuary","Binksternet","WClarke","NorthBySouthBaranof","Tdl1060","Lihaas","Skycycle","Racklever","2602:304:CFD0:6350:D886:A3F1:EBCE:C441","Xanzzibar","Geni","C628","The Rambling Man","FghIJklm","Hbdragon88","CloudKade11","Wavelength","2601:645:8200:B33A:F045:14F7:A0C0:2DAF","Fuzheado","Blackdiamand","Blaylockjam10","Cullen328","David Levy","Korea peace","WWGB","Cdg428","NotTheFakeJTP","GoingBatty","Eric-Wester","HesioneHushabye","Ryan Kaldari (WMF)","Efeliciano ms","Corsair1944","Abductive","Raquel Baranow","Victorgrigas","Egs1505","Michaelsattler","Rms125a@hotmail.com","JezGrove","Smurrayinchester","Regulov","Deepred6502","Wyronth","FuzzyGopher","Nicholas.Horsey","Gripweed"],"anons":["95.135.110.45","104.55.170.173","190.143.15.131","2602:304:CFD0:6350:7848:D60C:159A:8180","2606:F180:0:6E:6E:44F4:DA67:CCF6","2601:646:9280:BA70:D6E:6B64:E4F9:42B7","109.175.147.124","72.223.121.236","2601:645:8200:B33A:BC2E:87E4:1355:4613","73.239.182.165","74.98.33.184","104.163.154.161","76.66.90.207","68.227.110.12","50.30.145.56","50.0.92.176","173.233.173.134","89.160.158.180","216.26.203.73","2001:DA8:201D:1101:6DFA:7D3C:B78F:62A1","75.78.166.8","192.150.174.30","73.93.153.196"],"distribution":{"Another Believer":16,"Derek R Bullamore":2,"Ser Amantio di Nicolao":1,"2605:E000:141E:C15F:38BD:529F:FF9C:994A":2,"Someone Not Awful":1,"2604:6000:1525:107:F5CE:ED6D:6293:6D0E":2,"Rossbawse":2,"Koplimek":1,"Funcrunch":109,"Cyanidethistles":1,"TallCorgi":13,"Parsley Man":65,"Doc Strange":35,"CapitalSasha":1,"Fuebaey":2,"95.135.110.45":2,"104.55.170.173":1,"Joseph A. Spadaro":5,"190.143.15.131":1,"Zackmann08":2,"Jeremyb-phone":2,"KConWiki":7,"2602:304:CFD0:6350:7848:D60C:159A:8180":1,"Daniel Case":8,"Lugnuts":1,"Einstein2":1,"Yellowdesk":1,"Koavf":9,"2606:F180:0:6E:6E:44F4:DA67:CCF6":1,"Mild Bill Hiccup":4,"Epicgenius":16,"Xaosflux":4,"2601:646:9280:BA70:D6E:6B64:E4F9:42B7":1,"NewYorkActuary":1,"Binksternet":2,"WClarke":1,"NorthBySouthBaranof":3,"Tdl1060":1,"109.175.147.124":2,"Lihaas":1,"Skycycle":1,"Racklever":1,"2602:304:CFD0:6350:D886:A3F1:EBCE:C441":1,"72.223.121.236":1,"Xanzzibar":1,"Geni":1,"C628":4,"The Rambling Man":1,"2601:645:8200:B33A:BC2E:87E4:1355:4613":1,"FghIJklm":1,"Hbdragon88":1,"73.239.182.165":1,"74.98.33.184":1,"CloudKade11":2,"Wavelength":2,"2601:645:8200:B33A:F045:14F7:A0C0:2DAF":1,"Fuzheado":4,"104.163.154.161":10,"Blackdiamand":1,"76.66.90.207":1,"Blaylockjam10":2,"Cullen328":6,"68.227.110.12":2,"David Levy":1,"50.30.145.56":1,"Korea peace":1,"WWGB":1,"Cdg428":1,"NotTheFakeJTP":1,"50.0.92.176":1,"GoingBatty":6,"173.233.173.134":1,"Eric-Wester":1,"HesioneHushabye":1,"Ryan Kaldari (WMF)":1,"Efeliciano ms":2,"Corsair1944":1,"Abductive":1,"Raquel Baranow":3,"Victorgrigas":1,"89.160.158.180":1,"216.26.203.73":1,"Egs1505":1,"2001:DA8:201D:1101:6DFA:7D3C:B78F:62A1":1,"Michaelsattler":1,"Rms125a@hotmail.com":1,"JezGrove":1,"Smurrayinchester":1,"Regulov":3,"Deepred6502":1,"Wyronth":1,"FuzzyGopher":1,"75.78.166.8":1,"192.150.174.30":1,"Nicholas.Horsey":1,"73.93.153.196":1,"Gripweed":1},"bytesChanged":30519,"id":"2016 Oakland warehouse fire","wiki":"enwiki","views":0,"score":92731743.49148138,"lang":"en","bias":0.563157529750072,"safe":true,"lastIndex":51,"index":7,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Oakland_warehouse_fire.jpg/90px-Oakland_warehouse_fire.jpg","width":90,"height":120},"description":"California underground warehouse party inferno"});

const TrumpNovember = Page.fromJSON({"title":"Donald Trump","edits":80,"anonEdits":0,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":20,"start":"2016-12-03T22:41:44.904Z","updated":"2016-12-06T20:41:54.868Z","contributors":["JFG","YahwehSaves","Reollun","Darren1988cdm","Billybobjoe997","Vami IV","Chan-ocha","Ontario Teacher BFA BEd","Calton","Coemgenus","Trepcost","Objective3000","MrX","Mandruss","Sundayclose","Whywhenwhohow","Snickers2686","MB298","Animalparty","Champion","Politrukki","IPanda14","Esmost","נריה לוי","AndrewOne","Prshntsathe","JJARichardson","Landingdude13","GoodDay","Gråbergs Gråa Sång","Uconngijoe","Casprings","MelanieN","BrxBrx","Marek69","TomStar81","Tobby72"],"anons":[],"distribution":{"JFG":11,"YahwehSaves":4,"Reollun":1,"Darren1988cdm":1,"Billybobjoe997":1,"Vami IV":1,"Chan-ocha":2,"Ontario Teacher BFA BEd":1,"Calton":1,"Coemgenus":1,"Trepcost":4,"Objective3000":1,"MrX":1,"Mandruss":11,"Sundayclose":1,"Whywhenwhohow":8,"Snickers2686":1,"MB298":2,"Animalparty":1,"Champion":2,"Politrukki":1,"IPanda14":1,"Esmost":1,"נריה לוי":5,"AndrewOne":1,"Prshntsathe":1,"JJARichardson":12,"Landingdude13":1,"GoodDay":1,"Gråbergs Gråa Sång":3,"Uconngijoe":1,"Casprings":11,"MelanieN":1,"BrxBrx":1,"Marek69":1,"TomStar81":1,"Tobby72":1},"bytesChanged":799,"id":"Donald Trump","wiki":"enwiki","views":5108,"score":145393169.72686806,"lang":"en","safe":true,"bias":0.13639517896274653,"lastIndex":51,"index":6,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Donald_Trump_August_19%2C_2015_%28cropped%29.jpg/90px-Donald_Trump_August_19%2C_2015_%28cropped%29.jpg","width":90,"height":120},"description":"president-elect of the United States of America"});

const Deaths2016Nov = Page.fromJSON({"title":"Deaths in 2016","edits":207,"anonEdits":0,"isNew":false,"notabilityFlags":0,"volatileFlags":0,"reverts":7,"start":"2016-12-02T17:26:15.191Z","updated":"2016-12-06T20:41:32.082Z","contributors":["Blue Jacaranda","Rusted AutoParts","TDKR Chicago 101","Nukualofa","Racklever","Refsworldlee","Tim1965","Jfvoll","AnimalExtender","Mrceleb2007","他删之石","Jack Rabbit Slim's","CAWylie","Mewulwe","Everymorning","Royalrec","Noel baran","BurienBomber","Shadow2700","Csurla","Doc Strange","EternalNomad","DrKilleMoff","Andres arg","WWGB","Joseph A. Spadaro","Zigzig20s","Vejvančický","Vycl1994","Gumruch","Nandachuva","Anonymous from the 21st century","Ionel141","Nmacpherson","Danielvis08","DJRafe","Scanlan","Miller17CU94","GDEBE","Beemer69","Biruitorul","Canley","SugarRat","Paora","Rcb1","Sluzzelin","TheBigJagielka","Aumnamahashiva","AmericanLeMans","Bacus15","RadioKAOS","Mdumas43073","InedibleHulk","EricEnfermero","Fixer88","Balablitz","Eksosrock","Philaweb","Derek R Bullamore","Ollie231213","GusF","Philip Cross","Nukada Yakatsura","Bobby H. Heffley","Werldwayd","Masterknighted"],"anons":[],"distribution":{"Blue Jacaranda":1,"Rusted AutoParts":33,"TDKR Chicago 101":3,"Nukualofa":18,"Racklever":20,"Refsworldlee":14,"Tim1965":1,"Jfvoll":1,"AnimalExtender":1,"Mrceleb2007":2,"他删之石":1,"Jack Rabbit Slim's":1,"CAWylie":4,"Mewulwe":2,"Everymorning":1,"Royalrec":3,"Noel baran":10,"BurienBomber":5,"Shadow2700":3,"Csurla":2,"Doc Strange":3,"EternalNomad":4,"DrKilleMoff":3,"Andres arg":2,"WWGB":13,"Joseph A. Spadaro":2,"Zigzig20s":1,"Vejvančický":1,"Vycl1994":1,"Gumruch":1,"Nandachuva":1,"Anonymous from the 21st century":3,"Ionel141":1,"Nmacpherson":1,"Danielvis08":3,"DJRafe":1,"Scanlan":1,"Miller17CU94":2,"GDEBE":2,"Beemer69":1,"Biruitorul":1,"Canley":3,"SugarRat":3,"Paora":2,"Rcb1":5,"Sluzzelin":2,"TheBigJagielka":1,"Aumnamahashiva":3,"AmericanLeMans":1,"Bacus15":1,"RadioKAOS":1,"Mdumas43073":1,"InedibleHulk":3,"EricEnfermero":1,"Fixer88":1,"Balablitz":2,"Eksosrock":1,"Philaweb":1,"Derek R Bullamore":1,"Ollie231213":1,"GusF":1,"Philip Cross":1,"Nukada Yakatsura":1,"Bobby H. Heffley":1,"Werldwayd":1,"Masterknighted":1},"bytesChanged":15935,"id":"Deaths in 2016","wiki":"enwiki","views":7494,"score":4218667359.4451337,"lang":"en","safe":true,"bias":0.1346890068892703,"lastIndex":51,"index":3,"description":"Wikimedia list article"});

module.exports = {
  minimal: minimal,
  TLC: TLC,
  OaklandWarehouse: OaklandWarehouse,
  Deaths2016Nov: Deaths2016Nov,
  ItalianReferendum: ItalianReferendum,
  TrumpNovember: TrumpNovember,
  Jayalalithaa: Jayalalithaa,
  Women: Women,
  RashaanSalaam: RashaanSalaam,
  agaricAcid: agaricAcid,
  battleMosul: battleMosul,
  deaths2016: deaths2016,
  CascadeMall: CascadeMall,
  PacificTyphoon: PacificTyphoon,
  Liliuokalani: Liliuokalani,
  ShimonPeres: ShimonPeres,
  Hoboken: Hoboken,
  WideAreaNetwork: WideAreaNetwork,
  AmericanFootball: AmericanFootball,
  JoanneAlbum: JoanneAlbum,
  NintendoSwitch: NintendoSwitch,
  PeteBurns: PeteBurns,
  PeteBurns2: PeteBurns2,
  Keijo: Keijo,
  IcelandElection: IcelandElection,
  NotreDame: NotreDame,
  Rainbow: Rainbow,
  TrumpPresident: TrumpPresident,
  Rupee: Rupee,
  AmistadMemorial: AmistadMemorial,
  JeffSessions: JeffSessions,
  PukhrayanTrain: PukhrayanTrain,
  Maximiliano: Maximiliano,
  DavidHamilton: DavidHamilton,
  Henderson: Henderson,
  PierrepontPlace: PierrepontPlace,
  DearZindagi: DearZindagi,
  attaUr: attaUr,
  cyberAttacks: cyberAttacks,
  page: page,
  page2: page2,
  page3: page3,
  page4: page4
};

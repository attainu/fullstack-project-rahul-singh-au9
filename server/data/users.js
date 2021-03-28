const bcrypt =  require('bcryptjs');

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password:  bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
    {
      email: "vsapson0@bbb.org",
      name: "Vicki Sapson",
      password: bcrypt.hashSync("bD3pjRenN", 10)  
}, 
{
      email: "jteenan1@phpbb.com",
      name: "Janetta Teenan",
      password: bcrypt.hashSync("NpblIOOf9m", 10)   
     }, 
     {
      email: "rhargreaves2@gizmodo.com",
      name: "Rik Hargreaves",
      password: bcrypt.hashSync("qNcP2njaa3je",10)
    }, 
    {
      email: "jdemangeot3@feedburner.com",
      name: "Jakob Demangeot",
      password: bcrypt.hashSync("ohVVlZljpj",10)   
    }, 
    {
      email: "nhacksby4@live.com",
      name: "Noelani Hacksby",
      password: bcrypt.hashSync("WGoEqFKqy", 10)   
    }, 
    {
      email: "wlampbrecht5@wisc.edu",
      name: "Wilmette Lampbrecht",
      password: bcrypt.hashSync("CCK2Tg0iNi", 10)  
     }, 
     {
      email: "mliggons6@census.gov",
      name: "Minny Liggons",
      password: bcrypt.hashSync("p6DUfwbbbD", 10)  
     }, {
      email: "pfones7@facebook.com",
      name: "Pearle Fones",
      password: bcrypt.hashSync("wVNr7DkGS", 10)  
}, 
 {
      email: "rocorrigane8@umn.edu",
      name: "Renado O'Corrigane",
      password: bcrypt.hashSync("7dvfEWb", 10)},
 {
      email: "lmacfadzean9@ihg.com",
      name: "Lisle MacFadzean",
      password: bcrypt.hashSync("6vj3dmI", 10)},
 {
      email: "lcollmana@cyberchimps.com",
      name: "Lora Collman",
      password: bcrypt.hashSync("LRQiyK"
    ,10)
  }, {
      email: "kpaddingdonb@nifty.com",
      name: "Kevina Paddingdon",
      password: bcrypt.hashSync("stA7NxLi", 10) }
, {
      email: "gyakobowitzc@jigsy.com",
      name: "Goldina Yakobowitz",
      password: bcrypt.hashSync("2Ieghl", 10)
  }, 
  {
      email: "mfarhertyd@prnewswire.com",
      name: "Megan Farherty",
      password: bcrypt.hashSync("BlqkEbtI6", 10)  
}, {
      email: "bagerskowe@rakuten.co.jp",
      name: "Beale Agerskow",
      password: bcrypt.hashSync("it8ztnR1T", 10)  
}, {
      email: "efountainef@unesco.org",
      name: "Engracia Fountaine",
      password: bcrypt.hashSync("d1kEF0Cq6aL",10)
    }, {
      email: "smalesg@nps.gov",
      name: "Shari Males",
      password: bcrypt.hashSync("8clcM42Uf"
, 10)  
}, {
      email: "ggohierh@oakley.com",
      name: "Gannie Gohier",
      password: bcrypt.hashSync("Z6E9d52f"
, 10) }
, {
      email: "pvinei@boston.com",
      name: "Pattin Vine",
      password: bcrypt.hashSync("Y7mXOW8Z"
, 10) }
, {
      email: "jcleaverj@friendfeed.com",
      name: "Jeanine Cleaver",
      password: bcrypt.hashSync("hou675xnU"
, 10)  
}, {
      email: "sblamiresk@bigcartel.com",
      name: "Sumner Blamires",
      password: bcrypt.hashSync("U1WRysQoH"
, 10)  
}, {
      email: "bgeldardl@seesaa.net",
      name: "Beth Geldard",
      password: bcrypt.hashSync("TfEfAOn"
, 10)},
 {
      email: "ibrogim@mapy.cz",
      name: "Inger Brogi",
      password: bcrypt.hashSync("qvgmKpyoxob", 10)
    }, {
      email: "amaciaszczykn@elpais.com",
      name: "Allene Maciaszczyk",
      password: bcrypt.hashSync("FbV1NM"
    ,10)
  }, {
      email: "lsimoenso@dion.ne.jp",
      name: "Lindon Simoens",
      password: bcrypt.hashSync("4EvkfIIgxtp",10)
    }, {
      email: "wgilhoolyp@barnesandnoble.com",
      name: "Wynn Gilhooly",
      password: bcrypt.hashSync("ZEQc44"
    ,10)
  }, {
      email: "fbewlieq@wikispaces.com",
      name: "Freddi Bewlie",
      password: bcrypt.hashSync("CvgkzwGc"
, 10) }
, {
      email: "aswaylandr@economist.com",
      name: "Abbe Swayland",
      password: bcrypt.hashSync("D9iIjDzG", 10) }, 
      {
      email: "rlewerenzs@wunderground.com",
      name: "Roxi Lewerenz",
      password: bcrypt.hashSync("8y8UpzSH", 10) }
, {
      email: "slauxmannt@hatena.ne.jp",
      name: "Sigismundo Lauxmann",
      password: bcrypt.hashSync("rsvaQv9ggbi",10)
    }, {
      email: "pkiffinu@xrea.com",
      name: "Perry Kiffin",
      password: bcrypt.hashSync("BkXxKtfwwM8",10)
    }, {
      email: "ecoulbeckv@diigo.com",
      name: "Errick Coulbeck",
      password: bcrypt.hashSync("4JAJGvBv9", 10)  
}, {
      email: "tbohmanw@devhub.com",
      name: "Torrin Bohman",
      password: bcrypt.hashSync("1gL5Ng"
    ,10)
  }, {
      email: "mdorranx@shareasale.com",
      name: "Mychal Dorran",
      password: bcrypt.hashSync("IhJz04QFLE", 10)  
     }, {
      email: "kfalloony@imdb.com",
      name: "Kessiah Falloon",
      password: bcrypt.hashSync("RiLkk7et1m", 10)  
     }, {
      email: "dmcmeylerz@topsy.com",
      name: "Danita McMeyler",
      password: bcrypt.hashSync("5o0RmmCSvG1",10)
    }, {
      email: "mcolin10@jugem.jp",
      name: "Marita Colin",
      password: bcrypt.hashSync("MhmCs3x"
, 10)},
 {
      email: "agiovanetti11@google.com.hk",
      name: "Asher Giovanetti",
      password: bcrypt.hashSync("DTtVYiN"
, 10)},
 {
      email: "dmagner12@samsung.com",
      name: "Daphna Magner",
      password: bcrypt.hashSync("y2PWRPr"
, 10)},
 {
      email: "dwhitmell13@shinystat.com",
      name: "Darnell Whitmell",
      password: bcrypt.hashSync("QblBnpVsfh", 10)  
     }, {
      email: "cheilds14@addtoany.com",
      name: "Chrysler Heilds",
      password: bcrypt.hashSync("M2v3ixp50b", 10)  
     }, {
      email: "edulake15@bluehost.com",
      name: "Ellsworth Dulake",
      password: bcrypt.hashSync("5t40Z57y"
, 10) }
, {
      email: "bnaisey16@omniture.com",
      name: "Blane Naisey",
      password: bcrypt.hashSync("BH3KtTJGqSR",10)
    }, {
      email: "erenton17@google.de",
      name: "Elisabeth Renton",
      password: bcrypt.hashSync("ggZSicW1z1t",10)
    }, {
      email: "jhessentaler18@wired.com",
      name: "Janette Hessentaler",
      password: bcrypt.hashSync("gVMLSDsgZlZ",10)
    }, {
      email: "lilyunin19@networksolutions.com",
      name: "Lisetta Ilyunin",
      password: bcrypt.hashSync("0bQGV8E"
, 10)},
 {
      email: "ehaddock1a@xinhuanet.com",
      name: "Eirena Haddock",
      password: bcrypt.hashSync("YLrLan"
    ,10)
  }, {
      email: "okirwood1b@japanpost.jp",
      name: "Ollie Kirwood",
      password: bcrypt.hashSync("mhwrgYm5"
, 10) }
, {
      email: "neland1c@disqus.com",
      name: "Nanny Eland",
      password: bcrypt.hashSync("Uv2e0ilnqw", 10)  
     }, {
      email: "hmcisaac1d@time.com",
      name: "Harlene McIsaac",
      password: bcrypt.hashSync("iEzGQb"
    ,10)
  }, {
      email: "twelband1e@census.gov",
      name: "Tamra Welband",
      password: bcrypt.hashSync("o6vzVKT"
, 10)},
 {
      email: "tdeam1f@google.ru",
      name: "Timmy Deam",
      password: bcrypt.hashSync("9KCsPum6lQq",10)
    }, {
      email: "ewalak1g@oakley.com",
      name: "Egan Walak",
      password: bcrypt.hashSync("mLoaAELwH3y",10)
    }, {
      email: "mvasovic1h@qq.com",
      name: "Merilee Vasovic",
      password: bcrypt.hashSync("ZJzXAg1FQdN",10)
    }, {
      email: "lbes1i@live.com",
      name: "Lissa Bes",
      password: bcrypt.hashSync("6Iun83WTW"
, 10)  
}, {
      email: "hraoul1j@naver.com",
      name: "Henrie Raoul",
      password: bcrypt.hashSync("YCWlcP9zl"
, 10)  
}, {
      email: "rromanin1k@technorati.com",
      name: "Rorke Romanin",
      password: bcrypt.hashSync("WzcmKNUW"
, 10) }
, {
      email: "abrach1l@dropbox.com",
      name: "Alan Brach",
      password: bcrypt.hashSync("OgUrFDc"
, 10)},
 {
      email: "lclipsham1m@live.com",
      name: "Lucho Clipsham",
      password: bcrypt.hashSync("Tezh4SaPUduB",10)
    }, {
      email: "moldam1n@acquirethisname.com",
      name: "Marsiella Oldam",
      password: bcrypt.hashSync("n4dKU0w"
, 10)},
 {
      email: "jvasyushkhin1o@house.gov",
      name: "Jake Vasyushkhin",
      password: bcrypt.hashSync("cPWaAwtOKEeJ",10)
    }, {
      email: "lbeckitt1p@com.com",
      name: "Lilias Beckitt",
      password: bcrypt.hashSync("S3ClTAgjH"
, 10)  
}, {
      email: "bromaynes1q@epa.gov",
      name: "Buddy Romaynes",
      password: bcrypt.hashSync("l2JpwL9BHJ8r",10)
    }, {
      email: "wraleston1r@elpais.com",
      name: "Wernher Raleston",
      password: bcrypt.hashSync("Ek4sd7AjH"
, 10)  
}, {
      email: "nimlaw1s@simplemachines.org",
      name: "Noach Imlaw",
      password: bcrypt.hashSync("6XF4ZFXC"
, 10) }
, {
      email: "jburcher1t@google.com.hk",
      name: "Jo Burcher",
      password: bcrypt.hashSync("kaX2Hrg"
, 10)},
 {
      email: "ccaughan1u@usnews.com",
      name: "Claudia Caughan",
      password: bcrypt.hashSync("blCTCCi0vx", 10)  
     }, {
      email: "hpickup1v@netlog.com",
      name: "Hersch Pickup",
      password: bcrypt.hashSync("I6TtKjnhzbs4",10)
    }, {
      email: "cbacken1w@eepurl.com",
      name: "Cary Backen",
      password: bcrypt.hashSync("qY9NP7hc"
, 10) }
, {
      email: "moloughane1x@paginegialle.it",
      name: "Mickie O'Loughane",
      password: bcrypt.hashSync("D1I8tcGDCgD",10)
    }, {
      email: "rurlin1y@google.cn",
      name: "Rhett Urlin",
      password: bcrypt.hashSync("gF2bvsY"
, 10)},
 {
      email: "frimell1z@about.com",
      name: "Fonsie Rimell",
      password: bcrypt.hashSync("O8Q5Tkivu"
, 10)  
}, {
      email: "bmeaddowcroft20@aol.com",
      name: "Blane Meaddowcroft",
      password: bcrypt.hashSync("H9MUbwSpp"
, 10)  
}, {
      email: "sbalderson21@scientificamerican.com",
      name: "Sisile Balderson",
      password: bcrypt.hashSync("EnMwvQ7ylXq",10)
    }, {
      email: "abrindley22@nytimes.com",
      name: "Alfonso Brindley",
      password: bcrypt.hashSync("P7veaVocZ"
, 10)  
}, {
      email: "cmullis23@networkadvertising.org",
      name: "Clarine Mullis",
      password: bcrypt.hashSync("5VVmyetfel", 10)  
     }, {
      email: "emeins24@weather.com",
      name: "Ebony Meins",
      password: bcrypt.hashSync("JcwNKlWccH", 10)  
     }, {
      email: "sbuffin25@blogspot.com",
      name: "Sherye Buffin",
      password: bcrypt.hashSync("miE2no"
    ,10)
  }, {
      email: "kbuxsy26@privacy.gov.au",
      name: "Kristel Buxsy",
      password: bcrypt.hashSync("uQBeobwagU", 10)  
     }, {
      email: "tstein27@sfgate.com",
      name: "Tanner Stein",
      password: bcrypt.hashSync("eeXFFc7tPynh",10)
    }, {
      email: "sbinnion28@flickr.com",
      name: "Stephenie Binnion",
      password: bcrypt.hashSync("1u4Nq0J"
, 10)},
 {
      email: "ncritzen29@ocn.ne.jp",
      name: "Natalee Critzen",
      password: bcrypt.hashSync("3xvYm61"
, 10)},
 {
      email: "isimondson2a@bluehost.com",
      name: "Idette Simondson",
      password: bcrypt.hashSync("BwKqnNE3UxTf",10)
    }, {
      email: "hdairton2b@tmall.com",
      name: "Helen Dairton",
      password: bcrypt.hashSync("5OXi0lA58h", 10)  
     }, {
      email: "kmahaffey2c@soup.io",
      name: "Kathe Mahaffey",
      password: bcrypt.hashSync("3xCSdKQ3R"
, 10)  
}, {
      email: "gmacadam2d@arstechnica.com",
      name: "Garner MacAdam",
      password: bcrypt.hashSync("NjdRYsA5e"
, 10)  
}, {
      email: "jgoodbarr2e@barnesandnoble.com",
      name: "Jacynth Goodbarr",
      password: bcrypt.hashSync("AE545eBU"
, 10) }
, {
      email: "eterran2f@rediff.com",
      name: "Eada Terran",
      password: bcrypt.hashSync("6EYWB7H"
, 10)},
 {
      email: "ofattori2g@feedburner.com",
      name: "Obadiah Fattori",
      password: bcrypt.hashSync("09BHZ5bHGS1",10)
    }, {
      email: "ameldrum2h@quantcast.com",
      name: "Alonso Meldrum",
      password: bcrypt.hashSync("e1BEvErfe7E",10)
    }, {
      email: "ahosby2i@china.com.cn",
      name: "Ana Hosby",
      password: bcrypt.hashSync("nAKD5Li"
, 10)},
 {
      email: "tfransman2j@instagram.com",
      name: "Tobey Fransman",
      password: bcrypt.hashSync("uM3qprgkBn", 10)  
     }, {
      email: "melves2k@mit.edu",
      name: "Martie Elves",
      password: bcrypt.hashSync("IT1sGKV"
, 10)},
 {
      email: "lszymanski2l@thetimes.co.uk",
      name: "Lorelle Szymanski",
      password: bcrypt.hashSync("uDwgFVbmI"
, 10)  
}, {
      email: "anorwood2m@pen.io",
      name: "Abagael Norwood",
      password: bcrypt.hashSync("NdSoCW3w0seB",10)
    }, {
      email: "chuton2n@deliciousdays.com",
      name: "Christie Huton",
      password: bcrypt.hashSync("hDe1gyzpSHa",10)
    }, {
      email: "chexam2o@dion.ne.jp",
      name: "Cairistiona Hexam",
      password: bcrypt.hashSync("ToVE3JAGB1jd",10)
    }, {
      email: "eausiello2p@amazonaws.com",
      name: "Esmeralda Ausiello",
      password: bcrypt.hashSync("rEeuenu00"
, 10)  
}, {
      email: "kbaldery2q@umich.edu",
      name: "Kimble Baldery",
      password: bcrypt.hashSync("Bngw4J"
    ,10)
  }, {
      email: "ecrook2r@google.nl",
      name: "Elizabeth Crook",
      password: bcrypt.hashSync("xHXF0KRq8Ap4",10)
    }
]

module.exports =  users;

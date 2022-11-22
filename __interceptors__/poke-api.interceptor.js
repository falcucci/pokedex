const nock = require("nock");
const HttpStatus = require("http-status-codes");

function HQ4IAPYPY() {
  nock("https://pokeapi.co")
    .get("/api/v2/pokemon-species/ditto")
    .reply(HttpStatus.OK, {
      base_happiness: 50,
      capture_rate: 35,
      color: {
        name: "purple",
        url: "https://pokeapi.co/api/v2/pokemon-color/7/",
      },
      egg_groups: [
        {
          name: "ditto",
          url: "https://pokeapi.co/api/v2/egg-group/13/",
        },
      ],
      evolution_chain: {
        url: "https://pokeapi.co/api/v2/evolution-chain/66/",
      },
      evolves_from_species: null,
      flavor_text_entries: [
        {
          flavor_text:
            "Capable of copying\nan enemy's genetic\ncode to instantly\ftransform itself\ninto a duplicate\nof the enemy.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "red",
            url: "https://pokeapi.co/api/v2/version/1/",
          },
        },
        {
          flavor_text:
            "Capable of copying\nan enemy's genetic\ncode to instantly\ftransform itself\ninto a duplicate\nof the enemy.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "blue",
            url: "https://pokeapi.co/api/v2/version/2/",
          },
        },
        {
          flavor_text:
            "When it spots an\nenemy, its body\ntransfigures into\fan almost perfect\ncopy of its oppo­\nnent.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version/3/",
          },
        },
        {
          flavor_text:
            "It can transform\ninto anything.\nWhen it sleeps, it\fchanges into a\nstone to avoid\nbeing attacked.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "gold",
            url: "https://pokeapi.co/api/v2/version/4/",
          },
        },
        {
          flavor_text:
            "Its transformation\nability is per­\nfect. However, if\fmade to laugh, it\ncan't maintain its\ndisguise.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "silver",
            url: "https://pokeapi.co/api/v2/version/5/",
          },
        },
        {
          flavor_text:
            "When it encount­\ners another DITTO,\nit will move\ffaster than normal\nto duplicate that\nopponent exactly.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version/6/",
          },
        },
        {
          flavor_text:
            "DITTO rearranges its cell structure to\ntransform itself into other shapes.\nHowever, if it tries to transform itself\finto something by relying on its memory,\nthis POKéMON manages to get details\nwrong.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "ruby",
            url: "https://pokeapi.co/api/v2/version/7/",
          },
        },
        {
          flavor_text:
            "DITTO rearranges its cell structure to\ntransform itself into other shapes.\nHowever, if it tries to transform itself\finto something by relying on its memory,\nthis POKéMON manages to get details\nwrong.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "sapphire",
            url: "https://pokeapi.co/api/v2/version/8/",
          },
        },
        {
          flavor_text:
            "A DITTO rearranges its cell structure to\ntransform itself. However, if it tries to\nchange based on its memory, it will get\ndetails wrong.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version/9/",
          },
        },
        {
          flavor_text:
            "It can freely recombine its own cellular\nstructure to transform into other life-\nforms.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "firered",
            url: "https://pokeapi.co/api/v2/version/10/",
          },
        },
        {
          flavor_text:
            "Capable of copying an opponent’s genetic\ncode to instantly transform itself into a\nduplicate of the enemy.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "leafgreen",
            url: "https://pokeapi.co/api/v2/version/11/",
          },
        },
        {
          flavor_text:
            "It has the ability to reconstitute\nits entire cellular structure to\ntransform into whatever it sees.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "diamond",
            url: "https://pokeapi.co/api/v2/version/12/",
          },
        },
        {
          flavor_text:
            "It has the ability to reconstitute\nits entire cellular structure to\ntransform into whatever it sees.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "pearl",
            url: "https://pokeapi.co/api/v2/version/13/",
          },
        },
        {
          flavor_text:
            "It has the ability to reconstitute\nits entire cellular structure to\ntransform into whatever it sees.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version/14/",
          },
        },
        {
          flavor_text:
            "It can transform into anything.\nWhen it sleeps, it changes into a\nstone to avoid being attacked.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "heartgold",
            url: "https://pokeapi.co/api/v2/version/15/",
          },
        },
        {
          flavor_text:
            "Its transformation ability is perfect.\nHowever, if made to laugh, it\ncan’t maintain its disguise.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "soulsilver",
            url: "https://pokeapi.co/api/v2/version/16/",
          },
        },
        {
          flavor_text:
            "Il a la capacité de modifier sa\nstructure cellulaire pour prendre\nl’apparence de ce qu’il voit.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "black",
            url: "https://pokeapi.co/api/v2/version/17/",
          },
        },
        {
          flavor_text:
            "It has the ability to reconstitute\nits entire cellular structure to\ntransform into whatever it sees.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "black",
            url: "https://pokeapi.co/api/v2/version/17/",
          },
        },
        {
          flavor_text:
            "Il a la capacité de modifier sa\nstructure cellulaire pour prendre\nl’apparence de ce qu’il voit.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "white",
            url: "https://pokeapi.co/api/v2/version/18/",
          },
        },
        {
          flavor_text:
            "It has the ability to reconstitute\nits entire cellular structure to\ntransform into whatever it sees.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "white",
            url: "https://pokeapi.co/api/v2/version/18/",
          },
        },
        {
          flavor_text:
            "It can reconstitute its entire cellular\nstructure to change into what it sees,\nbut it returns to normal when it relaxes.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "black-2",
            url: "https://pokeapi.co/api/v2/version/21/",
          },
        },
        {
          flavor_text:
            "It can reconstitute its entire cellular\nstructure to change into what it sees,\nbut it returns to normal when it relaxes.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "white-2",
            url: "https://pokeapi.co/api/v2/version/22/",
          },
        },
        {
          flavor_text:
            "ぜんしんの　さいぼうを　くみかえて\nみたものの　かたち　そっくりに\nへんしんする　のうりょくを　もつ。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "전신의 세포를 재구성해서\n본 것의 모양과 똑 닮게\n변신하는 능력을 가지고 있다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "Il a la capacité de modifier sa structure cellulaire pour\nprendre l’apparence de ce qu’il voit.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "Es kann seine Zellstruktur so verändern, dass es\nsich in alles verwandeln kann, was es sieht.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "Puede alterar por completo su estructura celular para\nemular cualquier objeto que vea.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "Ha la capacità di modificare la sua struttura cellulare\nper trasformarsi in qualsiasi cosa veda.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "It has the ability to reconstitute its entire cellular\nstructure to transform into whatever it sees.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "全身の　細胞を　組み替えて\n見たものの　形　そっくりに\n変身する　能力を　持つ。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "からだの　さいぼうの　つくりを\nじぶんで　くみかえて　ほかの\nせいめいたいに　へんしんする。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "몸의 세포 구성을\n스스로 바꿔서 다른\n생명체로 변신한다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "Métamorph peut modifier sa structure cellulaire à\nsa guise pour se transformer en n’importe quelle\nforme vivante.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "Es kann seine eigene Zellstruktur frei zusammensetzen\nund sich in jede andere Lebensform verwandeln.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "Tiene la capacidad de reorganizar su estructura celular\npara convertirse en otras formas de vida.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "Può ricombinare a piacere la propria struttura\ncellulare per trasformarsi in altri esseri viventi.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "It can freely recombine its own cellular structure to\ntransform into other life-forms.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "体の　細胞の　作りを\n自分で　組み替えて\nほかの　生命体に　変身する。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "からだの　さいぼうを　くみかえて　へんしんする。\nおもいだしながら　いぜん　みた　ものに　かわると\nちょっと　ちがう　かたちに　なってしまうのだ。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "몸의 세포를 재구성하여 변신한다.\n전에 봤던 것을 기억해내면서 바뀌면\n조금 다른 형태가 되어버린다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "Métamorph peut modifier sa structure moléculaire pour\nprendre d’autres formes. Lorsqu’il essaie de se transformer\nde mémoire, il lui arrive de se tromper sur certains détails.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "Ditto verändert seine Zellstruktur, um sich in eine andere Form\nzu verwandeln. Wenn es sich dabei jedoch auf sein Gedächtnis\nverlässt, unterlaufen diesem Pokémon schon mal Fehler.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "Ditto reorganiza la estructura de sus células para adoptar\notras formas. Pero, como intente transformarse en algo\nguiándose por los datos que tenga almacenados en la\nmemoria, habrá detalles que se le escapen.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "Ditto cambia la sua struttura cellulare per assumere molte\naltre forme. Tuttavia, quando si affida solo alla sua memoria,\ntalvolta dimentica dettagli importanti.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "Ditto rearranges its cell structure to transform itself into other\nshapes. However, if it tries to transform itself into something\nby relying on its memory, this Pokémon manages to get\ndetails wrong.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "体の　細胞を　組み替えて　変身する。\n思い出しながら　以前　見た　ものに　変わると\nちょっと　違う　形に　なってしまうのだ。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "からだの　さいぼうを　くみかえて　へんしんする。\nおもいだしながら　いぜん　みた　ものに　かわると\nちょっと　ちがう　かたちに　なってしまうのだ。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "몸의 세포를 재구성하여 변신한다.\n전에 봤던 것을 기억해내면서 바뀌면\n조금 다른 형태가 되어버린다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "Métamorph peut modifier sa structure moléculaire pour\nprendre d’autres formes. Lorsqu’il essaie de se transformer\nde mémoire, il lui arrive de se tromper sur certains détails.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "Ditto verändert seine Zellstruktur, um sich in eine andere Form\nzu verwandeln. Wenn es sich dabei jedoch auf sein Gedächtnis\nverlässt, unterlaufen diesem Pokémon schon mal Fehler.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "Ditto reorganiza la estructura de sus células para adoptar\notras formas. Pero, como intente transformarse en algo\nguiándose por los datos que tenga almacenados en la\nmemoria, habrá detalles que se le escapen.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "Ditto cambia la sua struttura cellulare per assumere molte\naltre forme. Tuttavia, quando si affida solo alla sua memoria,\ntalvolta dimentica dettagli importanti.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "Ditto rearranges its cell structure to transform itself into other\nshapes. However, if it tries to transform itself into something\nby relying on its memory, this Pokémon manages to get\ndetails wrong.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "体の　細胞を　組み替えて　変身する。\n思い出しながら　以前　見た　ものに　変わると\nちょっと　違う　形に　なってしまうのだ。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "さいぼうを　くみかえ　みた　あいて\nそっくりに　すがたを　へんかさせる。\nさいげんどは　こたいに　よる。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "세포를 재구성하여 본 상대와\n똑같이 모습을 변화시킨다.\n재현도는 개체에 따라 다르다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "利用細胞重組將自己的模樣變成\n和眼前的對手一模一樣。\n相似度會因個體而異。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "Il peut modifier sa structure moléculaire pour\nprendre l’apparence de son adversaire. Le degré\nde ressemblance dépend de chaque individu.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "Es verändert seine Zellstruktur, um die Gestalt\nanderer Lebewesen, die es sieht, anzunehmen.\nWie gut das Ebenbild ist, variiert nach Exemplar.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "Ditto reorganiza la estructura de sus células\npara adoptar la forma de su oponente. La\ncalidad de la copia varía de Ditto a Ditto.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "Cambia la sua struttura molecolare per\nassumere le sembianze del nemico. Il grado di\nriuscita varia a seconda del Pokémon.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "It can reorganize its cells to make itself into a\nduplicate of anything it sees. The quality of the\nduplicate depends on the individual.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "細胞を　組み替え　みた　相手\nそっくりに　姿を　変化させる。\n再現度は　個体に　よる。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "通过重组细胞让自己样子变得\n和眼前的对手一模一样。\n相似度依个体而有所不同。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "おどろきの　へんしんのうりょくで\nどんなものとも　なかまに　なれる。\nメタモンどうしは　なかが　わるい。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "놀라운 변신 능력으로\n누구와도 동료가 될 수 있다.\n메타몽끼리는 사이가 나쁘다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "因其驚人的變身能力，\n無論與誰都能成為夥伴。\n但是百變怪同類之間的關係惡劣。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "Grâce à son don de transformation, ce Pokémon\npeut devenir l’ami de tous les êtres vivants, sauf\ndes autres Métamorph, qu’il déteste.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "Dank seiner Fähigkeiten als Gestaltwandler\nkann es sich mit allen Lebewesen anfreunden.\nNur mit Artgenossen kommt es nicht zurecht.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "Ditto puede hacerse amigo de otros Pokémon\ngracias a su habilidad para transformarse. Sin\nembargo, los Ditto no se llevan bien entre sí.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "Grazie alle sue incredibili doti metamorfiche,\npuò assumere le sembianze di qualunque essere\nvivente. I Ditto non vanno d’accordo fra di loro.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "With its astonishing capacity for\nmetamorphosis, it can get along with anything.\nIt does not get along well with its fellow Ditto.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "驚きの　変身能力で\nどんな者とも　仲間に　なれる。\nメタモン同士は　仲が　悪い。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "因其惊人的变身能力，\n无论与谁都能成为伙伴。\n但是百变怪同类间关系恶劣。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "どんなものにも　へんしん　できるが\nメタモンごとに　とくいな　ものと\nにがてな　ものが　あるらしい。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "뭐든지 변신할 수 있지만\n메타몽마다 잘하는 변신과\n잘 못하는 변신이 있다고 한다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "能夠變身成任何東西，\n但每隻百變怪似乎各自有\n擅長和不擅長變形的對象。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "Il peut prendre l’apparence de n’importe quoi,\nmais chaque Métamorph a son propre domaine\nde prédilection et ses propres faiblesses.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "Ditto kann jede beliebige Gestalt annehmen,\nwobei aber jedes Exemplar individuelle\nStärken und Schwächen aufweist.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "Los Ditto pueden adoptar cualquier aspecto,\npero cada individuo tiene un objeto de imitación\nque se le da mejor que otros.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "Ditto è in grado di assumere le sembianze di\nqualsiasi cosa. Ogni esemplare riesce meglio\nin alcune trasformazioni piuttosto che in altre.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "While it can transform into anything, each Ditto\napparently has its own strengths and\nweaknesses when it comes to transformations.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "どんなものにも　変身　できるが\nメタモンごとに　得意な　ものと\n苦手な　ものが　あるらしい。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "可以变身成任何东西，\n但好像每只百变怪都有着自己\n擅长和不擅长变形的东西。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "みたものに　へんしん　する。　ただし\nめのまえに　いないものの　ときは\nきおくしだいなので　しっぱいもする。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "본 적이 있는 것으로 변신한다.\n단 눈앞에 없는 것으로 변신할 때는\n기억에 따르기 때문에 실패하기도 한다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "能變身成自己看過的東西。\n但當對象不在眼前時，因為只能\n靠記憶來變身，所以有時會失敗。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "Il prend la forme de ce qu’il voit. Lorsqu’il n’a\npas de modèle sous les yeux, il doit se fier à sa\nmémoire et le résultat laisse parfois à désirer.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "Es kann sich in alles verwandeln, was es sieht.\nMuss es sich dabei aber auf sein Gedächtnis\nverlassen, macht es manchmal auch Fehler.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "Puede transformarse en cualquier cosa que vea,\npero, si intenta hacerlo de memoria, habrá\ndetalles que se le escapen.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "Si trasforma in qualsiasi cosa veda. Tuttavia,\nquando non ha di fronte il suo modello si affida\nalla memoria, e talvolta sbaglia.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "It transforms into whatever it sees. If the thing\nit’s transforming into isn’t right in front of it,\nDitto relies on its memory—so sometimes it fails.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "見たものに　変身　する。　ただし\n目の前に　いないものの　ときは\n記憶次第なので　失敗もする。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "会变身成它看到的东西。\n但对于不在眼前的东西，它只能靠\n记忆来变身，所以有时也会失败。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "あいてをみた　しゅんかん　からだが\nとけるように　へんかを　はじめる。\nほぼ　おなじかたちに　へんしんする。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "상대를 본 순간 몸이\n녹는 것처럼 변화하기 시작한다.\n거의 똑같은 모습으로 변신한다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "在看見對手的瞬間，身體就會\n像融化般開始變化，最後變成\n與對手幾乎相同的模樣。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "Quand il repère un ennemi, il adapte son corps\npour en faire une copie presque parfaite de\ncelui de son adversaire.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "Wenn es einen Gegner ausmacht, verwandelt es\nseinen Körper in eine nahezu perfekte Kopie\nseines Gegenübers.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "Cuando se fija en un enemigo, su cuerpo se\ntransforma en una copia casi perfecta del\nmismo.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "Quando incontra un nemico è capace di\ntrasformarsi in un baleno in una sua copia\nquasi perfetta.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "When it spots an enemy, its body transfigures\ninto an almost-perfect copy of its opponent.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "相手を見た　瞬間　体が\n溶けるように　変化を　始める。\nほぼ　同じ形に　変身する。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "看到敌人的一瞬间身体便如同\n要融化一般开始转变，几乎能\n变身成和对方完全相同的样子。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "あいてをみた　しゅんかん　からだが\nとけるように　へんかを　はじめる。\nほぼ　おなじかたちに　へんしんする。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "상대를 본 순간 몸이\n녹는 것처럼 변화하기 시작한다.\n거의 똑같은 모습으로 변신한다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "在看見對手的瞬間，身體就會\n像融化般開始變化，最後變成\n與對手幾乎相同的模樣。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "Quand il repère un ennemi, il adapte son corps\npour en faire une copie presque parfaite de\ncelui de son adversaire.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "Wenn es einen Gegner ausmacht, verwandelt es\nseinen Körper in eine nahezu perfekte Kopie\nseines Gegenübers.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "Cuando se fija en un enemigo, su cuerpo se\ntransforma en una copia casi perfecta del\nmismo.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "Quando incontra un nemico è capace di\ntrasformarsi in un baleno in una sua copia\nquasi perfetta.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "When it spots an enemy, its body transfigures\ninto an almost-perfect copy of its opponent.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "相手を見た　瞬間　体が\n溶けるように　変化を　始める。\nほぼ　同じ形に　変身する。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "看到敌人的一瞬间身体便如同\n要融化一般开始转变，几乎能\n变身成和对方完全相同的样子。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "ぜんしんの　さいぼうを　くみかえて\nみたもの　そっくりに　へんしんするが\nちからが　ぬけると　もとにもどる。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "전신의 세포를 재구성해서\n본 것과 똑 닮게 변신하지만\n힘이 빠지면 원래대로 돌아간다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "能夠藉由重組全身的細胞，\n變得與看到的東西一模一樣，\n然而一旦放鬆就會變回原形。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "Il modifie sa structure cellulaire pour copier\nl’apparence de ce qu’il voit, mais au repos,\nil reprend sa forme normale.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "Es modifiziert seine Zellstruktur, um sich in alles\nzu verwandeln, was es sieht. Im entspannten\nZustand nimmt es wieder seine Ausgangsform an.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "Redistribuye las células de su cuerpo para cobrar\nla apariencia de lo que ve, pero vuelve a la\nnormalidad al relajarse.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "Può modificare la sua struttura cellulare per\nassumere le sembianze di ciò che vede.\nRitorna se stesso quando è stanco.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "It can reconstitute its entire cellular\nstructure to change into what it sees,\nbut it returns to normal when it relaxes.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "全身の　細胞を　組み替えて\n見たもの　そっくりに　変身するが\n力が　抜けると　もとにもどる。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "能够通过重组全身的细胞，\n变得与看到的东西一模一样，\n然而一旦放松就会变回原形。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "メタモンどうし　であってしまうと\nあいてそっくりの　かたちに　なろうと\nいつもより　はげしく　うごく。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "메타몽끼리 만나게 되면\n상대와 똑같은 모습이 되기 위해\n평소보다 격렬하게 움직인다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "當兩隻百變怪相遇的時候，\n為了能變成和對方相同的樣子，\n牠們動起來會比平常更加劇烈。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "Quand il rencontre l’un de ses semblables,\nil s’agite avec plus de vivacité que d’habitude\npour adopter exactement la même forme que lui.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "Trifft es auf ein anderes Ditto, bewegt es sich\nschneller als gewöhnlich, um es exakt\nnachzuahmen.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "Cuando se encuentra con otro Ditto, se mueve\nmás rápido de lo normal para intentar adoptar\nsu aspecto.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "Quando incontra un altro Ditto, si muove più\nvelocemente del solito nel tentativo di assumere\nle sue sembianze.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "When it encounters another Ditto, it will move\nfaster than normal to duplicate that opponent exactly.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "メタモン同士　出会ってしまうと\n相手そっくりの　形に　なろうと\nいつもより　激しく　動く。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "当两只百变怪相遇的时候，\n为了能变成和对方相同的样子，\n它们动起来会比平常更加剧烈。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
      ],
      form_descriptions: [],
      forms_switchable: false,
      gender_rate: -1,
      genera: [
        {
          genus: "へんしんポケモン",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
        },
        {
          genus: "변신포켓몬",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
        },
        {
          genus: "變身寶可夢",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
        },
        {
          genus: "Pokémon Morphing",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
        },
        {
          genus: "Transform-Pokémon",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
        },
        {
          genus: "Pokémon Transformación",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
        },
        {
          genus: "Pokémon Mutante",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
        },
        {
          genus: "Transform Pokémon",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
        },
        {
          genus: "へんしんポケモン",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
        },
        {
          genus: "变身宝可梦",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
        },
      ],
      generation: {
        name: "generation-i",
        url: "https://pokeapi.co/api/v2/generation/1/",
      },
      growth_rate: {
        name: "medium",
        url: "https://pokeapi.co/api/v2/growth-rate/2/",
      },
      habitat: {
        name: "urban",
        url: "https://pokeapi.co/api/v2/pokemon-habitat/8/",
      },
      has_gender_differences: false,
      hatch_counter: 20,
      id: 132,
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      name: "ditto",
      names: [
        {
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          name: "メタモン",
        },
        {
          language: {
            name: "roomaji",
            url: "https://pokeapi.co/api/v2/language/2/",
          },
          name: "Metamon",
        },
        {
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          name: "메타몽",
        },
        {
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          name: "百變怪",
        },
        {
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          name: "Métamorph",
        },
        {
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          name: "Ditto",
        },
        {
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          name: "Ditto",
        },
        {
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          name: "Ditto",
        },
        {
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          name: "Ditto",
        },
        {
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          name: "メタモン",
        },
        {
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          name: "百变怪",
        },
      ],
      order: 156,
      pal_park_encounters: [
        {
          area: {
            name: "field",
            url: "https://pokeapi.co/api/v2/pal-park-area/2/",
          },
          base_score: 70,
          rate: 20,
        },
      ],
      pokedex_numbers: [
        {
          entry_number: 132,
          pokedex: {
            name: "national",
            url: "https://pokeapi.co/api/v2/pokedex/1/",
          },
        },
        {
          entry_number: 132,
          pokedex: {
            name: "kanto",
            url: "https://pokeapi.co/api/v2/pokedex/2/",
          },
        },
        {
          entry_number: 92,
          pokedex: {
            name: "original-johto",
            url: "https://pokeapi.co/api/v2/pokedex/3/",
          },
        },
        {
          entry_number: 92,
          pokedex: {
            name: "updated-johto",
            url: "https://pokeapi.co/api/v2/pokedex/7/",
          },
        },
        {
          entry_number: 261,
          pokedex: {
            name: "updated-unova",
            url: "https://pokeapi.co/api/v2/pokedex/9/",
          },
        },
        {
          entry_number: 138,
          pokedex: {
            name: "kalos-mountain",
            url: "https://pokeapi.co/api/v2/pokedex/14/",
          },
        },
        {
          entry_number: 209,
          pokedex: {
            name: "original-alola",
            url: "https://pokeapi.co/api/v2/pokedex/16/",
          },
        },
        {
          entry_number: 81,
          pokedex: {
            name: "original-ulaula",
            url: "https://pokeapi.co/api/v2/pokedex/19/",
          },
        },
        {
          entry_number: 271,
          pokedex: {
            name: "updated-alola",
            url: "https://pokeapi.co/api/v2/pokedex/21/",
          },
        },
        {
          entry_number: 92,
          pokedex: {
            name: "updated-ulaula",
            url: "https://pokeapi.co/api/v2/pokedex/24/",
          },
        },
        {
          entry_number: 132,
          pokedex: {
            name: "letsgo-kanto",
            url: "https://pokeapi.co/api/v2/pokedex/26/",
          },
        },
        {
          entry_number: 373,
          pokedex: {
            name: "galar",
            url: "https://pokeapi.co/api/v2/pokedex/27/",
          },
        },
        {
          entry_number: 207,
          pokedex: {
            name: "isle-of-armor",
            url: "https://pokeapi.co/api/v2/pokedex/28/",
          },
        },
      ],
      shape: {
        name: "ball",
        url: "https://pokeapi.co/api/v2/pokemon-shape/1/",
      },
      varieties: [
        {
          is_default: true,
          pokemon: {
            name: "ditto",
            url: "https://pokeapi.co/api/v2/pokemon/132/",
          },
        },
      ],
    });
}

function VDOW3VGDYBYM() {
  nock("https://pokeapi.co")
    .get("/api/v2/pokemon-species/ditto")
    .replyWithError(new Error("SOCKETTIMEOUT"))
}

module.exports = {
  HQ4IAPYPY,
  VDOW3VGDYBYM
};

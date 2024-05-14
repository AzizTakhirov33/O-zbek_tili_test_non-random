let questions = [
    {
        numb: 1,
        question:'Qanday? qanaqa? qaysi? so‘roqlariga javob bo‘ladigan so‘z turkumi…deyiladi.',
        options: ['Ot','Sifat','Olmosh','Fe’l'],
        answer:1
    },
    {
        numb: 2,
        question:'Narsa, predmetning miqdorini bildirib, qancha? nechta?	so‘roqlariga javob bo‘ladigan so’z turkumi…deyiladi.',
        options: ['Son','Sifat','Olmosh','Ot'],
        answer:0
    },
    {
        numb: 3,
        question:'Bu kitob juda qiziq. Otni aniqlang.',
        options: ['Bu','kitob','juda','qiziq'],
        answer:1
    },
    {
        numb: 4,
        question:'Sodda gapni toping.',
        options: [
            'Qo‘ng’iroq chalindi.',
            'Qo‘ng’iroq chalindi va dars boshlandi.',
            'Qo‘ng’iroq chalindi, dars boshlandi.',
            'B va C'],
        answer:0
    },
    {
        numb: 5,
        question:'Dam olish kunida talabalar muzeyga bordilar.Fe’lni aniqlang.',
        options: ['dam olish kunida','talabalar','muzeyga','bordilar'],
        answer:3
    },
    {
        numb: 6,
        question:'Bugun qor ko’p yog’di. Ravishni aniqlang.',
        options: ['bugun, qor, yog’di','qor	 yog’di','ko’p, yog‘di','bugun, ko‘p'],
        answer:3
    },
    {
        numb: 7,
        question:'Kishilik olmoshini aniqlang.',
        options: ['Hamma','Siz','Kimning?','Allakim'],
        answer:1
    },
    {
        numb: 8,
        question:'Bosh harflar imlosiga ko‘ra to‘g‘ri yozilgan so‘zlarni aniqlang.',
        options: [
            'olma, anor, abdunosir',          'sadoqat, vafo, ishq',
            'Maftuna, Safiya, bexruz',
            'toshkent, buxoro, farg‘ona'],
        answer:1
    },
    {
        numb: 9,
        question:'Antonim so’zlarni aniqlang.',
        options: [
            'mehr-oqibat', 
            'opa-singil',
            'aka-uka',
            'ko’p, yog‘di'],
        answer:3
    },
    {
        numb: 10,
        question:'Sinonimlarni aniqlang.',
        options: [
            'botir-qo‘rqmas', 
            'kun-tun',
            'odobli-odobsiz',
            'mehr-qaxr'],
        answer:0
    },
    {
        numb: 11,
        question:'Dugonalarimiz bilan tog’ga chiqdik. Qaysi gap bo’lagi tushirib qoldirilgan?',
        options: [
            'to‘ldiruvchi', 
            'hol',
            'ega',
            'kesim'],
        answer:2
    },
    {
        numb: 12,
        question:'So’roq olmoshlariga va narsa so’ziga alla- yoki –dir qo’shimchalarini qo’shish bilan hosil qilingan olmoshlar…',
        options: [
            'So’roq ', 
            'Ko’rsatish',
            'Belgilash',
            'Gumon'],
        answer:3
    },
    {
        numb: 13,
        question:'Nil daryosi suvini o’lchash uchun nilometrni ixtiro qilgan o’zbek allomasi kim?',
        options: [
            'Amir Temur', 
            'Imom Buxoriy',
            'Ahmad Farg‘oniy',
            'Ibn Sino'],
        answer:2
    },
    {
        numb: 14,
        question:'Qaysi olmoshlar ishtirok etgan gaplarning kesimi inkor shaklda bo’ladi?',
        options: [
            'Bo’lishiszlik', 
            'Ko’rsatish',
            'Gumon',
            'So’roq'],
        answer:0
    },
    {
        numb: 15,    
        question:'Yevropada “Alfraganus” nomi bilan mashxur bo’lgan o’zbek allomasi  kim?',
        options: [
            'Muhammad ibn Kasir', 
            'Al-Xorazmiy',
            'Mahmud Zamaxshariy',
            'Abu Rayhon Beruniy'],
        answer:0
    },
    {
        numb: 16,
        question:'Davlat idoralari tomonidan chiqariladigan qarorlar, qonunlar, nizomlar qaysi uslubda yoziladi?',
        options: [
            'Ilmiy', 
            'Badiiy',
            'Publististik',
            'Rasmiy'],
        answer:3
    },
    {
        numb: 17,
        question:'O’zbekiston Respublikasining yangi Konstiyutsiyasi qachondan kuchga kirdi?',
        options: [
            '2023-yil, 3-maydan', 
            '2022-yil, 1-maydan',
            '2023-yil, 1-maydan',
            '2023-yil, 4-maydan'],
        answer:2
    },
    {
        numb: 18,
        question:'Kim nayzani uzukdan o’tkaza olsa, o’sha g’olib bo’ladi. Ushbu gap tuzilishiga ko’ra qanday gap?',
        options: [
            'Sodda gap', 
            'Qo‘shma gap',
            'Murakkablashgan soda gap',
            'To’g’ri javob yo‘q'],
        answer:0
    },
    {
        numb: 19,
        question:'Bu gullar  chiroyli. Ushbu gapda sifatning qanday ma’no turi qo‘llangan?',
        options: [
            'Hajm-o‘lchov', 
            'Xil-xususiyat',
            'Rang-tus',
            'Zamon va makon'],
        answer:1
    },
    {
        numb: 20,
        question:'Ish-harakatning nomini bildirib, nima qildi? nima qilyapti? so‘roqlariga javob bo‘ladigan so‘z turkumi…deyiladi.',
        options: [
            'ot', 
            'sifat',
            'fe’l',
            'ravish'],
        answer:2
    },
    {
        numb: 21,
        question:'Quyidagi gapda ajratilgan so`z to`g`ri izohlangan javobni belgilang. Bolalar, yaxshi o‘qing.',
        options: [
            'Undalma', 
            'Sifat',
            'Olmosh',
            'Son'],
        answer:0
    },
    {
        numb: 22,
        question:'Siz, albatta, maqsadingizga erishasiz. Gapda modal so‘zning qanday ma’nosi ifodalangan?',
        options: [
            'Gumon', 
            'Tasdiq',
            'Afsuslanish',
            'Gapda modal so‘z ishtirok etmagan'],
        answer:1
    },
    {
        numb: 23,
        question:'Quyida berilgan gapda ajratilgan so`z qanday so`z? Avvalo, niyatni to‘g‘ri qilaylik.',
        options: [
            'Taqlid so‘z', 
            'Undov so‘z',
            'Kirish so’z',
            'To‘g’ri javob berilmagan'],
        answer:2
    },
    {
        numb: 24,
        question:'Gumon olmoshi ifodalangan gapni aniqlang.',
        options: [
            'Bugun biz Samarqandga boramiz.', 
            'Hamma xursand-birgina Saida xomush.',
            'Shu payt allakimning shivirlashi eshitildi	',
            'Nima qilmoqchisiz?'],
        answer:2
    },
    {
        numb: 25,
        question:'To`rtta savag`ich bilan tap-tap urib, par singari titipdi. Ushbu gapdagi taqlid so`zning turi va uning sintaktik vazifasini belgilang.',
        options: [
            'Tovushga taqlid, hol', 
            'Tovushga taqlid, aniqlovchi',
            'Holatga taqlid, aniqlovchi',
            'Holatga taqlid, hol'],
        answer:0
    },
    {
        numb: 26,
        question:'To`g`ri so`zi kirish so`z vazifasini bajargan qatorni aniqlang.',
        options: [
            'To`g`ri so`z toshni kesar', 
            'To`g`ri, men yanglishibman',
            'To`g`ri o`zadi, egri ozadi',
            'Sen misolni to`g`ri yechding'],
        answer:1
    },
    {
        numb: 27,
        question:'Qaysi qatorda vazifadosh modal so`zlar berilgan?',
        options: [
            'Chamasi, darhaqiqat, avvalo', 
            'Attang, albatta, balki',
            'Afsuski, taxminan, attang',
            'Ehtimol, aftidan, shubhasiz'],
        answer:3
    },
    {
        numb: 28,
        question:'Sifat darajalari nechta?',
        options: [
            '4', 
            '3',
            '2',
            '5'],
        answer:1
    },
    {
        numb: 29,
        question:'“oq” sozining kuchaytirma sifatda ifodalanishi…?',
        options: [
            'Oqish', 
            'Oqroq',
            'Oppoq',
            'Ko‘p'],
        answer:2
    },
    {
        numb: 30,
        question:'Qizil, sariq, ko’k qaysi sifatni bildiradi?',
        options: [
            'Hajm-o‘lchov', 
            'Maza-tam',
            'Xususiyat',
            'Rang-tus'],
        answer:3
    },
    {
        numb: 31,
        question:'To‘g‘ri ko‘chirilgan so‘zni toping?',
        options: [
            'si-fatli', 
            'sifa-tli',
            'sif-atli',
            'Barcha javoblar noto’g‘ri'],
        answer:0
    },
    {
        numb: 32,
        question:'Quyidagi  gapni  rus tiliga  tarjima qiling: Biz o‘zbek tilini o‘rganamiz.',
        options: [
            'Mы учим узбекский язык', 
            'Mы будем учить узбекский язык',
            'Oн учит узбекский  язык',
            'Oн будет учить узбекский язык'],
        answer:0
    },
    // 33
    {
        numb: 33,
        question:'Keling sòzining 3- shaxs kòplikdagi shakli……',
        options: [
            'Kelsinlar', 
            'Kelarsiz',
            'Keladi',
            'Kelarmiz'],
        answer:3
    },
    {
        numb: 34,
        question:'Voqea sòzini tòģri tarjimasini toping?',
        options: [
            'Cобытие', 
            'Рассказ',
            'Служить',
            'Роман'],
        answer:0
    },
    {
        numb: 35,
        question:'Chiroyli sòzining antonimini toping?',
        options: [
            'Yomon', 
            'Qo’pol',
            'Xunuk',
            'Toza'],
        answer:2
    },
    {
        numb: 36,
        question:'Gumon olmoshi ifodalangan gapni aniqlang.',
        options: [
            'Bugun biz Samarqandga boramiz.', 
            'Hamma xursand-birgina Saida xomush.',
            'Shu payt allakimning shivirlashi eshitildi	',
            'Nima qilmoqchisiz?'],
        answer:1
    },
    {
        numb: 37,
        question:'Десять рабочих sòzini tòģri tarjimasini toping',
        options: [
            'On ishchilar', 
            'O’n ishchi',
            'O’ninchi ishchi',
            'O’onta ishchilar'],
        answer:2
    },
    {
        numb: 38,
        question:'Mohir sòzining ma’nosini toping?',
        options: [
            'Qashshoq', 
            'Rassom',
            'Mahoratli',
            'Moyillik'],
        answer:1
    },
    {
        numb: 39,
        question:'Poytaxt sòzining tarjimasi…?',
        options: [
            'Cтолица', 
            'Cтрана',
            'Родина',
            'Kрай'],
        answer:3
    },
    {
        numb: 40,
        question:'O‘zbek tilida qo‘sh undoshlar to’g’ri yozilgan qatorni toping?',
        options: [
            'metal,laureat,alkaloid', 
            'kross,poezd,congress',
            'kilogram,projiktor,metall',
            'metall,congress,kilogramm'],
        answer:1
    },
    {
        numb: 41,
        question:'Maqolni davom ettiring: suvni ko’rmay etik …',
        options: [
            'ichma', 
            'yechma',
            'hursand bolma',
            'kiyma'],
        answer:0
    },
    {
        numb: 42,
        question:'O’zbek adabiy tilning asoschisi kim?',
        options: [
            'Alisher Navoiy', 
            'Mirzo Ulugbek',
            'Zahriddin Muhammad Bobur',
            ' M. Qoshg’ariy'],
        answer:2
    },
    {
        numb: 43,
        question:'O’zbek tiliga qachon kirill alifbosi kirib kelgan?',
        options: [
            '1970', 
            '1920',
            '1940',
            '1939'],
        answer:3
    },
    {
        numb: 44,
        question:'Muhim tarixiy sana va bayramlarning nomlari to’g’ri  yozilgan qatorni toping?',
        options: [
            'Hayit bayrami,navro’z bayrami, ”Jasorat” Yodgorligi', 
            'Ramazon Hayiti,Mustaqillik Kuni,”Jasorat” Yodgorligiм',
            '“Jasorat”yodgorligi,ozodlik haykali,Navro’z bayrami',
            'Xotira kuni,Mustaqillik kuni, Ramazon hayiti'],
        answer:0
    },
    {
        numb: 45,
        question:'Ot qanday savollarga javob beradi?',
        options: [
            'kim?nima?qayer?', 
            'nima? qachon?',
            'nima? nimaga?',
            'kim? nima? nima uchun?'],
        answer:1
    },
    {
        numb: 46,
        question:'Atoqli ot keltirilgan qatorni toping ?',
        options: [
            'orol', 
            'Boeing-737',
            'mashina',
            'telefon'],
        answer:2
    },
    {
        numb: 47,
        question:'Qaysi qatorda ilmiy-ommabop uslubda yozilgan gap keltirilgan ?',
        options: [
            'Ertadan bizga o’qish boshlanadi', 
            '"Oyijon ovqatingiz mazali chiqibdi ," -  dedi kichkina qizaloq',
            'Orol - har tomondan suv bilan o’ralgan yerning bir qismi',
            'Uzoqdan bir sharpa ko’rindi'],
        answer:1
    },
    {
        numb: 48,
        question:'Chiziqcha bilan yozish qoidalari qaysi qatorda to’g’ri berilgan?',
        options: [
            'du-kir dukir , asta -sekin , keldiyu- ketdi ', 
            'el-yurt, mehr-shafqat, qovun-tarvuz',
            'kuy-di pishdi , apil ta-pil , minglab – minglab',
            'baxt saodat-li , yoz-di-otdi , menu-sen'],
        answer:0
    },
    {
        numb: 49,
        question:'To’g’ri javobni tanlang?',
        options: [
            'U har doim shu do’kondan narsalarni sotib oladi', 
            'U har doim shu do’kondan narsalarni sotiboladi',
            'U hardoim shu do’kondan narsalarni sotib oladi',
            'U hardoim shu do’kondan narsalarni sotiboladi'],
        answer:0
    },
    // 50
    {
        numb: 50,
        question:'Qo’shma fe’l tog’ri yozilgan qatorni toping?',
        options: [
            'Borib keldi', 
            'Sotiboldi',
            'Vazifani bajardi',
            'Yig’lab yubordi'],
        answer:2
    },
    // 51
    {
        numb: 51,
        question:'To’g’ri ko’chirilgan so’zlarni toping?',
        options: [
            'Pesh-ona,sin-gil', 
            'De- ngiz,mono-grafiya',
            'E-shikdan, a-badiy',
            'Si-ngil,matba-a'],
        answer:2
    },
    {
        numb: 52,
        question:'Qiyosiy daraja shakli qaysi qoshimcha yordamida yasaladi?',
        options: [
            '-dan', 
            '-ning',
            '–roq',
            'eng'],
        answer:0
    },
    {
        numb: 53,
        question:'Belgining mo‘ljaldan ortiqligini, kuchliligini bildirgan sifatlar qanday darajadagi sifatlar hisoblanadi?',
        options: [
            'Orttirma', 
            'Qiyosiy',
            'Oddiy',
            'Kuchli'],
        answer:1
    },
    {
        numb: 54,
        question:'Xususiyatni bildiruvchi sifatlarni toping?',
        options: [
            'Sariq,yashil', 
            'Mehribon,sodda',
            'Katta, kichik',
            'Shirin,mazali'],
        answer:2
    },
    {
        numb: 55,
        question:'Shakl korinishni bildiruvchi sifatlarni toping?',
        options: [
            'Tor, issiq', 
            'Shirin, nordon',
            'Gavdali, uzunchoq',
            'Mehribon,jizzaki'],
        answer:3
    },
    {
        numb: 56,
        question:'Hajm-o’lchovni bildiruvchi sifatlarni toping?',
        options: [
            'Keng, tor', 
            'Achchiq, bemaza',
            'Qizil, kok',
            'Kilo,gramm'],
        answer:1
    },
    {
        numb: 57,
        question:'Tijorat maqsadlarini ko’zlovchi korxona, kompaniya va boshqa xo’jalik tashkiloti…?',
        options: [
            'Oligopoliya', 
            'Firma',
            'Monopoliya',
            'Aksiya'],
        answer:0
    },
    {
        numb: 58,
        question:'Ko’plik qo’shimchalarini aniqlang?',
        options: [
            '-imiz,-ingiz,-lari', 
            '-im,-imiz,-ing',
            '-ing,-ingiz,-lari',
            '-i,-imiz,-imlar'],
        answer:0
    },
    {
        numb: 59,
        question:'Quyidagi so’zni rus tiliga tarjima qiling: Hе видя',
        options: [
            'O’qimay', 
            'Bilmay',
            'Ko’rmay',
            'O’lchamay'],
        answer:0
    },
    {
        numb: 60,
        question:'Chetdan  o’zlashgan so’zlarda ikki undosh kelsa,ular keyingi satrga qay  tartibda ko’chiriladi?',
        options: [
            'birgalikda ko’chiriladi', 
            'alohida ko’chiriladi',
            'hech qanday ko’chirilmaydi',
            'ikki unlidan so’ng ko’chiriladi'],
        answer:2
    },
    {
        numb: 61,
        question:'Quyidagi so’zni rus tiliga tarjima qiling: Ehtiyot bo’l.',
        options: [
            'Извинения', 
            'Прошу извинения',
            'Будь осторожен',
            'Осторожно'],
        answer:2
    },
    {
        numb: 62,
        question:'“Xamsa” asari ketma-ketlikda to‘g’ri berilgan qatorni toping.',
        options: [
            '“Hayrat ul-abror”, “Farhod va Shirin”, “Sabai’ sayyor” “Layli va Majnun”,  va “Saddi Iskandariy”', 
            '“Hayrat ul-abror “Layli va Majnun”, “Farhod va Shirin”,  “Sabai’ sayyor” va “Saddi Iskandariy”',
            '“Hayrat ul-abror”, “Farhod va Shirin”, “Layli va Majnun”, “Sabai’ sayyor” va “Saddi Iskandariy”',
            '“Hayrat ul-abror”, “Farhod va Shirin”, “Saddi Iskandariy” “Layli va Majnun” va “Sabai’ sayyor” '],
        answer:2
    },
    {
        numb: 63,
        question:'Shart mayli qoshimcasi qaysi?',
        options: [
            ' -la', 
            ' -sa',
            ' -ing',
            ' -lar'],
        answer:1
    },
    {
        numb: 64,
        question:'Turdosh otlarini toping?',
        options: [
            'Marsel, shayton, daryo', 
            'Xalq,Yangiyo’l, uy',
            'Deraza,odam,shahar',
            'Zuhra,yer,Oy'],
        answer:2
    },
    {
        numb: 65,
        question:'Qaysi tillar o’zbek tili shakilanishiga asos bo’lgan?',
        options: [
            'xun, turk', 
            'arab, tojik',
            'run, uygur',
            'fransus, turk'],
        answer:0
    },
    {
        numb: 66,
        question:'Kundoshi bilan tugagan so‘zlarga  qo’shimcha qo’shilganda  to’g’ri yozilgan qatorni belgilang?',
        options: [
            'Tokka, yo‘lakkacha', 
            'Kichikgina, bukkan',
            'To‘kgani, ekkin',
            'Zerikguncha, ko‘nikkach'],
        answer:0
    },
    {
        numb: 67,
        question:'Bosh harflar imlosiga ko’ra  to’g’ri yozilgan javobni toping?',
        options: [
            'Birlashgan arab amirligi', 
            'O’rta osiyo,Yangiyo’l',
            'Birlashgan millatlar tashkiloti',
            'Shimoliy Kavkaz, Markaziy Osiyo'],
        answer:3
    },
    {
        numb: 68,
        question:'Quyidagi hikmat muallifini toping: Onalar oyog‘i ostidadur Ravzayi jannatu jinon bog‘i. Ravza bog‘i visolin istar esang, Bo‘l onaning oyog‘in tuprog‘i. ',
        options: [
            'Ibn Sino', 
            'A.Farg’oniy',
            'A. Navoiy',
            'A.Temur'],
        answer:2
    },
    {
        numb: 69,
        question:'Imlo qoidalari asosida yozilgan qo’shma so’zlarni belgilang?',
        options: [
            'Xush  xabar, hamsuhbat, kam quvvat', 
            'Tabriknoma, taklifnoma, bedapoya  orombaxsh',
            'Sovuq mijoz, devsifat, bug‘doy  rang',
            'Ommabop, qabul xona, umum xalq'],
        answer:1
    },
    {
        numb: 70,
        question:'Joy nomlari  to’g’ri yozilgan qator qaysi?',
        options: [
            'Amu-daryo,xalq obod', 
            'Sirdaryo, Koson-soy',
            'Yangiyo‘l, To‘rtko‘l, Mirzacho‘l',
            'Quyi chirchiq, ko’hna Urganch'],
        answer:2
    },
    {
        numb: 71,
        question:'Chiziqcha bilan yozilgan imlo qoidalariga  mos qatorni belgilang?',
        options: [
            'Baland-baland, chopa-chopa, unter-ofitser,', 
            'Hamma-hammasi, dardi- bedavo kilovatt-soat',
            'Ich-ichidan, nuqtayi- nazar,',
            'Uy-uyiga, tarjimayi- hol'],
        answer:0
    },
    {
        numb: 72,
        question:'Bosh harflar imlosi asosida to’g’ri yozilgan  mansab nomini ko’rsating?',
        options: [
            'O‘zbekistonda Xizmat Ko‘rsatgan Fan Arbobi', 
            'O‘zbekiston Respublikasi Oliy Ta’lim Vaziri',
            'O‘zbekiston Respublikasi Sog’liqni Saqlash Vazir O’rinbosari',
            'O‘zbekiston Respublikasi Oliy Majlisining Raisi'],
        answer:3
    },
    {
        numb: 73,
        question:'Qaysi qatordagi barcha so’zlarda nuqtalar o’rniga a unlisi yoziladi?',
        options: [
            'mu…mmo,  ev…ra, radi…tor', 
            'jangov...r, zalv...rli, tanov...r',
            'hash...rot, z...mon, parv…z',
            'ma   ..do, taq...zo, tam...sha'],
        answer:0
    },
    {
        numb: 74,
        question:'Qo’sh unlilar to’g’ri yozilgan qatorni belgilang?',
        options: [
            'oarta, shuora', 
            'riyoa manfaot,',
            'vakuum, kauchuk',
            'burjua,sanaot'],
        answer:2
    },
    {   
        numb: 75,
        question:'Mustaqil so’z turkumlari to’g’ri ko’rsatib o’tilgan qatorni toping?',
        options: [
            'Ot, sifat, son,  fe’l, modal va ravish', 
            'Ot, sifat, son, olmosh, fe’l va ravish',
            'Ot, sifat,  olmosh, fe’l va ravish',
            'ot, sifat, son, olmosh, fe’l, yuklama, bog’lovchi va ravish'],
        answer:1
    },
    {
        numb: 76,
        question:'Sifatning qaysi darajasi predmetdagi bir belgining boshqa predmetga belgidan ortiq ekanligini ifodalaydi?',
        options: [
            'Qiyosiy', 
            'Orttirma',
            'Ozaytirma',
            'Oddiy'],
        answer:1
    },
    {
        numb: 77,
        question:'Roman, qissa, hikoya  kabi janrlar qaysi uslub asosida  yuzaga keladi?',
        options: [
            'Ilmiy  uslub', 
            'Badiiy  uslub',
            'Publitsistik uslub',
            'So’zlashuv uslubi'],
        answer:1
    },
    {
        numb: 78,
        question:'Achchiq, nordon, shirin; Ushbu keltirilgan so’zlar sifatning qaysi turiga mansub?',
        options: [
            'Hajm-o‘lchov, masofa bildiruvchi', 
            'Rang-tus bildiruvchi',
            'Vazn-og‘irlik bildiruvchi',
            'Maza ta’m bildiruvchi'],
        answer:3
    },
    {
        numb: 79,
        question:'Tashviqot-targ’ibot ishlarini olib borishda qo’llanadigan uslub qanday uslub deb ataladi?',
        options: [
            'Ommabop uslub', 
            'Badiiy uslub',
            'Nutq uslubi',
            'Ilmiy uslub'],
        answer:0
    },
    {
        numb: 80,
        question:'Ega qanday so’roqlarga javob bo’lad?',
        options: [
            'Nechta? qancha? nechanchi?', 
            'Qachon? kim?',
            'Kim? nima? qayer?',
            'Qachon? qayer?'],
        answer:2
    },
    {
        numb: 81,
        question:'Otlar  ma’no jihatdan qanday turga bo’linadi?',
        options: [
            'Atoqli va turdosh otlarga bo‘linadi.', 
            'Ko’plik va turdosh otlarga bo‘linadi.',
            'Atoqli va  ko’plik otlarga bo‘linadi.',
            'Atoqli va  mavhum otlarga bo‘linadi.'],
        answer:0
    },
    {
        numb: 82,
        question:'Qanday shabada esyapti? Savolga javobni toping?',
        options: [
            'Chaqqon', 
            'Quvnoq',
            'Mayin',
            'Qudratl'],
        answer:2
    },
    {
        numb: 83,
        question:'Tutuq belgisi to’g’ri qo’yilgan qatorni toping?',
        options: [
            'm’emor, ne’mat, she’r, fe’l; Nu’mon, shul’a', 
            'el’on, e’tibor, baz’an',
            'in’om, san’at, qa’tiy, ma’sul',
            'ba’zan, ma’yus, ta’zim; ra’y, ta’b'],
        answer:2
    },
    {
        numb: 84,
        question:'To’g’ri javobni tanlang?',
        options: [
            'bitta ko‘ylak besh yuz ming so‘m turadi', 
            'bitta-ko‘ylak besh yuz ming so‘m turadi',
            'bitta ko‘ylak beshyuzming so‘m turadi',
            'bitta  ko‘ylak besh-yuz ming so‘m turadi'],
        answer:0
    },
    {
        numb: 85,
        question:'Найдите изъявительное наклонение?',
        options: [
            'shart mayli', 
            'buyruq may',
            'aniqlik mayli',
            'xabar mayli'],
        answer:2
    },
    {
        numb: 86,
        question:'Oxirgi bo‘g‘inida i qatnashadigan so‘zni toping.',
        options: [
            'botir', 
            'radiatir',
            'termis',
            'direktir'],
        answer:0
    },
    {
        numb: 87,
        question:'Ma’lum hududdagina ishlatilib, faqat shu yerda yashovchi kishilarga tushunarli bo‘lgan so‘zlar qanday nomlanadi?',
        options: [
            'paronimlar', 
            'shevaga xos so’zlar',
            'terminlar',
            'atamalar'],
        answer:1
    },
    {
        numb: 88,
        question:'Lahja atamasi qanday tushunchani anglatadi?',
        options: [
            'ma’lum shevaning kichik bir qismi', 
            'xalq tilining ma’lum bir meyorlarga keltirilgan shakli',
            '«sheva» atamasi sinonimi sifatida ishlatiladi',
            'bir-birga yaqin bo‘lgan shevalar yig‘indisi'],
        answer:3
    },
    {
        numb: 89,
        question:'Xalq shevalarning qanday shakli mavjud?',
        options: [
            'Faqat yozma shakli', 
            'Faqat og‘zaki shakli',
            'adabiy til shakli',
            'umumxalq tili va adabiy tili shakli'],
        answer:3
    },
    {
        numb: 90,
        question:'Sirg‘aluvchi J tovushini ifoda etuvchi so‘zlar qatorini aniqlang?',
        options: [
            'jimjit, g‘ijjak', 
            'jo‘yak, garaj',
            'vijdon, ajdod',
            'jumla, janob'],
        answer:3
    },
    {
        numb: 91,
        question:'O’zbek adabiy tilning boyishida shevalar qanday manba hisoblanadi?',
        options: [
            'shevalar adabiy til uchun manba bo’la olmaydi.', 
            'tashqi manba',
            'B va D',
            'ichki manba'],
        answer:3
    },
    {
        numb: 92,
        question:'O’zbek tili qaysi til oilasiga mansub?',
        options: [
            'Roman', 
            'Oltoy',
            'Hind',
            'Eron'],
        answer:1
    },
    {
        numb: 93,
        question:'Ng bir tovushni bildirmaydigan so’zni toping.',
        options: [
            'dengiz', 
            'bordingiz',
            'menga',
            'yangi'],
        answer:1
    },
    {
        numb: 94,
        question:'Sondan keyin kelgan otlar qaysi qo’shimchani olmaydi?',
        options: [
            ' -lar', 
            ' -oq',
            ' -i',
            ' -li'],
        answer:1
    },
    {
        numb: 95,
        question:'Nutq nima?',
        options: [
            'bilim darajasini korsatuvchi mavqei', 
            'notiqlik sanati',
            'insoniy tuyg’ular tajribalar uzatish usuli',
            'fikrlarni ifodalash jarayoni'],
        answer:3
    },
    {
        numb: 96,
        question:'Murakkab son qaysi qatorda tog’ri yozilgan?',
        options: [
            'seminar o’n birga qadar davom etdi', 
            'yigirma-uch yoshinda uylandim',
            'besh va tort nafar do’stlarim bor',
            'yuz yoshli chinorla kamayib ketmoqda'],
        answer:0
    },
    {
        numb: 97,
        question:'To’g’ri javobni tanlang?',
        options: [
            'bu to’q-qizil olma', 
            'bu to’q qizil olma',
            'bu to’qqizil olma',
            'bu to’q qizil- olma'],
        answer:1
    },
    {
        numb: 98,
        question:'Bo’g’in to’g’ri ko’chirilgan qatorni belgilang?',
        options: [
            'va’- da,mash’-al', 
            'sin-gil,ma-‘rifat',
            'matba-a, 18-ta daftar',
            'diag-ramma, mudof-aa'],
        answer:0
    },
    {
        numb: 99,
        question:'Alisher Navoiy qachon tug‘ilgan?',
        options: [
            '1441-yil 7-fevral', 
            '1405-yil 8-aprel',
            '1441-yil 9-fevral',
            '1336-yil 9-fevral'],
        answer:2
    },
    {
        numb: 100,
        question:'Bo‘lajak shoirning she’riyatdagi birinchi ustozlari kimlar edi?',
        options: [
            'Xusayn Boyqaro', 
            'Amakilari',
            'A va B',
            'Tog’alari'],
        answer:2
    }
];
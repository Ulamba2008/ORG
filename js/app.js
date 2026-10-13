// Массив точек маршрута с выверенными координатами
// (защита от старта с картой — в <head> index.html)
const places = [
  {
    id: 1,
    title: "Памятник Петру Великому",
    coordinates: [34.38975, 61.79062],
    history: "Инициатива установки памятника Петру I в Петрозаводске принадлежала олонецкому губернатору Григорию Григорьеву. 30 мая 1872 года, к 200-летию со дня рождения императора, на Круглой площади заложили основание монумента.\n\nТоржественное открытие состоялось 29 июня 1873 года. Скульптором стал Иван Шредер, архитектором — Ипполит Монигетти.\n\nПосле революции памятник демонтировали; в 1940 году его установили на Заводской площади, а в 1978 году перенесли на Онежскую набережную, где он находится сегодня.",
    meaning: "Памятник увековечивает роль Петра I в истории Карелии. В 1703 году по его указу началось строительство Петровского завода, вокруг которого сформировалась слобода, ставшая основой Петрозаводска.\n\nМонумент является важным мемориальным символом города и отправной точкой маршрута, посвящённого историческим преобразованиям петровской эпохи.",
    image: "img/place-01.jpg",
    extras: [{ links: [{ linkText: "Источники", url: "https://monuments.karelia.ru/novosti/150-let-nazad-v-g-petrozavodske-byl-otkryt-pamjatnik-petru-i/" }] }]
  },
  {
    id: 2,
    title: "Онежская набережная",
    coordinates: [34.38320, 61.79130],
    history: "Онежская набережная проходит вдоль берега Онежского озера и сегодня является одним из узнаваемых общественных пространств Петрозаводска.\n\nСовременная скульптурная галерея начала формироваться в 1991 году, когда город-побратим Дулут из США подарил Петрозаводску композицию «Рыбаки». Позже здесь появились другие скульптуры, созданные в рамках международного сотрудничества. Например, «Дерево желаний», подаренное шведским городом Умео, установили в 1996 году, а композицию «Рождение Петрозаводска (Онега)» — в 2003 году.",
    meaning: "Набережная соединяет природный ландшафт с современной историей города. Скульптуры рассказывают о международных связях Петрозаводска, дружбе между городами и культурном обмене.\n\nКомпозиция «Рождение Петрозаводска» дополнительно напоминает о становлении города в начале XVIII века. Эта остановка показывает, как память о прошлом сохраняется не только в старинных памятниках, но и в общественных пространствах современного города.",
    image: "img/place-02.jpg",
    extras: [{ links: [{ linkText: "Источники", url: "https://kultura.ptz.ru/zapis/skulptury-na-onezhskoj-naberezhnoj" }] }]
  },
  {
    id: 3,
    title: "Александро-Невский кафедральный собор",
    coordinates: [34.37995, 61.78118],
    history: "Александро-Невский собор в Петрозаводске строился в 1825–1832 годах как заводская церковь для рабочих Александровского пушечного завода. Средства на строительство собирали среди рабочих и служащих предприятия. Каменный храм был возведён в стиле классицизма и стал важной частью заводского района.\n\nВ советское время здание использовали для музейных нужд. В 1991 году собор вернули Русской православной церкви, а в 2000 году патриарх Алексий II совершил его великое освящение.",
    meaning: "Собор отражает духовную и общественную жизнь промышленного Петрозаводска XIX века. Его история показывает, что город развивался не только как центр производства, но и как место формирования религиозных, образовательных и общественных традиций.\n\nСегодня собор является значимым архитектурным и духовным памятником Карелии и помогает увидеть, как наследие петровской промышленной эпохи продолжало развиваться в последующие столетия.",
    image: "img/place-03.jpg",
    extras: [{ links: [{ linkText: "Источники", url: "https://biblioteka.ptz.ru/resursi/elektronnie_izdaniya_mu_tsbs/dlya_vseh_vozrastov/literaturnie_adresa_petrozavodska/istoriya_raionov/golikovka" }] }]
  },
  {
    id: 4,
    title: "Национальный музей Республики Карелия",
    coordinates: [34.36369, 61.78708],
    history: "Национальный музей Республики Карелия был основан 16 июня 1871 года по приказу олонецкого губернатора Григория Григорьева. Первоначально он назывался Олонецким естественно-промышленным и историко-этнографическим музеем.\n\nДля публичного посещения музей открылся 29 июня 1873 года — в день торжественного открытия памятника Петру I в Петрозаводске.\n\nСегодня музей располагает коллекцией более чем из 230 тысяч предметов и находится в историческом центре города, в зданиях ансамбля Круглой площади, ныне площади Ленина.",
    meaning: "Музей сохраняет материальное и духовное наследие Карелии, включая свидетельства истории и культуры карелов, вепсов и русских. Его коллекции помогают изучать развитие региона от древнейших времён до более поздних исторических периодов.\n\nДля маршрута музей важен как место, где отдельные памятники и события объединяются в целостную картину прошлого Карелии.",
    image: "img/place-04.jpg",
    extras: [{ links: [{ linkText: "Источники", url: "https://kareliamuseum.ru/o-muzee/185/" }, { linkText: "Билеты", url: "kareliamuseum.ru" }] }]
  },
  {
    id: 5,
    title: "Церковь Преображения Господня",
    coordinates: [35.22355, 62.06779], // Главный храм погоста (северная часть)
    history: "Церковь Преображения Господня на острове Кижи была построена в 1714 году. Это деревянный храм высотой около 37 метров с 22 главами, созданный в традициях русского северного зодчества.\n\nОн возведён на месте более ранней церкви, уничтоженной пожаром. Храм стал центральным сооружением Кижского погоста, архитектурный ансамбль которого складывался на протяжении нескольких столетий.\n\nВ 1949–1959 годах церковь реставрировали по проекту архитектора Александра Ополовникова.",
    meaning: "Церковь является выдающимся памятником деревянного зодчества и свидетельствует о мастерстве северных плотников, которые создавали сложные архитектурные сооружения из дерева. Она входит в состав объекта Всемирного наследия ЮНЕСКО «Кижский погост».\n\nЕё строительство относится к петровской эпохе, но храм важен прежде всего как результат местных строительных и духовных традиций. Эта остановка показывает культурное развитие Карелии в начале XVIII века.",
    image: "img/place-05.jpg",
    extras: [
      { links: [{ linkText: "Источники", url: "https://kizhi.karelia.ru/collections/arxitekturnyie-pamyatniki/czerkov-preobrazheniya-gospodnya" }] },
      {
        title: "Как добраться",
        text: "Сам остров является музеем заповедником. Также до острова нужно добираться по воде."
      }
    ]
  },
  {
    id: 6,
    title: "Церковь Покрова Пресвятой Богородицы",
    coordinates: [35.22340, 62.06735], // Точно на здании зимней церкви (южная часть)
    history: "Церковь Покрова Пресвятой Богородицы входит в ансамбль Кижского погоста и традиционно считается зимним храмом.\n\nВ источниках датировка её истории связана с несколькими этапами строительства: музей-заповедник указывает период 1694–1764 годов, а 1764 год считается датой формирования девятиглавого облика церкви. В XIX веке храм обновляли, в том числе в 1865 году. Его архитектура складывалась во взаимосвязи с соседней Преображенской церковью и колокольней.",
    meaning: "Покровская церковь демонстрирует, как деревянная архитектура Карелии развивалась на протяжении нескольких поколений. Её девять глав образуют выразительный контраст с 22 главами Преображенского храма, но оба сооружения воспринимаются как единый ансамбль.\n\nЦерковь важна для понимания религиозной жизни местных жителей и традиций организации приходского пространства в условиях северного климата.",
    image: "img/place-06.jpg",
    extras: [{ links: [{ linkText: "Источники", url: "https://site.kizhi.karelia.ru/journey/z00/" }] }]
  },
  {
    id: 7,
    title: "Колокольня и ограда",
    coordinates: [35.22290, 62.06755], // Точно на колокольне (западная часть комплекса)
    history: "Колокольня и ограда завершают архитектурный ансамбль Кижского погоста. Современная колокольня была построена в 1862 году и перестроена в 1874 году.\n\nОграда длиной около 300 метров окружает историческую территорию погоста. Её каменное основание относится примерно к 1800 году, а деревянный сруб был восстановлен в 1959 году. Таким образом, эти сооружения отражают несколько этапов формирования и сохранения ансамбля с конца XVIII до XX века.",
    meaning: "Колокольня выполняет архитектурную и звуковую функцию, связывая храмовый комплекс с окружающими поселениями.\n\nОграда обозначает границы погоста и объединяет отдельные постройки в единое пространство. Вместе они показывают, что исторический памятник — это не только отдельная церковь, но и целостная среда, в которой архитектура, религиозные традиции и окружающий ландшафт дополняют друг друга.",
    image: "img/place-07.jpg",
    extras: [{ links: [{ linkText: "Источники", url: "https://kizhi.karelia.ru/collections/arxitekturnyie-pamyatniki/ograda" }] }]
  },
  {
    id: 8,
    title: "Марциальные Воды",
    coordinates: [33.90288, 62.15529],
    history: "В 1714 году рабочий Кончезерского медеплавильного завода Иван Ребоев обнаружил железистый минеральный источник и сообщил о нём начальнику Олонецких заводов.\n\nПосле изучения воды придворными врачами сведения дошли до Петра I. 20 марта 1719 года император издал указ об основании здесь первого российского курорта.\n\nДля посетителей построили несколько зданий, включая церковь Святого апостола Петра, возведённую в 1721 году по проекту и чертежам самого Петра I. До наших дней она сохранилась как один из важнейших памятников петровской эпохи в Карелии.",
    image: "img/place-08.jpg",
    meaning: "Марциальные Воды показывают, как природные ресурсы Карелии повлияли на развитие российской медицины и курортного дела. История источников связана с государственными преобразованиями Петра I и ранними попытками организовать лечение минеральными водами.\n\nСегодня это место имеет историко-культурное и оздоровительное значение. Среди всех остановок маршрута оно относится к наиболее непосредственно связанным с личностью Петра Великого.",
    extras: [{ links: [{ linkText: "Источники", url: "https://monuments.karelia.ru/ob-ekty-kul-turnogo-nasledija/pamjatniki-svjazannye-s-imenem-i-dejatel-nost-ju-petra-i-v-karelii/pamjatniki-petrovskoj-epohi/pervyj-russkij-kurort-marcial-nye-vody-otkrytyj-v-1719-g-po-ukazaniju-petra-i/" }] }]
  },
  {
    id: 9,
    title: "Водопад Кивач",
    coordinates: [33.97800, 62.29200],
    history: "Водопад Кивач образуется на реке Суне, одной из крупнейших рек Карелии. Река пересекает гряду древних диабазовых пород, после чего вода падает по четырём ступеням. Общая высота падения составляет 10,7 метра.\n\nВодопад был известен задолго до появления современного туризма и стал одной из самых узнаваемых природных достопримечательностей региона. 11 июня 1931 года было принято решение об организации государственного заповедника «Кивач», созданного для научного изучения и охраны природных комплексов, включая сосновые леса вокруг водопада.",
    image: "img/place-09.jpg",
    meaning: "Кивач имеет природную, научную и туристическую ценность. Он позволяет увидеть особенности геологического строения Карелии и процессы формирования северного ландшафта.\n\nСоздание заповедника обеспечило охрану не только самого водопада, но и окружающих лесных экосистем. Эта остановка расширяет историко-культурную тему маршрута и показывает, что наследие региона включает также уникальные природные объекты.",
    extras: [{ links: [{ linkText: "Источники", url: "https://www.zapkivach.ru/vodopad-kivach/" }] }]
  },
  {
    id: 10,
    title: "Поселок Шуя",
    coordinates: [34.240051, 61.899086],
    history: "Шуя — старинное поселение Прионежья, история которого насчитывает более пяти столетий. В писцовой книге 1563 года упоминается более 50 деревень, располагавшихся по берегам реки Шуи и соседних озёр.\n\nВ начале XVIII века на территории Шуйского погоста появились железоделательные заводы, а местные крестьяне были связаны с заводским хозяйством. В 1769–1771 годах жители участвовали в Кижском восстании против горнозаводского гнёта.\n\nВ XIX веке в округе развивались школы, почтовое сообщение и лесопильное производство. В 1915 году через эту местность прошла Мурманская железная дорога.",
    image: "img/place-10.jpg",
    meaning: "Шуя показывает историю Карелии не через императорские памятники или крупные музеи, а через развитие старинного поселения и жизнь его жителей. Здесь переплетаются сельское хозяйство, промышленность, торговля, образование и события общественной истории.\n\nПосёлок помогает завершить маршрут мыслью о том, что история региона создавалась не только решениями правителей, но и трудом, традициями и судьбами местных жителей.",
    extras: [{ links: [{ linkText: "Источники", url: "https://prionego.ru/zametki/2277-shuya-ot-drevnosti-do-nashikh-dnej" }] }]
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const listContainer = document.getElementById('map-list');
    const infoContainer = document.getElementById('info');

    // Вводная панель из исходной разметки: показывается по пункту «Начало»
    const introHtml = infoContainer.innerHTML;

    // Мобильное меню остановок: выезжающая слева панель по кнопке «Остановки»
    const stopsToggle = document.getElementById('stops-toggle');
    const mapSidebar = document.getElementById('map-sidebar');
    const mapOverlay = document.getElementById('map-overlay');

    const isMobileMenu = () =>
        window.matchMedia('(max-width: 760px)').matches;

    function closeStopsMenu() {
        if (!mapSidebar) {
            return;
        }

        mapSidebar.classList.remove('open');
        if (mapOverlay) {
            mapOverlay.classList.remove('open');
        }
        if (stopsToggle) {
            stopsToggle.setAttribute('aria-expanded', 'false');
        }
    }

    if (stopsToggle && mapSidebar) {
        stopsToggle.addEventListener('click', () => {
            const isOpen = mapSidebar.classList.toggle('open');
            if (mapOverlay) {
                mapOverlay.classList.toggle('open', isOpen);
            }
            stopsToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    if (mapOverlay) {
        mapOverlay.addEventListener('click', closeStopsMenu);
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeStopsMenu();
        }
    });

    let map = null;
    try {
        map = new mapgl.Map('map-panel', {
            center: [34.38975, 61.79062],
            zoom: 8,
            key: '1c5a2885-4b34-404d-afae-5513c7af4f08' // Рабочий ключ 2ГИС
        });
    } catch (e) {
        console.warn('Карта не инициализировалась:', e);
    }

    let markers = [];
    let allCoordinates = [];

    function getZoomForPlace(placeId) {
        if ([5, 6, 7].includes(placeId)) {
            return 17; // Супер-приближение для Кижей
        }
        return 15;
    }

    // Переход к точке маршрута: выделяем её в списке и на карте,
    // открываем описание. Вызывается по кнопке «Начать», по клику на
    // остановку в списке, маркер на карте и кнопки «Назад / Далее».
    function goToPlace(targetId) {
        const targetPlace = places.find(p => p.id === targetId);
        if (!targetPlace) {
            return;
        }

        try {
            selectPlace(targetPlace.id);
        } catch (e) {
            console.warn('Не удалось открыть точку:', e);
        }

        if (map) {
            try {
                map.setCenter(targetPlace.coordinates);
                map.setZoom(getZoomForPlace(targetPlace.id));
            } catch (e) {
                console.warn('Не удалось переместить карту:', e);
            }
        }
    }

    // Кнопки «Начать» (data-goto-place) активируют точку маршрута.
    // Навешиваются заново после восстановления вводной панели в showIntro
    function bindGotoButtons(scope) {
        scope.querySelectorAll('[data-goto-place]').forEach(button => {
            button.addEventListener('click', () => {
                goToPlace(Number(button.dataset.gotoPlace) || 1);
            });
        });
    }

    bindGotoButtons(document);

    // Длинные тексты (история, значение) делим на абзацы по пустой строке
    function renderParagraphs(text) {
        return String(text).split('\n\n').map(p => `<p>${p}</p>`).join('');
    }

    function showPlaceInfo(place) {
        const index = places.findIndex(p => p.id === place.id);
        const formattedIndex = String(index + 1).padStart(2, '0');
        const totalCount = String(places.length).padStart(2, '0');

        let extrasHtml = '';
        if (place.extras) {
            place.extras.forEach(extra => {
                if (extra.title) extrasHtml += `<h4>${extra.title}</h4>`;
                if (extra.text) extrasHtml += `<p>${extra.text}</p>`;
                if (extra.links) {
                    extra.links.forEach(link => {
                        if (link.url) {
                            // Ссылку можно хранить и с https://, и без него
                            const href = link.url.includes('://') ? link.url : `https://${link.url}`;
                            extrasHtml += `<p><a href="${href}" target="_blank">${link.linkText} ↗</a></p>`;
                        } else {
                            extrasHtml += `<p>${link.linkText}</p>`;
                        }
                    });
                }
            });
        }

        infoContainer.innerHTML = `
            <div class="map-info-content">
                <div class="sub-title">Остановка ${formattedIndex} / ${totalCount}</div>
                <h3>${place.title}</h3>
                <img src="${place.image}" alt="${place.title}">

                <h4>История места</h4>
                ${renderParagraphs(place.history)}

                <h4>Значение</h4>
                ${renderParagraphs(place.meaning)}

                ${extrasHtml}
            </div>

            <div class="map-nav-buttons">
                <button class="btn-nav btn-prev" id="prev-btn">${index === 0 ? '← В начало' : '← Назад'}</button>
                <button class="btn-nav btn-next" id="next-btn">Далее →</button>
            </div>
        `;

        document.getElementById('prev-btn').addEventListener('click', () => {
            if (index > 0) {
                goToPlace(places[index - 1].id);
            } else {
                // С первой остановки «Назад» уводит в состояние «Начало»
                showIntro();
            }
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            if (index < places.length - 1) {
                goToPlace(places[index + 1].id);
            } else {
                // После последней остановки показываем финальную карточку
                showFinalCard();
            }
        });
    }

    // Снимаем выделение со всего списка: края (Начало/Конец), остановки
    // и маркеры, возвращая маркерам исходный порядок слоёв
    function clearActive() {
        startItem.classList.remove('active');
        endItem.classList.remove('active');

        markers.forEach(m => {
            m.listItem.classList.remove('active');
            m.markerElement.classList.remove('active');

            if (m.marker) {
                m.marker.setZIndex(100 - m.id);
            }
        });
    }

    // Начало маршрута: вводная панель, карта в исходном виде всего маршрута
    function showIntro() {
        clearActive();
        startItem.classList.add('active');
        infoContainer.innerHTML = introHtml;
        bindGotoButtons(infoContainer);
        showAllPlaces();
    }

    // Финальная карточка: завершение маршрута после десятой остановки
    function showFinalCard() {
        clearActive();
        endItem.classList.add('active');
        infoContainer.innerHTML = `
            <div class="map-info-content">
                <div class="sub-title">Финал маршрута</div>
                <h3>Маршрут пройден!</h3>
                <img src="img/final.jpg" alt="Завершение маршрута" onerror="this.style.display='none'">

                <h4>Позади — десять остановок</h4>
                <p>Вот и подошло к концу наше путешествие по Карелии. За время маршрута мы побывали в исторических местах, познакомились с архитектурой и культурой края, узнали больше о Петре I и увидели красоту карельской природы.</p>

                <p>Каждая остановка открыла нам что-то новое и показала, насколько тесно здесь переплетаются прошлое и настоящее. Карелия — это не только красивые пейзажи, но и истории людей, памятники и традиции, которые бережно сохраняются на протяжении веков.</p>

                <p>Надеемся, что этот маршрут помог вам взглянуть на Карелию по-новому и захотеть однажды увидеть все эти места своими глазами!</p>
            </div>

            <div class="map-nav-buttons">
                <button class="btn-nav btn-prev" id="final-back-btn">← Назад</button>
                <button class="btn-nav btn-next" id="restart-btn">Начать заново →</button>
            </div>
        `;

        document.getElementById('final-back-btn').addEventListener('click', () => {
            goToPlace(places[places.length - 1].id);
        });

        document.getElementById('restart-btn').addEventListener('click', () => {
            showIntro();
        });
    }

    function selectPlace(id) {
        // Края списка (Начало/Конец) теряют выделение, когда выбрана остановка
        startItem.classList.remove('active');
        endItem.classList.remove('active');

        markers.forEach(m => {
            if (m.id === id) {
                m.listItem.classList.add('active');
                m.markerElement.classList.add('active');
            } else {
                m.listItem.classList.remove('active');
                m.markerElement.classList.remove('active');
            }

            // Активная точка всегда сверху; у остальных выше та,
            // у которой меньше номер остановки
            if (m.marker) {
                m.marker.setZIndex(m.id === id ? 9999 : 100 - m.id);
            }
        });

        const currentPlace = places.find(p => p.id === id);
        if (currentPlace) {
            showPlaceInfo(currentPlace);
        }

        // На мобильных выбор остановки закрывает выезжающее меню,
        // чтобы было видно карту и описание
        if (isMobileMenu()) {
            closeStopsMenu();
        }
    }

    // Края списка: «Начало» открывает вводную панель, «Конец» — финальную карточку
    const startItem = document.createElement('div');
    startItem.className = 'map-item map-item--edge';
    startItem.innerHTML = `<span>—</span> Начало`;

    startItem.addEventListener('click', () => {
        showIntro();

        if (isMobileMenu()) {
            closeStopsMenu();
        }
    });
    // При открытии сайта показывается вводная панель — «Начало» выделено
    startItem.classList.add('active');
    listContainer.appendChild(startItem);

    places.forEach((place, index) => {
        const numberStr = String(index + 1).padStart(2, '0');
        allCoordinates.push(place.coordinates);

        const item = document.createElement('div');
        item.className = 'map-item';
        item.innerHTML = `<span>${numberStr}</span> ${place.title}`;

        item.addEventListener('click', () => {
            goToPlace(place.id);
        });
        listContainer.appendChild(item);

        if (map) {
            try {
                const markerHtml = document.createElement('div');
                markerHtml.className = 'custom-marker';
                markerHtml.textContent = index + 1;

                // Слои маркеров задаём средствами библиотеки:
                // чем меньше номер остановки, тем выше маркер
                // при отдалении карты
                const marker = new mapgl.HtmlMarker(map, {
                    coordinates: place.coordinates,
                    html: markerHtml,
                    zIndex: 100 - place.id,
                });

                markerHtml.addEventListener('click', () => {
                    goToPlace(place.id);
                });

                markers.push({
                    id: place.id,
                    marker,
                    listItem: item,
                    markerElement: markerHtml
                });
            } catch (e) {
                console.warn('Не удалось создать маркер для точки:', place.title, e);
            }
        }
    });

    const endItem = document.createElement('div');
    endItem.className = 'map-item map-item--edge';
    endItem.innerHTML = `<span>—</span> Конец`;

    endItem.addEventListener('click', () => {
        showFinalCard();

        if (isMobileMenu()) {
            closeStopsMenu();
        }
    });
    listContainer.appendChild(endItem);

    // Исходный вид карты: центр маршрута и зум 8, как при её создании
    // (setViewport работает нестабильно, поэтому центрируем вручную)
    function showAllPlaces() {
        if (!map || allCoordinates.length === 0) {
            return;
        }

        const lons = allCoordinates.map(c => c[0]);
        const lats = allCoordinates.map(c => c[1]);

        const centerLon = (Math.min(...lons) + Math.max(...lons)) / 2;
        const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;

        try {
            map.setCenter([centerLon, centerLat]);
            map.setZoom(8);
        } catch (e) {
            console.warn('Не удалось привести карту к исходному виду:', e);
        }
    }

    showAllPlaces();
});
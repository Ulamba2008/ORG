// Массив точек маршрута с выверенными координатами
// (защита от старта с картой — в <head> index.html)
const places = [
  {
    id: 1,
    title: "Памятник Петру Великому",
    coordinates: [34.38975, 61.79062],
    history: "Отправная точка города Петрозаводска. Открыт в 1873 году, бронзовая статуя высотой 2,9 метра, серый гранитный постамент высотой 3,4 метра. На постаменте первоначальная надпись «Петру Великому, основателю Петрозаводска». В 1918 году советская власть приказала снести памятник, жители спрятали статую под мусором и досками, в 1940 году восстановили, в 1978 году перенесли на берег Онежского озера.",
    meaning: "Тот, кто заложил город",
    image: "img/place-01.jpg",
    extras: [{ links: [{ linkText: "Источники", url: "" }] }]
  },
  {
    id: 2,
    title: "Онежская набережная",
    coordinates: [34.38320, 61.79130],
    history: "Открытая скульптурная галерея вдоль озера. Центральный экспонат «Онего» — бронзовая лодка с молодым воином, символизирующая рождение Петрозаводска как «северного форпоста России». «Дерево желаний» — дар Швеции, в дупле спрятано ухо, по легенде нужно прошептать желание и позвенеть медным колокольчиком на ветвях. Здесь также лучшая смотровая площадка на второе по величине озеро Европы.",
    meaning: "Город лицом к воде",
    image: "img/place-02.jpg",
    extras: [{ links: [{ linkText: "Источники", url: "" }] }]
  },
  {
    id: 3,
    title: "Александро-Невский кафедральный собор",
    coordinates: [34.37995, 61.78118],
    history: "Построен в 1825–1831 годах, классицистический каменный храм. Изначально был приходской церковью Александровского пушечного завода, средства собраны рабочими и чиновниками путём «выкупа грехов» из жалованья. В 1930-х годах превращен в краеведческий музей, в 1991 году возвращен церкви, в 2000 году патриарх Алексий II совершил великое освящение, ныне кафедральный собор Карельской митрополии.",
    meaning: "Духовное сердце города",
    image: "img/place-03.jpg",
    extras: [{ links: [{ linkText: "Источники", url: "" }] }]
  },
  {
    id: 4,
    title: "Национальный музей Республики Карелия",
    coordinates: [34.36369, 61.78708],
    history: "Основан в 1871 году, один из старейших музеев Северо-Запада России. Коллекция превышает 200 тысяч экспонатов, охватывает материальную и духовную культуру карелов, вепсов, русских.",
    meaning: "Хранилище памяти города",
    image: "img/place-04.jpg",
    extras: [{ links: [{ linkText: "Источники", url: "" }, { linkText: "Билеты", url: "kareliamuseum.ru" }] }]
  },
  {
    id: 5,
    title: "Церковь Преображения Господня",
    coordinates: [35.22355, 62.06779], // Главный храм погоста (северная часть)
    history: "Духовная вершина всего маршрута. Построена в 1714 году, высота 37 метров, 22 купола, чистая деревянная срубная конструкция, железные гвозди использованы только для чешуйчатого покрытия куполов из осины.",
    meaning: "Главная вертикаль острова",
    image: "img/place-05.jpg",
    extras: [
      { links: [{ linkText: "Источники", url: "" }] },
      {
        title: "Как добраться",
        text: "Сам остров является музеем заповедником. Билет стоит от 1200 до 2200 руб. Также до острова нужно добираться по воде. Билет на скоростной теплоход около 5000 туда и обратно.",
        links: [{ linkText: "Купить билеты в заповедник", url: "" }]
      }
    ]
  },
  {
    id: 6,
    title: "Церковь Покрова Пресвятой Богородицы",
    coordinates: [35.22340, 62.06735], // Точно на здании зимней церкви (южная часть)
    history: "Построена в 1764 году, девятиглавая «зимняя церковь», образует с Преображенской церковью единственную в России композицию «многоглавие над многоглавием».",
    meaning: "Гармония и равновесие ансамбля",
    image: "img/place-06.jpg",
    extras: [{ links: [{ linkText: "Источники", url: "" }] }]
  },
  {
    id: 7,
    title: "Колокольня и ограда",
    coordinates: [35.22290, 62.06755], // Точно на колокольне (западная часть комплекса)
    history: "Архитектурный элемент ансамбля Кижского погоста, создающий единое защитное и духовное пространство.",
    image: "img/place-07.jpg",
    meaning: "Граница, объединяющая пространство",
    extras: [{ links: [{ linkText: "Источники", url: "" }] }]
  },
  {
    id: 8,
    title: "Марциальные Воды",
    coordinates: [33.90288, 62.15529],
    history: "В 1719 году Пётр Великий указом основал здесь первый в истории России официальный санаторий, на целое столетие раньше кавказских минеральных вод.",
    image: "img/place-08.jpg",
    meaning: "Место, где история обрела здоровье",
    extras: [{ links: [{ linkText: "Источники", url: "" }] }]
  },
  {
    id: 9,
    title: "Водопад Кивач",
    coordinates: [33.97800, 62.29200],
    history: "Трехступенчатый водопад на реке Суна, общая высота падения 10,7 метра, второй по величине равнинный водопад Европы.",
    image: "img/place-09.jpg",
    meaning: "Сила природы Карелии",
    extras: [{ links: [{ linkText: "Источники", url: "" }] }]
  },
  {
    id: 10,
    title: "Поселок Шуя",
    coordinates: [34.33850, 61.88900],
    history: "Дорога, соединяющая Петрозаводск с Кижами и Марциальными Водами, проходит через традиционную деревню Шуя.",
    image: "img/place-10.jpg",
    meaning: "Истоки и живая память края",
    extras: [{ links: [{ linkText: "Источники", url: "" }] }]
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const listContainer = document.getElementById('map-list');
    const infoContainer = document.getElementById('info');

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
            key: '1c5a2885-4b34-404d-afae-5513c7af4f08' // Замените на ваш рабочий ключ
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

    // Кнопка «Начать» (и любые элементы с data-goto-place):
    // активирует нужную точку маршрута
    document.querySelectorAll('[data-goto-place]').forEach(button => {
        button.addEventListener('click', () => {
            goToPlace(Number(button.dataset.gotoPlace) || 1);
        });
    });

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
                            extrasHtml += `<p><a href="https://${link.url}" target="_blank">${link.linkText} ↗</a></p>`;
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
                <p>${place.history}</p>

                <h4>Значение</h4>
                <p>${place.meaning}</p>

                ${extrasHtml}
            </div>

            <div class="map-nav-buttons">
                <button class="btn-nav btn-prev" id="prev-btn" ${index === 0 ? 'disabled' : ''}>← Назад</button>
                <button class="btn-nav btn-next" id="next-btn">Далее →</button>
            </div>
        `;

        document.getElementById('prev-btn').addEventListener('click', () => {
            if (index > 0) {
                goToPlace(places[index - 1].id);
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

    // Финальная карточка: завершение маршрута после десятой остановки
    function showFinalCard() {
        infoContainer.innerHTML = `
            <div class="map-info-content">
                <div class="sub-title">Финал маршрута</div>
                <h3>Маршрут пройден!</h3>
                <img src="img/final.jpg" alt="Завершение маршрута" onerror="this.style.display='none'">

                <h4>Позади — десять остановок</h4>
                <p>Вы прошли маршрут от памятника Петру Великому на берегу Онежского озера до посёлка Шуя: набережная Онего, кафедральный собор, старейший музей Севера, храмы Кижского погоста, Марциальные Воды — первый курорт России — и водопад Кивач. Места на этом маршруте свела одна история: след Петра Великого на карельской земле.</p>

                <h4>Что дальше</h4>
                <p>Маршрут удобно пройти неспешно и не за один день. Посмотрите на город глазами его основателя, подойдите к воде и вернитесь в другой сезон — Карелия каждый раз другая. Хорошей дороги!</p>
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
            goToPlace(1);
        });
    }

    function selectPlace(id) {
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

    if (map && allCoordinates.length > 0) {
        const lons = allCoordinates.map(c => c[0]);
        const lats = allCoordinates.map(c => c[1]);

        try {
            map.setViewport([
                [Math.min(...lons) - 0.05, Math.min(...lats) - 0.05],
                [Math.max(...lons) + 0.05, Math.max(...lats) + 0.05]
            ]);
        } catch (e) {
            console.warn('Не удалось показать весь маршрут на карте:', e);
        }
    }
});
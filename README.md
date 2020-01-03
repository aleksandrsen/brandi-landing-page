<h1>Brandi</h1>
<h4>Используемые в проекте технологии</h4>

Библиотека JavaScript - jQuery, Bootstrap.
<h4>Плагины</h4>

    slick-carousel - карусель;
    slick-nav - мобильное меню;
    parallax - паралакс;
    
<h4>Скрипти</h4>

    scroll-to - перемещение к разделам страницы;
    header-scroll - перемещение к началу страницы;
    facts-counter - счетчик в секции facts
    
<h4>Шрифты и иконки</h4>

Иконки 

    Font-Awesome - иконочный шрифт;

Шрифты:

    Pacifico: 400;
    Open Sans: 300,400,600i,700,800;

<h4>Стандартные компоненты и классы</h4>
<hr>
<h5>Компоненты</h5>
1. Секции:

    .default-section - стандартная секция;

2.Контейнери:

    .container - удержание ширини контента страницы;
    .container-fluid - для блоков занимающих всю ширину страницы;
    
3.Стилизируем заголовки:
    
    .section-title


4.Стилизируем стандартную текстовую информацию:

    .default-text
    
5.Стандартные иконки:

    .section-heart
    

<hr>
<h3>Основные контрольные точки media-запросов</h3>

    @media (max-width: 1200px) - устройства c разрешением до 1200px;
    @media (max-width: 992px) - устройства c разрешением до 992px;
    @media (max-width: 768px) - устройства c разрешением до 768px;
    @media (max-width: 577px) - мобильные устройства c разрешением до 577px;
    @media (max-width: 479px) - мобильные устройства c разрешением до 479px;
    @media (max-width: 320px) - мобильные устройства c разрешением до 320px;
<hr>

    
<h3>Структура папок</h3>

Название файла                | Содержание файла
------------------------------|----------------------
dist                          | Директория с готовым проектом 
dist/css                      | Готовые стили к продакшену
dist/img                      | Готовые изображения к продакшену
dist/js                       | Готовые скрипти к продакшену 
dist/favicon.ico              | Иконка сайта 
dist/index.html               | Индексный файл для продакшена
src/sass/slick.css            | Стили карусели 
src/sass/_mixins.scss         | Примеси sass
src/sass/reset.css            | Сброс стилей
src/sass/slicknav.css         | Стили мобильного меню
src/sass/style.scss           | Стили scss
src/css/style.css             | Основные стили, применительно к сайту
src/js/parallax.min.js        | Скрипт паралакс 
src/js/init.js                | Инициализация плагинов
src/js/jquery.slicknav.min.js | Скрипт мобильного меню
src/js/scroll-to.js           | Скрипт для перемещения к разделам страници
src/js/facts-counter.js       | Скрипт счетчика
src/js/slick.min.js           | Скрипт карусели
index.html                    | Индексный файл для проверки вносимых изменений
gulpfile.js                   | Файл gulp для сборки проекта

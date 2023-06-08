# Сайт с рецептами

Это учебный веб-проект сайта с рецептами. 

[Ссылка на макет сайта](https://www.figma.com/file/DocOaT7B1VhlVWvysU3Zir/%D0%A0%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D1%8B?type=design&node-id=0%3A1&t=bUM68IE1AKJSvWuX-1)

# Инструменты

Перечисление инструментов использованных в процессе разработки:

* **Front-end** - В качестве основного фреймворка используется React. Для управления состояниями применяется Redux.
* **Back-end** - Python является основным языком для всех сервисов. Фреймворком выбран Fast api. В качаестве ORM для СУБД используется Pymongo.
* **Data** - Все данные хранятся с применением MongoDB. 

# Зависимости

Для запуска проекта требуются следующие компоненты:

### Клиент

* [Node 16 or greater](https://nodejs.org/en/download/)
* [React](https://react.dev/learn/add-react-to-an-existing-project)
* [Scss](https://www.npmjs.com/package/sass)

### Сервер
* [Python 3.7 or greater](https://realpython.com/installing-python/)
* [Fast api](https://fastapi.tiangolo.com/)
* [Pydantic](https://docs.pydantic.dev/latest/)

# Запуск

## Клиентская часть

`npm install`

Для установки всех зависимостей нужных для работы клиентской стороны сервера.


`npm start`

Запускает приложение в режиме разработки.\
Для просмотра необходимо открыть [http://localhost:3000](http://localhost:3000) в браузере.

Страница будет обновляться автоматически при внесении изменений.\
Кроме того в консоли будут отображаться lint ошибки.

## Серверная часть

`flask db migrate`

Команда для создания миграции

`flask db upgrade`

Команда для применения миграций и создания таблиц


`flask --app app run`

Запускает очень встроенный сервер на локальном хостинге. \
Для доступа необходимо перейти по адресу [http://127.0.0.1:5000/](http://127.0.0.1:5000/)

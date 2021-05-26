## Работа с проектом

Данный шаблон содержит уже готовую и настроенную сборку(используется [Create React App](https://github.com/facebook/create-react-app))

Проект управляет при помощи npm scripts, которые можно вызвать в консоли в папке проекта.

## Список npm scripts

### `npm start`

Запускает приложение в режиме разработки<br>
Откройте [http://localhost:3000](http://localhost:3000) чтобы увидеть ваше приложение в браузере.

Страница будет перезагружаться, если вы изменяете код<br>

### `npm run build`

Собирает приложение в продакшн режиме `build` folder.<br>
В продакшн режиме приложение оптимизировано для производительности, но при этом его код минифицирован и его сложнее отлаживать и разрабатывать.

В таком виде приложение готово к деплою на продакшен сервер - [подробнее](https://facebook.github.io/create-react-app/docs/deployment), [решение проблем при сборке](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Структура проекта

При открытии [http://localhost:3000](http://localhost:3000) в браузере подгружается файл public/index.html

Внутри этого файла вы можете подключать любые js, css и другие файлы. Для этого сами файлы необходимо разместить в папке public и перед путем подключаемого файла использовать переменную %PUBLIC_URL%:

```html
<link href="%PUBLIC_URL%/index.css" rel="stylesheet" />
```

В папке `src` лежит react код который собирается и неявно подключается к странице - его не надо явно подключать. Входной точкой является файл `src/index.js` и в нем должно быть размещена инициализаци React приложения. Все файлы которые будут импортироватся в этом файле также должны быть расположены в `src`.

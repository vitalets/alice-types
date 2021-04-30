# alice-types

Тайпинги для [протокола запросов/ответов](https://yandex.ru/dev/dialogs/alice/doc/protocol.html) в навыках Алисы.

## Установка
```
npm i -D alice-types
```

## Использование
```ts
import { ReqBody, ResBody } from 'alice-types';

function handler(reqBody: ReqBody): ResBody {
  ...
}
```
## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)

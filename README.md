### Hexlet tests and linter status:

[![Actions Status](https://github.com/sodafianya/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/sodafianya/frontend-project-46/actions)

Проект: Вычислитель отличий

Установка:
```bash
npm install -g @hexlet/code
```

Базовый синтаксис:
```bash
gendiff [options] <filepath1> <filepath2>
```
Опции:
-V, --version	Вывести версию
-f, --format <type>	Формат вывода (stylish, plain, json)
-h, --help	Показать справку


Форматы вывода:
1. Stylish (по умолчанию):

```bash
gendiff file1.json file2.json
```

```text
{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
    }
}
```

2. Plain

```bash
gendiff file1.json file2.json --format plain
```

```text
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
```

2. JSON

```bash
gendiff file1.json file2.json --format json
```

```text
[
  {
    "key": "common",
    "type": "nested",
    "children": [
      {
        "key": "follow",
        "type": "added",
        "value": false
      }
    ]
  }
]
```

Примеры работ:

Сравнение плоских файлов:
```bash
gendiff __fixtures__/file1.json __fixtures__/file2.json
```

Рекурсивное сравнение:
```bash
gendiff __fixtures__/nested1.yml __fixtures__/nested2.yml
```

Разработка:

Установка зависимостей:
```bash
npm install
```

Запуск тестов:
```bash
npm test
```

Провка стиля кода:
```bash
npm run lint
```

Покрытие кода:
```bash
npm run coverage
```

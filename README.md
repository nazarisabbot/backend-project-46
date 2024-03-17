### Hexlet tests and linter status:
[![Actions Status](https://github.com/nazarisabbot/backend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/nazarisabbot/backend-project-46/actions)

[![BACKEND-PROJECT-46](https://github.com/nazarisabbot/backend-project-46/actions/workflows/custom-check.yml/badge.svg)](https://github.com/nazarisabbot/backend-project-46/actions/workflows/custom-check.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/7cd1ff445ff167bf7f6b/maintainability)](https://codeclimate.com/github/nazarisabbot/backend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/7cd1ff445ff167bf7f6b/test_coverage)](https://codeclimate.com/github/nazarisabbot/backend-project-46/test_coverage)

# Вычислитель отличий
*Данный проект - это инструментарий для сравнения структур данных и отображения различий между ними.
Это может быть особенно полезно для отслеживания и анализа изменений в данных, состояниях системы и т.д.*

## Установка и использование
Следуйте нижеуказанным шагам:

1. Клонируйте репозиторий
*git clone <URL-репозитория-проекта*

2. Перейдите в папку проекта
*cd <путь к проекту>*

3. Установите зависимости
*npm install*

4. Свяжите утилиту, чтобы вы могли использовать ее в командной строке и из любого места вашей файловой системы.
*npm link*

### Базовый вызов
*node ./bin/gendiff --format (plain, json. формат stylish можно не указывать, так как он установлен по умолчанию) ./path/file1.json ./path/file2.json*

### Тестирование
*make test*

*Иллюстрация обработки плоской структуры*
[![asciicast](https://asciinema.org/a/JxdWXcr6pTa91Zu4lBpQS1W0T.svg)](  https://asciinema.org/a/JxdWXcr6pTa91Zu4lBpQS1W0T)

*Иллюстрация обработки плоской yml структуры*
[![asciicast](https://asciinema.org/a/YmB05DQXqlbZydtSO0cn4nvDd.svg)]( https://asciinema.org/a/YmB05DQXqlbZydtSO0cn4nvDd)

*Иллюстрация обработки структуры с вложенностью*
[![asciicast](https://asciinema.org/a/dm8BMsMzDetk5hqrudozfbAoH.svg)]( https://asciinema.org/a/dm8BMsMzDetk5hqrudozfbAoH
)

*Иллюстрация форматирования "plain"*
[![asciicast](https://asciinema.org/a/RTFhopDw7tMMCJYk3JLt3mohi.svg)]( https://asciinema.org/a/RTFhopDw7tMMCJYk3JLt3mohi
)

*Иллюстрация форматирования "json"*
[![asciicast](https://asciinema.org/a/YAPmK23NEKPMK8NPAj5fGDB2V.svg)](  https://asciinema.org/a/YAPmK23NEKPMK8NPAj5fGDB2V
)




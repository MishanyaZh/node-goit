# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/fBChZ1ppnqLBdGaZ1PPiDLrMSTe86w

# Получаем контакт по id

node index.js --action get --id 5
https://monosnap.com/file/DOUWuOIf3Kdkwl2XIldvVrK0xS3cej

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/tLXZH9QdHkscqnSy67qWKeXXMVxsoY

# Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/YOI2IvmHDeQeenXE9qesxTG8p6P9Dr

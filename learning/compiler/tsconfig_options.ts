// > tsc file_name1.ts file_name2.ts

// Опции в tsconfig.json после compilerOptions
const tsconfig = {
    "compilerOptions": {
        "allowJs": true,
        "checkJs": true, // эти 2 опции нужны в проекте, которые еще частично использует js

        "outDir": "./build/", // Указывает в какой директории будут создаваться js файлы, структура директорий при этом сохраняется
        "removeComments": true, // Удаляет в сгенерированных файлах комментарии
        "noEmitOnError": true, // Ничего не собирать, если возникла ошибка в run time
        "sourceMap": true, // генерирует файлы .js.map для определения связи js ts файлов
        "inlineSourceMap": true, // не создает map файл, а пишет комментарий в конец js файла

        // Модульность
        "module": "commonjs", // подход к организации - export, require. commonjs часто используется для backend, для frontend - es6
        "rootdir": './src/'
    },
    "files": ["file1.ts", "file2.ts"], // трудозатратно все указывать
    "include": [
        "app*", // все файлы, у которых название начинается с app
        "/my_folder/**/" //все директории в my_folder
    ],
    "exclude": [] // исключение из компиляции
};



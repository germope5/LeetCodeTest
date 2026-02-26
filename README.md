# LeetCode Practice Repository

![License](https://img.shields.io/badge/license-MIT-blue.svg) 

## 📘 Descripción

Colección organizada de soluciones a problemas de tipo LeetCode nivel **Medium**, pensada para la preparación en entrevistas técnicas. Cada ejercicio incluye:

1. Una implementación inicial con explicación y análisis.
2. Una versión optimizada (en complejidad o estilo) acompañada de pruebas.

Los problemas recorren categorías típicas de entrevistas: arreglos, cadenas, listas enlazadas, árboles, búsquedas, programación dinámica, grafos, etc.

## 📂 Estructura del repositorio

```
leetcode-practice/
├── README.md
├── .gitignore
├── package.json
├── tsconfig.json
├── .prettierrc
├── .eslintrc.json
│
├── 01-arrays-strings/
│   ├── 001-two-sum/
│   └── 002-group-anagrams/ (ejemplo real)
│
├── 02-linked-lists/
│   ├── 019-remove-nth-node-from-end/
│   └── ...
│
├── 03-trees/
│   ├── 102-binary-tree-level-order/
│   └── ...
│
├── 04-binary-search/
│   └── 033-search-rotated-sorted-array/
│
├── 05-dynamic-programming/
│   └── 062-unique-paths/
│
├── 06-backtracking/
│   └── 046-permutations/
│
├── 07-graphs/
│   └── 200-number-of-islands/
│
├── 08-stacks-queues/
│   └── 155-min-stack/
│
├── 09-heap/
│   └── 347-top-k-frequent/
│
├── 10-sliding-window/
│   └── 003-longest-substring/
│
└── templates/
    ├── README-template.md
    ├── solution-template.js
    └── test-template.js
```

## 📋 Tabla de contenidos

1. **01 - Arrays & Strings**
   - [001 Two Sum](01-arrays-strings/001-two-sum/)
   - [002 Group Anagrams](01-arrays-strings/001-group-anagrams/)
2. **02 - Linked Lists**
   - [019 Remove Nth Node From End](02-linked-lists/019-remove-nth-node-from-end/)
3. **03 - Trees**
   - [102 Binary Tree Level Order Traversal](03-trees/102-binary-tree-level-order/)
4. **04 - Binary Search**
   - [033 Search in Rotated Sorted Array](04-binary-search/033-search-rotated-sorted-array/)
5. **05 - Dynamic Programming**
   - [062 Unique Paths](05-dynamic-programming/062-unique-paths/)
6. **06 - Backtracking**
   - [046 Permutations](06-backtracking/046-permutations/)
7. **07 - Graphs**
   - [200 Number of Islands](07-graphs/200-number-of-islands/)
8. **08 - Stacks & Queues**
   - [155 Min Stack](08-stacks-queues/155-min-stack/)
9. **09 - Heap**
   - [347 Top K Frequent Elements](09-heap/347-top-k-frequent/)
10. **10 - Sliding Window**
    - [003 Longest Substring Without Repeating Characters](10-sliding-window/003-longest-substring/)

## 🚀 Uso

1. Instala dependencias (para formateo/linter/TypeScript):
   ```bash
   npm install
   ```
2. Navega al problema deseado y revisa los archivos.
3. Ejecuta pruebas unitarias con:
   ```bash
   npm run test
   ```
4. Formatea y lint el proyecto con:
   ```bash
   npm run format
   npm run lint
   ```

> Cada subcarpeta contiene al menos un archivo `test.js` que exporta casos básicos.

## 🤝 Contribución

Sigue estos pasos al agregar un nuevo problema:

1. Crea una carpeta dentro de la categoría correspondiente (ej. `01-arrays-strings/003-some-problem/`).
2. Usa los archivos en `templates/` como punto de partida para `README.md`, `solution-*.js` y `test.js`.
3. Asegúrate de incluir:
   - Análisis y explicación en el README.
   - Una solución inicial y otra optimizada (cuando aplique).
   - Pruebas de ejemplos y casos borde.
   - Actualiza esta tabla de contenidos con el nuevo enlace.
4. Envía un pull request con tu cambio; revisaremos la claridad y calidad del código.

---

📌 **Nota:** El propósito es mantener un repositorio didáctico y ordenado que sirva tanto de repaso como de referencia durante entrevistas técnicas.


# Medal Count Mini App

A React + TypeScript mini app to display Olympic medal counts by country. 

---

## Features

- Displays top 10 countries by medals
- Sortable by `gold`, `silver`, `bronze`, or `total` via:
  - URL param: `?sort=gold`
  - Clickable column headers
- Tiebreaker rules implemented (e.g., gold > silver > bronze)
- Uses a flag sprite image (`flags.png`)
- Data fetched via AJAX from `medals.json`
- Error handling on fetch failure
- Fully typed with TypeScript
- Code formatted, linted, and pre-commit hooks included

## Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- ESLint + Prettier for code quality
- Husky for Git hooks (format & lint on commit)
- No backend or SSR — purely client-side app
- TailwindCSS for styling

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

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

---

## Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [TailwindCSS](https://tailwindcss.com/)
- ESLint + Prettier for code quality
- Husky for Git hooks (format & lint on commit)
- No backend or SSR — purely client-side app

---

## Getting Started

```bash
git clone https://github.com/Madhuri-Jain/medal-count.git
npm install
npm run dev
```

---

## Folder Structure

- **`pages`** — Contains page-level components to organize the app by route or view.
- **`components`** — Houses reusable UI components used across different pages.
- **`hooks`** — Contains custom React hooks, including API call logic to separate concerns and promote reusability.
- **`utils`** — Utility functions supporting various parts of the app, such as sorting or formatting.
- **`types`** — Includes an `index.ts` file that holds shared TypeScript interfaces and type definitions. Since this is a small app, all types are defined here; for larger projects, I would split types by feature or component for better maintainability.
- **`Static asset`** — Static assets like the flag image and the `medal.json` API response are placed in the `public` folder (e.g., `public/flags.png` and `public/api/medal.json`). This ensures they are served as static resources accessible to the frontend without needing additional server handling, which simplifies deployment and improves performance.

**Security note:** Since assets in `public` are publicly accessible, any sensitive information should be avoided here. For real-world applications, secure API endpoints or authentication mechanisms should be used to protect private data.

---

## Branching Strategy

1. **`main` branch**  
   The primary branch with the main origin.

2. **`setup/vite-react-ts` branch**  
   Created from `main`, this branch contains the initial repository setup, including the Vite React TypeScript boilerplate and configuration of tools like ESLint, Prettier, and Husky.

3. **`feature/medal-count-display` branch**  
   Branched off from `setup/vite-react-ts`, this branch focuses on feature development related to displaying the medal count.

---

### Pull Requests

- [PR #1: Initial Setup and Tooling](https://github.com/Madhuri-Jain/medal-count/pull/1)
- [PR #2: Feature Implementation](https://github.com/Madhuri-Jain/medal-count/pull/2)

Commits and messages were made step-by-step to facilitate easy and clear review.

- To see the final results, checkout the branch feature/medal-count-display, pull the latest changes, and run the project.

```
git checkout feature/medal-count-display
# then run your usual start command, e.g.
npm install
npm run dev
```

---

## Important Tradeoffs

### Vite for speed

- I chose Vite to maximize development speed and minimize configuration overhead. Since the app is fully client-side and doesn’t require server-side rendering (SSR) or advanced image optimization, Vite was the fastest path to productivity. If SSR or performance-critical image handling becomes necessary, migration to Next.js would be straightforward.

### Tailwind for rapid UI

- I used Tailwind CSS to streamline styling with utility classes. It provides a clean, modern baseline with sensible defaults — removing the need for resets or boilerplate CSS, and letting me build responsive layouts quickly.

### Code quality tooling

- Integrated ESLint, Prettier, and Husky to enforce consistent formatting and catch issues early via pre-commit hooks. This setup supports fast, clean, and reliable development workflows.

### Fixed Flag Height for Consistent Layout

- A default height of 17px was used for flag images to ensure consistent alignment within the table rows. This design choice helped maintain a clean, compact layout and prevented the flags from disrupting the visual flow of the content.This tradeoff prioritized clean table layout over full-size flag accuracy. If needed, a scalable approach using inline SVGs or separate images could be introduced later.

---

## Enhancements beyond given requirement

### Sorting Indicator Subheading

- A subheading is displayed above the table to clearly show which medal type the data is currently sorted by. This helps users understand the current sort context at a glance.

### Additional layer of tie-breaking logic in the sorting

- I have also implemented an additional layer of tie-breaking logic in the sorting.
  For example, when sorting by bronze medals, gold is used as the first tie breaker.

If both bronze and gold counts are the same between countries, I added a further tie breaker based on the total medal count to resolve the tie.

This ensures consistent and deterministic ranking even in edge cases.

### Light & Dark Mode

-The app now supports both light and dark themes using Tailwind's dark mode class. It automatically respects the user's system preference, with smooth UI transitions between themes for better accessibility and user comfort.

---

## Future Improvements

#### 1. Add Unit Tests with Vitest

I planned to write unit test cases for core logic (e.g., sorting, utility functions) using Vitest. This would improve code reliability and allow for safe future refactoring.

#### 2.Define a Centralized Color Palette

Rather than hardcoding Tailwind color classes in components, I intended to define a structured color palette (possibly using CSS variables or Tailwind theme extensions). This would enhance consistency and scalability when working with styles, especially if the UI needs to support dark/light modes or theming in the future.

#### 3.Add Tooltips for Medal Headers

I wanted to add tooltips to the medal-colored headers in the table. On hover, these would clearly indicate which medal type (Gold, Silver, or Bronze) the column represents. This would improve accessibility and usability, especially for color-blind users.

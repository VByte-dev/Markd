# Markd

A visual, context-driven bookmarking system that solves the "save and forget" loop of traditional browser bookmarks. 

## 🚀 Key Philosophy

Browser bookmarks save only a URL and a page title, losing context and intent. Six months later, you can't remember why you saved a link, and flat list views with blue links make fast scanning cognitively taxing.

**Markd solves this by:**
1. **Forcing Intent**: Requiring a one-line personal note upon saving.
2. **Visual Hierarchy**: Replacing text lists with scannable, visual card grids.
3. **Flat Taxonomy**: Using clickable tags instead of deep, high-maintenance folder structures.
4. **Behavioral Discovery**: Tracking visit metrics to highlight active bookmarks and flag the unused "graveyard."

---

## 📂 Architecture & Directory Structure

To support extreme scalability from local storage to a cloud-synced backend, this project is built using a **Feature-Driven (or Module-Based) Architecture**.

For full details on how components, state machines, and services are organized, please refer to:
👉 **[Professional Folder Structure Design](./public/plan/FolderStructure.md)**

### Brief Core Directory Map:
- `src/components/ui/` - Domain-agnostic reusable design system atoms (Buttons, Inputs, Modals).
- `src/services/` - Global clients (robust local storage engine, logging).
- `src/hooks/` - Global utility hooks (storage state sync, debounce).
- `src/features/bookmarks/` - The core business domain module (components, query filters, useBookmarks hooks, and public exports).

---

## 📋 Planning & Specifications

- **MVP Definition**: For a full list of user stories, problems, solutions, and internal data flow schemas, view the [Markd MVP Specifications](./public/plan/Markd(MVP%20version).md).
- **Architecture Design**: Detailed breakdown of components and implementation skeletons in the [Folder Structure Design](./public/plan/FolderStructure.md).

---

## 🛠️ Tech Stack & Scripts

- **Runtime/Bundler**: React 19 + Vite 8 (Fast HMR)
- **Styling**: Tailwind CSS v4 (Modern CSS-first utility classes)
- **Database**: LocalStorage-backed reactive browser storage (MVP)

### Available Commands:
- `npm run dev`: Starts the local development server.
- `npm run build`: Compiles optimized assets for deployment.
- `npm run lint`: Performs ESLint check across files.

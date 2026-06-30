# Markd

> **Context-driven knowledge bookmarking.**

Markd is a context-driven knowledge bookmarking application built to solve the "save and forget" problem. Unlike traditional bookmark managers that store links and titles, Markd preserves the intent behind every saved resource, turning bookmarks into searchable, reusable knowledge. By combining contextual notes, lightweight tagging, unified search, and usage tracking, it helps users build a knowledge base that becomes easier to rediscover, manage, and learn from over time.

<p align="center">
  <a href="https://markdhq.vercel.app"><strong>Live Demo</strong></a>
</p>

---

## Preview

<p align="center">
  <img src="./public/preview.gif" alt="Markd application preview" width="900">
</p>

---

## Overview

Browser bookmarks are designed to save links.

Markd is designed to preserve knowledge.

Traditional bookmarking systems store a URL and page title, but rarely the reason the resource was worth saving. As collections grow, users remember *why* they saved something rather than the website itself.

Markd addresses this by treating every bookmark as a knowledge object that combines a resource with personal context, making retrieval faster, organization simpler, and collections easier to maintain.

---

## Core Capabilities

### Contextual Bookmarking

Each bookmark stores structured metadata alongside the resource.

* URL
* Title
* Personal note
* Tag
* Visit count
* Creation timestamp

Capturing intent ensures resources remain meaningful long after they are saved.

---

### Contextual Search

Search operates across multiple fields simultaneously.

* Title
* URL
* Personal notes

Users can retrieve resources using remembered context rather than exact page titles or domains.

---

### Lightweight Organization

Flat tags replace nested folder hierarchies, reducing organizational overhead while keeping resources easy to categorize and refine.

---

### Usage Tracking

Visit counts are updated automatically whenever a bookmark is opened, providing a simple signal for distinguishing frequently referenced resources from forgotten ones.

---

### Local-first Persistence

All data is stored using the browser's LocalStorage API.

The application requires:

* No authentication
* No backend
* No database configuration

Bookmarks remain immediately available with zero setup.

---

## Technical Highlights

* Component-based React architecture
* Reusable UI composition
* Real-time search and filtering
* Responsive card-based interface
* Local-first persistence
* Single-source application state
* Zero backend dependencies

---

## Architecture

```text
                         User
                           │
                           ▼
                  React Components
                           │
                           ▼
                  Application State
                           │
         ┌─────────────────┴─────────────────┐
         ▼                                   ▼
  Search Engine                     Refine Engine
         │                                   │
         └─────────────────┬─────────────────┘
                           ▼
                  Bookmark Collection
                           │
                           ▼
                     LocalStorage
```

---

## Technology

| Technology        | Purpose                 |
| ----------------- | ----------------------- |
| React             | User Interface          |
| JavaScript (ES6+) | Application Logic       |
| Tailwind CSS      | Utility-first Styling   |
| Vite              | Development Environment |
| LocalStorage API  | Client-side Persistence |

---

## Project Structure

```text
src/
├── components/
│   ├── AddBookmark.jsx
│   ├── BookmarkCard.jsx
│   ├── BookmarkGrid.jsx
│   ├── Header.jsx
│   ├── Refine.jsx
│   ├── SearchBar.jsx
│   └── StateMessage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Running Locally

Clone the repository.

```bash
git clone https://github.com/vbyte-dev/markd.git
```

Install project dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

---

## Design Decisions

### Preserve Context

Bookmarks should capture why a resource matters rather than only where it is located.

### Reduce Organizational Friction

Flat tags eliminate the maintenance burden associated with nested folder structures.

### Prioritize Retrieval

Information should be discoverable through memory and context instead of navigation alone.

### Local-first Architecture

The MVP intentionally avoids backend infrastructure to prioritize simplicity, instant responsiveness, and user ownership of data.

---

## Current Scope

The MVP implements the complete bookmarking workflow.

* Create bookmarks
* Edit bookmarks
* Delete bookmarks
* Contextual notes
* Live search
* Tag refinement
* Usage tracking
* Responsive interface
* Persistent local storage

---

## Future Work

- Browser extension
- Import and export
- Cross-device synchronization
- User authentication
- AI-powered semantic search
- AI-generated bookmark summaries
- Smart tag suggestions
- Related bookmark recommendations
- Duplicate detection
- Dead link validation


---

## License

This project is licensed under the MIT License.

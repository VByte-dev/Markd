# Markd App — Problems, Solutions & Features

---

## Problems

### Problem 1 — The Save and Forget Loop
Browser bookmarks save only a URL and a page title. No context. No intent. Six months later you have no memory of why you saved something — so you never go back to it. The bookmark is dead on arrival. Without visual cues or any reinforcement loop, bookmarks are placed out of sight and permanently out of mind.

### Problem 2 — Everything Looks the Same
A flat list of blue text links is cognitively impossible to scan at speed. There are no visual anchors, no thumbnails, no summaries. Your brain has to read every single item to find the one you want. The lack of a visual hierarchy directly causes user abandonment.

### Problem 3 — Folders Collapse Under Their Own Weight
Once you have more than roughly 100 bookmarks, deciding which nested folder a new link belongs to creates friction. People stop organising. Everything piles into the root directory. The structure that was supposed to help becomes the problem itself. Initial categorisation logic never ages well.

### Problem 4 — Search That Does Not Actually Work
Native browser search only matches exact text in the title or URL. If you cannot remember the exact site name, you cannot find it. There is no full-text search, no semantic matching, no tag-based lookup. Most users find it faster to just Google the topic again — making the bookmark pointless.

### Problem 5 — No Signal on What is Actually Useful
Browsers have zero data on which bookmarks you actually use. A link you open every week looks identical to one you saved once and never opened. There is no usage signal to surface what matters — or to reveal what is clutter. The collection grows but stays completely opaque.

### Problem 6 — Clutter Builds with No Way to Clean
There is no native mechanism for lifecycle management. Browsers cannot detect stale links, flag duplicates, or surface bookmarks you have never visited. The database bloats indefinitely. Cleaning it is a manual, slow, and painful chore that almost never happens.

---

## Solutions

### Solution 1 — Force Intent at Save Time
Require a one-line personal note when adding a bookmark. Not optional. The user must write why it matters right now, in this moment. This captures context that no browser stores — and makes the bookmark useful weeks later when the memory is gone.

### Solution 2 — Replace Lists with Visual Cards
Show each bookmark as a card displaying the title, URL, tag, note, and visit count together. A card grid is scannable in seconds. The brain processes layout and visual patterns far faster than it reads lines of text.

### Solution 3 — Replace Folders with Flat Tags
Eliminate folder hierarchy entirely. One tag per bookmark. Flat, fast, zero cognitive overhead. No decisions about nesting. No maintenance burden. Filtering by tag is instant and requires no prior organisational thinking.

### Solution 4 — Search Across All Three Fields
Run every search query simultaneously across the title, the URL, and the personal note. Three fields, one query, results updating as you type. If you remember why you saved something but not what it was called, the note field finds it.

### Solution 5 — Track Usage Automatically
Increment a visit counter every time a link is opened from the app. No manual action needed. The counter builds a real picture of which bookmarks are valuable and which are sitting untouched. The data surfaces itself — no effort from the user.

### Solution 6 — Make the Graveyard Visible
A filter for never-visited bookmarks instantly surfaces everything saved but never opened. Clutter becomes visible and deletable in seconds, without manual review of the entire collection one link at a time.

---
a
## Features

### Feature 1 — Add Bookmark
Save a URL with a title, a required one-line personal note, and one tag. Everything is stored in localStorage instantly. No login. No backend. Works immediately on first use.

### Feature 2 — Card Grid View
All bookmarks are displayed as visual cards. Each card shows the title, URL, tag, personal note, and visit count at a glance. The grid is scannable, not a text list.

### Feature 3 — Tag Filter
Every tag in the collection is clickable. Clicking a tag filters the card grid to show only bookmarks with that tag. Flat system, no nesting, no folder decisions.

### Feature 4 — Search
A search bar queries the title, URL, and personal note simultaneously. Results update live as the user types. Finding a bookmark by memory of why it was saved is now possible.

### Feature 5 — Visit Counter
Every time a link is opened from within the app, the visit count on that card increments automatically. The counter is visible on each card. No manual marking or toggling required.

### Feature 6 — Filter by Visit Count
Three filter states: never visited, visited once or twice, and most visited. The never-visited filter surfaces the entire graveyard instantly. The most-visited filter shows what is genuinely useful.

### Feature 7 — Delete
A delete button on each card removes the bookmark permanently from localStorage. Combined with the never-visited filter, bulk cleanup becomes fast and intentional.

---

## What This Solves vs What It Does Not

| Area | Status |
|---|---|
| Save with intent and context | Solved |
| Visual scanning of the collection | Solved |
| Flat tag system replacing folder chaos | Solved |
| Search that finds things by context | Solved |
| Usage signal showing value vs clutter | Solved |
| Lifecycle management | Partially solved |
| Cross-device sync | Not solved — localStorage is device-bound (v2) |
| Link rot detection | Not solved — requires a backend (v2) |

---

## Workflow

### How a User Interacts with the App — Step by Step

**Step 1 — Open the app**
The user opens the app in their browser. All previously saved bookmarks load instantly from localStorage. No login screen. No loading spinner. The card grid is immediately visible.

**Step 2 — Save a new bookmark**
The user finds a link worth saving — an article, a tool, a resource. They open the app, paste the URL, write a short title, type a one-line note explaining why it matters right now, and add one tag. They hit save. The card appears in the grid immediately.

**Step 3 — Browse the card grid**
The user scrolls through the card grid. Each card shows the title, tag, personal note, and visit count at a glance. Scanning 50 cards takes seconds because the layout is visual, not a text list.

**Step 4 — Find a specific bookmark**
The user needs a link they saved weeks ago. They type a keyword in the search bar — even a word from their personal note, not just the title. The grid filters live as they type. They find it in under five seconds.

**Step 5 — Browse by topic**
The user wants to see everything tagged as "DSA" or "frontend" or "tools." They click the tag. The grid instantly shows only cards with that tag. One click, no folder navigation.

**Step 6 — Open a link**
The user clicks a card to open the link. The app opens it in a new tab and increments the visit counter on that card by one. The user does nothing extra. The tracking is automatic.

**Step 7 — Review clutter**
The user selects the "never visited" filter. The grid now shows only bookmarks they have never opened since saving. They look through it, delete what is clearly useless, and keep what still matters. The graveyard becomes manageable.

**Step 8 — Find what actually matters**
The user selects the "most visited" filter. The bookmarks they return to most frequently rise to the top. These are their genuinely useful resources — surfaced by real usage data, not by memory or manual organisation.

---

### Data Flow — What Happens Under the Hood

```
User saves a bookmark
        ↓
App creates a bookmark object
{ id, url, title, note, tag, visitCount: 0, createdAt }
        ↓
Object is added to the bookmarks array
        ↓
Full array is saved to localStorage as JSON
        ↓
Card grid re-renders with the new card

User clicks a card to open a link
        ↓
App increments visitCount on that bookmark object
        ↓
Updated array is saved back to localStorage
        ↓
Visit counter on the card updates visually
        ↓
Link opens in a new tab

User types in search bar
        ↓
App filters bookmark array in real time
Query matched against: title + url + note
        ↓
Card grid re-renders with matching cards only

User clicks a tag
        ↓
App filters bookmark array by that tag value
        ↓
Card grid re-renders with matching cards only

User selects a visit filter
        ↓
Never visited → visitCount === 0
Low engagement → visitCount 1 or 2
Most visited → sorted by visitCount descending
        ↓
Card grid re-renders accordingly

User deletes a bookmark
        ↓
App removes the object from the array
        ↓
Updated array saved to localStorage
        ↓
Card removed from grid immediately
```

---

### localStorage Structure

Everything is stored as a single JSON array under one key.

```json
Key: "readlater_bookmarks"

Value: [
  {
    "id": "1717123456789",
    "url": "https://css-tricks.com/flexbox-guide",
    "title": "CSS Flexbox Complete Guide",
    "note": "Best reference for flexbox — use when stuck on alignment",
    "tag": "frontend",
    "visitCount": 4,
    "createdAt": "2024-06-01T08:30:00Z"
  },
  {
    "id": "1717198765432",
    "url": "https://leetcode.com/problems/two-sum",
    "title": "Two Sum — LeetCode",
    "note": "Classic sliding window starter — revisit before interviews",
    "tag": "DSA",
    "visitCount": 0,
    "createdAt": "2024-06-03T14:15:00Z"
  }
]
```

### Order
1. Add Bookmark
      ↓
2. Card Grid View
      ↓
3. Delete Bookmark
      ↓
4. Search
      ↓
5. Tag Filter
      ↓
6. Visit Counter
      ↓
7. Visit Count Filters

---
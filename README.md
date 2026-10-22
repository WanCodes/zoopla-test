# zoopla-test

Coding exercise by [Wan Yau](https://github.com/WanCodes). A Next.js page that lists sample property listings from a local JSON Server and lets you switch a listing between active and expired.

## What it does

The home page is a single list of property cards.

- After the page loads, the browser requests `GET /properties` and renders one card per listing.
- Each card shows the photo, price, title, address, and published date. A listing with `status: "expired"` also shows an **Expired** label.
- **Edit** turns edit mode on and **Done** turns it off. The flag is a Recoil atom shared by the menu and the cards.
- In edit mode every card shows **Set expired** or **Set active**. That action sends the full listing with `PUT /properties/:id`, and the card updates from the response.
- The list shows `Loading...` while that first request is in flight, and `Error loading list...` when the request fails.

`jsonserver/property-list.json` ships with three listings:

| ID | Title | Price | Address | Status |
| --- | --- | --- | --- | --- |
| 60985865 | 4 bed terraced house for sale | £795,000 | Westfield Road, Ealing W13 | expired |
| 60985866 | 2 bed bungalow for sale | £425,000 | Redleaf Close, Upper Belvedere DA17 | active |
| 60985850 | 2 bed flat for sale | £440,000 | Maida Vale, London W9 | active |

Under 700px the photo stacks above the listing text.

## Stack

| Piece | Choice |
| --- | --- |
| App | Next.js 12.1 (Pages Router), React 17, TypeScript with `strict` |
| Styling | styled-components 5, via `babel-plugin-styled-components` (`ssr: true` in `.babelrc`) |
| Edit mode | Recoil 0.6 (`editPropertyState` in `src/state/atom.ts`) |
| HTTP | Axios 0.26, wrapped in `src/services/api.ts` |
| API | JSON Server 0.17 on port 8000 |
| Lint | ESLint 8 with `eslint-config-next` (`next/core-web-vitals`) |

Listing data and the loading/error flags live in `usePropertyList`. Edit mode is the only Recoil state.

## Prerequisites

- Node.js 12.22 or newer, which is the range Next.js 12.1 declares.
- npm. Dependencies are locked in `package-lock.json`.
- Two processes. The browser calls the API at `http://localhost:8000`.

## Run locally

Install from the lockfile:

```bash
npm ci
```

Start the API:

```bash
npm run json:server
```

JSON Server watches `jsonserver/property-list.json` and serves it at [http://localhost:8000/properties](http://localhost:8000/properties).

Start the app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The document title is "Zoopla test".

For a production build, stop the dev server, then:

```bash
npm run build
npm start
```

`npm start` serves [http://localhost:3000](http://localhost:3000) and still expects JSON Server on port 8000. Listings load in the browser, so the page shows the error message when the API is down.

## Scripts

| Script | What it runs |
| --- | --- |
| `npm run dev` | `next dev` on port 3000 |
| `npm run json:server` | `json-server --watch jsonserver/property-list.json --port 8000` |
| `npm run lint` | `next lint` |
| `npm run build` | `next build` (typecheck and production compile) |
| `npm start` | `next start` after a build |

## Project layout

```text
pages/_app.tsx                      RecoilRoot
pages/index.tsx                     Edit menu and property list
src/components/EditMenu/            Edit / Done button
src/components/PropertyCard/        Listing card and its styled parts
src/components/PropertyList.tsx     Loading, error, and the card list
src/hooks/usePropertyList.ts        Fetch the list and save a status change
src/services/api.ts                 Axios GET and PUT helpers
src/services/getPropertyList.ts     /properties client
src/state/atom.ts                   editPropertyState
src/types/property.ts               Listing and status types
src/constants/app-constants.ts      JSON_SERVER_BASE_URL
jsonserver/property-list.json       Sample listings
```

## API

Base URL: `http://localhost:8000` (`JSON_SERVER_BASE_URL`).

| Method | Path | Behaviour |
| --- | --- | --- |
| `GET` | `/properties` | Returns the listing array. An empty array or a non-200 status fails the request. |
| `PUT` | `/properties/:id` | Replaces one listing. JSON Server writes the change back to the fixture because it is started with `--watch`. |

`PropertyStatus` is `active` or `expired`.

## Checks

This repo has no test runner. Use lint, the production build, and a pass in the browser.

```bash
npm run lint
npm run build
```

With both servers running:

1. Open [http://localhost:3000](http://localhost:3000). Three cards appear after the loading message. Only the Ealing terraced house shows **Expired**. Each footer reads `Listen on: 14th Mar 2022`.
2. Click **Edit**. Active cards show **Set expired**. The expired card shows **Set active**.
3. Toggle one card. The **Expired** label and the button label swap, and the new `status` is still there after a refresh.
4. Click **Done**. The status buttons go away.
5. Stop JSON Server and reload. The page shows `Error loading list...`.

A status toggle rewrites `jsonserver/property-list.json`. JSON Server is watching that file, so this restores the original fixture:

```bash
git checkout -- jsonserver/property-list.json
```

## Scope

The card reads `image.src`, `price`, `title`, `address`, `publishedOn`, and `status`. The fixture also includes `features`, `transports`, `flag`, `priceTitle`, `publishedOnLabel`, `image.caption`, and `image.responsiveImgList`. Those fields stay on the payload and are left unused by the card.

`usePropertyList` tracks `toggleActiveState` while a status save is in flight. `PropertyList` leaves that flag unrendered (`TODO` in the component).

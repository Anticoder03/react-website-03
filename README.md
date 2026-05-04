# Text Utils

A small React + Vite app for quickly analyzing and transforming text. Paste or type content into the editor, then use the built-in controls to clean it up, change its case, or copy it to your clipboard.

## Features

- Live text preview and editing.
- Word, character, and estimated reading-time statistics.
- One-click text actions:
  - Clear all text.
  - Copy text to the clipboard.
  - Remove extra spaces.
  - Convert text to uppercase.
  - Convert text to lowercase.

## Tech Stack

- React 19
- Vite
- React Icons
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install Dependencies

```bash
npm install
```

### Run the App

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Lint the Code

```bash
npm run lint
```

## How It Works

The main UI lives in [src/components/TextField.jsx](src/components/TextField.jsx), which manages the text state and calculates the summary values as you type. Reusable button rendering is handled by [src/components/Buttons.jsx](src/components/Buttons.jsx).

## Project Structure

```text
src/
  App.jsx
  main.jsx
  components/
    Buttons.jsx
    Buttons.css
    TextField.jsx
    TextField.css
```

## Notes

- The clipboard action uses the browser Clipboard API, so it works best in secure contexts such as `localhost` or HTTPS.
- Reading time is estimated at 200 words per minute.

## Available Scripts

- `npm run dev` - start the development server.
- `npm run build` - create an optimized production build.
- `npm run preview` - preview the production build locally.
- `npm run lint` - run ESLint across the project.

# ReliefLink

ReliefLink is a mobile-first emergency assistance prototype for disaster and flood response. It turns a victim's help request into a clear, trackable case for rescue coordinators.

## Features

- Mobile emergency assistance dashboard
- GPS location confirmation
- Medical, evacuation, food and water, and other request types
- Household size and special-care selection
- Contact number capture
- Request confirmation with a reference ID
- Live request-status timeline
- Profile and bottom-tab navigation

This repository contains a front-end prototype. Requests, location data, and status updates are currently simulated in the browser and are not connected to a production backend.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Plain CSS for the custom interface
- pnpm

## Getting started

### Prerequisites

- Node.js 22
- pnpm 10

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Production build

```bash
pnpm build
```

## Project structure

```text
src/
├── components/        Shared interface components
│   ├── BottomNav.tsx
│   ├── Header.tsx
│   └── Icon.tsx
├── screens/           Mobile application screens
│   ├── HomeScreen.tsx
│   ├── ProfileScreen.tsx
│   ├── RequestScreen.tsx
│   └── StatusScreen.tsx
├── App.tsx            Screen navigation and top-level state
├── index.css          Global styles and design tokens
├── main.tsx           React entry point
└── types.ts           Shared application types
```

## Prototype flow

1. Select **Send help request** on the home screen.
2. Choose an assistance type.
3. Adjust the number of people and special-care needs.
4. Confirm the phone number and captured location.
5. Submit the request to see the confirmation and status screens.

## License

No license has been selected. Add a `LICENSE` file before distributing or accepting external contributions.

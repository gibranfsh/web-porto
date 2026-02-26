# Progress Log

## 2026-02-27 — Fix: Mouse Wheel Scroll Not Working

### Problem
Mouse wheel / middle-click scrolling was completely broken across the portfolio. Only clicking the scrollbar directly would scroll the page.

### Root Cause
**Dual scroll container conflict** — `overflow-x: hidden` was applied to **both** `html` and `body` in `globals.css`. This caused the browser to create two nested scroll containers, both computed at full content height (~17,324px). From the wheel event's perspective, there was no overflow to scroll.

Additionally, the `@tsparticles/engine` library's `fullScreen` option (defaults to `enable: true`) forces `position: fixed` with `!important` on the canvas and dynamically manages `pointer-events`, which needed careful configuration to avoid blocking user input.

### Changes Made

**`app/globals.css`**
- Separated `html, body` rule into individual `html` and `body` rules
- `overflow-x: hidden` now only on `body` (single scroll container)
- `overscroll-behavior: none` stays on `html`

**`app/page.tsx`**
- Set `fullScreen: { enable: true, zIndex: 0 }` — lets the library correctly position the canvas as `fixed`
- Disabled `onClick` interactivity — prevents the library from intercepting pointer events
- Removed `pointer-events-none` from Particles className (library handles this internally)

### Status: ✅ Resolved
Browser-verified: mouse wheel scrolling works, particles render as background, scrollbar still functional.

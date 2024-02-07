# htmx-reset
A simple HTMX plugin for automatic element resets after a submitted request.<br>
Included extensions:
- `reset-always`
- `reset-success`
- `reset-failure`

## Installation 
1. Download a copy of `reset.js` somewhere into your project
2. Include it into your HTML `<script src="/path/to/reset.js"></script>`
3. Add it to your elements `<form hx-post="/somewhere" hx-ext="reset-success"> ...`

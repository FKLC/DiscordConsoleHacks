# Discord Console Hacks
Discord client is a Chromium app, which means we can use developer tools inside Discord. I've created this repo to share my little snippets with other people.

### Enabling Discord console
1. Open to %APPDATA%/discord/settings.json in an editor
1. Add `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true,` after the first curly bracket. Example: 
```
{
  "DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true,
  "BACKGROUND_COLOR": ...,
  "IS_MAXIMIZED": ...,
  "IS_MINIMIZED": ...,
  "WINDOW_BOUNDS": {
    "x": ...,
    "y": ...,
    "width": ...,
    "height": ...
  }
}
```

### How to use
1. Press CTRL + SHIFT + I inside Discord
1. If there is a console, then skip this, if not, press ESC once or switch to the console tab
1. Paste the snippet you want and follow its instructions

### Snippet Explanations
 - `auth_code_extractor.js`: Helps getting `Authorization` header programmatically. There are other ways, but this automates it and allows you to use it in JS.
	 - Interact with Discord, so that it can catch a request and export it. The easiest way is typing for a while.
 - `fake_deafen.js`: You look deafened to others, but you can still hear and talk, so make sure to mute your mic.
	 - Deafen yourself and open back. A red deafen button should appear (Only works if the language is set to English, otherwise type `deafen()` to the console).

# Discord Console Hacks
Discord client is a Chromium app, which means we can use developer tools inside Discord. I've created this repo to share my little snippets with other people.

### How to use
1. Press CTRL + SHIFT + I inside Discord
1. If there is a console, then skip this, if not, press ESC once or switch to the console tab
1. Paste the snippet you want and follow its instructions

### Snippet Explanations
 - `auth_code_extractor.js`: Helps getting `Authorization` header programmatically. There are other ways, but this automates it and allows you to use it in JS.
	 - Interact with Discord, so that it can catch a request and export it. The easiest way is typing for a while.
 - `fake_deafen.js`: Fakes Discord as if you are being deafened but you can still hear (You will still be able to talk, so be sure to mute your mic).
	 - Deafen yourself and open back. Go back to console, and type `deafen()`, and hit enter.
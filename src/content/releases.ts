// Release notes shown on the site ("What's new" + /changelog). Newest first.
// Every app release adds an entry here and in joi-frontend/CHANGELOG.md (see docs/RELEASING.md).

export type Release = {
  version: string;
  date: string; // ISO date
  title: string;
  summary: string;
  added?: string[];
  improved?: string[];
  fixed?: string[];
  security?: string[];
};

export const releases: Release[] = [
  {
    version: "1.2.1",
    date: "2026-10-22",
    title: "JOI's own icon everywhere",
    summary: "A small fix so JOI looks like JOI on your desktop, taskbar and Start menu.",
    fixed: [
      "The desktop shortcut, taskbar and Start menu showed a generic icon instead of JOI's logo.",
      "Task Manager and file properties said \"Electron\" instead of \"JOI\".",
    ],
  },
  {
    version: "1.2.0",
    date: "2026-10-22",
    title: "JOI pops up right where you need it",
    summary:
      "Press the shortcut and JOI appears as a small assistant in the corner of your screen, ready to listen, without taking over your desktop.",
    added: [
      "Quick assistant: the JOI shortcut, Ctrl + Alt + J and the tray icon open a small popup in the bottom-right corner instead of the full window.",
      "Meet JOI's mascot: an animated character that listens, thinks, talks and celebrates with you.",
      "Talk to JOI: tap the mic and ask. Spoken questions get spoken answers.",
      "Approve or deny actions right inside the popup.",
      "Open the full app from the popup to continue the same conversation.",
    ],
    improved: [
      "When you're signed in, launching JOI goes straight to the popup.",
      "Tray icon: click for the popup, double-click for the full app.",
    ],
  },
  {
    version: "1.1.0",
    date: "2026-10-21",
    title: "Your phone, a one-step setup, and a lot more trust",
    summary:
      "JOI now sets itself up, runs entirely on your PC, can be reached from your phone, and is much more careful about what it does.",
    added: [
      "Reach JOI from your phone through your own Telegram bot. Pair once with a code; only your chat is listened to.",
      "One-step setup: on first launch JOI checks your PC and downloads its AI engine and model, with progress and time left.",
      "Everything runs on your PC. No separate database or server to install.",
      "Approve or deny sensitive actions right in the chat. After you approve, JOI finishes the task.",
      "Routines now really run in the background and notify you with the result.",
      "Automatic updates: new versions install the next time you quit JOI.",
      "Web search works out of the box, no setup needed.",
      "New Clay & Cream look, new logo, a cleaner Activity panel and a branded splash screen.",
      "Ctrl + Alt + J opens JOI from anywhere, even from the tray.",
    ],
    improved: [
      "Much faster replies: a new on-device model answers in a few seconds.",
      "Reading your email or calendar no longer asks for approval; actions still do.",
      "Emails are shown as clean, readable text.",
      "Asking again always gets a fresh check instead of an old answer.",
    ],
    fixed: [
      "JOI could describe emails or details that didn't exist. It now only reports real data.",
      "\"Draft an email\" could send it. JOI now shows the draft and asks first.",
      "Sending to an address you never gave JOI is now blocked.",
      "Google sign-in could get stuck in the browser, or fail with \"Token used too early\".",
      "Replies could show raw tool code or come back empty.",
      "Gmail could be reported as \"not connected\" when it was.",
    ],
    security: [
      "Requests from your phone always wait for your approval on the PC.",
      "Hardened installer packaging and logs, so private keys and tokens never ship or get written down.",
    ],
  },
  {
    version: "1.0.0",
    date: "2026-05-03",
    title: "First release",
    summary: "The first Windows build of JOI.",
    added: [
      "Chat with JOI on your desktop, typed or spoken.",
      "Tools for files, email, calendar, apps and system information.",
      "Approval rules per tool: always allow, ask first, or never.",
      "Assistant memory and local document knowledge.",
      "Sign in with email or Google.",
    ],
  },
];

export const latestRelease = releases[0];

export function formatReleaseDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

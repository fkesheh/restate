#!/usr/bin/env node
// UserPromptSubmit hook: inject restate reminder on every user prompt.
const payload = {
  hookSpecificOutput: {
    hookEventName: "UserPromptSubmit",
    additionalContext:
      "REMINDER: Always restate the question in fully concrete terms, making every implicit detail explicit. Then answer.",
  },
};
process.stdout.write(JSON.stringify(payload));

#!/usr/bin/env node
// SessionStart hook: announce restate plugin active for this session.
const payload = {
  hookSpecificOutput: {
    hookEventName: "SessionStart",
    additionalContext:
      "restate plugin active — every user prompt will be prefixed with a reminder to restate the question concretely before answering.",
  },
};
process.stdout.write(JSON.stringify(payload));

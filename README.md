# restate

A tiny Claude Code plugin that injects a reminder on every user prompt:

> **REMINDER:** Always restate the question in fully concrete terms, making every implicit detail explicit. Then answer.

## Why

Ambiguous prompts are the root cause of most off-target answers. Forcing Claude to restate the question concretely before answering surfaces hidden assumptions early, reduces rework, and improves grounding — especially for short or underspecified requests.

## Credits

Idea from [@sdmat123](https://x.com/sdmat123) — see the originating post: [x.com/sdmat123/status/2044931930840506609](https://x.com/sdmat123/status/2044931930840506609).

## How it works

The plugin registers a `UserPromptSubmit` hook that emits `hookSpecificOutput.additionalContext` on every prompt submit. The extra context is delivered to Claude alongside the user's message.

No dependencies — just a 2-line bash script.

## Install

One-liner from your shell:

```bash
claude plugin marketplace add fkesheh/restate && claude plugin install restate@restate
```

Or from inside Claude Code:

```
/plugin marketplace add fkesheh/restate
/plugin install restate@restate
```

Then reload plugins:

```
/reload-plugins
```

Or point the marketplace at a local checkout while developing:

```bash
claude plugin marketplace add /path/to/restate
claude plugin install restate@restate
```

## Files

```
restate/
├── .claude-plugin/
│   └── plugin.json       # plugin manifest + hook registration
└── hooks/
    └── restate.sh        # emits the reminder JSON payload
```

## Customize

Edit `hooks/restate.sh` and change the string inside `additionalContext` to any reminder you want to inject on every prompt.

## License

MIT

#!/usr/bin/env bash
# Emits a UserPromptSubmit additionalContext reminder telling Claude to
# restate the user's question concretely before answering.
printf '%s' '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"REMINDER: Always restate the question in fully concrete terms, making every implicit detail explicit. Then answer."}}'

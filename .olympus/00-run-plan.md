# Run plan — Education4Students mobile pass (2026-10-27/28)

Workflow: single-site mobile pass (`templates/prompts/mobile-pass-single-site.md`), abridged trail.
Direction, palette and type ramp fixed. Owner pre-authorised push to `main` with no gates.

| Phase | Agent | Skill | Output |
|---|---|---|---|
| measure | fleet-measurer (main session) | mobile-app-shell | 01-audit.md |
| build | design-engineer (main session) | mobile-app-shell | 06-build-plan.md, code on `mobile-pass` |
| review | self-review against budgets (independent-critic skipped for time) | visual-qa (budgets only) | 07-qa.md |

Skipped: `apollo.py attach` and `verify.py --plan` (no Python on this machine); `07-qa.json`
not written (template needs verify.py to check it).

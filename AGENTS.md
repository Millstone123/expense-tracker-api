# AGENTS.md

## Project Overview

Expense Tracker API — Node.js/Express REST API for personal finance tracking.

## Stack

- Runtime: Node 20 (ESM)
- Framework: Express 4.x
- Config: dotenv
- Test runner: node:test

## Agent Instructions

### 1. Environment setup (required first)

```bash
bash setup.sh
```

### 2. Install and test

```bash
npm install
npm test
```

### 3. Code style

- ESM imports only (`import`, not `require`)
- Errors as `{ error: "message" }` JSON

### 4. PR description template

```
## What changed
[describe the fix]

## Tests
[paste npm test output here]
```

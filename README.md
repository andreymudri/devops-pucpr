# devops-pucpr

A CI/CD pipeline lab. The application code is deliberately trivial — two recursive
algorithms and their unit tests. The deliverable is everything around it: the
pipelines, the failure alerting, and the published coverage report.

## What the pipelines do

### CI — `.github/workflows/ci.yml`

Runs on every push to any branch and on pull requests targeting `main`.

1. Checkout, Node 20 with npm cache.
2. `npm install`, then `npm test` (Jest).
3. **On failure**, a second job (`notify-failure`) runs `actions/github-script` to
   open an issue automatically, labelled `ci-failure`, containing the workflow name,
   a direct link to the failed run, the branch, the commit SHA, and the triggering
   event. It requests only `issues: write` — least privilege, not a blanket token.

The point of the alert job is that a red build should not depend on somebody
noticing a red checkmark.

### CD — `.github/workflows/cd.yml`

Runs on push to `main`.

1. Checkout, Node 20 with npm cache, install.
2. `npx jest --coverage --coverageReporters=html`, with `continue-on-error: true`
   so a coverage dip never blocks the report from being published.
3. Publishes `coverage/lcov-report` to GitHub Pages via `peaceiris/actions-gh-pages`.

The coverage report becomes a browsable artifact on every merge to `main` instead
of a number buried in CI logs.

## Container

`Dockerfile` builds on `node:24-alpine`:

- `npm ci --omit=dev` runs as its own layer via bind mounts, so dependencies are
  cached independently of source changes.
- A cache mount on `/root/.npm` speeds up repeat builds.
- Drops to the non-root `node` user before copying source.

`compose.yaml` brings the service up locally.

## Running locally

```bash
npm install
npm test

# or, containerised
docker compose up --build
```

## Application code

`src/algorithms.js` exports `fibonacci(n)` and `fatoracao(n)` (factorial).
`fatoracao` throws on negative input; `tests/algorithms.test.js` covers the base
cases, a few larger values, and the throwing path.

Coursework for the DevOps discipline at PUCPR.

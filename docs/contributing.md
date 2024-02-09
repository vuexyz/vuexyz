# Contributing

Thanks for your interest in contributing to VueXYZ. Here's how to jump in:

## Find Issues

You can find issues on the [GitHub](https://github.com/marchantweb/vuexyz/issues) repo. If you find a bug or have a feature request, please open an issue. If you're interested in working on an issue, please comment on it to let others know you're working on it.

## What about wrapping other creative coding libraries?

As you're probably aware, there are many creative coding libraries out there, such as p5.js. What makes VueXYZ unique is that it's entirely focused on a composable architecture, returning reactive data instead of rendering to a canvas.

If you find another open-source project with helpful functionality that you believe would be a good fit for this paradigm, please open an issue to discuss it. We're not all-knowing, and we'd love to hear any ideas that might be helpful to the community.

## Development

### Setup

Clone this repo to your machine and install the dependencies.

```bash
pnpm install
```

VueXYZ uses VitePress for documentation, and it's easy to develop and debug with it:

```bash
pnpm docs:dev
```

The library itself is located under `/src`, with the docs under `/docs`. Each composable has its own directory containing the source code and tests. You can run `pnpm test` to run the tests and make sure they pass.

## Thanks!

Thanks for helping to make VueXYZ a better library for creative coding in Vue! 🎉

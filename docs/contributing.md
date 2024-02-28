# Contributing

Thanks for your interest in contributing to VueXYZ. Here's how to jump in:

## Find Issues

You can find issues on the [GitHub](https://github.com/vuexyz/vuexyz/issues) repo. If you find a bug or have a feature request, please open an issue. If you're interested in working on an issue, please comment on it to let others know you're working on it.

## What about wrapping other creative coding libraries?

As you're probably aware, there are many creative coding libraries out there. What makes VueXYZ unique is that it's entirely focused on a composable architecture, returning reactive data instead of rendering anything to the screen directly.

If you find another open-source project with helpful functionality that you believe would be a good fit for this paradigm, please open an issue to discuss it.

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

### Project Structure

All the composables are within the `/src` directory. Primitives are found under `src/primitives` and utilities under `src/utilities`. Each composable has its own directory within those respective paths, with the source code and tests.

If you add/edit a composable, you can run `pnpm test` to run the tests.

Documentation and demos are found under `docs`, which is a VitePress installation. See the [VitePress documentation](https://vitepress.dev/) for more information.

## Thanks!

Thanks for helping to make VueXYZ a better library for creative coding in Vue! 🎉

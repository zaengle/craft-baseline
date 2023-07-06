# Naming Conventions

This project uses Zaengle's https://github.com/zaengle/craft-conventions plugin for organising, naming and loading templates.

## Template files

- **routing templates** names should use kebab-case, e.g. `my-path/_entry.twig`,
- all other filenames should be `camelCased`
- Template files should end in `.twig`
- **`component()`** names should be named after the component they represent, e.g. `btn.twig`
- Prefer singular over plural, even for directory names, e.g. `components/card/blog.twig` over `components/cards/blog.twig`
- Components that render a **Matrix Block** should be named to match the block handle, and be placed in a directory that matches the handle of the field the block belongs to: e.g. `components/hero/default.twig` renders a `default` block that belongs to a `hero` field
- **`field()`** names should match the craft field handle that they render

## Javascript

- Should be placed in `src/assets/js/`
- Should be named using `camelCase` for libraries and `PascalCase` for classes

## CSS

- Use an `sc-` prefix for custom CSS classes to make them recognizably independent of TW utility classes


## Images

- Should be placed in `src/assets/img/`
- Should be named using `kebab-case`
- Should be optimised using [ImageOptim](https://imageoptim.com/mac) **before** being checked in

### SVGs

- Should be placed in `src/assets/svg/`
- Should be named using `kebab-case`

Additionally, SVG files to be added to the SVG sprite should:

- be placed in `src/assets/svg/sprite/`
- use a single color
- use `currentColor`
- have a `viewBox` attribute that defines a square box and which is common to all icons in the sprite

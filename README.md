# TryNg

This is a repo to try out new features of Angular. It uses [Nx](https://nx.dev?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) as a build system and monorepo manager.

Each new feature should be in its own branch. You can check out the branches `try` to try out the features.
for example, to try out the ••signal forms** feature, run:

```sh
git checkout try/signal-form
```

and go have fun!

PS: If you want to add new features, please create a new branch off of `main` and open a PR.

PPS: If you find this repo useful, please star it ⭐️

## Feature branches

- [try/signal-form](/tree/try/signal-form) - Try out Angular Signal Forms

## Run tasks

Before running any tasks, install the dependencies with:

```sh
pnpm install
```

Then below are all NX commands you can use to run tasks. 👇

------------------------------------------------------------------------

To run the dev server for your app, use:

```sh
pnpx nx serve try-ng
```

To create a production bundle:

```sh
pnpx nx build try-ng
```

To see all available targets to run for a project, run:

```sh
pnpx nx show project try-ng
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
pnpx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
pnpx nx g @nx/angular:lib mylib
```

You can use `pnpx nx list` to get a list of installed plugins. Then, run `pnpx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

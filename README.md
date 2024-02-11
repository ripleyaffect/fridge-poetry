# Fridge Poetry

A simple web app for creating fridge poetry using [React-Flow](https://reactflow.dev/).

## Running the App

```shell
pnpm i
pnpm dev
```

## Word List

Words are pulled from `/src/components/fridge/data.ts`. Each word has a label and a count. Duplicate words will be
merged. Words are placed in alphabetical order.

---
title: 'Elder.js Hooks In Detail'
excerpt: 'Learn how Elder.js hooks work.'
date: '2020-03-16T05:35:07.322Z'
author: Nick Reese
slug: 'hooks'
---

## Hooks In Depth:

Elder.js runs it's hooks system based on it's `hookInterface`. This interface defines which hooks can do what and what properties they have.

In building Elder.js we found that if anything can be mutated at anytime, a system quickly gets hard to reason about.

The `hookInterface` is designed to solve that problem. While you can explore all of the hooks below, to illustrate how the hookInterface forces predictable mutation see the following example:

### Predictable Mutations

Add the hook below to your `hooks.js` file and reload this page:

```js
{
 hook: 'data',
 name: 'maliciousHook',
 description: 'Can we break anything?',
 priority: 1, // this will be called last
 run: async ({ helpers, data, settings, request, query }) => {
   settings = null;
   request = null;
   helpers = null;
   query = null;

   return { settings, request, query, helpers }
 },
},
```

On reload, if you check the console you'll see that this hook wasn't able to mutate any of the props due to the way the hookInterface is configured.

Essentially only properties that are able to be mutated on a hook, will be mutated on the hook. This helps keep plugins and developers honest and makes maintaining the project in the future easier to reason about. :)

### A Simple Example

## Full Hook Interface:

{{displayHooks image="below" /}}

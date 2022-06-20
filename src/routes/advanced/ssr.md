---
title: 'SSR and Dynamic Routing in Elder.js'
excerpt: 'How to use dynamic routing in Elder.js to generate pages dynamically in a server rendered environment.'
date: '2020-03-16T05:35:07.322Z'
author: Nick Reese
slug: 'ssr'
---

## SSR and Dynamic Experiences:

Elder.js started as a static site generator but today it is used in production as an SSR framework as well.

For more information look at the route found in `./src/routes/ssr/`. In short, the `req` and `next` functions from `express` or `polka` (used in this template) are made available in a route's `data` function.

This means you'll have access to `sessions` and anything else you'd need to make logged in or otherwise dynamic experiences.

To see this in action, try visiting this page when running in SSR mode: http://localhost:3000/dynamic/test/two/?test=true.

### Middleware Hook

For even more control make sure to checkout the [`middleware`](/advanced/hooks/#middleware) hook as defined below.

{{displayHooks hook="middleware" image="below" /}}

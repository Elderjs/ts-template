---
title: 'Hello Elder.js!'
excerpt: 'Homepage'
date: '2020-03-16T05:35:07.322Z'
author: Nick Reese
slug: '/'
---

Welcome to the Elder.js template project.

This project is designed to be one of two things:

1. A tech blog template with a basic tutorial.
2. Or a full blown tutorial about how to use Elder.js to build major SEO assets.

Consider it a choose your own adventure by clicking one of the two options above or continue reading to decide if Elder.js is right for you.

## Is Elder.js Right For You?

Elder.js is a full stack framework for building server rendered websites or statically generating websites.

If you are focused on building an "App" and not a website then you may be better served by something like SvelteKit or Next.js.

If you are are building a **non-trivial** content or data heavy **website** then Elder.js is a great fit for your needs.

Here is a quick list of Elder.js advantages compared to other major frameworks:

- 0kb JS by default.
- Partial Hydration... a fancy way of saying we give you control to only ship the JS required to make interactive parts of your site interactive.
- Future proof your static content with shortcodes.
- Flexible data model for non-trivial use cases.
- Robust plugins for common uses cases such as: Responsive images, sitemap generation, critical path css generation, and markdown parsing.
- Prop compression. Compress the JSON you hydrate by 30%+ and 8%+ after brotli. It also has the added advantage of making your site a lot harder to scrape.

## Perfect Use Cases For Elder.js

If you are building any of the following, Elder.js would be a great fit for your team:

- Flagship SEO websites with 10,000s of pages.
- Blogs or personal websites you'd like statically generate and host on CDN like Cloudflare, Netlify, or S3.
- Portfolio/Brochure Websites.

## Less Than Perfect Use Cases:

- "Apps" anything where the user is logging in. This is 100% possible with Elder.js but it requires knowledge and experience with express-middleware. If you're comfortable there, then look at dynamic routing and the `middleware` hook.
- Edge rendered apps/websites. Elder.js can be used for edge rending, but the Bootstrap/AllRequests hooks shouldn't be used... This causes most plugins to be unusable. For this look at SvelteKit.

## Why Elder.js Exists

Elder.js was designed and developed by [Nick Reese](https://nicholasreese.com) to support his various investments which use data at scale to do what is commonly referred to as "Programmatic SEO"... or in less fancy terms, programmatic seo is where you use huge amounts of data to generate useful pages for consumers and rank for various keywords using the pages generated.

Production sites of this sort that Nick publicly discloses include:

- [ElderGuide.com](https://elderguide.com)
- [FindEnergy.com](https://findenergy.com)

## How Mature is Elder.js? Is this going to disappear?

Elder.js has been used in production for 2 years on various sites and will be maintained for the foreseeable future (at least until late 2024).

How Elder.js compares to SvelteKit is a very common question. The key distinction is that Elder.js is designed with SEO in mind and offers tools to help make building large static sites easier.

## What Is Partial Hydration?

So here is an update.

{{svelteComponent name='Clock' props='{}' options='{}'/}}

Another change

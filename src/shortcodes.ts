import { ShortcodeDefinitions } from '@elderjs/elderjs';
import { hookInterface, hookEntityDefinitions } from '@elderjs/elderjs';

/**
 * Shortcodes are a useful way of making content that lives in a CMS or in markdown files dynamic.
 *
 * By default, Elder.js ships with a {{svelteComponent name="" props="" options="" /}} shortcode.
 * Try adding a clock to one of your markdown files with:
 * `{{svelteComponent name="Clock" options='{"preload":true}' props='{"foo": true}' /}}`
 *
 */

const shortcodes: ShortcodeDefinitions = [
  {
    /**
     * This is a simple shortcode that will wrap content with a magical box.
     * Try adding `{{box class="yellow"}}Your content here{{/box}}` in one of your markdown files.
     * */
    shortcode: 'box',
    run: async ({ content, props }) => {
      return {
        // this is what the shortcode is replaced with. You CAN return an empty string.
        html: `<div class="box ${props.class}">${content}</div>`,

        // This is added to the page's css through the cssStack. You probably want an external css file for most usecases.
        css: '.box{border:1px solid red; padding: 1rem; margin: 1rem 0;} .box.yellow {background: lightyellow;}',

        // Javascript that is added to the footer via the customJsStack.
        js: '<script>var test = true;</script>',

        // Arbitrary HTML that is added to the head via the headStack
        head: '<meta test="true"/>',
      };
    },
  },

  /**
   *
   * A common issue with static content is that someone will need to go back and update that content.
   * * Imagine you have your content in a CMS such as WordPress, Contentful, Prismic, or even a markdown file.
   * * Within this content some "decision maker" has decided that you need to display the number of pages on your site... and it always has to be accurate.
   *
   * Usually pulling this off would require you to put a placeholder like {{numberOfPages /}} and then preprocessing the content, counting the number of pages, and then rendering it.
   *
   * With Elder.js shortcodes, all the preprocessing is done for you, you just need to decide what you want to replace it with.
   *
   * Below is code for the usecase above.
   *
   * It is important to note, even if you wanted {{latestInstagramPhoto /}} to be shown, the same approach would apply. Just use something like
   * `node-fetch` to hit Instagram's API and specify what html, css, js you'd like to add to the page.
   *
   * */
  {
    shortcode: 'blogIndex',
    run: async ({ data, helpers, props }) => {
      const entries = data.markdown.blog.reduce((out, cv) => {
        const html = `
        <li>
            <a href="${helpers.permalinks.blog(cv)}">${cv.frontmatter.title}</a>
        </li>`;
        return out + html;
      }, '');

      return `
      <h2>${props.heading ? props.heading : 'Articles: '}</h2>
      <ul>${entries}</ul>
      `;
    },
  },
  {
    shortcode: 'displayHooks',
    run: async ({ helpers, props }) => {
      return helpers.inlineSvelteComponent({
        name: 'DisplayHooks',
        props: {
          ...props,
          hookEntityDefinitions,
          hookInterface: props.hook ? hookInterface.filter((h) => h.hook === props.hook) : hookInterface,
        },
      });
    },
  },

  {
    shortcode: 'numberOfPages',
    run: async ({ allRequests }) => {
      // allRequests represents 'request' objects for all of the pages of our site, if we know the length of that we know the length of our site.
      return `${allRequests.length}`;
    },
  },
];

export default shortcodes;

<script context="module">import { writable } from 'svelte/store';
</script>

<script>import Frame from '../utils/Frame.svelte';
import { twMerge } from 'tailwind-merge';
import { setContext } from 'svelte';
export let multiple = false;
export let flush = false;
export let activeClass = 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800';
export let inactiveClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800';
export let defaultClass = 'text-gray-500 dark:text-gray-400';
const ctx = {
    flush,
    activeClass: twMerge(activeClass, $$props.classActive),
    inactiveClass: twMerge(inactiveClass, $$props.classInactive),
    selected: multiple ? undefined : writable()
};
setContext('ctx', ctx);
let frameClass;
$: frameClass = twMerge(defaultClass, $$props.class);
</script>

<Frame {...$$restProps} class={frameClass} color="none">
  <slot />
</Frame>

<!--
  @component
  ## Features
  [Accordion](https://flowbite-svelte.com/docs/components/accordion)
  - Default accordion
  - Always open
  - Color option
  - Flush accordion
  - Arrow style
  - Icon Accordion
  - Multiple mode
  - Custom transitions
  ## Props
  @prop multiple: boolean = false;
  @prop flush: boolean = false;
  @prop activeClasses: string = 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800';
  @prop inactiveClasses: string = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800';
  @prop defaultClass: string = 'text-gray-500 dark:text-gray-400';
  ## Example
  ```
  <script>
    import { AccordionItem, Accordion } from 'flowbite-svelte'
  </script>

  <Accordion>
    <AccordionItem>
      <span slot="header">My Header 1</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">My Header 2</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\
    </AccordionItem>
  </Accordion>
  ```

-->

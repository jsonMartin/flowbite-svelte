<script>import { twMerge } from 'tailwind-merge';
export let italic = false;
export let underline = false;
export let linethrough = false;
export let uppercase = false;
export let gradient = false;
export let highlight = false;
export let highlightClass = 'text-blue-600 dark:text-blue-500';
export let decorationClass = 'decoration-2 decoration-blue-400 dark:decoration-blue-600';
export let gradientClass = 'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400';
let underlineClass = twMerge('underline', decorationClass);
let classSpan = twMerge(italic && 'italic', underline && underlineClass, linethrough && 'line-through', uppercase && 'uppercase', gradient ? gradientClass : 'font-semibold text-gray-900 dark:text-white', highlight && highlightClass, $$props.class);
</script>

<span {...$$restProps} class={classSpan}>
  <slot />
</span>

<!--
  @component
  ## Features
  [Go to Heading Span](https://flowbite-svelte.com/docs/typography/heading)
  - Setup
  - Default heading
  - Second-level heading
  - Highlighted heading
  - Heading mark
  - Heading gradient
  - Heading underline
  - Breadcrumb context
  - Badge context
  - Secondary text
  - Sizes
  ## Props
  @prop italic: boolean = false;
  @prop underline: boolean = false;
  @prop linethrough: boolean = false;
  @prop uppercase: boolean = false;
  @prop gradient: boolean = false;
  @prop highlight: boolean = false;
  @prop highlightClass: string = 'text-blue-600 dark:text-blue-500';
  @prop decorationClass: string = 'decoration-2 decoration-blue-400 dark:decoration-blue-600';
  @prop gradientClass: string = 'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400';
  ## Example
  ```
  <script>
    import {  Heading, P, Span } from 'flowbite-svelte'
  </script>
  
  <Heading tag="h1" class="mb-4">Get back to growth with <Span highlight>the world's #1</Span> CRM.</Heading>
  <P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
  ```
-->

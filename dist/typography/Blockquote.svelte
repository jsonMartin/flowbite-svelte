<script>import { twMerge } from 'tailwind-merge';
export let border = false;
export let italic = true;
export let borderClass = 'border-l-4 border-gray-300 dark:border-gray-500';
export let bgClass = 'bg-gray-50 dark:bg-gray-800';
export let bg = false;
export let baseClass = 'font-semibold text-gray-900 dark:text-white';
export let alignment = 'left';
export let size = 'lg';
let alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
};
const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl'
};
</script>

<blockquote
  {...$$restProps}
  class={twMerge(
    baseClass,
    alignmentClasses[alignment],
    sizes[size],
    bg && bgClass,
    border && borderClass,
    italic && 'italic',
    $$props.class
  )}>
  <slot />
</blockquote>

<!--
  @component
  ## Features
  [Go to Blockquote](https://flowbite-svelte.com/docs/typography/blockquote)
  - Default blockquote
  - Solid background
  - Blockquote icon
  - Paragraph context
  - User testimonial
  - User Review
  - Alignment
  - Sizes 
  ## Props
  @prop border: boolean = false;
  @prop italic: boolean = true;
  @prop borderClass: string = 'border-l-4 border-gray-300 dark:border-gray-500';
  @prop bgClass: string = 'bg-gray-50 dark:bg-gray-800';
  @prop bg: boolean = false;
  @prop baseClass: string = 'font-semibold text-gray-900 dark:text-white';
  @prop alignment: 'left' | 'center' | 'right' = 'left';
  @prop size: BlockQuoteType = 'lg';
  ## Example
  ```
  <script>
    import { Blockquote } from 'flowbite-svelte'
  </script>

  <Blockquote size='xl'>
  "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
  </Blockquote>
  ```
-->

<script>import { twMerge } from 'tailwind-merge';
export let caption = undefined;
export let src = undefined;
export let srcset = undefined;
export let size = 'max-w-full';
export let alignment = '';
export let imgClass = 'h-auto';
export let figClass = 'max-w-lg';
export let alt = '';
export let effect = '';
export let captionClass = 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400';
</script>

{#if caption}
  <figure class={figClass}>
    <img class={twMerge(imgClass, size, alignment, effect, $$props.class)} {src} {srcset} {alt} />
    <figcaption class={captionClass}>{@html caption}</figcaption>
  </figure>
{:else}
  <img
    {...$$restProps}
    class={twMerge(imgClass, size, alignment, effect, $$props.class)}
    {src}
    {srcset}
    {alt} />
{/if}

<!--
  @component
  ## Features
  [Go to Images](https://flowbite-svelte.com/docs/typography/image)
  - Setup
  - Default image
  - Image caption
  - Rounded corners
  - Image shadow
  - Retina-ready
  - Image card
  - Image effects
  - Alignment
  - Sizes
  ## Props
  @prop caption: string | undefined = undefined;
  @prop src: string | undefined = undefined;
  @prop srcset: string | undefined = undefined;
  @prop size: string = 'max-w-full';
  @prop alignment: string = '';
  @prop imgClass: string = 'h-auto';
  @prop figClass: string = 'max-w-lg';
  @prop alt: string = '';
  @prop effect: string = '';
  @prop captionClass: string = 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400';  
  ## Example
  ```
  <script>
    import { Img } from 'flowbite-svelte';
  </script>
  
  <Img src="/images/examples/image-1@2x.jpg" alt="sample 1"/>
  ```
-->

<script>import { twMerge } from 'tailwind-merge';
export let ratings = [];
export let divClass = 'flex items-center mt-4';
export let labelClass = 'text-sm font-medium text-gray-600 dark:text-gray-500';
export let ratingDivClass = 'mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700';
export let ratingClass = 'h-5 bg-yellow-400 rounded';
export let rightLabelClass = 'text-sm font-medium text-gray-600 dark:text-gray-500';
export let unit = '%';
let divCls = twMerge(divClass, $$props.classDiv);
let labelCls = twMerge(labelClass, $$props.classLabel);
let ratingDivCls = twMerge(ratingDivClass, $$props.classRatingDiv);
let ratingCls = twMerge(ratingClass, $$props.classRating);
let rightLabelCls = twMerge(rightLabelClass, $$props.classRightLabel);
</script>

{#if $$slots.rating}
  <slot name="rating" />
{/if}
{#if $$slots.globalText}
  <slot name="globalText" />
{/if}
{#each ratings as { label, rating }}
  <div class={divCls}>
    <span class={labelCls}>{label}</span>
    <div class={ratingDivCls}>
      <div class={ratingCls} style="width: {rating}%" />
    </div>
    <span class={rightLabelCls}>{rating}{unit}</span>
  </div>
{/each}

<!--
  @component
  ## Features
  [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
  ## Props
  @prop ratings: { label: string; rating: number }[] = [];
  @prop divClass: string = 'flex items-center mt-4';
  @prop labelClass: string = 'text-sm font-medium text-gray-600 dark:text-gray-500';
  @prop ratingDivClass: string = 'mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700';
  @prop ratingClass: string = 'h-5 bg-yellow-400 rounded';
  @prop rightLabelClass: string = 'text-sm font-medium text-gray-600 dark:text-gray-500';
  @prop unit: string = '%';
-->

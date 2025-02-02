<script>import ChevronDown from '../utils/ChevronDown.svelte';
import ChevronUp from '../utils/ChevronUp.svelte';
import { twMerge } from 'tailwind-merge';
import { getContext, onMount } from 'svelte';
import { writable } from 'svelte/store';
import { fade, blur, fly, slide } from 'svelte/transition';
export let open = false;
export let activeClass = undefined;
export let inactiveClass = undefined;
export let defaultClass = 'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700';
export let transitionType = 'slide';
export let transitionParams = {};
export let paddingFlush = 'py-5';
export let paddingDefault = 'p-5';
export let textFlushOpen = 'text-gray-900 dark:text-white';
export let textFlushDefault = 'text-gray-500 dark:text-gray-400';
export let borderClass = 'border-l border-r group-first:border-t';
export let borderOpenClass = 'border-l border-r';
export let borderBottomClass = 'border-b';
export let borderSharedClass = 'border-gray-200 dark:border-gray-700';
export let classActive = undefined;
export let classInactive = undefined;
let activeCls = twMerge(activeClass, classActive);
let inactiveCls = twMerge(inactiveClass, classInactive);
// make a custom transition function that returns the desired transition
const multiple = (node, params) => {
    switch (transitionType) {
        case 'blur':
            return blur(node, params);
        case 'fly':
            return fly(node, params);
        case 'fade':
            return fade(node, params);
        default:
            return slide(node, params);
    }
};
const ctx = getContext('ctx') ?? {};
// single selection
const self = {};
const selected = ctx.selected ?? writable();
let _open = open;
open = false;
onMount(() => {
    if (_open)
        $selected = self;
    // this will trigger unsubscribe on destroy
    return selected.subscribe((x) => (open = x === self));
});
const handleToggle = (_) => selected.set(open ? {} : self);
let buttonClass;
$: buttonClass = twMerge([
    defaultClass,
    ctx.flush || borderClass,
    borderBottomClass,
    borderSharedClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass),
    !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass),
    $$props.class
]);
$: contentClass = twMerge([
    ctx.flush ? paddingFlush : paddingDefault,
    ctx.flush ? '' : borderOpenClass,
    borderBottomClass,
    borderSharedClass
]);
</script>

<h2 class="group">
  <button on:click={handleToggle} type="button" class={buttonClass} aria-expanded={open}>
    <slot name="header" />
    {#if open}
      <slot name="arrowup"><ChevronUp /></slot>
    {:else}
      <slot name="arrowdown"><ChevronDown /></slot>
    {/if}
  </button>
</h2>
{#if open}
  <div transition:multiple={transitionParams}>
    <div class={contentClass}>
      <slot />
    </div>
  </div>
{:else}
  <div class="hidden">
    <div class={contentClass}>
      <slot />
    </div>
  </div>
{/if}

<!--
  @component
  ## Features
  [Go to Accordion page](https://flowbite-svelte.com/docs/components/accordion)
  - Default bottom navigation
  - Menu items with border
  - Application bar example
  - Example with pagination
  - Button group bottom bar
  - Card with bottom bar

  ## Props
  @prop open: boolean = false;
  @prop activeClass: string | undefined = undefined;
  @prop inactiveClass: string | undefined = undefined;
  @prop defaultClass: string = 'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700';
  @prop transitionType: TransitionTypes = 'slide';
  @prop transitionParams: TransitionParamTypes = {};
  @prop paddingFlush: string = 'py-5';
  @prop paddingDefault: string = 'p-5';
  @prop textFlushOpen: string = 'text-gray-900 dark:text-white';
  @prop textFlushDefault: string = 'text-gray-500 dark:text-gray-400';
  @prop borderClass: string = 'border-l border-r group-first:border-t';
  @prop borderOpenClass: string = 'border-l border-r';
  @prop borderBottomClass: string = 'border-b';
  @prop borderSharedClass: string = 'border-gray-200 dark:border-gray-700';

-->

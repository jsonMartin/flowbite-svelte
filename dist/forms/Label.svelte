<script>import { twMerge } from 'tailwind-merge';
export let color = 'gray';
export let defaultClass = 'text-sm font-medium block';
export let show = true;
let node;
const colorClasses = {
    gray: 'text-gray-900 dark:text-gray-300',
    green: 'text-green-700 dark:text-green-500',
    red: 'text-red-700 dark:text-red-500',
    disabled: 'text-gray-400 dark:text-gray-500'
};
// function checkDisabled(node: HTMLLabelElement) {
$: {
    const control = node?.control;
    color = control?.disabled ? 'disabled' : color;
}
$: labelClass = twMerge(defaultClass, colorClasses[color], $$props.class);
</script>

{#if show}
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label bind:this={node} {...$$restProps} class={labelClass}><slot /></label>
{:else}
  <slot />
{/if}

<!--
  @component
  ## Feature
  [Go to Label](https://flowbite-svelte.com/docs/utilities/label)
  ## Props
  @prop color: 'gray' | 'green' | 'red' | 'disabled' = 'gray';
  @prop defaultClass: string = 'text-sm font-medium block';
  @prop show: boolean = true;
  ## Example
  ```
  <script>
    import { Label, Checkbox } from 'flowbite-svelte'
  </script>

  <Label color="red" class="mt-4 flex items-center font-bold italic">
    <Checkbox class="mr-2" /> Your Label
  </Label>
  ```
-->

<script>import { twMerge } from 'tailwind-merge';
import { getContext } from 'svelte';
export let href = '';
export let active = false;
export let activeClass = undefined;
export let nonActiveClass = undefined;
const context = getContext('navbar') ?? {};
let liClass;
$: liClass = twMerge('block py-2 pr-4 pl-3 md:p-0 rounded md:border-0', active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass, $$props.class);
</script>

<li>
  <svelte:element
    this={href ? 'a' : 'div'}
    role={href ? undefined : 'link'}
    {href}
    {...$$restProps}
    on:blur
    on:change
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    class={liClass}>
    <slot />
  </svelte:element>
</li>

<!--
  @component
  ## Features
  [Go to Navbar](https://flowbite-svelte.com/docs/components/navbar)
  ## Props
  @prop href: string = '';
  @prop active: boolean = false;
  @prop activeClass: string | undefined = undefined;
  @prop nonActiveClass: string | undefined = undefined;
  ## Event 
  - on:blur
  - on:change
  - on:click
  - on:focus
  - on:keydown
  - on:keypress
  - on:keyup
  - on:mouseenter
  - on:mouseleave
  - on:mouseover
  ## Example
  ```
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Flowbite </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
  ```
-->

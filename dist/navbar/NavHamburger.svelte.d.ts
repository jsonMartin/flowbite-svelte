import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        btnClass?: string | undefined;
        menuClass?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NavHamburgerProps = typeof __propDef.props;
export type NavHamburgerEvents = typeof __propDef.events;
export type NavHamburgerSlots = typeof __propDef.slots;
/**
 * [Go to Navbar](https://flowbite-svelte.com/docs/components/navbar)
 * ## Props
 * @prop btnClass: string = 'ml-3 md:hidden';
 * ## Example
 * ```
 * <script>
 *   import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
 * </script>
 *
 * <Navbar let:hidden let:toggle>
 *   <NavBrand href="/">
 *     <img
 *       src="/images/flowbite-svelte-icon-logo.svg"
 *       class="mr-3 h-6 sm:h-9"
 *       alt="Flowbite Logo"
 *     />
 *     <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
 *       Flowbite
 *     </span>
 *   </NavBrand>
 *   <NavHamburger on:click={toggle} />
 *   <NavUl {hidden}>
 *     <NavLi href="/" active={true}>Home</NavLi>
 *     <NavLi href="/about">About</NavLi>
 *     <NavLi href="/services">Services</NavLi>
 *     <NavLi href="/pricing">Pricing</NavLi>
 *     <NavLi href="/contact">Contact</NavLi>
 *   </NavUl>
 * </Navbar>
 * ```
 */
export default class NavHamburger extends SvelteComponentTyped<NavHamburgerProps, NavHamburgerEvents, NavHamburgerSlots> {
}
export {};
//# sourceMappingURL=NavHamburger.svelte.d.ts.map
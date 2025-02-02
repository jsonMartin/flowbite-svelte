import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        id?: string | undefined;
        position?: "static" | "fixed" | "absolute" | "relative" | "sticky" | undefined;
        dismissable?: boolean | undefined;
        bannerType?: "default" | "bottom" | "cta" | "signup" | "info" | undefined;
        divClass?: string | undefined;
        innerClass?: string | undefined;
    };
    events: {
        click: MouseEvent;
        change: CustomEvent<any>;
        keydown: CustomEvent<any>;
        keyup: CustomEvent<any>;
        focus: CustomEvent<any>;
        blur: CustomEvent<any>;
        mouseenter: CustomEvent<any>;
        mouseleave: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        default: {};
    };
};
export type BannerProps = typeof __propDef.props;
export type BannerEvents = typeof __propDef.events;
export type BannerSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Banner](https://flowbite-svelte.com/docs/components/banner)
 * - Setup
 * - Default sticky banner
 * - Bottom banner position
 * - Marketing CTA banner
 * - Newsletter sign-up banner
 * - Informational banner
 * ## Props
 * @prop id: string = 'sticky-banner';
 * @prop position: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky' = 'sticky';
 * @prop dismissable: boolean = true;
 * @prop bannerType: 'default' | 'bottom' | 'cta' | 'signup' | 'info' = 'default';
 * @prop divClass: string = 'z-10 flex justify-between p-4 dark:bg-gray-700 dark:border-gray-600';
 * @prop insideDiv: string = 'flex';
 * ## Event
 * - on:click
 * - on:change
 * - on:keydown
 * - on:keyup
 * - on:focus
 * - on:blur
 * - on:mouseenter
 * - on:mouseleave
 * ## Example
 * ```
 * <script>
 *   import { Banner } from "flowbite-svelte"
 * </script>
 *
 * <Banner id="default-banner" position="absolute">
 *   <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
 *     <span class="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600">
 *         <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
 *             <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
 *         </svg>
 *         <span class="sr-only">Light bulb</span>
 *     </span>
 *     <span>New brand identity has been launched for the <a href="https://flowbite.com" class="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">Flowbite Library</a></span>
 *   </p>
 * </Banner>
 * ```
 */
export default class Banner extends SvelteComponentTyped<BannerProps, BannerEvents, BannerSlots> {
}
export {};
//# sourceMappingURL=Banner.svelte.d.ts.map
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        active?: boolean | undefined;
        activeClass?: string | undefined;
        normalClass?: string | undefined;
        large?: boolean | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        click: MouseEvent;
        focus: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        mouseover: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PaginationItemProps = typeof __propDef.props;
export type PaginationItemEvents = typeof __propDef.events;
export type PaginationItemSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Pagination](https://flowbite-svelte.com/docs/components/pagination)
 * ## Props
 * @prop href: string | undefined = undefined;
 * @prop active: boolean = false;
 * @prop activeClass: string = '';
 * @prop normalClass: string = 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
 * ## Event
 * - on:blur
 * - on:change
 * - on:click
 * - on:focus
 * - on:keydown
 * - on:keypress
 * - on:keyup
 * - on:mouseenter
 * - on:mouseleave
 * - on:mouseover
 * ## Example
 * ```
 * <script>
 *   import { page } from '$app/stores';
 *   import { Pagination } from 'flowbite-svelte'
 *
 *   $: activeUrl = $page.url.searchParams.get('page')
 *   let pages = [
 *     { name: 1, href: '/components/pagination?page=1'},
 *     { name: 2, href: '/components/pagination?page=2'},
 *     { name: 3, href: '/components/pagination?page=3'},
 *     { name: 4, href: '/components/pagination?page=4'},
 *     { name: 5, href: '/components/pagination?page=5'}
 *   ];
 *
 *   $:{
 *       pages.forEach((page)=>{
 *       let splitUrl = page.href.split('?');
 *       let queryString = splitUrl.slice(1).join('?');
 *       const hrefParams = new URLSearchParams(queryString);
 *       let hrefValue = hrefParams.get('page');
 *       if ( hrefValue === activeUrl){
 *         page.active=true
 *       }else{
 *         page.active=false
 *       }
 *     })
 *       pages=pages
 *   }
 *
 *   const previous = () => {
 *     alert('Previous btn clicked. Make a call to your server to fetch data.');
 *   };
 *   const next = () => {
 *     alert('Next btn clicked. Make a call to your server to fetch data.');
 *   };
 * </script>
 *
 * <Pagination {pages} on:previous={previous} on:next={next} />
 * ```
 */
export default class PaginationItem extends SvelteComponentTyped<PaginationItemProps, PaginationItemEvents, PaginationItemSlots> {
}
export {};
//# sourceMappingURL=PaginationItem.svelte.d.ts.map
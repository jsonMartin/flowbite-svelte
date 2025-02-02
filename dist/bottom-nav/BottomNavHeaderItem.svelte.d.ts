import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        itemName?: string | undefined;
        active?: boolean | undefined;
        defaultClass?: string | undefined;
        activeClass?: string | undefined;
    };
    events: {
        click: MouseEvent;
        change: Event;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        focus: FocusEvent;
        blur: FocusEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BottomNavHeaderItemProps = typeof __propDef.props;
export type BottomNavHeaderItemEvents = typeof __propDef.events;
export type BottomNavHeaderItemSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Bottom Navigation](https://flowbite-svelte.com/docs/components/bottom-navigation)
 * ## Props
 * @prop itemName: string = '';
 * @prop active: boolean = false;
 * @prop defaultClass: string = 'px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg';
 * @prop activeClass: string = 'px-5 py-1.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg';
 * ## event
 * - on:click
 * - on:change
 * - on:keydown
 * - on:keyup
 * - on:focus
 * - on:blur
 * - on:mouseenter
 * - on:mouseleave
 */
export default class BottomNavHeaderItem extends SvelteComponentTyped<BottomNavHeaderItemProps, BottomNavHeaderItemEvents, BottomNavHeaderItemSlots> {
}
export {};
//# sourceMappingURL=BottomNavHeaderItem.svelte.d.ts.map
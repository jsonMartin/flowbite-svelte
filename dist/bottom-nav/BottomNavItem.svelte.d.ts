import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        btnName?: string | undefined;
        appBtnPosition?: "left" | "middle" | "right" | undefined;
        activeClass?: string | undefined;
        active?: boolean | undefined;
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
    slots: {
        default: {};
    };
};
export type BottomNavItemProps = typeof __propDef.props;
export type BottomNavItemEvents = typeof __propDef.events;
export type BottomNavItemSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Bottom Navigation](https://flowbite-svelte.com/docs/components/bottom-navigation)
 * ## Props
 * @prop btnName: string = '';
 * @prop appBtnPosition: 'left' | 'middle' | 'right' | 'custom' = 'custom';
 * @prop btnDefault: string = '';
 * @prop spanDefault: string = '';
 * @prop btnCustom: string = '';
 * @prop spanCustom: string = '';
 * @prop appCustom: string = '';
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
export default class BottomNavItem extends SvelteComponentTyped<BottomNavItemProps, BottomNavItemEvents, BottomNavItemSlots> {
}
export {};
//# sourceMappingURL=BottomNavItem.svelte.d.ts.map
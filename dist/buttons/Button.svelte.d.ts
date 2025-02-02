import { SvelteComponentTyped } from "svelte";
import type { ButtonType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        pill?: boolean | undefined;
        outline?: boolean | undefined;
        size?: "xs" | "sm" | "lg" | "xl" | "md" | undefined;
        href?: string | undefined;
        type?: ButtonType | undefined;
        color?: "red" | "yellow" | "green" | "purple" | "blue" | "light" | "dark" | "primary" | "none" | "alternative" | undefined;
        shadow?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
        change: Event;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        touchstart: TouchEvent;
        touchend: TouchEvent;
        touchcancel: TouchEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Button](https://flowbite-svelte.com/docs/components/button)
 * - Setup
 * - Default button
 * - Button with link
 * - Button pills
 * - Gradient monochrome
 * - Gradient duotone
 * - Gradient outline
 * - Colored shadows
 * - Outline buttons
 * - Button sizes
 * - Buttons with icon
 * - Button with label
 * - Icon buttons
 * - Loader
 * - Disabled
 * ## Props
 * @prop pill: boolean = false;
 * @prop outline: boolean = false;
 * @prop size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = group ? 'sm' : 'md';
 * @prop href: string | undefined = undefined;
 * @prop btnClass: string | undefined = undefined;
 * @prop type: ButtonType = 'button';
 * @prop color: ButtonColor = group ? (outline ? 'dark' : 'alternative') : 'primary';
 * @prop shadow: boolean = false;
 * ## Event
 * - on:click
 * - on:change
 * - on:keydown
 * - on:keyup
 * - on:touchstart
 * - on:touchend
 * - on:touchcancel
 * - on:mouseenter
 * - on:mouseleave
 * ## Example
 * ```
 * <script>
 *   import { Button } from 'flowbite-svelte';
 * </script>
 *
 * <Button>Default</Button>
 * <Button color="alternative">Alternative</Button>
 * <Button color="dark">Dark</Button>
 * <Button color="light">Light</Button>
 * ```
 */
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
//# sourceMappingURL=Button.svelte.d.ts.map
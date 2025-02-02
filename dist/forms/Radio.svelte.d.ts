import { SvelteComponentTyped } from "svelte";
export declare const labelClass: (inline: boolean, extraClass: string) => string;
export declare let spacing: string;
export declare const inputClass: (custom: boolean, color: FormColorType, rounded: boolean, tinted: boolean, extraClass: string) => string;
import type { FormColorType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: FormColorType | undefined;
        custom?: boolean | undefined;
        inline?: boolean | undefined;
        group?: string | number | undefined;
        value?: string | number | undefined;
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
        paste: ClipboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type RadioProps = typeof __propDef.props;
export type RadioEvents = typeof __propDef.events;
export type RadioSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Radio](https://flowbite-svelte.com/docs/forms/radio)
 * - Setup
 * - Radio examples
 * - Disabled state
 * - Alternative syntax
 * - Radio with a link
 * - Helper text
 * - Bordered
 * - Radio list group
 * - Horizontal list group
 * - Radio in dropdown
 * - Inline layout
 * - Colors
 * - Advanced layout
 * ## Props
 * @prop color: FormColorType = 'primary';
 * @prop custom: boolean = false;
 * @prop inline: boolean = false;
 * @prop group: number | string = '';
 * @prop value: number | string = '';
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
 * - on:paste
 * ## Example
 * ```
 * <script>
 *   import { Radio } from 'flowbite-svelte'
 * </script>
 *
 * <Radio name="example">Default radio</Radio>
 * <Radio name="example">Checked state</Radio>
 * ```
 */
export default class Radio extends SvelteComponentTyped<RadioProps, RadioEvents, RadioSlots> {
}
export {};
//# sourceMappingURL=Radio.svelte.d.ts.map
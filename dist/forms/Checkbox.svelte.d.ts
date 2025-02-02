import { SvelteComponentTyped } from "svelte";
import type { FormColorType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: FormColorType | undefined;
        custom?: boolean | undefined;
        inline?: boolean | undefined;
        group?: (string | number)[] | undefined;
        value?: string | number | undefined;
        checked?: boolean | undefined;
        spacing?: string | undefined;
    };
    events: {
        keyup: KeyboardEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        focus: FocusEvent;
        blur: FocusEvent;
        click: MouseEvent;
        mouseover: MouseEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        paste: ClipboardEvent;
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Checkbox](https://flowbite-svelte.com/docs/forms/checkbox)
 * - Setup
 * - Checkbox examples
 * - Disabled state
 * - Alternative syntax
 * - Checkbox with a link
 * - Helper text
 * - Bordered
 * - Checkbox list group
 * - Horizontal list group
 * - Checkbox dropdown
 * - Inline layout
 * - Colors
 * - Advanced layout
 * - Group variable
 * ## Props
 * @prop color: FormColorType = 'primary';
 * @prop custom: boolean = false;
 * @prop inline: boolean = false;
 * @prop group: (string | number)[] = [];
 * @prop value: string | number = 'on';
 * @prop checked: boolean | undefined = undefined;
 * ## Event
 * - on:keyup
 * - on:keydown
 * - on:keypress
 * - on:focus
 * - on:blur
 * - on:click
 * - on:mouseover
 * - on:mouseenter
 * - on:mouseleave
 * - on:paste
 * - on:change
 * ## Example
 * ```
 * <script>
 *   import { Checkbox } from 'flowbite-svelte'
 * </script>
 *
 * <Checkbox>Default checkbox</Checkbox>
 * <Checkbox checked>Checked state</Checkbox>
 * ```
 */
export default class Checkbox extends SvelteComponentTyped<CheckboxProps, CheckboxEvents, CheckboxSlots> {
}
export {};
//# sourceMappingURL=Checkbox.svelte.d.ts.map
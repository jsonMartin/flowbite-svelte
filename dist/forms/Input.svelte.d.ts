import { SvelteComponentTyped } from "svelte";
import type { SizeType, FormSizeType } from '../types';
export declare function clampSize(s: SizeType): "sm" | "lg" | "md";
import type { InputType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        type?: InputType | undefined;
        value?: any;
        size?: FormSizeType | undefined;
        defaultClass?: string | undefined;
        color?: "red" | "green" | "base" | undefined;
        floatClass?: string | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        click: MouseEvent;
        contextmenu: MouseEvent;
        focus: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseover: MouseEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        paste: ClipboardEvent;
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        left: {};
        default: {
            props: {
                class: string;
            };
        };
        right: {};
    };
};
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Input Fields](https://flowbite-svelte.com/docs/forms/input-field)
 * - Setup
 * - Input fields
 * - Input sizes
 * - Disabled state
 * - Validation
 * - Input with icon
 * - Input group
 * - Icon click handler
 * - Helper text
 * - Number input
 * - Search input
 * - Dropdown
 * - Advanced usage
 * ## Props
 * @prop type: InputType = 'text';
 * @prop value: any = '';
 * @prop size: FormSizeType | undefined = undefined;
 * @prop defaultClass: string = 'block w-full disabled:cursor-not-allowed disabled:opacity-50';
 * @prop color: 'base' | 'green' | 'red' = 'base';
 * ## Event
 * - on:blur
 * - on:change
 * - on:click
 * - on:contextmenu
 * - on:focus
 * - on:keydown
 * - on:keypress
 * - on:keyup
 * - on:mouseover
 * - on:mouseenter
 * - on:mouseleave
 * - on:paste
 * - on:input
 * ## Example
 * ```
 * <form>
 *   <div class="grid gap-6 mb-6 md:grid-cols-2">
 *     <div>
 *       <Label for="first_name" class="mb-2">First name</Label>
 *       <Input type="text" id="first_name" placeholder="John" required  />
 *     </div>
 *     <div>
 *       <Label for="last_name" class="mb-2">Last name</Label>
 *       <Input type="text" id="last_name" placeholder="Doe" required />
 *     </div>
 *     <div>
 *       <Label for="company" class="mb-2">Company</Label>
 *       <Input type="text" id="company" placeholder="Flowbite" required />
 *     </div>
 *   </div>
 *   <Button type="submit">Submit</Button>
 * </form>
 * ```
 */
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
}
export {};
//# sourceMappingURL=Input.svelte.d.ts.map
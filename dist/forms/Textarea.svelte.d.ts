import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: any;
        wrappedClass?: string | undefined;
        unWrappedClass?: string | undefined;
        innerWrappedClass?: string | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        click: MouseEvent;
        contextmenu: MouseEvent;
        focus: FocusEvent;
        input: Event;
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
        header: {};
        footer: {};
    };
};
export type TextareaProps = typeof __propDef.props;
export type TextareaEvents = typeof __propDef.events;
export type TextareaSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Textarea](https://flowbite-svelte.com/docs/forms/textarea)
 * - Setup
 * - Textarea example
 * - WYSIWYG Editor
 * - Comment box
 * - Chatroom input
 * ## Props
 * @prop value: string = '';
 * @prop wrappedClass: string = 'block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0';
 * @prop unWrappedClass: string = 'p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500';
 * ## Event
 * - on:blur
 * - on:change
 * - on:click
 * - on:contextmenu
 * - on:focus
 * - on:input
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
 *   import { Textarea, Label } from 'flowbite-svelte'
 * </script>
 *
 * <Label for="textarea-id" class="mb-2">Your message</Label>
 * <Textarea id="textarea-id" placeholder="Your message" rows="4" name="message"/>
 * ```
 */
export default class Textarea extends SvelteComponentTyped<TextareaProps, TextareaEvents, TextareaSlots> {
}
export {};
//# sourceMappingURL=Textarea.svelte.d.ts.map
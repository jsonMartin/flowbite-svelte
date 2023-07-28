import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        kbdClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type KbdProps = typeof __propDef.props;
export type KbdEvents = typeof __propDef.events;
export type KbdSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to KBD](https://flowbite-svelte.com/docs/components/kbd)
 * - Setup
 * - Default KBD
 * - KBD inside text
 * - KBD inside table
 * - Arrow keys
 * - Letter keys
 * - Number keys
 * - Function keys
 * ## Props
 * @prop kbdClass: string = 'text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500';
 * ## Example
 * ```
 * <script>
 *   import { Kbd } from 'flowbite-svelte'
 * </script>
 *
 * <Kbd class='px-2 py-1.5'>Shift</Kbd>
 * <Kbd class='px-2 py-1.5'>Ctrl</Kbd>
 * <Kbd class='px-2 py-1.5'>Tab</Kbd>
 * <Kbd class='px-2 py-1.5'>Caps Lock</Kbd>
 * <Kbd class='px-2 py-1.5'>Esc</Kbd>
 * <Kbd class='px-4 py-1.5'>Spacebar</Kbd>
 * <Kbd class='px-2 py-1.5'>Enter</Kbd>
 * ```
 */
export default class Kbd extends SvelteComponentTyped<KbdProps, KbdEvents, KbdSlots> {
}
export {};
//# sourceMappingURL=Kbd.svelte.d.ts.map
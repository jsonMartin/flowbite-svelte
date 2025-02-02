import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: "default" | "custom" | "small" | "large" | undefined;
        group?: (string | number)[] | undefined;
        value?: string | number | undefined;
        checked?: boolean | undefined;
        customSize?: string | undefined;
    };
    events: {
        click: MouseEvent;
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ToggleProps = typeof __propDef.props;
export type ToggleEvents = typeof __propDef.events;
export type ToggleSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Toggle](https://flowbite-svelte.com/docs/forms/toggle)
 * - Setup
 * - Toggle examples
 * - Colors
 * - Sizes
 * ## Props
 * @prop size: 'small' | 'default' | 'large' | 'custom' = 'default';
 * @prop group: (string | number)[] = [];
 * @prop value: string | number = '';
 * @prop checked: boolean | undefined = undefined;
 * @prop customSize: string = '';
 * ## Example
 * ```
 * <script>
 *   import { Toggle } from 'flowbite-svelte'
 * </script>
 *
 * <Toggle>Toggle me</Toggle>
 * <Toggle checked={true}>Checked toggle</Toggle>
 * <Toggle disabled>Disabled toggle</Toggle>
 * <Toggle checked disabled>Disabled checked</Toggle>
 * ```
 */
export default class Toggle extends SvelteComponentTyped<ToggleProps, ToggleEvents, ToggleSlots> {
}
export {};
//# sourceMappingURL=Toggle.svelte.d.ts.map
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        divider?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DropdownHeaderProps = typeof __propDef.props;
export type DropdownHeaderEvents = typeof __propDef.events;
export type DropdownHeaderSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Dropdown](https://flowbite-svelte.com/docs/components/dropdown)
 * ## Props
 * @prop divClass: string = 'py-2 px-4 text-gray-700 dark:text-white';
 * @prop divider: boolean = true;
 */
export default class DropdownHeader extends SvelteComponentTyped<DropdownHeaderProps, DropdownHeaderEvents, DropdownHeaderSlots> {
}
export {};
//# sourceMappingURL=DropdownHeader.svelte.d.ts.map
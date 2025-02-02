import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        rounded?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlaceholderProps = typeof __propDef.props;
export type PlaceholderEvents = typeof __propDef.events;
export type PlaceholderSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Avatar](https://flowbite-svelte.com/docs/components/avatar)
 * @prop rounded: boolean = false;
 */
export default class Placeholder extends SvelteComponentTyped<PlaceholderProps, PlaceholderEvents, PlaceholderSlots> {
}
export {};
//# sourceMappingURL=Placeholder.svelte.d.ts.map
import { SvelteComponentTyped } from "svelte";
import type { Placement } from '@floating-ui/dom';
declare const __propDef: {
    props: {
        placement?: Placement | undefined;
        aligned?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ChevronProps = typeof __propDef.props;
export type ChevronEvents = typeof __propDef.events;
export type ChevronSlots = typeof __propDef.slots;
/**
 * ## Props
 * @prop placement: Placement = 'bottom';
 * @prop aligned: boolean = false;
 */
export default class Chevron extends SvelteComponentTyped<ChevronProps, ChevronEvents, ChevronSlots> {
}
export {};
//# sourceMappingURL=Chevron.svelte.d.ts.map
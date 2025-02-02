import { SvelteComponentTyped } from "svelte";
import type { Placement } from '@floating-ui/dom';
export interface SpeedCtxType {
    pill: boolean;
    tooltip: Placement | 'none';
    textOutside: boolean;
}
declare const __propDef: {
    props: {
        [x: string]: any;
        defaultClass?: string | undefined;
        popperDefaultClass?: string | undefined;
        placement?: Placement | undefined;
        pill?: boolean | undefined;
        tooltip?: "none" | Placement | undefined;
        trigger?: "click" | "hover" | undefined;
        textOutside?: boolean | undefined;
        id?: string | undefined;
        name?: string | undefined;
        gradient?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
    };
};
export type SpeedDialProps = typeof __propDef.props;
export type SpeedDialEvents = typeof __propDef.events;
export type SpeedDialSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Speed Dial](https://flowbite-svelte.com/docs/components/speed-dial)
 * - Default speed dial
 * - Colors
 * - Square speed dial
 * - Text inside button
 * - Text outside button
 * - Dropdown menu
 * - Alternative menu
 * - Alignment - Position
 * - Triggering
 * ## Props
 * @prop defaultClass: string = 'fixed right-6 bottom-6';
 * @prop popperDefaultClass: string = 'flex items-center mb-4 gap-2';
 * @prop placement: Placement = 'top';
 * @prop pill: boolean = true;
 * @prop tooltip: Placement | 'none' = 'left';
 * @prop trigger: 'hover' | 'click' = 'hover';
 * @prop textOutside: boolean = false;
 * @prop id: string = generateId();
 * @prop name: string = 'Open actions menu';
 * @prop gradient: boolean = false;
 * ## Example
 * ```
 * <script>
 *   import { SpeedDial, SpeedDialButton } from 'flowbite-svelte'
 * </script>
 *
 * <SpeedDial defaultClass="absolute right-6 bottom-6">
 *     <SpeedDialButton name="Share">
 *         <svg aria-hidden="true" class="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
 *     </SpeedDialButton>
 *     <SpeedDialButton name="Print">
 *         <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"></path></svg>
 *     </SpeedDialButton>
 *     <SpeedDialButton name="Download">
 *         <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z" fill-rule="evenodd"></path></svg>
 *     </SpeedDialButton>
 *     <SpeedDialButton name="Copy">
 *         <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path></svg>
 *     </SpeedDialButton>
 * </SpeedDial>
 * ```
 */
export default class SpeedDial extends SvelteComponentTyped<SpeedDialProps, SpeedDialEvents, SpeedDialSlots> {
}
export {};
//# sourceMappingURL=SpeedDial.svelte.d.ts.map
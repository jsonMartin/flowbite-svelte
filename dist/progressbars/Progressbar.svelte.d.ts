import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        progress?: string | undefined;
        size?: string | undefined;
        labelInside?: boolean | undefined;
        labelOutside?: string | undefined;
        color?: "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "blue" | "primary" | undefined;
        labelInsideClass?: string | undefined;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProgressbarProps = typeof __propDef.props;
export type ProgressbarEvents = typeof __propDef.events;
export type ProgressbarSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Progress Bar](https://flowbite-svelte.com/docs/components/progress)
 * ## Props
 * @prop progress: string = '45';
 * @prop size: string = 'h-2.5';
 * @prop labelInside: boolean = false;
 * @prop labelOutside: string = '';
 * @prop color: 'primary'| 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'purple' | 'indigo' = 'primary';
 * @prop labelInsideClass: string = 'text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full';
 * ## Example
 * ```
 * <script>
 *   import { Progressbar } from 'flowbite-svelte'
 * </script>
 *
 * <Progressbar progress="50" />
 * ```
 */
export default class Progressbar extends SvelteComponentTyped<ProgressbarProps, ProgressbarEvents, ProgressbarSlots> {
}
export {};
//# sourceMappingURL=Progressbar.svelte.d.ts.map
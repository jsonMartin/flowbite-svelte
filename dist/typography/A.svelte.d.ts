import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        color?: string | undefined;
        aClass?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type AProps = typeof __propDef.props;
export type AEvents = typeof __propDef.events;
export type ASlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Link](https://flowbite-svelte.com/docs/typography/link)
 * - Setup
 * - Default link
 * - Button
 * - Paragraph
 * - Icon link
 * - CTA link
 * - Card link
 * - Image link
 * ## Props
 * @prop italic: boolean = false;
 * @prop underline: boolean = false;
 * @prop linethrough: boolean = false;
 * @prop uppercase: boolean = false;
 * @prop gradient: boolean = false;
 * @prop highlight: boolean = false;
 * @prop highlightClass: string = 'text-blue-600 dark:text-blue-500';
 * @prop decorationClass: string = 'decoration-2 decoration-blue-400 dark:decoration-blue-600';
 * @prop gradientClass: string =
 *   'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400';
 * ## Example
 * ```
 * <script>
 *   import { A } from 'flowbite-svelte';
 * </script>
 *
 * <A class="font-medium hover:underline">Read more</A>
 * ```
 */
export default class A extends SvelteComponentTyped<AProps, AEvents, ASlots> {
}
export {};
//# sourceMappingURL=A.svelte.d.ts.map
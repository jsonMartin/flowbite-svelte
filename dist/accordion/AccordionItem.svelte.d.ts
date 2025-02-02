import { SvelteComponentTyped } from "svelte";
import type { TransitionTypes, TransitionParamTypes } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        open?: boolean | undefined;
        activeClass?: string | undefined;
        inactiveClass?: string | undefined;
        defaultClass?: string | undefined;
        transitionType?: TransitionTypes | undefined;
        transitionParams?: TransitionParamTypes | undefined;
        paddingFlush?: string | undefined;
        paddingDefault?: string | undefined;
        textFlushOpen?: string | undefined;
        textFlushDefault?: string | undefined;
        borderClass?: string | undefined;
        borderOpenClass?: string | undefined;
        borderBottomClass?: string | undefined;
        borderSharedClass?: string | undefined;
        classActive?: string | undefined;
        classInactive?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        arrowup: {};
        arrowdown: {};
        default: {};
    };
};
export type AccordionItemProps = typeof __propDef.props;
export type AccordionItemEvents = typeof __propDef.events;
export type AccordionItemSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Accordion page](https://flowbite-svelte.com/docs/components/accordion)
 * - Default bottom navigation
 * - Menu items with border
 * - Application bar example
 * - Example with pagination
 * - Button group bottom bar
 * - Card with bottom bar
 *
 * ## Props
 * @prop open: boolean = false;
 * @prop activeClass: string | undefined = undefined;
 * @prop inactiveClass: string | undefined = undefined;
 * @prop defaultClass: string = 'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700';
 * @prop transitionType: TransitionTypes = 'slide';
 * @prop transitionParams: TransitionParamTypes = {};
 * @prop paddingFlush: string = 'py-5';
 * @prop paddingDefault: string = 'p-5';
 * @prop textFlushOpen: string = 'text-gray-900 dark:text-white';
 * @prop textFlushDefault: string = 'text-gray-500 dark:text-gray-400';
 * @prop borderClass: string = 'border-l border-r group-first:border-t';
 * @prop borderOpenClass: string = 'border-l border-r';
 * @prop borderBottomClass: string = 'border-b';
 * @prop borderSharedClass: string = 'border-gray-200 dark:border-gray-700';
 */
export default class AccordionItem extends SvelteComponentTyped<AccordionItemProps, AccordionItemEvents, AccordionItemSlots> {
}
export {};
//# sourceMappingURL=AccordionItem.svelte.d.ts.map
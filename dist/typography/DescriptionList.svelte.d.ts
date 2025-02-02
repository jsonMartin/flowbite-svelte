import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        tag: 'dt' | 'dd';
        dtClass?: string | undefined;
        ddClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DescriptionListProps = typeof __propDef.props;
export type DescriptionListEvents = typeof __propDef.events;
export type DescriptionListSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Description List](https://flowbite-svelte.com/docs/typography/list#Description_List)
 * - Setup
 * - Unordored list
 * - Icons
 * - Nested
 * - Unstyled
 * - Ordered list
 * - Nested
 * - Description List
 * - List with icon
 * - Advanced layout
 * - Horizontal List
 * ## Props
 * @prop tag: 'dt' | 'dd';
 * @prop dtClass: string = 'text-gray-500 md:text-lg dark:text-gray-400';
 * @prop ddClass: string = 'text-lg font-semibold';
 * ## Example
 * ```
 * <script>
 *   import { List, Li, DescriptionList } from 'flowbite-svelte';
 * </script>
 *
 * <List tag="dl" color="text-gray-900 dark:text-white divide-y divide-gray-200  dark:divide-gray-700">
 *   <div class="flex flex-col pb-3">
 *     <DescriptionList tag="dt" class="mb-1">Email address</DescriptionList>
 *     <DescriptionList tag="dd">yourname@flowbite.com</DescriptionList>
 *   </div>
 *   <div class="flex flex-col pb-3">
 *     <DescriptionList tag="dt" class="mb-1">Home address</DescriptionList>
 *     <DescriptionList tag="dd">92 Miles Drive, Newark, NJ 07103, California, USA</DescriptionList>
 *   </div>
 *   <div class="flex flex-col pb-3">
 *     <DescriptionList tag="dt" class="mb-1">Phone number</DescriptionList>
 *     <DescriptionList tag="dd">+00 123 456 789 / +12 345 678</DescriptionList>
 *   </div>
 * </List>
 * ```
 */
export default class DescriptionList extends SvelteComponentTyped<DescriptionListProps, DescriptionListEvents, DescriptionListSlots> {
}
export {};
//# sourceMappingURL=DescriptionList.svelte.d.ts.map
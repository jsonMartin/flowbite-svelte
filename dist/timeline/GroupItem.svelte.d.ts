import { SvelteComponentTyped } from "svelte";
import type { GroupTimelineType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        timelines: GroupTimelineType[];
        aClass?: string | undefined;
        imgClass?: string | undefined;
        divClass?: string | undefined;
        titleClass?: string | undefined;
        spanClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GroupItemProps = typeof __propDef.props;
export type GroupItemEvents = typeof __propDef.events;
export type GroupItemSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Grouped Timeline](https://flowbite-svelte.com/docs/components/timeline#Grouped_timeline)
 * - Setup
 * - Default timeline
 * - Vertical Timeline
 * - Horizontal Timeline
 * - Activity Log
 * - Grouped timeline
 * ## Props
 * @prop timelines: GroupTimelineType[];
 * @prop aClass: string
 * @prop imgClass: string;
 * @prop divClass: string;
 * @prop titleClass: string;
 * @prop spanClass: string;
 *
 * ## Example
 * ```
 * <script>
 *   import { Group, GroupItem } from 'flowbite-svelte';
 *   let groupTimelines = [
 *     {
 *       title:
 *         '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
 *       src: '/images/profile-picture-1.webp',
 *       alt: 'alt here',
 *       href: '/',
 *       isPrivate: true,
 *       comment: '"I wanted to share a webinar zeroheight."'
 *     },
 *     {
 *       title:
 *         '<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
 *       src: '/images/profile-picture-2.webp',
 *       alt: 'alt here',
 *       href: '/',
 *       isPrivate: true,
 *       comment: '"I wanted to share a webinar zeroheight."'
 *     }
 *   ];
 * </script>
 *
 * <Group date="January 13th, 2022">
 *   <GroupItem timelines={groupTimelines} />
 * </Group>
 * ```
 */
export default class GroupItem extends SvelteComponentTyped<GroupItemProps, GroupItemEvents, GroupItemSlots> {
}
export {};
//# sourceMappingURL=GroupItem.svelte.d.ts.map
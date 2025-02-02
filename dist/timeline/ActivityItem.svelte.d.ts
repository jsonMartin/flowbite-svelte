import { SvelteComponentTyped } from "svelte";
import type { ActivityType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        activities: ActivityType[];
        liClass?: string | undefined;
        spanClass?: string | undefined;
        imgClass?: string | undefined;
        outerDivClass?: string | undefined;
        innerDivClass?: string | undefined;
        timeClass?: string | undefined;
        titleClass?: string | undefined;
        textClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ActivityItemProps = typeof __propDef.props;
export type ActivityItemEvents = typeof __propDef.events;
export type ActivityItemSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Timeline Activity Log](https://flowbite-svelte.com/docs/components/timeline#Activity_Log)
 * - Setup
 * - Default timeline
 * - Vertical Timeline
 * - Horizontal Timeline
 * - Activity Log
 * - Grouped timeline
 * ## Props
 * @prop activities: ActivityType[];
 * @prop liClass: string';
 * @prop spanClass: string;
 * @prop imgClass: string;
 * @prop outerDivClass: string;
 * @prop innerDivClass: string;
 * @prop timeClass
 * @prop titleClass
 * @prop textClass
 * ## Example
 * ```
 * <script>
 *   import { Activity, ActivityItem } from 'flowbite-svelte';
 *   let activities = [
 *     {
 *       title:
 *         'Bonnie moved <a href="/" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
 *       date: 'just now',
 *       alt: 'image alt here',
 *       src: '/images/profile-picture-2.webp'
 *     },
 *     {
 *       title: 'We don’t serve their kind here! What? Your droids. ',
 *       date: '2 hours ago',
 *       alt: 'image alt here',
 *       src: '/images/profile-picture-2.webp',
 *       text: 'The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. '
 *     },
 *     {
 *       title: 'They’ll have to wait outside. We don’t want them here. ',
 *       date: '1 day ago',
 *       alt: 'image alt here',
 *       src: '/images/profile-picture-3.webp'
 *     }
 *   ];
 * </script>
 *
 * <Activity>
 *   <ActivityItem {activities} />
 * </Activity>
 * ```
 */
export default class ActivityItem extends SvelteComponentTyped<ActivityItemProps, ActivityItemEvents, ActivityItemSlots> {
}
export {};
//# sourceMappingURL=ActivityItem.svelte.d.ts.map
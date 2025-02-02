import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ratings?: {
            label: string;
            rating: number;
        }[] | undefined;
        divClass?: string | undefined;
        labelClass?: string | undefined;
        ratingDivClass?: string | undefined;
        ratingClass?: string | undefined;
        rightLabelClass?: string | undefined;
        unit?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        rating: {};
        globalText: {};
    };
};
export type AdvancedRatingProps = typeof __propDef.props;
export type AdvancedRatingEvents = typeof __propDef.events;
export type AdvancedRatingSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
 * ## Props
 * @prop ratings: { label: string; rating: number }[] = [];
 * @prop divClass: string = 'flex items-center mt-4';
 * @prop labelClass: string = 'text-sm font-medium text-gray-600 dark:text-gray-500';
 * @prop ratingDivClass: string = 'mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700';
 * @prop ratingClass: string = 'h-5 bg-yellow-400 rounded';
 * @prop rightLabelClass: string = 'text-sm font-medium text-gray-600 dark:text-gray-500';
 * @prop unit: string = '%';
 */
export default class AdvancedRating extends SvelteComponentTyped<AdvancedRatingProps, AdvancedRatingEvents, AdvancedRatingSlots> {
}
export {};
//# sourceMappingURL=AdvancedRating.svelte.d.ts.map
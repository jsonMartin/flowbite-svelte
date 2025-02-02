import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        thumbImg?: string | undefined;
        altTag?: string | undefined;
        titleLink?: string | undefined;
        id: number;
        thumbWidth?: number | undefined;
        selected?: boolean | undefined;
        thumbClass?: string | undefined;
        thumbBtnClass?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ThumbnailProps = typeof __propDef.props;
export type ThumbnailEvents = typeof __propDef.events;
export type ThumbnailSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Carousel](https://flowbite-svelte.com/docs/components/carousel)
 * ## Props
 * @prop thumbImg: string = '';
 * @prop altTag: string = '';
 * @prop titleLink: string = '';
 * @prop id: number;
 * @prop thumbWidth: number;
 * @prop selected: boolean = false;
 */
export default class Thumbnail extends SvelteComponentTyped<ThumbnailProps, ThumbnailEvents, ThumbnailSlots> {
}
export {};
//# sourceMappingURL=Thumbnail.svelte.d.ts.map
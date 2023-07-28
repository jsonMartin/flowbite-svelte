import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        image?: string | undefined;
        altTag?: string | undefined;
        attr?: string | undefined;
        slideClass?: string | undefined;
        imgClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SlideProps = typeof __propDef.props;
export type SlideEvents = typeof __propDef.events;
export type SlideSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Carousel](https://flowbite-svelte.com/docs/components/carousel)
 * ## Props
 * @prop image: string = '';
 * @prop altTag: string = '';
 * @prop attr: string = '';
 * @prop slideClass: string = '';
 */
export default class Slide extends SvelteComponentTyped<SlideProps, SlideEvents, SlideSlots> {
}
export {};
//# sourceMappingURL=Slide.svelte.d.ts.map
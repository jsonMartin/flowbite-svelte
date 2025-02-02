import { SvelteComponentTyped } from "svelte";
import type { TransitionTypes, TransitionParamTypes } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        showIndicators?: boolean | undefined;
        showCaptions?: boolean | undefined;
        showThumbs?: boolean | undefined;
        images: any[];
        slideControls?: boolean | undefined;
        transitionType?: TransitionTypes | undefined;
        transitionParams?: TransitionParamTypes | undefined;
        loop?: boolean | undefined;
        duration?: number | undefined;
        divClass?: string | undefined;
        indicatorDivClass?: string | undefined;
        captionClass?: string | undefined;
        indicatorClass?: string | undefined;
        slideClass?: string | undefined;
        transitionDivClass?: string | undefined;
        imgClass?: string | undefined;
        thumbClass?: string | undefined;
        thumbDivClass?: string | undefined;
        thumbBtnClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        previous: {};
        next: {};
    };
};
export type CarouselTransitionProps = typeof __propDef.props;
export type CarouselTransitionEvents = typeof __propDef.events;
export type CarouselTransitionSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Carousel](https://flowbite-svelte.com/docs/components/carousel)
 * - Setup
 * - Default Carousel
 * - Loop
 * - Without thumbnails
 * - Without caption
 * - Without indicators
 * - Without slide controllers
 * - Custom slide controllers
 * - Carousel transition
 * - Loop
 * - Fly example
 * - Slide example
 * ## Props
 * @prop showIndicators: boolean = true;
 * @prop showCaptions: boolean = true;
 * @prop showThumbs: boolean = true;
 * @prop images: any[];
 * @prop slideControls: boolean = true;
 * @prop transitionType: TransitionTypes = 'fade';
 * @prop transitionParams: TransitionParamTypes = {};
 * @prop loop: boolean = false;
 * @prop duration: number = 2000;
 * @prop thumbClass: string = 'opacity-40';
 * ### Carousel
 * @prop divClass: string = 'overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96';
 * @prop indicatorDivClass: string = 'flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2';
 * ### Caption
 * @prop captionClass: string = 'h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center';
 * ### Indicator
 * @prop indicatorClass: string = 'w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60';
 * ## Example
 * ```
 * <script>
 *   import { CarouselTransition } from 'flowbite-svelte'
 *   import { images } from './imageData/+server.js';
 * </script>
 *
 * <div class="max-w-4xl">
 *   <CarouselTransition {images} transitionType="fade" transitionParams="{{delay: 300, duration: 500}}"/>
 * </div>
 * ```
 */
export default class CarouselTransition extends SvelteComponentTyped<CarouselTransitionProps, CarouselTransitionEvents, CarouselTransitionSlots> {
}
export {};
//# sourceMappingURL=CarouselTransition.svelte.d.ts.map
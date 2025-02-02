import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        download?: any;
        href?: string | null | undefined;
        hreflang?: string | null | undefined;
        media?: string | null | undefined;
        ping?: string | null | undefined;
        rel?: string | null | undefined;
        target?: import("svelte/elements").HTMLAttributeAnchorTarget | null | undefined;
        type?: string | null | undefined;
        referrerpolicy?: ReferrerPolicy | null | undefined;
        'sapper:noscroll'?: true | null | undefined;
        'sapper:prefetch'?: true | null | undefined;
        accesskey?: string | null | undefined;
        autofocus?: boolean | null | undefined;
        class?: string | undefined;
        contenteditable?: import("svelte/elements").Booleanish | "inherit" | null | undefined;
        contextmenu?: string | null | undefined;
        dir?: string | null | undefined;
        draggable?: import("svelte/elements").Booleanish | null | undefined;
        enterkeyhint?: "search" | "enter" | "done" | "go" | "next" | "previous" | "send" | null | undefined;
        hidden?: boolean | null | undefined;
        id?: string | null | undefined;
        lang?: string | null | undefined;
        part?: string | null | undefined;
        placeholder?: string | null | undefined;
        slot?: string | null | undefined;
        spellcheck?: import("svelte/elements").Booleanish | null | undefined;
        style?: string | null | undefined;
        tabindex?: number | null | undefined;
        title?: string | null | undefined;
        translate?: "" | "yes" | "no" | null | undefined;
        inert?: boolean | null | undefined;
        radiogroup?: string | null | undefined;
        role?: string | undefined;
        about?: string | null | undefined;
        datatype?: string | null | undefined;
        inlist?: any;
        prefix?: string | null | undefined;
        property?: string | null | undefined;
        resource?: string | null | undefined;
        typeof?: string | null | undefined;
        vocab?: string | null | undefined;
        autocapitalize?: string | null | undefined;
        autocorrect?: string | null | undefined;
        autosave?: string | null | undefined;
        color?: "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "light" | "dark" | "default" | "dropdown" | "navbar" | "navbarUl" | "form" | "primary" | "orange" | "none" | undefined;
        itemprop?: string | null | undefined;
        itemscope?: boolean | null | undefined;
        itemtype?: string | null | undefined;
        itemid?: string | null | undefined;
        itemref?: string | null | undefined;
        results?: number | null | undefined;
        security?: string | null | undefined;
        unselectable?: "on" | "off" | null | undefined;
        inputmode?: "none" | "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | null | undefined;
        is?: string | null | undefined;
        'bind:innerHTML'?: string | null | undefined;
        'bind:textContent'?: string | null | undefined;
        'bind:innerText'?: string | null | undefined;
        'bind:contentRect'?: DOMRectReadOnly | null | undefined;
        'bind:contentBoxSize'?: ResizeObserverSize[] | null | undefined;
        'bind:borderBoxSize'?: ResizeObserverSize[] | null | undefined;
        'bind:devicePixelContentBoxSize'?: ResizeObserverSize[] | null | undefined;
        'data-sveltekit-keepfocus'?: true | "" | "off" | null | undefined;
        'data-sveltekit-noscroll'?: true | "" | "off" | null | undefined;
        'data-sveltekit-preload-code'?: true | "" | "off" | "eager" | "viewport" | "hover" | "tap" | null | undefined;
        'data-sveltekit-preload-data'?: true | "" | "off" | "hover" | "tap" | null | undefined;
        'data-sveltekit-reload'?: true | "" | "off" | null | undefined;
        'data-sveltekit-replacestate'?: true | "" | "off" | null | undefined;
        'aria-activedescendant'?: string | null | undefined;
        'aria-atomic'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-autocomplete'?: "none" | "list" | "inline" | "both" | null | undefined;
        'aria-busy'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-checked'?: boolean | "true" | "false" | "mixed" | null | undefined;
        'aria-colcount'?: number | null | undefined;
        'aria-colindex'?: number | null | undefined;
        'aria-colspan'?: number | null | undefined;
        'aria-controls'?: string | null | undefined;
        'aria-current'?: import("svelte/elements").Booleanish | "page" | "step" | "location" | "date" | "time" | null | undefined;
        'aria-describedby'?: string | null | undefined;
        'aria-details'?: string | null | undefined;
        'aria-disabled'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-dropeffect'?: "none" | "link" | "copy" | "execute" | "move" | "popup" | null | undefined;
        'aria-errormessage'?: string | null | undefined;
        'aria-expanded'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-flowto'?: string | null | undefined;
        'aria-grabbed'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-haspopup'?: "dialog" | "grid" | "listbox" | "menu" | "tree" | import("svelte/elements").Booleanish | null | undefined;
        'aria-hidden'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-invalid'?: import("svelte/elements").Booleanish | "grammar" | "spelling" | null | undefined;
        'aria-keyshortcuts'?: string | null | undefined;
        'aria-label'?: string | null | undefined;
        'aria-labelledby'?: string | null | undefined;
        'aria-level'?: number | null | undefined;
        'aria-live'?: "off" | "assertive" | "polite" | null | undefined;
        'aria-modal'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-multiline'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-multiselectable'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-orientation'?: "horizontal" | "vertical" | null | undefined;
        'aria-owns'?: string | null | undefined;
        'aria-placeholder'?: string | null | undefined;
        'aria-posinset'?: number | null | undefined;
        'aria-pressed'?: boolean | "true" | "false" | "mixed" | null | undefined;
        'aria-readonly'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-relevant'?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | null | undefined;
        'aria-required'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-roledescription'?: string | null | undefined;
        'aria-rowcount'?: number | null | undefined;
        'aria-rowindex'?: number | null | undefined;
        'aria-rowspan'?: number | null | undefined;
        'aria-selected'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-setsize'?: number | null | undefined;
        'aria-sort'?: "none" | "ascending" | "descending" | "other" | null | undefined;
        'aria-valuemax'?: number | null | undefined;
        'aria-valuemin'?: number | null | undefined;
        'aria-valuenow'?: number | null | undefined;
        'aria-valuetext'?: string | null | undefined;
        'on:copy'?: import("svelte/elements").ClipboardEventHandler<HTMLAnchorElement> | null | undefined;
        'on:cut'?: import("svelte/elements").ClipboardEventHandler<HTMLAnchorElement> | null | undefined;
        'on:paste'?: import("svelte/elements").ClipboardEventHandler<HTMLAnchorElement> | null | undefined;
        'on:compositionend'?: import("svelte/elements").CompositionEventHandler<HTMLAnchorElement> | null | undefined;
        'on:compositionstart'?: import("svelte/elements").CompositionEventHandler<HTMLAnchorElement> | null | undefined;
        'on:compositionupdate'?: import("svelte/elements").CompositionEventHandler<HTMLAnchorElement> | null | undefined;
        'on:focus'?: import("svelte/elements").FocusEventHandler<HTMLAnchorElement> | null | undefined;
        'on:focusin'?: import("svelte/elements").FocusEventHandler<HTMLAnchorElement> | null | undefined;
        'on:focusout'?: import("svelte/elements").FocusEventHandler<HTMLAnchorElement> | null | undefined;
        'on:blur'?: import("svelte/elements").FocusEventHandler<HTMLAnchorElement> | null | undefined;
        'on:change'?: import("svelte/elements").FormEventHandler<HTMLAnchorElement> | null | undefined;
        'on:beforeinput'?: import("svelte/elements").EventHandler<InputEvent, HTMLAnchorElement> | null | undefined;
        'on:input'?: import("svelte/elements").FormEventHandler<HTMLAnchorElement> | null | undefined;
        'on:reset'?: import("svelte/elements").FormEventHandler<HTMLAnchorElement> | null | undefined;
        'on:submit'?: import("svelte/elements").EventHandler<SubmitEvent, HTMLAnchorElement> | null | undefined;
        'on:invalid'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:formdata'?: import("svelte/elements").EventHandler<FormDataEvent, HTMLAnchorElement> | null | undefined;
        'on:load'?: import("svelte/elements").EventHandler<Event, Element> | null | undefined;
        'on:error'?: import("svelte/elements").EventHandler<Event, Element> | null | undefined;
        'on:toggle'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:keydown'?: import("svelte/elements").KeyboardEventHandler<HTMLAnchorElement> | null | undefined;
        'on:keypress'?: import("svelte/elements").KeyboardEventHandler<HTMLAnchorElement> | null | undefined;
        'on:keyup'?: import("svelte/elements").KeyboardEventHandler<HTMLAnchorElement> | null | undefined;
        'on:abort'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:canplay'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:canplaythrough'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:cuechange'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:durationchange'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:emptied'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:encrypted'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:ended'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:loadeddata'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:loadedmetadata'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:loadstart'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:pause'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:play'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:playing'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:progress'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:ratechange'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:seeked'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:seeking'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:stalled'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:suspend'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:timeupdate'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:volumechange'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:waiting'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:auxclick'?: import("svelte/elements").MouseEventHandler<HTMLAnchorElement> | null | undefined;
        'on:click'?: import("svelte/elements").MouseEventHandler<HTMLAnchorElement> | null | undefined;
        'on:contextmenu'?: import("svelte/elements").MouseEventHandler<HTMLAnchorElement> | null | undefined;
        'on:dblclick'?: import("svelte/elements").MouseEventHandler<HTMLAnchorElement> | null | undefined;
        'on:drag'?: import("svelte/elements").DragEventHandler<HTMLAnchorElement> | null | undefined;
        'on:dragend'?: import("svelte/elements").DragEventHandler<HTMLAnchorElement> | null | undefined;
        'on:dragenter'?: import("svelte/elements").DragEventHandler<HTMLAnchorElement> | null | undefined;
        'on:dragexit'?: import("svelte/elements").DragEventHandler<HTMLAnchorElement> | null | undefined;
        'on:dragleave'?: import("svelte/elements").DragEventHandler<HTMLAnchorElement> | null | undefined;
        'on:dragover'?: import("svelte/elements").DragEventHandler<HTMLAnchorElement> | null | undefined;
        'on:dragstart'?: import("svelte/elements").DragEventHandler<HTMLAnchorElement> | null | undefined;
        'on:drop'?: import("svelte/elements").DragEventHandler<HTMLAnchorElement> | null | undefined;
        'on:mousedown'?: import("svelte/elements").MouseEventHandler<HTMLAnchorElement> | null | undefined;
        'on:mouseenter'?: import("svelte/elements").MouseEventHandler<HTMLAnchorElement> | null | undefined;
        'on:mouseleave'?: import("svelte/elements").MouseEventHandler<HTMLAnchorElement> | null | undefined;
        'on:mousemove'?: import("svelte/elements").MouseEventHandler<HTMLAnchorElement> | null | undefined;
        'on:mouseout'?: import("svelte/elements").MouseEventHandler<HTMLAnchorElement> | null | undefined;
        'on:mouseover'?: import("svelte/elements").MouseEventHandler<HTMLAnchorElement> | null | undefined;
        'on:mouseup'?: import("svelte/elements").MouseEventHandler<HTMLAnchorElement> | null | undefined;
        'on:select'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:selectionchange'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:selectstart'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:touchcancel'?: import("svelte/elements").TouchEventHandler<HTMLAnchorElement> | null | undefined;
        'on:touchend'?: import("svelte/elements").TouchEventHandler<HTMLAnchorElement> | null | undefined;
        'on:touchmove'?: import("svelte/elements").TouchEventHandler<HTMLAnchorElement> | null | undefined;
        'on:touchstart'?: import("svelte/elements").TouchEventHandler<HTMLAnchorElement> | null | undefined;
        'on:gotpointercapture'?: import("svelte/elements").PointerEventHandler<HTMLAnchorElement> | null | undefined;
        'on:pointercancel'?: import("svelte/elements").PointerEventHandler<HTMLAnchorElement> | null | undefined;
        'on:pointerdown'?: import("svelte/elements").PointerEventHandler<HTMLAnchorElement> | null | undefined;
        'on:pointerenter'?: import("svelte/elements").PointerEventHandler<HTMLAnchorElement> | null | undefined;
        'on:pointerleave'?: import("svelte/elements").PointerEventHandler<HTMLAnchorElement> | null | undefined;
        'on:pointermove'?: import("svelte/elements").PointerEventHandler<HTMLAnchorElement> | null | undefined;
        'on:pointerout'?: import("svelte/elements").PointerEventHandler<HTMLAnchorElement> | null | undefined;
        'on:pointerover'?: import("svelte/elements").PointerEventHandler<HTMLAnchorElement> | null | undefined;
        'on:pointerup'?: import("svelte/elements").PointerEventHandler<HTMLAnchorElement> | null | undefined;
        'on:lostpointercapture'?: import("svelte/elements").PointerEventHandler<HTMLAnchorElement> | null | undefined;
        'on:scroll'?: import("svelte/elements").UIEventHandler<HTMLAnchorElement> | null | undefined;
        'on:resize'?: import("svelte/elements").UIEventHandler<HTMLAnchorElement> | null | undefined;
        'on:wheel'?: import("svelte/elements").WheelEventHandler<HTMLAnchorElement> | null | undefined;
        'on:animationstart'?: import("svelte/elements").AnimationEventHandler<HTMLAnchorElement> | null | undefined;
        'on:animationend'?: import("svelte/elements").AnimationEventHandler<HTMLAnchorElement> | null | undefined;
        'on:animationiteration'?: import("svelte/elements").AnimationEventHandler<HTMLAnchorElement> | null | undefined;
        'on:transitionstart'?: import("svelte/elements").TransitionEventHandler<HTMLAnchorElement> | null | undefined;
        'on:transitionrun'?: import("svelte/elements").TransitionEventHandler<HTMLAnchorElement> | null | undefined;
        'on:transitionend'?: import("svelte/elements").TransitionEventHandler<HTMLAnchorElement> | null | undefined;
        'on:transitioncancel'?: import("svelte/elements").TransitionEventHandler<HTMLAnchorElement> | null | undefined;
        'on:outrostart'?: import("svelte/elements").EventHandler<CustomEvent<null>, HTMLAnchorElement> | null | undefined;
        'on:outroend'?: import("svelte/elements").EventHandler<CustomEvent<null>, HTMLAnchorElement> | null | undefined;
        'on:introstart'?: import("svelte/elements").EventHandler<CustomEvent<null>, HTMLAnchorElement> | null | undefined;
        'on:introend'?: import("svelte/elements").EventHandler<CustomEvent<null>, HTMLAnchorElement> | null | undefined;
        'on:message'?: import("svelte/elements").MessageEventHandler<HTMLAnchorElement> | null | undefined;
        'on:messageerror'?: import("svelte/elements").MessageEventHandler<HTMLAnchorElement> | null | undefined;
        'on:visibilitychange'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:cancel'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:close'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:fullscreenchange'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        'on:fullscreenerror'?: import("svelte/elements").EventHandler<Event, HTMLAnchorElement> | null | undefined;
        tag?: string | undefined;
        rounded?: boolean | undefined;
        border?: boolean | undefined;
        shadow?: boolean | undefined;
        transition?: ((node: HTMLElement, params: any) => import("svelte/transition").TransitionConfig) | undefined;
        params?: object | undefined;
        node?: HTMLElement | undefined;
        use?: import("svelte/action").Action<HTMLElement, any, Record<never, any>> | undefined;
        options?: object | undefined;
        navClass?: string | undefined;
        navDivClass?: string | undefined;
        fluid?: boolean | undefined;
        classNavDiv?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            hidden: boolean;
            toggle: () => void;
        };
    };
};
export type NavbarProps = typeof __propDef.props;
export type NavbarEvents = typeof __propDef.events;
export type NavbarSlots = typeof __propDef.slots;
/**
 * [Go to Navbar](https://flowbite-svelte.com/docs/components/navbar)
 * ## Props
 * @prop navClass: string = 'px-2 sm:px-4 py-2.5 w-full';
 * @prop navDivClass: string = 'mx-auto flex flex-wrap justify-between items-center ';
 * @prop fluid: boolean = false;
 * ## Example
 * ```
 * <script>
 *   import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
 * </script>
 *
 * <Navbar let:hidden let:toggle>
 *   <NavBrand href="/">
 *     <img
 *       src="/images/flowbite-svelte-icon-logo.svg"
 *       class="mr-3 h-6 sm:h-9"
 *       alt="Flowbite Logo"
 *     />
 *     <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
 *       Flowbite
 *     </span>
 *   </NavBrand>
 *   <NavHamburger on:click={toggle} />
 *   <NavUl {hidden}>
 *     <NavLi href="/" active={true}>Home</NavLi>
 *     <NavLi href="/about">About</NavLi>
 *     <NavLi href="/services">Services</NavLi>
 *     <NavLi href="/pricing">Pricing</NavLi>
 *     <NavLi href="/contact">Contact</NavLi>
 *   </NavUl>
 * </Navbar>
 * ```
 */
export default class Navbar extends SvelteComponentTyped<NavbarProps, NavbarEvents, NavbarSlots> {
}
export {};
//# sourceMappingURL=Navbar.svelte.d.ts.map
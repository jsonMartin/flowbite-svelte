import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        footerType?: "default" | "sitemap" | "logo" | "socialmedia" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FooterProps = typeof __propDef.props;
export type FooterEvents = typeof __propDef.events;
export type FooterSlots = typeof __propDef.slots;
/**
 * ## Feature
 * [Go to Footer](https://flowbite-svelte.com/docs/components/footer)
 * - Setup
 * - Default footer
 * - Footer with logo
 * - Social media icons
 * - Sitemap links
 * - Sticky footer
 * ## Props
 * @prop customClass: string = '';
 * @prop footerType: 'custom' | 'sitemap' | 'default' | 'logo' | 'socialmedia' = 'default';
 * ## Example
 * ```
 * <script>
 *   import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte'
 * </script>
 *
 * <Footer>
 *   <FooterCopyright href="/" by="Flowbite™" year={2022} />
 *   <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
 *     <FooterLink href="/">About</FooterLink>
 *     <FooterLink href="/">Privacy Policy</FooterLink>
 *     <FooterLink href="/">Licensing</FooterLink>
 *     <FooterLink href="/">Contact</FooterLink>
 *   </FooterLinkGroup>
 * </Footer>
 * ```
 */
export default class Footer extends SvelteComponentTyped<FooterProps, FooterEvents, FooterSlots> {
}
export {};
//# sourceMappingURL=Footer.svelte.d.ts.map
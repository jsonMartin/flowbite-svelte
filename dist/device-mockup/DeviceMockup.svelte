<script>import { twJoin, twMerge } from 'tailwind-merge';
import DefaultMockup from './DefaultMockup.svelte';
import Ios from './Ios.svelte';
import Android from './Android.svelte';
import Tablet from './Tablet.svelte';
import Smartwatch from './Smartwatch.svelte';
export let device = 'default';
// android
export let androidDiv = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl';
export let androidSlot = 'rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
export let androidTop = 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
export let androidLeftTop = 'h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
export let androidLeftMid = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
export let androidLeftBot = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
export let androidRight = 'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
// default
export let defaultDiv = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]';
export let defaultSlot = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
export let defaultTop = 'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
export let defaultLeftTop = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
export let defaultLeftBot = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
export let defaultRight = 'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
// desktop
export let desktopInner = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
export let desktopBot = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]';
export let desktopBotUnder = 'relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]';
export let destopDiv = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
export let desktopSlot = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
// ios
export let iosDiv = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl';
export let iosSlot = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
export let iosTop = 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
export let iosLeftTop = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
export let iosLeftBot = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
export let iosRight = 'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
// laptop
export let laptopDiv = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
export let laptopSlot = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
export let laptopInner = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
export let laptopBot = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
export let laptopBotCen = 'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800';
// smartwatch
export let smartwatchDiv = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
export let smartwatchSlot = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
export let smartRightTop = 'h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg';
export let smartRightBot = 'h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg';
export let smartTop = 'relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
export let smartBot = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
export let smartwatchInner = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
// tablet
export let tabletDiv = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
export let tabletSlot = 'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800';
export let tabletLeftTop = 'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
export let tabletLeftMid = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
export let tabletLeftBot = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
export let tabletRight = 'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
// android
let androidDivCls = twMerge(androidDiv, $$props.classAndroidDiv);
let androidSlotCls = twMerge(androidSlot, $$props.classAndroidSlot);
let androidTopCls = twMerge(androidTop, $$props.classAndroidTop);
let androidLeftTopCls = twMerge(androidLeftTop, $$props.classAndroidLeftTop);
let androidLeftMidCls = twMerge(androidLeftMid, $$props.classAndroidLeftMid);
let androidLeftBotCls = twMerge(androidLeftBot, $$props.classAndroidLeftBot);
let androidRightCls = twMerge(androidRight, $$props.classAndroidRight);
//default
let defaultDivCls = twMerge(defaultDiv, $$props.classDefaultDiv);
let defaultSlotCls = twMerge(defaultSlot, $$props.classDefaultSlot);
let defaultTopCls = twMerge(defaultTop, $$props.classDefaultTop);
let defaultLeftTopCls = twMerge(defaultLeftTop, $$props.classDefaultLeftTop);
let defaultLeftBotCls = twMerge(defaultLeftBot, $$props.classDefaultLeftBot);
let defaultRightCls = twMerge(defaultRight, $$props.classDefaultRight);
// desktop
let desktopInnerCls = twMerge(desktopInner, $$props.classDesktopInner);
let desktopBotCls = twMerge(desktopBot, $$props.classDesktopBot);
let desktopBotUnderCls = twMerge(desktopBotUnder, $$props.classDesktopBotUnder);
let destopDivCls = twMerge(destopDiv, $$props.classDestopDiv);
let desktopSlotCls = twMerge(desktopSlot, $$props.classDesktopSlot);
// ios
let iosDivCls = twMerge(iosDiv, $$props.classIosDiv);
let iosSlotCls = twMerge(iosSlot, $$props.classIosSlot);
let iosTopCls = twMerge(iosTop, $$props.classIosTop);
let iosLeftTopCls = twMerge(iosLeftTop, $$props.classIosLeftTop);
let iosLeftBotCls = twMerge(iosLeftBot, $$props.classIosLeftBot);
let iosRightCls = twMerge(iosRight, $$props.classIosRight);
// laptop
let laptopDivCls = twMerge(laptopDiv, $$props.classLaptopDiv);
let laptopSlotCls = twMerge(laptopSlot, $$props.classLaptopSlot);
let laptopInnerCls = twMerge(laptopInner, $$props.classLaptopInner);
let laptopBotCls = twMerge(laptopBot, $$props.classLaptopBot);
let laptopBotCenCls = twMerge(laptopBotCen, $$props.classLaptopBotCen);
// smartwatch
let smartwatchDivCls = twMerge(smartwatchDiv, $$props.classSmartwatchDiv);
let smartwatchSlotCls = twMerge(smartwatchSlot, $$props.classSmartwatchSlot);
let smartRightTopCls = twMerge(smartRightTop, $$props.classSmartRightTop);
let smartRightBotCls = twMerge(smartRightBot, $$props.classSmartRightBot);
let smartTopCls = twMerge(smartTop, $$props.classSmartTop);
let smartBotCls = twMerge(smartBot, $$props.classSmartBot);
let smartwatchInnerCls = twMerge(smartwatchInner, $$props.classSmartwatchInner);
// tablet
let tabletDivCls = twMerge(tabletDiv, $$props.classTabletDiv);
let tabletSlotCls = twMerge(tabletSlot, $$props.classTabletSlot);
let tabletLeftTopCls = twMerge(tabletLeftTop, $$props.classTabletLeftTop);
let tabletLeftMidCls = twMerge(tabletLeftMid, $$props.classTabletLeftMid);
let tabletLeftBotCls = twMerge(tabletLeftBot, $$props.classTabletLeftBot);
let tabletRightCls = twMerge(tabletRight, $$props.classTabletRight);
const divClasses = {
    default: defaultDivCls,
    ios: iosDivCls,
    android: androidDivCls,
    tablet: tabletDivCls,
    laptop: laptopDivCls,
    desktop: destopDivCls,
    smartwatch: smartwatchDivCls
};
const slotClasses = {
    default: defaultSlotCls,
    ios: iosSlotCls,
    android: androidSlotCls,
    tablet: tabletSlotCls,
    laptop: laptopSlotCls,
    desktop: desktopSlotCls,
    smartwatch: smartwatchSlotCls
};
</script>

<div class={twMerge(divClasses[device], $$props.class)}>
  {#if device === 'default'}
    <DefaultMockup
      defaultTop={defaultTopCls}
      defaultLeftTop={defaultLeftTopCls}
      defaultLeftBot={defaultLeftBotCls}
      defaultRight={defaultRightCls} />
  {:else if device === 'ios'}
    <Ios iosTop={iosTopCls} iosLeftTop={iosLeftTopCls} iosLeftBot={iosLeftBotCls} iosRight={iosRightCls} />
  {:else if device === 'android'}
    <Android
      androidTop={androidTopCls}
      androidLeftTop={androidLeftTopCls}
      androidLeftMid={androidLeftMidCls}
      androidLeftBot={androidLeftBotCls}
      androidRight={androidRightCls} />
  {:else if device === 'tablet'}
    <Tablet
      tabletLeftTop={tabletLeftTopCls}
      tabletLeftMid={tabletLeftMidCls}
      tabletLeftBot={tabletLeftBotCls}
      tabletRight={tabletRightCls} />
  {/if}
  {#if device === 'laptop'}
    <div class={laptopInnerCls}>
      <slot />
    </div>
  {:else if device === 'desktop'}
    <div class={desktopInnerCls}>
      <slot />
    </div>
  {:else if device === 'smartwatch'}
    <!-- No code -->
  {:else}
    <div class={slotClasses[device]}>
      <slot />
    </div>
  {/if}
</div>
{#if device === 'laptop'}
  <div class={laptopBotCls}>
    <div class={laptopBotCenCls} />
  </div>
{:else if device === 'desktop'}
  <div class={desktopBotCls} />
  <div class={desktopBotUnderCls} />
{:else if device === 'smartwatch'}
  <div class={smartTopCls}>
    <Smartwatch smartRightTop={smartRightTopCls} smartRightBot={smartRightBotCls} />
    <div class={smartwatchInnerCls}>
      <slot />
    </div>
  </div>
  <div class={smartBotCls} />
{/if}

<!--
  @component
  ## Features
  [Go to Device Mockups](https://flowbite-svelte.com/docs/components/device-mockups)
  - Setup
  - Default mockup
  - iPhone 12 mockup (iOS)
  - Google Pixel mockup (Android)
  - Tablet mockup
  - Laptop mockup
  - Desktop mockup
  - Smartwatch mockup
  ## Props
  @prop device: 'default' | 'ios' | 'android' | 'tablet' | 'laptop' | 'desktop' | 'smartwatch' =
    'default';
  ### Android
  @prop androidDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl';
  @prop androidSlot: string =
    'rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  @prop androidTop: string =
    'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
  @prop androidLeftTop: string =
    'h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  @prop androidLeftMid: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  @prop androidLeftBot: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  @prop androidRight: string =
    'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
  ### Default
  @prop defaultDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]';
  @prop defaultSlot: string =
    'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  @prop defaultTop: string =
    'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  @prop defaultLeftTop: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  @prop defaultLeftBot: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  @prop defaultRight: string =
    'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
  ### Desktop
  @prop desktopInner: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
  @prop desktopBot: string =
    'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]';
  @prop desktopBotUnder: string =
    'relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]';
  @prop destopDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  @prop desktopSlot: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
  ### ios
  @prop iosDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl';
  @prop iosSlot: string =
    'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  @prop iosTop: string =
    'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
  @prop iosLeftTop: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  @prop iosLeftBot: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  @prop iosRight: string =
    'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
  ### Laptop    
  @prop laptopDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  @prop laptopSlot: string =
    'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  @prop laptopInner: string =
    'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  @prop laptopBot: string =
    'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
  @prop laptopBotCen: string =
    'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800';
  ### Smartwatch
  @prop smartwatchDiv: string =
    'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
  @prop smartwatchSlot: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
  @prop smartRightTop: string =
    'h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg';
  @prop smartRightBot: string =
    'h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg';
  @prop smartTop: string =
    'relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
  @prop smartBot: string =
    'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
  @prop smartwatchInner: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
  ### Tablet
  @prop tabletDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
  @prop tabletSlot: string =
    'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800';
  @prop tabletLeftTop: string =
    'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  @prop tabletLeftMid: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  @prop tabletLeftBot: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  @prop tabletRight: string =
    'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
  ## Example 
  ```
  <script>
    import { DeviceMockup } from 'flowbite-svelte';
  </script>

  <DeviceMockup>
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
      class="dark:hidden w-[272px] h-[572px]"
      alt="default example 1" />
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
      class="hidden dark:block w-[272px] h-[572px]"
      alt="default example 2" />
  </DeviceMockup>
  ```
-->

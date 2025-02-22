import type { Locale } from './types'

export const defaultEnLocale: Locale = {
  title: {
    title: 'Enhanced Readability',
    titleAriaLabel: 'Enhanced Readability',
  },
  layoutSwitch: {
    title: 'Layout Switch',
    titleHelpMessage: 'Adjust the layout style of VitePress to adapt to different reading needs and screens.',
    titleAriaLabel: 'Layout Switch',
    titleScreenNavWarningMessage: 'No available layout can be switched in mobile screen.',
    optionFullWidth: 'Expand all',
    optionFullWidthAriaLabel: 'Expand all',
    optionFullWidthHelpMessage: 'The sidebar and content area occupy the entire width of the screen.',
    optionSidebarWidthAdjustableOnly: 'Expand sidebar with adjustable values',
    optionSidebarWidthAdjustableOnlyAriaLabel: 'Expand sidebar with adjustable values',
    optionSidebarWidthAdjustableOnlyHelpMessage: 'Expand sidebar width and add a new slider for user to choose and customize their desired width of the maximum width of sidebar can go, but the content area width will remain the same.',
    optionBothWidthAdjustable: 'Expand all with adjustable values',
    optionBothWidthAdjustableAriaLabel: 'Expand all with adjustable values',
    optionBothWidthAdjustableHelpMessage: 'Expand both sidebar and document content and add two new slider for user to choose and customize their desired width of the maximum width of either sidebar or document content can go.',
    optionOriginalWidth: 'Original width',
    optionOriginalWidthAriaLabel: 'Original width',
    optionOriginalWidthHelpMessage: 'The original layout width of VitePress',
    contentLayoutMaxWidth: {
      title: 'Content Layout Max Width',
      titleAriaLabel: 'Content Layout Max Width',
      titleHelpMessage: 'Adjust the exact value of the document content width of VitePress layout to adapt to different reading needs and screens.',
      titleScreenNavWarningMessage: 'Content Layout Max Width is not available in mobile screen temporarily.',
      slider: 'Adjust the maximum width of the content layout',
      sliderAriaLabel: 'Adjust the maximum width of the content layout',
      sliderHelpMessage: 'A ranged slider for user to choose and customize their desired width of the maximum width of the content layout can go.',
    },
    pageLayoutMaxWidth: {
      title: 'Page Layout Max Width',
      titleAriaLabel: 'Page Layout Max Width',
      titleHelpMessage: 'Adjust the exact value of the page width of VitePress layout to adapt to different reading needs and screens.',
      titleScreenNavWarningMessage: 'Page Layout Max Width is not available in mobile screen temporarily.',
      slider: 'Adjust the maximum width of the page layout',
      sliderAriaLabel: 'Adjust the maximum width of the page layout',
      sliderHelpMessage: 'A ranged slider for user to choose and customize their desired width of the maximum width of the page layout can go.',
    },
  },
  spotlight: {
    title: 'Spotlight',
    titleAriaLabel: 'Spotlight',
    titleHelpMessage: 'Highlight the line where the mouse is currently hovering in the content to optimize for users who may have reading and focusing difficulties.',
    titleScreenNavWarningMessage: 'Spotlight is not available in mobile screen temporarily.',
    optionOn: 'On',
    optionOnAriaLabel: 'On',
    optionOnHelpMessage: 'Turn on Spotlight.',
    optionOff: 'Off',
    optionOffAriaLabel: 'Off',
    optionOffHelpMessage: 'Turn off Spotlight.',
    styles: {
      title: 'Spotlight Styles',
      titleAriaLabel: 'Spotlight Styles',
      titleHelpMessage: 'Adjust the styles of Spotlight.',
      titleScreenNavWarningMessage: 'Spotlight Styles is not available in mobile screen temporarily.',
      optionUnder: 'Under',
      optionUnderAriaLabel: 'Under',
      optionUnderHelpMessage: 'Add a solid background color underneath the hovering element to highlight where the cursor is currently hovering.',
      optionAside: 'Aside',
      optionAsideAriaLabel: 'Aside',
      optionAsideHelpMessage: 'Add a fixed line with solid color aside the hovering element to highlight where the cursor is currently hovering.',
    },
  },
}

export const defaultZhCNLocale: Locale = {
  title: {
    title: '阅读增强',
    titleAriaLabel: '阅读增强',
  },
  layoutSwitch: {
    title: '布局切换',
    titleAriaLabel: '布局切换',
    titleHelpMessage: '调整 VitePress 的布局样式，以适配不同的阅读习惯和屏幕环境。',
    titleScreenNavWarningMessage: '移动端无可切换布局。',
    optionFullWidth: '全部展开',
    optionFullWidthAriaLabel: '全部展开',
    optionFullWidthHelpMessage: '使侧边栏和内容区域占据整个屏幕的全部宽度。',
    optionSidebarWidthAdjustableOnly: '全部展开，但侧边栏宽度可调',
    optionSidebarWidthAdjustableOnlyAriaLabel: '全部展开，但侧边栏宽度可调',
    optionSidebarWidthAdjustableOnlyHelpMessage: '侧边栏宽度可调，但内容区域宽度不变，调整后的侧边栏将可以占据整个屏幕的最大宽度。',
    optionBothWidthAdjustable: '全部展开，且侧边栏和内容区域宽度均可调',
    optionBothWidthAdjustableAriaLabel: '全部展开，且侧边栏和内容区域宽度均可调',
    optionBothWidthAdjustableHelpMessage: '侧边栏和内容区域宽度均可调，调整后的侧边栏和内容区域将可以占据整个屏幕的最大宽度。',
    optionOriginalWidth: '原始宽度',
    optionOriginalWidthAriaLabel: '原始宽度',
    optionOriginalWidthHelpMessage: '原始的 VitePress 默认布局宽度',
    contentLayoutMaxWidth: {
      title: '内容最大宽度',
      titleAriaLabel: '内容最大宽度',
      titleHelpMessage: '调整 VitePress 布局中内容区域的宽度，以适配不同的阅读习惯和屏幕环境。',
      titleScreenNavWarningMessage: '移动端暂不支持调整内容最大宽度。',
      slider: '调整内容最大宽度',
      sliderAriaLabel: '调整内容最大宽度',
      sliderHelpMessage: '一个可调整的滑块，用于选择和自定义内容最大宽度。',
    },
    pageLayoutMaxWidth: {
      title: '页面最大宽度',
      titleAriaLabel: '页面最大宽度',
      titleHelpMessage: '调整 VitePress 布局中页面的宽度，以适配不同的阅读习惯和屏幕环境。',
      titleScreenNavWarningMessage: '移动端暂不支持调整页面最大宽度。',
      slider: '调整页面最大宽度',
      sliderAriaLabel: '调整页面最大宽度',
      sliderHelpMessage: '一个可调整的滑块，用于选择和自定义页面最大宽度。',
    },
  },
  spotlight: {
    title: '聚光灯',
    titleAriaLabel: '聚光灯',
    titleHelpMessage: '支持在正文中高亮当前鼠标悬停的行和元素，以优化阅读和专注困难的用户的阅读体验。',
    titleScreenNavWarningMessage: '移动端暂不支持聚光灯。',
    optionOn: '开启',
    optionOnAriaLabel: '开启',
    optionOnHelpMessage: '开启聚光灯。',
    optionOff: '关闭',
    optionOffAriaLabel: '关闭',
    optionOffHelpMessage: '关闭聚光灯。',
    styles: {
      title: '聚光灯样式',
      titleAriaLabel: '聚光灯样式',
      titleHelpMessage: '调整聚光灯的样式。',
      titleScreenNavWarningMessage: '移动端暂不支持调整聚光灯样式。',
      optionUnder: '置于底部',
      optionUnderAriaLabel: '置于底部',
      optionUnderHelpMessage: '在当前鼠标悬停的元素下方添加一个纯色背景以突出显示当前鼠标悬停的位置。',
      optionAside: '置于侧边',
      optionAsideAriaLabel: '置于侧边',
      optionAsideHelpMessage: '在当前鼠标悬停的元素旁边添加一条固定的纯色线以突出显示当前鼠标悬停的位置。',
    },
  },
}

export const defaultLocales = {
  'zh-CN': defaultZhCNLocale,
  'zh-Hans': defaultZhCNLocale,
  'zh': defaultZhCNLocale,
  'en-US': defaultEnLocale,
  'en': defaultEnLocale,
}

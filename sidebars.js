module.exports = {
  componentsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: ['nativebase', 'installation', 'setup-provider'],
    },
    {
      type: 'category',
      label: 'Core concepts',
      collapsed: false,
      items: [
        'utility-first',
        'design-tokens',
        'interaction-styles',
        'responsive-style',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'utility-props',
        'color-mode',
        'nativebase-factory',
        'safe-area-view-props',
        'accessibility',
      ],
    },
    {
      type: 'category',
      label: 'Theme',
      collapsed: false,
      items: [
        'default-theme',
        'customizing-theme',
        'customizing-fonts',
        'customizing-components',
        'dark-mode',
        'breakpoints',
        'theme',
      ],
    },
    {
      type: 'category',
      label: 'Layout',
      collapsed: false,
      items: [
        // 'aspectRatio',
        'box',
        'center',
        'container',
        'flex',
        'hStack',
        // 'simpleGrid',
        'stack',
        // 'view',
        'VStack',
        // 'wrap',
        'ZStack',
      ],
    },
    {
      type: 'category',
      label: 'Forms',
      collapsed: false,
      items: [
        'button',
        'pressable',
        // 'cascader',
        'checkbox',
        // 'date-picker',
        'form-control',
        'icon-button',
        'input',
        // 'textField',
        // 'numberInput',
        'link',
        // 'pinInput',
        'radio',
        'select',
        'slider',
        'switch',
        'textarea',
        // 'typeAhead',
      ],
    },
    {
      type: 'category',
      label: 'Data Display',
      collapsed: false,
      items: [
        'badge',
        // 'closeButton',
        // 'code',
        'divider',
        // 'Kbd',
        // 'list',
        // 'stat',
        // 'swipable-list',
        // 'tag',
      ],
    },
    {
      type: 'category',
      label: 'Feedback',
      collapsed: false,
      items: [
        'alert',
        // 'circularProgress',
        'progress',
        // 'skeleton',
        // 'snackBar',
        'spinner',
        'toast',
      ],
    },
    {
      type: 'category',
      label: 'Typography',
      collapsed: false,
      items: ['text', 'heading'],
    },
    {
      type: 'category',
      label: 'Overlay',
      collapsed: false,
      items: [
        'alert-dialog',
        'menu',
        'modal',
        //  'overlay'
        'popover',
        'tooltip',
      ],
    },
    {
      type: 'category',
      label: 'Disclosure',
      collapsed: false,
      items: [
        // 'accordion',
        'action-sheet',
        // 'breadcrumb',
        // 'collapse',
        // 'pagination',
        // 'tabs',
      ],
    },
    {
      type: 'category',
      label: 'Media and Icons',
      collapsed: false,
      items: ['avatar', 'icon', 'image'],
    },
    {
      type: 'category',
      label: 'Transition',
      collapsed: false,
      items: [
        // 'appBar',
        'presence-transition',
        'slide',
        'stagger',
      ],
    },
    {
      type: 'category',
      label: 'Others',
      collapsed: false,
      items: [
        // 'appBar',
        'FAB',
      ],
    },
    {
      type: 'category',
      label: 'ReactNative Components',
      collapsed: false,
      items: [
        'scrollview',
        'view',
        'keyboard-avoiding-view',
        'status-bar',
        'flat-list',
        'section-list',
      ],
    },

    {
      type: 'category',
      label: 'Hooks',
      collapsed: false,
      items: [
        'use-disclosure',
        // 'use-popOver',
        'use-breakPoint-value',
        'use-clipboard',
        'use-media-query',
        'use-theme',
        'use-token',
        'use-color-mode',
        'use-color-mode-value',
        'use-contrast-text',
        'use-accessible-colors',
      ],
    },
    {
      type: 'doc',
      id: 'testing',
    },
    {
      type: 'category',
      label: 'Examples',
      collapsed: false,
      items: ['todo-example', 'kitchen-sink'],
    },
    {
      type: 'category',
      label: 'Community Integration',
      collapsed: false,
      items: ['react-hook-forms', 'nativebase-formik-ui'],
    },
    {
      type: 'category',
      label: 'Recipes',
      collapsed: false,
      items: [
        {
          Designs: [
            'building-app-bar',
            'building-card',
            'building-drawer-navigation',
            'building-tab-view',
            'building-swipe-list',
          ],
          Forms: ['form', 'login-signup-forms', 'building-search-bar'],
          Layout: ['app-drawer', 'building-footer-tabs'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Migration',
      collapsed: false,
      items: [
        'migration/Guide',
        {
          'Components Migration': [
            // 'migration/Accordion',
            'migration/action-sheet',
            'migration/badge',
            'migration/button',
            'migration/card',
            'migration/checkbox',
            'migration/date-picker',
            'migration/deck-swiper',
            'migration/drawer',
            'migration/FABs',
            'migration/footer-tab',
            'migration/form',
            'migration/header',
            'migration/icon',
            'migration/layout',
            'migration/picker',
            'migration/radio-button',
            'migration/search-bar',
            'migration/segment',
            'migration/spinner',
            'migration/swipe-list',
            'migration/tabs',
            'migration/thumbnail',
            'migration/toast',
            'migration/typography',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'More',
      collapsed: false,
      items: ['changelog', 'faq'],
    },
    {
      type: 'doc',
      id: 'install-expo',
    },
    {
      type: 'doc',
      id: 'install-rn',
    },
    {
      type: 'doc',
      id: 'install-cra',
    },
    {
      type: 'doc',
      id: 'install-next',
    },
  ],
};

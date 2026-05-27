/**
 * Global Website Configuration - Source of Truth
 * 全局网站配置 - 数据的唯一事实来源
 * 
 * Edit this file to customize your website text, styles, features, and pricing.
 * Future AI agents: You can read this configuration to modify any component on this site.
 * 修改此文件即可自定义网站的文本、样式、功能和定价。未来的 AI 助手可以通过读取并修改此配置文件来完成网站的定制。
 */
window.WEBSITE_CONFIG = {
  // Theme Configuration (主题配置)
  theme: {
    // Mode: 'light-purple' (ChatPPT gradient style) or 'dark-slate' (ShipTower developer style)
    // 模式：'light-purple'（ChatPPT 渐变亮色风格）或 'dark-slate'（ShipTower 开发者暗色风格）
    mode: 'light-purple',
    
    // Custom color palettes (自定义调色板)
    colors: {
      primary: '#6366f1',       // Main indigo brand color
      primaryHover: '#4f46e5',  // Darker shade for hovers
      secondary: '#a855f7',     // Accent purple color
      accent: '#06b6d4',        // Cyan highlight color
      success: '#10b981',       // Green for positive actions
      warning: '#f59e0b',       // Amber alert color
      
      // Light Mode Specifics
      light: {
        background: '#f8fafc',
        cardBg: '#ffffff',
        textMain: '#0f172a',
        textMuted: '#64748b',
        border: '#e2e8f0'
      },
      
      // Dark Mode Specifics
      dark: {
        background: '#0b0f19',
        cardBg: '#111827',
        textMain: '#f9fafb',
        textMuted: '#9ca3af',
        border: '#1f2937'
      }
    }
  },
  
  // Branding Metadata (品牌基本信息)
  branding: {
    name: 'ShipFastAI',
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-presentation"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>`,
    github: 'https://github.com/2718564960',
    contactEmail: '2718564960@qq.com',
    copyright: '© 2026 ShipFastAI. All rights reserved. Created by 2718564960@qq.com.'
  },

  // Navigation Links (导航栏链接)
  navigation: [
    { label: '首页', labelEn: 'Home', target: '#home' },
    { label: '核心功能', labelEn: 'Features', target: '#features' },
    { label: '生成流程', labelEn: 'Workflow', target: '#workflow' },
    { label: '模板中心', labelEn: 'Templates', target: '#templates' },
    { label: '价格方案', labelEn: 'Pricing', target: '#pricing' }
  ],

  // Hero Section Configuration (英雄区横幅配置)
  hero: {
    badge: '全新开放',
    badgeEn: 'Open Beta 2.0',
    badgeText: 'AI 驱动的一键式产品发布与部署平台',
    badgeTextEn: 'AI-Powered One-Click Product Launch & Deploy Platform',
    
    title: '让 AI 为你创作',
    titleEn: 'Let AI Build & Ship',
    titleAccent: '惊艳的互联网产品',
    titleAccentEn: 'Stunning SaaS Products',
    
    subtitle: '输入您的创意主题，AI 自动完成页面设计、功能开发与一键云端部署。让发布产品像聊天一样简单。',
    subtitleEn: 'Enter your idea topic. AI automatically finishes web design, feature coding, and cloud deployment. Ship your SaaS in 3 minutes.',
    
    ctaPrimary: '立即免费开始',
    ctaPrimaryEn: 'Get Started Free',
    ctaSecondary: '观看演示视频',
    ctaSecondaryEn: 'Watch Demo Video',
    
    // Stats list below Hero (Hero下方的统计数据)
    stats: [
      { number: '50,000+', text: '全球活跃用户', textEn: 'Active Users' },
      { number: '120,000+', text: '部署上线项目', textEn: 'Projects Shipped' },
      { number: '200+', text: '精美预置模板', textEn: 'Premium Templates' }
    ]
  },

  // Interactive Live Simulator on the right of Hero (Hero右侧的交互式模拟器)
  simulator: {
    title: 'AI 智能生成终端',
    titleEn: 'AI Build Console',
    placeholder: '例：帮我做一份新能源汽车推广的落地页...',
    placeholderEn: 'e.g., Build a landing page for my new electric car brand...',
    buttonText: '智能生成',
    buttonTextEn: 'Build Now',
    
    // Commands that will run sequentially in simulation
    // 模拟器中顺序执行的步骤
    stages: [
      { delay: 1000, text: '🔍 正在分析您的产品主题与需求...', textEn: '🔍 Analyzing product requirements...' },
      { delay: 2500, text: '💡 正在自动生成大纲结构与响应式组件布局...', textEn: '💡 Generating schema outline & responsive layouts...' },
      { delay: 4000, text: '🎨 正在应用现代渐变配色与 UI/UX 动效交互...', textEn: '🎨 Applying color palettes & micro-interactions...' },
      { delay: 5500, text: '⚡ 正在编译生产环境包并部署到 CDN 节点...', textEn: '⚡ Compiling production bundle & shipping to CDN...' },
      { delay: 7000, text: '🎉 部署成功！项目已上线！正在生成预览...', textEn: '🎉 Shipped successfully! Project is now live!' }
    ]
  },

  // Workflow / Steps Section (三步生成流程)
  workflow: {
    title: '只需三步，闪电发布',
    titleEn: 'Three Steps to Ship',
    subtitle: '从您的想法到全球可访问的网站，仅需 180 秒',
    subtitleEn: 'From initial idea to global production in under 3 minutes',
    
    steps: [
      {
        stepNum: '01',
        title: '输入创意与描述',
        titleEn: 'Describe Your Product',
        desc: '简单输入你的主打理念、产品名称或上传一个文本文档。',
        descEn: 'Simply input your primary idea, core features, or upload a rough outline document.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-indigo-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>`
      },
      {
        stepNum: '02',
        title: 'AI 自动排版与构建',
        titleEn: 'AI Design & Build',
        desc: 'AI 引擎快速分析，智能生成定制文案、图表，搭配绝美设计。',
        descEn: 'Our AI engine processes layouts, writes compelling copy, and sets up high-performance layouts.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-indigo-600"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>`
      },
      {
        stepNum: '03',
        title: '一键云端部署上线',
        titleEn: 'One-Click Deploy',
        desc: '一键自动发布至边缘网络，支持绑定自定义域名，全球极速访问。',
        descEn: 'One-click automated deployment to edge CDN networks. Domain bindings and SSL are ready.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-indigo-600"><path d="M12 22a7 7 0 0 0 5-2.07M12 22a7 7 0 0 1-5-2.07M12 22V12m0 0l-4 4m4-4l4 4M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9m18 0a9 9 0 0 1-9 9m9-9H3"/></svg>`
      }
    ]
  },

  // Templates Showcase Section (热门模板展示区)
  templates: {
    title: '海量模板，精美套用',
    titleEn: 'Popular Base Templates',
    subtitle: '多行业覆盖，让你的产品拥有极具高级感和信任度的视觉表现',
    subtitleEn: 'Stunning premium templates spanning various industries and niches',
    categories: [
      { id: 'all', label: '全部', labelEn: 'All' },
      { id: 'saas', label: 'SaaS 落地页', labelEn: 'SaaS Landing' },
      { id: 'portfolio', label: '个人作品集', labelEn: 'Portfolios' },
      { id: 'marketing', label: '营销策划', labelEn: 'Marketing' }
    ],
    items: [
      {
        title: 'Neo SaaS',
        titleEn: 'Neo SaaS Portal',
        category: 'saas',
        badge: '最火爆',
        badgeEn: 'Popular',
        gradient: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
        previewLink: '#pricing'
      },
      {
        title: 'Creative Mind Studio',
        titleEn: 'Creative Mind Studio',
        category: 'portfolio',
        badge: '新品',
        badgeEn: 'New',
        gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
        previewLink: '#pricing'
      },
      {
        title: 'Fintech Spark',
        titleEn: 'Fintech Spark Pro',
        category: 'saas',
        badge: '金融级',
        badgeEn: 'Finance',
        gradient: 'linear-gradient(135deg, #111827, #1f2937)',
        previewLink: '#pricing'
      },
      {
        title: 'EduAcademy Online',
        titleEn: 'EduAcademy Online',
        category: 'marketing',
        badge: '教育',
        badgeEn: 'Education',
        gradient: 'linear-gradient(135deg, #10b981, #3b82f6)',
        previewLink: '#pricing'
      },
      {
        title: 'Solopreneur Starter',
        titleEn: 'Solopreneur Starter',
        category: 'portfolio',
        badge: '简约',
        badgeEn: 'Clean',
        gradient: 'linear-gradient(135deg, #f59e0b, #e11d48)',
        previewLink: '#pricing'
      }
    ]
  },

  // Key Features Grid (核心功能网格)
  features: {
    title: '全能的产品发布利器',
    titleEn: 'All-In-One Toolkit',
    subtitle: '告别繁琐的前端编码与服务器配置，把一切都交给我们',
    subtitleEn: 'Leave the coding and server orchestration to our autonomous systems',
    list: [
      {
        title: 'AI 自动文案配图',
        titleEn: 'AI Copywriting & Assets',
        desc: '精准的商业用语，智能生成高清背景与插图，节省 90% 策划时间。',
        descEn: 'Compelling copywriting and smart layout icons tailored to convert target readers.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-indigo-600"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/><path d="m15 5 3 3"/></svg>`
      },
      {
        title: '全端自适应响应式',
        titleEn: 'Fully Responsive Layouts',
        desc: '无论在手机、平板还是电脑上，排版都能完美展示，丝滑切换。',
        descEn: 'Flawless presentation on mobiles, tablets, and wide screens with light/dark adaptive designs.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-indigo-600"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`
      },
      {
        title: '全球 CDN 极速分发',
        titleEn: 'Global CDN Delivery',
        desc: '底层基于 Cloudflare/Vercel 等顶级边缘节点分发，10ms 内加载完成。',
        descEn: 'Deployed automatically to edge networks globally ensuring ultra-fast load times.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-indigo-600"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
      },
      {
        title: 'SEO 网络搜索引擎优化',
        titleEn: 'Advanced SEO Optimized',
        desc: '内置 Sitemap、元数据、语义化 HTML5 标记，天生具备超高谷歌/百度权重。',
        descEn: 'Automatic sitemaps, JSON-LD meta tags, and structured semantic HTML schema.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-indigo-600"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`
      },
      {
        title: '极速加载与优秀跑分',
        titleEn: 'Blazing Performance',
        desc: '极简且无冗余的 CSS/JS，Lighthouse 性能跑分 100 分。',
        descEn: 'Zero bloated dependencies means 99+ Lighthouse performance and accessibility scores.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-indigo-600"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>`
      },
      {
        title: '安全的数据传输隔离',
        titleEn: 'Enterprise Data Security',
        desc: '自动签发免费 SSL 证书，全站 HTTPS 加密访问，保护您的商业核心隐私。',
        descEn: 'Dynamic wildcard SSL certificates, auto HTTPS redirection, and isolated security policies.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-indigo-600"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
      }
    ]
  },

  // Testimonials (用户见证/评价)
  testimonials: {
    title: '首发上线，好评如潮',
    titleEn: 'Loved by Creators',
    list: [
      {
        avatar: '👨‍💻',
        name: '王小明',
        role: '全栈独立开发者',
        roleEn: 'Fullstack Indie Hacker',
        content: '以前写一个落地页加上配置域名服务器至少要两天。用这个平台，我只输入了产品痛点，3分钟网站就直接部署好了，甚至集成了完美的微信支付宝付费接口！太神了！',
        contentEn: 'Normally, writing a landing page and configuring domains takes me days. With this, I wrote my core pain point, and in 3 minutes my website was online with payment channels integrated!'
      },
      {
        avatar: '👩‍💼',
        name: 'Sara Chen',
        role: '某知名教育产品创始人',
        roleEn: 'Startup Founder',
        content: '作为一个非技术人员，我只关注产品创意。这里的模板不仅好看，后台还能直接切换配色和布局，自动匹配我们的品牌色，强烈推荐！',
        contentEn: 'As a non-technical manager, I only focus on product ideas. The layout matches our branding color scheme dynamically and exports smoothly.'
      },
      {
        avatar: '👨‍🎨',
        name: '李雷',
        role: 'UI/UX 自由设计师',
        roleEn: 'Freelance Designer',
        content: '极具美学感的设计，交互动效非常细腻。最主要的是配置文件超级简单，AI 能毫无障碍地修改它，对开发新项目来说太省心了。',
        contentEn: 'Stunning aesthetics and detailed animations. The config format is extremely clean, making it very AI-friendly for downstream generation workflows.'
      }
    ]
  },

  // Pricing Options (价格与付费选项)
  pricing: {
    title: '适合各种规模的合理价格',
    titleEn: 'Flexible Pricing Plans',
    subtitle: '无隐性收费，免费体验，随时升级或降级',
    subtitleEn: 'Zero hidden fees. Start for free, upgrade or cancel anytime.',
    
    // Billing toggles
    billingCycle: {
      monthly: { label: '月付', labelEn: 'Monthly' },
      yearly: { label: '年付', labelEn: 'Yearly', discount: '节省 20%', discountEn: 'Save 20%' }
    },
    
    // Currencies list supporting converter
    currencies: [
      { code: 'CNY', symbol: '¥', rate: 1 },         // Base currency
      { code: 'USD', symbol: '$', rate: 0.14 },      // Exchange rate from CNY to USD
      { code: 'EUR', symbol: '€', rate: 0.13 },      // CNY to EUR
      { code: 'HKD', symbol: 'HK$', rate: 1.1 }      // CNY to HKD
    ],

    // The payment packages config (套餐计划列表)
    plans: [
      {
        name: '免费版',
        nameEn: 'Starter Free',
        badge: '零门槛',
        badgeEn: 'Free Tier',
        priceMonthlyCNY: 0,
        priceYearlyCNY: 0,
        description: '适合新手体验与小微个人创意展示',
        descriptionEn: 'Perfect for testing ideas and personal portfolio setups',
        features: [
          { text: '生成 3 个基础落地页', textEn: 'Create 3 basic landing pages' },
          { text: '二级专属免费域名绑定', textEn: 'Free generic subdomain binding' },
          { text: '每日 100 次 AI 修改机会', textEn: '100 AI generation credits daily' },
          { text: '基础服务器带宽 (512MB)', textEn: 'Standard Edge Bandwidth (512MB)' }
        ],
        ctaText: '立即使用',
        ctaTextEn: 'Use Free Now',
        popular: false
      },
      {
        name: '专业创作者版',
        nameEn: 'Creator Pro',
        badge: '最多人选',
        badgeEn: 'Best Value',
        priceMonthlyCNY: 49,
        priceYearlyCNY: 399,
        description: '独立创作者与商业化运营的首选方案',
        descriptionEn: 'The absolute choice for professional creators and small SaaS owners',
        features: [
          { text: '生成不限量商业落地页', textEn: 'Infinite commercial pages' },
          { text: '支持绑定自定义顶级域名', textEn: 'Custom apex domains with SSL' },
          { text: '每日 2000 次 AI 超级指令', textEn: '2000 Pro AI credits daily' },
          { text: '尊享 2.5Gbps 边缘带宽', textEn: 'Speedy 2.5Gbps Edge CDN' },
          { text: '极速付费模块接入 (微信/支付宝)', textEn: 'Instant WeChat & Alipay module integration' },
          { text: '尊享 7*24 专属客户支持', textEn: 'Priority 24/7 technical support' }
        ],
        ctaText: '立即订阅',
        ctaTextEn: 'Subscribe Pro',
        popular: true
      },
      {
        name: '团队与企业版',
        nameEn: 'Enterprise Suite',
        badge: '企业级',
        badgeEn: 'Enterprise',
        priceMonthlyCNY: 199,
        priceYearlyCNY: 1599,
        description: '为多成员协作与大规模分发深度定制',
        descriptionEn: 'Drawn up for scalable teams, security clearance, and mass volume deployment',
        features: [
          { text: '专业版所有基础服务权益', textEn: 'Everything included in Pro plan' },
          { text: '最大支持 10 名协作者账号', textEn: 'Max 10 active team seats' },
          { text: '高并发云负载自动扩缩容', textEn: 'Auto load balancer & failovers' },
          { text: '定制企业级安全白名单 API', textEn: 'Enterprise custom APIs & Whitelists' },
          { text: '免费源码包一次性打包导出', textEn: 'One-click full bundle source exports' }
        ],
        ctaText: '联系销售',
        ctaTextEn: 'Contact Sales',
        popular: false
      }
    ]
  },

  // Interactive Payment Gateway Mock Settings (模拟支付通道配置)
  checkout: {
    title: '安全结账付款',
    titleEn: 'Secure Gateway Checkout',
    merchant: 'ShipFastAI - 支付结算中心',
    merchantEn: 'ShipFastAI - Billing Center',
    methods: [
      { id: 'alipay', name: '支付宝', nameEn: 'Alipay', icon: '💳' },
      { id: 'wechat', name: '微信支付', nameEn: 'WeChat Pay', icon: '💚' },
      { id: 'card', name: '信用卡', nameEn: 'Credit Card', icon: '🌐' }
    ],
    // Mock QR Codes using online free placeholders
    alipayQr: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', // Placeholder representing qr code container
    wechatQr: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', // Placeholder for微信支付 qr
    
    // Simulate real pay success callback timer
    successTimerMs: 4000
  },

  // Collapsible FAQ Section (常见问题)
  faq: {
    title: '常见问题解答',
    titleEn: 'Frequently Asked Questions',
    subtitle: '关于本模板和生成服务的其他常见问题',
    subtitleEn: 'Got questions? We have compiled standard answers here.',
    list: [
      {
        q: '如果我以后要更换主营业务，模板方便修改吗？',
        qEn: 'Is this template easy to modify if my business changes?',
        a: '极其方便！整个网站的内容全部存储在这份 `config.js` 配置文件中。您只需在此修改文案、更改颜色代码或替换特征点，网站便会自动重新加载并渲染。AI 也可以极速读取此配置进行修改。',
        aEn: 'Yes! The entire content structure is extracted into the `config.js` file. Changing themes, text, prices, or SVGs instantly propagates to the entire template page. AI can parse and edit this file with zero learning curve.'
      },
      {
        q: '我该如何将本模板绑定到我的微信/支付宝收款？',
        qEn: 'How do I link WeChat / Alipay to receive actual payments?',
        a: '我们在 `app.js` 中编写了极好的支付接口桩函数（Mock Controller）。您可以在 `README.md` 中查看说明，只需替换相应的支付逻辑或绑定第三方的 Stripe、支付猫、易支付等 API Webhook 即可转为真实收款。',
        aEn: 'The payment controllers are built as clean JS promises in `app.js`. You can follow the setup instructions in the `README.md` to link real Stripe Checkout URLs, WeChat/Alipay Merchant APIs, or third-party webhooks.'
      },
      {
        q: '该网站模版可以部署到 Github Pages 上吗？',
        qEn: 'Can I host this template directly on GitHub Pages?',
        a: '绝对可以。这是一个 100% 静态的前端模板，不需要运行 node.js 等后端服务器。上传至您的 Github 仓库后，开启 Pages 选项即可实现全球免费托管访问，支持自定义域名和 SSL。',
        aEn: 'Absolutely. It is a 100% client-side static web application. Once uploaded to your GitHub repository, simply activate GitHub Pages settings for free hosting with automatic HTTPS enabled.'
      }
    ]
  }
};

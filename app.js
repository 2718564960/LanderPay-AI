/**
 * Global Application Controller
 * 全局应用程序控制器 - 处理页面动态渲染、语言切换、主题控制、模拟器以及结账弹窗交互
 * 
 * Future AI agents: This script dynamically mounts config.js bindings into index.html placeholders.
 * Modify functions here if you need to integrate actual backend APIs (e.g., Stripe, Paypal, database).
 */

// State Management (状态管理器)
const state = {
  currentLang: 'zh',        // 'zh' or 'en'
  currentTheme: 'light-purple', // 'light-purple' or 'dark-slate'
  activeView: 'home',       // 'home' or 'pricing'
  billingCycle: 'yearly',   // 'monthly' or 'yearly'
  selectedCurrency: 'CNY',  // 'CNY', 'USD', 'EUR', 'HKD'
  activeTemplateTab: 'all', // Filter for showcase templates
  checkoutPlan: null,       // Currently selected plan for modal
  checkoutPayMethod: 'alipay' // 'alipay', 'wechat', 'card'
};

// Initialize Application (初始化应用)
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguages();
  initRouter();
  initSimulator();
  renderApp();
  setupEventListeners();
});

// Theme Setup (主题初始化)
function initTheme() {
  const config = window.WEBSITE_CONFIG;
  state.currentTheme = config.theme.mode || 'light-purple';
  
  // Set theme class on body
  if (state.currentTheme === 'dark-slate') {
    document.body.classList.add('dark');
    document.getElementById('btn-theme-toggle').innerText = '☀️';
  } else {
    document.body.classList.remove('dark');
    document.getElementById('btn-theme-toggle').innerText = '🌙';
  }
  
  // Bind brand theme colors to CSS variables
  const root = document.documentElement;
  const colors = config.theme.colors;
  root.style.setProperty('--primary', colors.primary);
  root.style.setProperty('--primary-hover', colors.primaryHover);
  root.style.setProperty('--secondary', colors.secondary);
  root.style.setProperty('--accent', colors.accent);
  root.style.setProperty('--success', colors.success);
  root.style.setProperty('--warning', colors.warning);
}

// Language Detector (语言检测初始化)
function initLanguages() {
  // Try to default to browser language or Chinese
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith('en')) {
    state.currentLang = 'en';
  } else {
    state.currentLang = 'zh';
  }
  updateLanguageButton();
}

// Switch Language State (切换语言函数)
function toggleLanguage() {
  state.currentLang = state.currentLang === 'zh' ? 'en' : 'zh';
  updateLanguageButton();
  renderApp(); // Re-render all elements with new translations
}

function updateLanguageButton() {
  const btn = document.getElementById('btn-lang-toggle');
  if (state.currentLang === 'zh') {
    btn.innerText = 'EN';
    btn.title = 'Switch to English';
  } else {
    btn.innerText = '中';
    btn.title = '切换为中文';
  }
}

// View Routing Switcher (单页路由控制)
function initRouter() {
  const handleHashChange = () => {
    const hash = window.location.hash || '#home';
    
    // Pricing view vs Home view router
    if (hash === '#pricing' || hash.startsWith('#pricing')) {
      state.activeView = 'pricing';
      document.getElementById('home-view').classList.remove('active');
      document.getElementById('pricing-view').classList.add('active');
      window.scrollTo(0, 0);
    } else {
      state.activeView = 'home';
      document.getElementById('pricing-view').classList.remove('active');
      document.getElementById('home-view').classList.add('active');
      
      // Handle scrolling inside Home view
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    updateNavbarActiveState(hash);
  };

  window.addEventListener('hashchange', handleHashChange);
  // Trigger on load
  setTimeout(handleHashChange, 100);
}

// Update Nav Highlight (更新导航高亮)
function updateNavbarActiveState(hash) {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.getAttribute('href') === hash) {
      link.style.color = 'var(--primary)';
      link.style.fontWeight = '700';
    } else {
      link.style.color = '';
      link.style.fontWeight = '';
    }
  });
}

// Setup Event Listeners (DOM事件监听绑定)
function setupEventListeners() {
  const config = window.WEBSITE_CONFIG;
  
  // Theme Toggle Button
  document.getElementById('btn-theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    document.getElementById('btn-theme-toggle').innerText = isDark ? '☀️' : '🌙';
    state.currentTheme = isDark ? 'dark-slate' : 'light-purple';
  });

  // Language Toggle Button
  document.getElementById('btn-lang-toggle').addEventListener('click', toggleLanguage);

  // Mobile Menu Toggle
  const burger = document.getElementById('mobile-menu-toggle');
  const navContainer = document.getElementById('nav-links-container');
  burger.addEventListener('click', () => {
    if (navContainer.style.display === 'flex') {
      navContainer.style.display = '';
    } else {
      navContainer.style.display = 'flex';
      navContainer.style.flexDirection = 'column';
      navContainer.style.position = 'absolute';
      navContainer.style.top = '72px';
      navContainer.style.left = '0';
      navContainer.style.right = '0';
      navContainer.style.backgroundColor = 'var(--card-bg)';
      navContainer.style.padding = '24px';
      navContainer.style.borderBottom = '1px solid var(--border-color)';
    }
  });

  // Close mobile nav on click
  navContainer.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navContainer.style.display = '';
    }
  });

  // Billing Switch Buttons
  const btnMonthly = document.getElementById('billing-btn-monthly');
  const btnYearly = document.getElementById('billing-btn-yearly');
  
  btnMonthly.addEventListener('click', () => {
    state.billingCycle = 'monthly';
    btnMonthly.classList.add('active');
    btnYearly.classList.remove('active');
    renderPricingPlans();
  });
  
  btnYearly.addEventListener('click', () => {
    state.billingCycle = 'yearly';
    btnYearly.classList.add('active');
    btnMonthly.classList.remove('active');
    renderPricingPlans();
  });

  // Currency Dropdown Selector
  const currencySelect = document.getElementById('pricing-currency-dropdown');
  currencySelect.addEventListener('change', (e) => {
    state.selectedCurrency = e.target.value;
    renderPricingPlans();
  });

  // Checkout Modal Event Listeners
  document.getElementById('checkout-close-btn').addEventListener('click', closeCheckoutModal);
  document.getElementById('checkout-success-done-btn').addEventListener('click', closeCheckoutModal);
  
  // Credit card pay form submit handler
  document.getElementById('checkout-card-form').addEventListener('submit', (e) => {
    e.preventDefault();
    processMockPayment();
  });
}

// RENDER ENGINE (渲染主引擎)
function renderApp() {
  const config = window.WEBSITE_CONFIG;
  const isEn = state.currentLang === 'en';

  // 1. Render Brand/Nav logo
  const logoBox = document.getElementById('nav-logo');
  logoBox.innerHTML = `${config.branding.logoSvg} <span>${config.branding.name}</span>`;
  
  // 2. Render Navigation Links
  const navContainer = document.getElementById('nav-links-container');
  navContainer.innerHTML = config.navigation.map(item => {
    const text = isEn ? item.labelEn : item.label;
    const isPricingPage = item.target === '#pricing';
    return `<li><a href="${item.target}">${text}</a></li>`;
  }).join('');

  // Nav CTA Button
  const navCta = document.getElementById('nav-cta-btn');
  navCta.innerText = isEn ? 'Subscribe Pro' : '立即订阅';

  // 3. Render Hero Section
  document.getElementById('hero-badge-tag').innerText = isEn ? config.hero.badgeEn : config.hero.badge;
  document.getElementById('hero-badge-text').innerText = isEn ? config.hero.badgeTextEn : config.hero.badgeText;
  
  const titleText = isEn ? config.hero.titleEn : config.hero.title;
  const accentText = isEn ? config.hero.titleAccentEn : config.hero.titleAccent;
  document.getElementById('hero-title-box').innerHTML = `${titleText}<br><span class="gradient-text">${accentText}</span>`;
  
  document.getElementById('hero-subtitle-box').innerText = isEn ? config.hero.subtitleEn : config.hero.subtitle;
  
  const ctaPrimary = document.getElementById('hero-cta-primary');
  ctaPrimary.innerText = isEn ? config.hero.ctaPrimaryEn : config.hero.ctaPrimary;
  
  const ctaSecondary = document.getElementById('hero-cta-secondary');
  ctaSecondary.innerText = isEn ? config.hero.ctaSecondaryEn : config.hero.ctaSecondary;

  // Hero Stats Row
  const statsRow = document.getElementById('hero-stats-row');
  statsRow.innerHTML = config.hero.stats.map(stat => {
    const lbl = isEn ? stat.textEn : stat.text;
    return `
      <div class="stat-item">
        <div class="stat-item-num">${stat.number}</div>
        <div class="stat-item-lbl">${lbl}</div>
      </div>
    `;
  }).join('');

  // 4. Render Interactive Simulator Text fields
  document.getElementById('simulator-title').innerText = isEn ? config.simulator.titleEn : config.simulator.title;
  document.getElementById('simulator-input').placeholder = isEn ? config.simulator.placeholderEn : config.simulator.placeholder;
  document.getElementById('simulator-btn-text').innerText = isEn ? config.simulator.buttonTextEn : config.simulator.buttonText;

  // 5. Render Core Features Section
  document.getElementById('features-title').innerText = isEn ? config.features.titleEn : config.features.title;
  document.getElementById('features-subtitle').innerText = isEn ? config.features.subtitleEn : config.features.subtitle;
  
  const featuresGrid = document.getElementById('features-grid-container');
  featuresGrid.innerHTML = config.features.list.map(feat => {
    const title = isEn ? feat.titleEn : feat.title;
    const desc = isEn ? feat.descEn : feat.desc;
    return `
      <div class="feature-card">
        <div class="feature-icon-box">${feat.icon}</div>
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
    `;
  }).join('');

  // 6. Render Workflow Steps Section
  document.getElementById('workflow-title').innerText = isEn ? config.workflow.titleEn : config.workflow.title;
  document.getElementById('workflow-subtitle').innerText = isEn ? config.workflow.subtitleEn : config.workflow.subtitle;
  
  const stepsGrid = document.getElementById('steps-grid-container');
  stepsGrid.innerHTML = config.workflow.steps.map(step => {
    const title = isEn ? step.titleEn : step.title;
    const desc = isEn ? step.descEn : step.desc;
    return `
      <div class="step-card">
        <span class="step-num-badge">Step ${step.stepNum}</span>
        <div class="step-icon-box">${step.icon}</div>
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
    `;
  }).join('');

  // 7. Render Template Showcase Section (Tabs and filtered items)
  document.getElementById('templates-title').innerText = isEn ? config.templates.titleEn : config.templates.title;
  document.getElementById('templates-subtitle').innerText = isEn ? config.templates.subtitleEn : config.templates.subtitle;
  
  renderTemplateTabs();
  renderTemplatesGrid();

  // 8. Render Testimonials Section
  document.getElementById('testimonials-title').innerText = isEn ? config.testimonials.titleEn : config.testimonials.title;
  
  const testimonialsContainer = document.getElementById('testimonials-grid-container');
  testimonialsContainer.innerHTML = config.testimonials.list.map(user => {
    const role = isEn ? user.roleEn : user.role;
    const content = isEn ? user.contentEn : user.content;
    return `
      <div class="testimonial-card">
        <p class="testimonial-quote">“${content}”</p>
        <div class="testimonial-user">
          <div class="testimonial-avatar">${user.avatar}</div>
          <div class="testimonial-meta">
            <h4>${user.name}</h4>
            <span>${role}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // 9. Render Pricing View Details
  document.getElementById('pricing-title').innerText = isEn ? config.pricing.titleEn : config.pricing.title;
  document.getElementById('pricing-subtitle').innerText = isEn ? config.pricing.subtitleEn : config.pricing.subtitle;
  
  // Billing cycle toggle text
  document.getElementById('billing-btn-monthly').childNodes[0].nodeValue = isEn ? config.pricing.billingCycle.monthly.labelEn : config.pricing.billingCycle.monthly.label;
  document.getElementById('billing-btn-yearly').childNodes[0].nodeValue = isEn ? config.pricing.billingCycle.yearly.labelEn : config.pricing.billingCycle.yearly.label;
  document.getElementById('billing-discount-lbl').innerText = isEn ? config.pricing.billingCycle.yearly.discountEn : config.pricing.billingCycle.yearly.discount;
  
  document.getElementById('currency-select-lbl').innerText = isEn ? 'Select Billing Currency:' : '选择结算货币:';
  
  // Populates currencies dropdown
  const currencySelect = document.getElementById('pricing-currency-dropdown');
  const currencyOptionsHtml = config.pricing.currencies.map(cur => {
    return `<option value="${cur.code}" ${state.selectedCurrency === cur.code ? 'selected' : ''}>${cur.code} (${cur.symbol})</option>`;
  }).join('');
  currencySelect.innerHTML = currencyOptionsHtml;

  renderPricingPlans();

  // 10. Render FAQ Section
  document.getElementById('faq-title').innerText = isEn ? config.faq.titleEn : config.faq.title;
  document.getElementById('faq-subtitle').innerText = isEn ? config.faq.subtitleEn : config.faq.subtitle;
  
  const faqContainer = document.getElementById('faq-list-container');
  faqContainer.innerHTML = config.faq.list.map((faq, index) => {
    const qText = isEn ? faq.qEn : faq.q;
    const aText = isEn ? faq.aEn : faq.a;
    return `
      <div class="faq-item" id="faq-item-${index}">
        <div class="faq-question" onclick="toggleFaq(${index})">
          <span>${qText}</span>
          <span class="faq-chevron">▼</span>
        </div>
        <div class="faq-answer">
          <p>${aText}</p>
        </div>
      </div>
    `;
  }).join('');

  // 11. Render Footer
  const footerLogo = document.getElementById('footer-logo');
  footerLogo.innerHTML = `${config.branding.logoSvg} <span>${config.branding.name}</span>`;
  
  document.getElementById('footer-desc-text').innerText = isEn ? 
    'AI-powered launch & deployment landing template. Ship your ideas in minutes.' : 
    'AI 驱动的一键式产品发布与部署平台。像聊天一样发布你的 SaaS。';
    
  document.getElementById('footer-github-link').href = config.branding.github;
  document.getElementById('footer-email-link').href = `mailto:${config.branding.contactEmail}`;
  document.getElementById('footer-contact-item').href = `mailto:${config.branding.contactEmail}`;
  
  document.getElementById('footer-menu-title-product').innerText = isEn ? 'PRODUCT' : '产品';
  document.getElementById('footer-menu-title-support').innerText = isEn ? 'SUPPORT' : '支持';
  
  document.getElementById('footer-copyright-text').innerText = config.branding.copyright;
}

// ----------------- TEMPLATE SHOWCASE TABS & FILTERING -----------------
function renderTemplateTabs() {
  const config = window.WEBSITE_CONFIG;
  const isEn = state.currentLang === 'en';
  const tabRow = document.getElementById('templates-tabs-row');
  
  tabRow.innerHTML = config.templates.categories.map(cat => {
    const lbl = isEn ? cat.labelEn : cat.label;
    const isActive = state.activeTemplateTab === cat.id;
    return `<button class="tab-btn ${isActive ? 'active' : ''}" onclick="selectTemplateTab('${cat.id}')">${lbl}</button>`;
  }).join('');
}

function selectTemplateTab(categoryId) {
  state.activeTemplateTab = categoryId;
  renderTemplateTabs();
  renderTemplatesGrid();
}
window.selectTemplateTab = selectTemplateTab; // Expose globally for onclick bindings

function renderTemplatesGrid() {
  const config = window.WEBSITE_CONFIG;
  const isEn = state.currentLang === 'en';
  const grid = document.getElementById('templates-grid-container');
  
  const filteredItems = config.templates.items.filter(item => {
    return state.activeTemplateTab === 'all' || item.category === state.activeTemplateTab;
  });
  
  grid.innerHTML = filteredItems.map(item => {
    const name = isEn ? item.titleEn : item.title;
    const badge = isEn ? item.badgeEn : item.badge;
    const btnText = isEn ? 'Explore' : '立即套用';
    
    return `
      <div class="template-card">
        <div class="template-preview" style="background: ${item.gradient}">
          <div class="template-badge">${badge}</div>
          <div class="template-preview-text">
            <h4>${name}</h4>
            <span>Template Layout</span>
          </div>
        </div>
        <div class="template-info">
          <span class="template-info-title">${name}</span>
          <a href="${item.previewLink}" class="template-btn">${btnText}</a>
        </div>
      </div>
    `;
  }).join('');
}

// ----------------- PRICING & CURRENCY CALCULATOR -----------------
function renderPricingPlans() {
  const config = window.WEBSITE_CONFIG;
  const isEn = state.currentLang === 'en';
  const pricingGrid = document.getElementById('pricing-plans-container');
  
  // Find current currency conversion rate
  const curObject = config.pricing.currencies.find(c => c.code === state.selectedCurrency) || { symbol: '¥', rate: 1 };
  
  pricingGrid.innerHTML = config.pricing.plans.map(plan => {
    const name = isEn ? plan.nameEn : plan.name;
    const desc = isEn ? plan.descriptionEn : plan.description;
    const badge = isEn ? plan.badgeEn : plan.badge;
    const isPopular = plan.popular;
    
    // Choose base price in CNY (Chinese Yuan)
    const baseCNY = state.billingCycle === 'yearly' ? plan.priceYearlyCNY : plan.priceMonthlyCNY;
    
    // Calculate final price with exchange rate rounding
    let convertedPrice = Math.round(baseCNY * curObject.rate);
    if (baseCNY > 0 && curObject.code !== 'CNY') {
      // Small adjustment for foreign currencies to make them look cleaner (e.g. ending in 9 or .99)
      if (state.billingCycle === 'monthly') {
        convertedPrice = Math.max(1, Math.round(convertedPrice - 1)) + 0.99;
      } else {
        convertedPrice = Math.max(9, Math.round(convertedPrice - 1));
      }
    }
    
    const formattedPrice = typeof convertedPrice === 'number' && convertedPrice % 1 !== 0 
      ? convertedPrice.toFixed(2) 
      : convertedPrice;
      
    const ctaText = isEn ? plan.ctaTextEn : plan.ctaText;
    const periodText = state.billingCycle === 'yearly' 
      ? (isEn ? '/ year' : '/ 年') 
      : (isEn ? '/ month' : '/ 月');
      
    // Render features list
    const featuresHtml = plan.features.map(f => {
      const featText = isEn ? f.textEn : f.text;
      return `
        <li class="plan-feature-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${featText}</span>
        </li>
      `;
    }).join('');
    
    return `
      <div class="pricing-card ${isPopular ? 'popular' : ''}">
        ${isPopular ? `<span class="popular-badge">${badge}</span>` : ''}
        <div>
          <h3 class="plan-name">${name}</h3>
          <p class="plan-desc">${desc}</p>
          
          <div class="plan-price-box">
            <div class="plan-price">
              <span class="plan-price-symbol">${curObject.symbol}</span>
              <span>${formattedPrice}</span>
              <span class="plan-price-period">${periodText}</span>
            </div>
          </div>
          
          <ul class="plan-features">
            ${featuresHtml}
          </ul>
        </div>
        
        <button class="btn ${isPopular ? 'btn-primary' : 'btn-secondary'}" 
                onclick="openCheckoutModal('${plan.name}', '${plan.nameEn}', ${baseCNY}, '${curObject.symbol}', ${curObject.rate})">
          ${ctaText}
        </button>
      </div>
    `;
  }).join('');
}

// ----------------- FAQ COLLAPSIBLE MECHANICS -----------------
function toggleFaq(index) {
  const item = document.getElementById(`faq-item-${index}`);
  const isOpen = item.classList.contains('open');
  
  // Close all other FAQ items first
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  
  if (!isOpen) {
    item.classList.add('open');
  }
}
window.toggleFaq = toggleFaq; // Expose globally

// ----------------- INTERACTIVE TERMINAL SIMULATOR -----------------
function initSimulator() {
  const submitBtn = document.getElementById('simulator-submit-btn');
  const inputField = document.getElementById('simulator-input');
  
  submitBtn.addEventListener('click', triggerSimulation);
  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') triggerSimulation();
  });
}

function triggerSimulation() {
  const inputField = document.getElementById('simulator-input');
  const textVal = inputField.value.trim();
  if (!textVal) return;
  
  const consoleEl = document.getElementById('simulator-console');
  const isEn = state.currentLang === 'en';
  const config = window.WEBSITE_CONFIG;
  
  // Clear and initialize log lines
  consoleEl.innerHTML = `<div class="console-line text-muted">> User Prompt: "${textVal}"</div>`;
  inputField.disabled = true;
  document.getElementById('simulator-submit-btn').disabled = true;

  // Sequentially inject mock terminal stages
  config.simulator.stages.forEach(stage => {
    setTimeout(() => {
      const lineText = isEn ? stage.textEn : stage.text;
      const line = document.createElement('div');
      line.className = 'console-line';
      line.style.color = '#38bdf8'; // Cyan text color
      line.innerText = lineText;
      consoleEl.appendChild(line);
      consoleEl.scrollTop = consoleEl.scrollHeight;
      
      // If it is the final step, re-enable input and show simulated links
      if (stage.text.includes('部署成功')) {
        setTimeout(() => {
          const successLine = document.createElement('div');
          successLine.className = 'console-line';
          successLine.style.color = '#34d399'; // Green success color
          
          const mockDomain = `https://demo-${Math.floor(Math.random() * 9000 + 1000)}.shipfastai.com`;
          const textMsg = isEn 
            ? `🌐 Live Site Preview URL: <a href="#pricing" style="color:#60a5fa;text-decoration:underline;">${mockDomain}</a>`
            : `🌐 线上预览地址: <a href="#pricing" style="color:#60a5fa;text-decoration:underline;">${mockDomain}</a>`;
            
          successLine.innerHTML = textMsg;
          consoleEl.appendChild(successLine);
          consoleEl.scrollTop = consoleEl.scrollHeight;
          
          // Re-enable
          inputField.disabled = false;
          document.getElementById('simulator-submit-btn').disabled = false;
          inputField.value = '';
        }, 1000);
      }
    }, stage.delay);
  });
}

// ----------------- INTERACTIVE CHECKOUT MODAL LOGIC -----------------
function openCheckoutModal(planNameZh, planNameEn, priceCNY, symbol, rate) {
  const config = window.WEBSITE_CONFIG;
  const isEn = state.currentLang === 'en';
  
  state.checkoutPlan = { planNameZh, planNameEn, priceCNY, symbol, rate };
  
  // Calculate display price in modal
  let displayPrice = Math.round(priceCNY * rate);
  if (priceCNY > 0 && symbol !== '¥') {
    displayPrice = state.billingCycle === 'monthly' ? (displayPrice - 1) + 0.99 : (displayPrice - 1);
  }
  
  const formattedPrice = typeof displayPrice === 'number' && displayPrice % 1 !== 0 
    ? displayPrice.toFixed(2) 
    : displayPrice;

  // Inject plan info into Modal DOM
  document.getElementById('order-plan-name').innerText = isEn ? planNameEn : planNameZh;
  
  const billingText = state.billingCycle === 'yearly'
    ? (isEn ? 'Billed Annually' : '按年计费')
    : (isEn ? 'Billed Monthly' : '按月计费');
  document.getElementById('order-plan-billing').innerText = billingText;
  
  document.getElementById('order-amount-display').innerText = `${symbol}${formattedPrice}`;
  
  // Setup method switch tabs
  const tabContainer = document.getElementById('payment-methods-tabs');
  tabContainer.innerHTML = config.checkout.methods.map(m => {
    const name = isEn ? m.nameEn : m.name;
    const isActive = state.checkoutPayMethod === m.id;
    return `
      <button class="pay-tab-btn ${isActive ? 'active' : ''}" onclick="switchPaymentMethod('${m.id}')">
        <span style="font-size: 20px;">${m.icon}</span>
        <span>${name}</span>
      </button>
    `;
  }).join('');
  
  // Activate default method view
  switchPaymentMethod(state.checkoutPayMethod);
  
  // Reset dialog view transitions
  document.getElementById('checkout-active-panel').style.display = 'block';
  document.getElementById('checkout-success-panel').classList.remove('active');
  
  // Show overlay
  document.getElementById('checkout-modal-overlay').classList.add('active');
  
  // Simulate payment automation scan detection (Wechat or Alipay)
  setupMockPaymentScanTrigger();
}
window.openCheckoutModal = openCheckoutModal; // Expose globally

function closeCheckoutModal() {
  document.getElementById('checkout-modal-overlay').classList.remove('active');
  clearTimeout(state.checkoutTimer);
}
window.closeCheckoutModal = closeCheckoutModal;

function switchPaymentMethod(methodId) {
  state.checkoutPayMethod = methodId;
  
  // Update button active state styles
  const buttons = document.querySelectorAll('.pay-tab-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick').includes(methodId)) {
      btn.classList.add('active');
    }
  });
  
  // Toggle panels visibility
  document.getElementById('pay-panel-alipay').classList.remove('active');
  document.getElementById('pay-panel-wechat').classList.remove('active');
  document.getElementById('pay-panel-card').classList.remove('active');
  
  document.getElementById(`pay-panel-${methodId}`).classList.add('active');
  
  // Reset QR scan triggers
  setupMockPaymentScanTrigger();
}
window.switchPaymentMethod = switchPaymentMethod;

// Scan payment simulation (4 seconds auto success trigger)
function setupMockPaymentScanTrigger() {
  clearTimeout(state.checkoutTimer);
  const config = window.WEBSITE_CONFIG;
  
  if (state.checkoutPayMethod === 'alipay' || state.checkoutPayMethod === 'wechat') {
    state.checkoutTimer = setTimeout(() => {
      // Trigger success panel
      showPaymentSuccessView();
    }, config.checkout.successTimerMs || 4000);
  }
}

// Form credit card pay submit simulation
function processMockPayment() {
  const btn = document.getElementById('btn-submit-card-pay');
  const originalText = btn.innerText;
  
  // Disable button and show spinner
  btn.disabled = true;
  btn.innerText = state.currentLang === 'en' ? 'Processing...' : '正在处理交易...';
  
  setTimeout(() => {
    btn.disabled = false;
    btn.innerText = originalText;
    showPaymentSuccessView();
  }, 2000);
}

function showPaymentSuccessView() {
  // Fade active panel, display success panel
  document.getElementById('checkout-active-panel').style.display = 'none';
  
  const successPanel = document.getElementById('checkout-success-panel');
  successPanel.classList.add('active');
  
  const isEn = state.currentLang === 'en';
  document.getElementById('checkout-success-title').innerText = isEn ? 'Payment Successful!' : '支付成功！';
  document.getElementById('checkout-success-msg').innerText = isEn 
    ? 'Your Pro Membership has been activated. A receipt and onboarding instructions have been sent to your account.'
    : '您的专业版会员包已激活成功。订单收据及使用文档已发送至您的绑定账号中。';
  document.getElementById('checkout-success-done-btn').innerText = isEn ? 'Finish & Return' : '完成并返回';
}

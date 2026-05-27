# ShipFastAI - Reusable SaaS Landing & Checkout Template
# ShipFastAI - 通用 SaaS 落地页与支付结算模板

[English](#english) | [中文说明](#中文说明)

---

## English

A premium, responsive, and highly configurable landing page and mock checkout template inspired by the layouts of **chatppt.com** and **shiptower.com**. Designed specifically for indie hackers, designers, and future AI agents.

The core architecture separates content from code by storing all text, lists, pricing plans, and color variables in a single configuration file (`config.js`).

### 🌟 Features
* **Bilingual Support (EN/ZH)**: Seamlessly toggle translations across the entire page.
* **Dual Theme Engine**: Supports a modern Light Purple Gradient (chatppt style) and a high-tech Dark Slate theme (shiptower style) automatically and manually.
* **Interactive AI Terminal Simulator**: Let users type prompts and view simulated console outputs of AI building websites or servers.
* **Interactive Pricing Calculator**: Toggle Monthly/Yearly cycles and switch between multiple currencies (CNY, USD, EUR, HKD) with exchange rate conversions.
* **Mock Payment Gateway Modal**: Fully interactive modal overlay simulating Alipay scan codes, WeChat Pay scan codes, and Credit Card payments with success callbacks.
* **SEO Optimized**: Complies with standard metadata structure, semantic headings, and search bot indexing attributes.
* **No Build Steps**: Pure vanilla HTML, CSS, and JS. Deploy it instantly to GitHub Pages, Vercel, or Netlify by simply hosting the directory.

---

### 📂 File Structure
```text
webdemo/
├── index.html        # Main HTML skeleton containing DOM nodes and SEO tags
├── style.css         # Visual styles, responsiveness, animations, and modal containers
├── config.js         # The Single Source of Truth containing all texts, lists, colors, and plans
├── app.js            # Translation, themes, routing, simulator, and payment popup logic
└── assets/
    └── preview.png   # Layout design preview reference for humans and AI visual models
```

---

### 🛠️ Customization Guide

#### 1. Replace Texts, Links, and Plans
Open [config.js](file:///f:/xianyu/webdemo/config.js) and modify the fields in the global `window.WEBSITE_CONFIG` object:
* **Branding**: Change `branding.name`, copy your custom SVG code to `branding.logoSvg`, update `branding.github` or email.
* **Hero Content**: Edit headlines (`hero.title`, `hero.titleAccent`) and descriptions.
* **Features Grid & Steps**: Update the icon SVG codes and descriptions.
* **Pricing Plans**: Add or delete plans inside the `pricing.plans` array. Configure CNY base prices; currency conversion rate conversions will run automatically!

#### 2. Change Colors & Themes
Open the `theme` block in `config.js` to redefine core color tokens:
```javascript
theme: {
  mode: 'light-purple', // or 'dark-slate'
  colors: {
    primary: '#6366f1', // Primary brand color
    secondary: '#a855f7', // Gradient accent color
    // ...
  }
}
```

---

### 💳 Real Payment Gateway Integration
Currently, `app.js` runs a mockup simulation that automatically triggers a successful checkout screen after scanning QR codes or submitting card credentials. To connect real payment providers:

* **Stripe Checkout**:
  Replace the payment click handler in `app.js` (`openCheckoutModal`) to redirect to your Stripe Hosted Checkout URL.
* **Alipay / WeChat Pay Merchant APIs**:
  Modify the `switchPaymentMethod` logic in `app.js` to call your server-side API, fetch a real WeChat/Alipay QR code link, and set it as the `src` attribute for the QR SVG image.

---

### 🤖 Special Guide: Instructing a Future AI Agent to Modify This Site

If you copy this repository or ask an AI model (like Claude, Gemini, ChatGPT) to update your website, you can copy-paste the prompt below for optimal results:

> **AI Instruction Prompt:**
> "I have a static SaaS landing template. The website text, structures, and color variables are stored globally in `config.js` and loaded dynamically.
> 1. Read `config.js` to understand the data schema.
> 2. Do NOT write complex webpack or React scripts. Only modify `config.js` to update branding, features, or plans.
> 3. If I want to change visual components, adjust the selectors in `style.css` using custom properties.
> 4. Keep all existing variables and JSDoc comments intact."

---
---

## 中文说明

一个高端、响应式、且高度可配置的产品落地页与支付结算模版，设计灵感汲取自 **chatppt.com** 和 **shiptower.com**。特别针对独立开发者、设计师以及未来的 AI 助手进行了全方位优化。

项目采用“数据与逻辑分离”的架构设计，所有的文案、图标、价格套餐、色彩方案均统一存放在配置文件 `config.js` 中。

### 🌟 核心特性
* **中英双语自适应**：支持一键切换中/英文视图，自动更新整站文本。
* **双主题引擎**：内置紫色渐变现代亮色主题（ChatPPT 风格）和科技感暗黑主题（ShipTower 风格），支持自动感应或手动切换。
* **交互式终端模拟器**：支持用户在 Hero 区域的输入框中键入产品痛点，模拟 AI 实时生成页面与编译部署的终端动画输出，提升互动性。
* **动态定价计算器**：支持月付/年付周期切换，支持多种结算货币（人民币、美元、欧元、港币）的汇率折算与符号展示。
* **结账与收款弹窗模拟**：内置完整的毛玻璃结账弹窗，包含支付宝扫码、微信支付扫码、信用卡表单的交互切换以及模拟付款成功回调状态。
* **SEO 优化**：预置完整的元标签、规范链接、开放图谱属性以及结构化语义 HTML5 节点。
* **免编译部署**：纯原生前端 HTML/CSS/JS，无任何工程化配置包，上传 GitHub 开启 Pages 服务即可全球免费访问。

---

### 📂 文件目录说明
```text
webdemo/
├── index.html        # 网页核心结构与 SEO 元标签
├── style.css         # 网页视觉样式、响应式断点、过渡动画以及弹窗布局
├── config.js         # 全局配置文件（唯一事实数据源），配置文案、列表、定价和色彩
├── app.js            # 翻译渲染、主题切换、单页路由、终端模拟及支付交互逻辑
└── assets/
    └── preview.png   # 网页整体设计效果预览图，供用户和 AI 视觉模型参考
```

---

### 🛠️ 定制与修改指南

#### 1. 替换文案、链接与定价
打开 [config.js](file:///f:/xianyu/webdemo/config.js)，直接修改 `window.WEBSITE_CONFIG` 对象中的对应属性：
* **品牌基本信息**：修改 `branding.name` 更改网站名称；将您的 SVG 路径复制进 `branding.logoSvg` 即可更换 Logo。
* **横幅内容**：编辑 `hero.title`、`hero.titleAccent` 及描述文案。
* **功能与流程网格**：更新 icons 的 SVG 代码和说明。
* **价格套餐**：在 `pricing.plans` 数组中添加/删除套餐对象，填写人民币基准价，程序会自动计算汇率与美元显示。

#### 2. 自定义品牌色系
在 `config.js` 的 `theme` 部分可以直接修改主题配色变量：
```javascript
theme: {
  mode: 'light-purple', // 可选 'dark-slate'
  colors: {
    primary: '#6366f1',   // 品牌主色
    secondary: '#a855f7', // 渐变色
    // ...
  }
}
```

---

### 💳 接入真实第三方收款支付
目前在 `app.js` 中编写的支付逻辑为静态模拟（扫码 4 秒后或点击信用卡支付 2 秒后自动显示“支付成功”）。要接入真实商业收款：

* **微信 / 支付宝商家 API**：
  在 `app.js` 的 `openCheckoutModal` 触发时，通过 API 请求您的后端生成真正的预支付二维码链接（QR Url），并动态替换弹窗中的 SVG/图片 `src`。
* **Stripe 结账链接**：
  您可以把订阅按钮的点击事件修改为直接跳转到 Stripe Hosted Checkout 托管收银台页面。
* **其他聚合支付（如易支付、Stripe Webhook 等）**：
  在 `app.js` 对应支付渠道的方法中替换接口请求逻辑。

---

### 🤖 特别指南：如何让未来的 AI 助手修改本网站

如果您打算在以后把这个仓库上传到 GitHub 并指定其他 AI 语言模型读取并维护此项目，你可以直接给 AI 发送如下提示词：

> **AI 提示词指南：**
> “这是一个纯静态的 SaaS 产品落地页和支付弹窗模板。所有前台渲染的数据、文字、价格和颜色主题，均统一存储在 `config.js` 的全局变量中。
> 1. 请首先读取并分析 `config.js`，理解其属性数据架构。
> 2. 如果我要修改网站的名称、服务、FAQ、统计数据或增减付费套餐，你只需要直接修改 `config.js` 并覆盖原文件即可，不要重写整个 html 或 app.js。
> 3. 如果我要调整布局间距或具体按钮样式，请定位并修改 `style.css`。
> 4. 修改时，请务必完整保留原有的变量结构和注释说明。”

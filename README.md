# ☕️ Cyber Cafe Terminal (赛博咖啡终端)

一个赛博朋克风格的交互式收据生成器与终端界面。本项目模拟了一个未来风格的咖啡馆“安全终端”，具有 CRT 屏幕效果、黑客风格的解码动画以及动态收据生成系统。

![License](https://img.shields.io/badge/license-MIT-blue.svg)

[🌐 在线演示 (Live Demo)](https://cafe.weibazhen.com/) | [English Version](README_EN.md)

## ✨ 特性

- **赛博朋克美学**:
  - 逼真的 CRT 扫描线效果和屏幕微闪烁。
  - 霓虹光晕与复古终端字体排版。
  - 黑客风格的“数据解码”文字动画。
- **交互式收据系统**:
  - 生成细节丰富、拟真的热敏纸收据。
  - 智能“折叠”逻辑：长收据自动隐藏中间部分，保持 UI 整洁。
  - 动态总价计算：仅计算当前可见项目的金额。
- **视觉特效**:
  - 鼠标悬停时的故障（Glitch）效果。
  - 平滑的过渡动画与屏幕“开启”特效。
  - 收据纸张的 3D 透视倾斜效果。
- **功能**:
  - **影像快照**: 将当前收据保存为图片。
  - **双语支持**: 一键切换中/英界面。

## 🚀 使用方法

1.  **克隆仓库**:
    ```bash
    git clone https://github.com/yourusername/cyber-cafe-terminal.git
    ```
2.  **打开项目**:
    直接在任意现代浏览器中打开 `index.html` 即可。基础版本无需构建步骤或服务器环境。

## 🛠️ 技术栈

- **HTML5**: 语义化结构。
- **CSS3**: 高级样式，大量使用 CSS 变量、关键帧动画、3D 变换 (Transforms) 和 Flexbox/Grid 布局。
- **JavaScript (ES6+)**: 处理状态管理、DOM 操作及核心动画逻辑。

## 📂 项目结构

```
/
├── index.html      # 主入口文件
├── style.css       # 所有视觉样式与动画定义
├── script.js       # 应用程序逻辑与交互代码
├── README.md       # 项目说明文档 (中文)
└── README_EN.md    # Project Documentation (English)
```

## 🎨 设计细节

界面旨在模仿高科技（或许是反乌托邦式）的销售点终端系统 (POS)。
- **字体**: 使用 `Consolas`, `Monaco`, `Courier New` 等等宽字体，还原真实的终端质感。
- **配色**: 深邃的黑色背景搭配高对比度的霓虹绿 (`#00ff9d`)，典型的复古未来主义风格。

## 📄 许可证

本项目开源并基于 [MIT License](LICENSE) 许可证发布。

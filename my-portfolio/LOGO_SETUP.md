# Logo 配置指南

## 如何添加你的 Logo

### 步骤 1: 准备 Logo 文件
1. 将你的 Logo 文件放入 `public/images/` 文件夹
2. 推荐格式：PNG（支持透明背景）或 SVG
3. 推荐尺寸：512x512px 或 1024x1024px（正方形）
4. 文件命名：logo.png 或 logo.svg

### 步骤 2: 启用 Logo 显示
在 `src/components/ThreeScene.jsx` 文件中：

1. 找到被注释的 Logo 加载代码块（第 30-50 行左右）
2. 取消注释（删除 /* 和 */）
3. 确保文件路径正确：`/Personal-Website/images/logo.png`

### 步骤 3: 自定义 Logo 样式
你可以调整：
- Logo 大小：修改 `PlaneGeometry(2, 2)` 中的数字
- Logo 动画：修改 GSAP 动画参数
- Logo 位置：调整 position.x, position.y, position.z

### 其他选项:
- **3D Logo**: 如果你有 .glb/.gltf 3D 模型文件，我可以帮你加载
- **动态 Logo**: 可以添加鼠标悬停或旋转效果
- **多个 Logo**: 支持在不同部分显示不同版本

## 当前状态
现在显示的是蓝色立方体作为占位符。一旦你提供 Logo 文件，我们就可以替换它。
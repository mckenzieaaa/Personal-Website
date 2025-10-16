#!/bin/bash

# 流体粒子系统 - GitHub Pages 自动部署脚本
# 使用方法: ./deploy.sh

echo "🎨 Personal Website - 部署脚本"
echo "================================"
echo ""

# 加载 nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# 使用 Node.js v22.19.0
echo "📦 正在加载 Node.js v22.19.0..."
nvm use v22.19.0

if [ $? -ne 0 ]; then
    echo "❌ 错误: 无法加载 Node.js v22.19.0"
    echo "请确保已安装 nvm 和 Node.js v22.19.0"
    exit 1
fi

echo ""
echo "🔍 检查 Git 状态..."
git status --short

echo ""
read -p "是否要提交当前更改？(y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📝 输入提交消息:"
    read commit_message
    
    if [ -z "$commit_message" ]; then
        commit_message="Update website content"
    fi
    
    echo ""
    echo "➕ 添加所有更改..."
    git add .
    
    echo "💾 提交更改..."
    git commit -m "$commit_message"
    
    echo "⬆️  推送到 GitHub..."
    git push origin main
    
    if [ $? -ne 0 ]; then
        echo "❌ Git 推送失败！"
        exit 1
    fi
fi

echo ""
echo "🔨 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败！"
    exit 1
fi

echo ""
echo "🚀 部署到 GitHub Pages..."
npm run deploy

if [ $? -ne 0 ]; then
    echo "❌ 部署失败！"
    exit 1
fi

echo ""
echo "================================"
echo "✅ 部署完成！"
echo ""
echo "🌐 网站地址: https://mckenzieaaa.github.io/Personal-Website/"
echo ""
echo "💡 提示: GitHub Pages 可能需要 1-5 分钟更新"
echo "   如果没有看到更改，请强制刷新浏览器 (Cmd+Shift+R)"
echo ""
echo "🎉 享受你的流体粒子系统页面！"

### 打包成 App 
1. 执行 npm run build
2. 在HbuildX中创建 5+App 项目,将打包之后的文件导入到 5+App 项目中。
打包文件空白页(在 vue.config.js 文件中)
```javascript
module.exports = {
    publicPath: './'
}
```
3. HbuilderX 中 发行 - 原生App云打包 - 使用云端证书 - 传统打包
4. 打包后的 apk 可以在 QQ浏览器中下载
module.exports = {
  "extends": "react-app",
  "rules": {
    // 'default-case': 'off', // 关闭switch没有default的告警
    'no-script-url': 'off', // 关闭a标签href无url的告警
    'jsx-a11y/anchor-is-valid': 'off', // 关闭jsx a标签无效的告警
    'jsx-a11y/anchor-has-content': 'off', // 关闭jsx a标签无内容的告警
    "semi": [2, "always"],//语句强制分号结尾
  }
}

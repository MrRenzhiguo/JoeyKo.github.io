import React from 'react'

// introduce
export default class myIntroduce extends React.Component {
    render() {
        return (
            <div className="introduce">
                <p>用了什么？</p>
                <ol>
                    <li><a href="https://ant.design/index-cn" target="_blank">Designed as Ant Design</a>，提炼和服务企业级中后台产品的交互语言和视觉风格。</li>
                    <li><a href="https://motion.ant.design/" target="_blank">Ant Motion</a>，提供一些动态组件</li>
                    <li>基于 npm + webpack + babel 的工作流，支持 ES2015 和 TypeScript。</li>
                </ol>
            </div>
        )
    }
}

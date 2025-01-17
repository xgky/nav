const categories = [
    {
        id: "tools",
        name: "常用工具",
        links: [
            { name: "Github", url: "https://github.com", desc: "全球最大的开源代码库和版本控制系统。" },
            { name: "uTools", url: "https://u.tools", desc: "一个快捷效率工具，可以帮助你快速启动程序。" },
            { name: "draw", url: "https://www.draw.io", desc: "在线绘图工具，支持流程图、架构图等多种图表绘制。" },
            { name: "幕布", url: "https://mubu.com", desc: "一款思维导图和笔记工具。" },
            { name: "草料二维码", url: "https://cli.im", desc: "一个在线生成二维码的工具。" },
            { name: "语雀", url: "https://yuque.com", desc: "一款知识管理和文档协作工具。" }
        ]
    },
    {
        id: "social-media",
        name: "社交媒体",
        links: [
            { name: "微博", url: "https://www.weibo.com", desc: "中国最大的社交媒体平台。" },
            { name: "Facebook", url: "https://www.facebook.com", desc: "全球最大的社交媒体平台。" },
            { name: "Twitter", url: "https://www.twitter.com", desc: "实时信息分享平台。" }
        ]
    },
    {
        id: "news",
        name: "新闻",
        links: [
            { name: "CNN", url: "https://www.cnn.com", desc: "美国著名的新闻频道。" },
            { name: "BBC", url: "https://www.bbc.com", desc: "英国广播公司。" },
            { name: "路透社", url: "https://www.reuters.com", desc: "全球知名的新闻通讯社。" }
        ]
    },
    {
        id: "frontend-tools",
        name: "小前端",
        links: [
            { name: "Staticfile CDN", url: "https://www.staticfile.org", desc: "免费CDN服务，包括 JavaScript、CSS、图片和 swf 等静态文件。" },
            { name: "jsDelivr", url: "https://www.jsdelivr.com", desc: "开源 CDN 服务。" },
            { name: "BootCDN", url: "https://www.bootcdn.cn", desc: "稳定、快速、免费的前端开源项目 CDN 加速服务。" },
            { name: "cdnjs", url: "https://cdnjs.com", desc: "面向 Web 开发人员的免费和开源公共 Web CDN！" }
        ]
    },
    {
        id: "entertainment",
        name: "娱乐",
        links: [
            { name: "YouTube", url: "https://www.youtube.com", desc: "全球最大的在线视频平台。" },
            { name: "Netflix", url: "https://www.netflix.com", desc: "流行的视频流媒体服务。" },
            { name: "Twitch", url: "https://www.twitch.tv", desc: "实时视频直播平台。" }
        ]
    }
];

const navList = document.getElementById('nav-list');
const content = document.getElementById('content');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');

const mobileMenuHeader = document.createElement('h2');
mobileMenuHeader.textContent = ": : : 分 类 : : :";
mobileMenu.appendChild(mobileMenuHeader);

const mobileNavList = document.createElement('ul');
mobileMenu.appendChild(mobileNavList);

categories.forEach(category => {
    // 添加导航链接到侧边栏
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.href = `#${category.id}`;
    navLink.textContent = category.name;
    navItem.appendChild(navLink);
    navList.appendChild(navItem);

    // 添加导航链接到折叠菜单
    const mobileNavItem = document.createElement('li');
    const mobileNavLink = document.createElement('a');
    mobileNavLink.href = `#${category.id}`;
    mobileNavLink.textContent = category.name;
    mobileNavItem.appendChild(mobileNavLink);
    mobileNavList.appendChild(mobileNavItem);

    // 添加分类内容
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    categoryDiv.id = category.id;

    // 添加分类标题
    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.textContent = category.name; // 设置标题文本
    categoryDiv.appendChild(categoryTitle); // 添加标题到分类容器

    category.links.forEach(link => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardTitle = document.createElement('h3');
        const cardLink = document.createElement('a');
        cardLink.href = link.url;
        cardLink.textContent = link.name;
        cardTitle.appendChild(cardLink);
        card.appendChild(cardTitle);

        const cardDesc = document.createElement('p');
        cardDesc.textContent = link.desc;
        card.appendChild(cardDesc);

        categoryDiv.appendChild(card);
    });

    content.appendChild(categoryDiv);
});

document.body.insertBefore(mobileMenu, document.querySelector('.container'));

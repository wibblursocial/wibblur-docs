import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', '693'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', 'f08'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '596'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', '68f'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', '5a0'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', 'f30'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', 'd57'),
    exact: true
  },
  {
    path: '/docs/blog',
    component: ComponentCreator('/docs/blog', '0fd'),
    exact: true
  },
  {
    path: '/docs/blog/archive',
    component: ComponentCreator('/docs/blog/archive', '9f5'),
    exact: true
  },
  {
    path: '/docs/blog/first-blog-post',
    component: ComponentCreator('/docs/blog/first-blog-post', '139'),
    exact: true
  },
  {
    path: '/docs/blog/long-blog-post',
    component: ComponentCreator('/docs/blog/long-blog-post', '981'),
    exact: true
  },
  {
    path: '/docs/blog/mdx-blog-post',
    component: ComponentCreator('/docs/blog/mdx-blog-post', '82a'),
    exact: true
  },
  {
    path: '/docs/blog/tags',
    component: ComponentCreator('/docs/blog/tags', '7de'),
    exact: true
  },
  {
    path: '/docs/blog/tags/docusaurus',
    component: ComponentCreator('/docs/blog/tags/docusaurus', '21f'),
    exact: true
  },
  {
    path: '/docs/blog/tags/facebook',
    component: ComponentCreator('/docs/blog/tags/facebook', 'a77'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hello',
    component: ComponentCreator('/docs/blog/tags/hello', '2a8'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hola',
    component: ComponentCreator('/docs/blog/tags/hola', 'db5'),
    exact: true
  },
  {
    path: '/docs/blog/welcome',
    component: ComponentCreator('/docs/blog/welcome', 'cff'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', '093'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '132'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'a59'),
    routes: [
      {
        path: '/docs/getting-started',
        component: ComponentCreator('/docs/getting-started', 'df5'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

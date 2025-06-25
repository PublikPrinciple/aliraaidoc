import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontWeight: 'bold', fontSize: '18px' }}>AliraAI</span>
      <span style={{ fontSize: '14px', color: '#666' }}>Documentation</span>
    </div>
  ),
  project: {
    link: 'https://github.com/PublikPrinciple/aliraaidoc'
  },
  docsRepositoryBase: 'https://github.com/PublikPrinciple/aliraaidoc/tree/main',
  footer: {
    text: (
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <span>© 2025 AliraAI Teacher Assessment Platform</span>
        <span>Empowering teachers through AI-driven insights</span>
      </div>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – AliraAI Documentation'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="AliraAI Documentation" />
      <meta property="og:description" content="Comprehensive documentation for the AliraAI Teacher Assessment Platform - AI-powered voice assessments for professional growth" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ 
            background: 'linear-gradient(to right, #e5e7eb, transparent)', 
            height: '1px', 
            margin: '8px 0' 
          }} />
        )
      }
      return <>{title}</>
    }
  },
  toc: {
    float: true,
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  search: {
    placeholder: 'Search AliraAI documentation...'
  },
  primaryHue: 200,
  primarySaturation: 100,
  chat: {
    link: 'https://aliraai.com/chat',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04.97 4.43L1 23l6.57-1.97C9.96 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <circle cx="8.5" cy="12" r="1"/>
        <circle cx="12" cy="12" r="1"/>
        <circle cx="15.5" cy="12" r="1"/>
      </svg>
    )
  },
  banner: {
    key: 'aliraai-launch',
    text: (
      <div style={{ textAlign: 'center' }}>
        🎉 AliraAI is now live! Transform your teacher assessment experience with AI-powered voice evaluations. 
        <a href="https://aliraai.com" target="_blank" style={{ color: '#0070f3', marginLeft: '4px' }}>
          Get started →
        </a>
      </div>
    )
  }
};

export default config;
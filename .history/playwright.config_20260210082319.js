// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    launchOptions: {
      args: ['--disable-http2'],
    },
    headless: true,                // Run visible browser so video works
    screenshot: 'on',               // ✅ Take screenshot for **all actions**
    video: 'on',                     // ✅ Record video for the whole test

    trace: 'on-first-retry',
    baseURL: 'http://localhost:3000', // ⭐ IMPORTANT
  },

  // ✅ START LOCAL SERVER
  webServer: {
    command: 'npx serve .',
    port: 3000,
    reuseExistingServer: true,
  },

  projects: [
    {
      name: 'Tests Folder',
      testDir: './tests',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Automation Testing Folder',
      testDir: './Automation Testing',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      testDir: './tests',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
     {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
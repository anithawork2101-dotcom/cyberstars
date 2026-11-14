import { test, expect } from '../fixtures/test.js';

const PYTHON_INPUT_CODE = `name = input("Name? ")
print(f"Hi {name}")`;

// Audit point 2: a program that ends with input it never read, and a frame
// past a socket's size limit, each used to crash the whole server
test('WebSocket stdin: unread input and an oversized frame leave the server running', async ({
  authedPage: page,
}) => {
  await page.goto('/lesson/python/print');

  const [unreadExit, oversizedClose] = await page.evaluate(async () => {
    const base = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}`;
    // Once the program runs (input sent before waits in a 64 KB buffer), 900 KB
    // it never reads, each frame under the run socket's 128 KB, then it ends
    const unreadExit = await new Promise<number>((resolve, reject) => {
      const ws = new WebSocket(`${base}/ws/run`);
      const code = 'import time\nprint("ready", flush=True)\ntime.sleep(3)';
      ws.onopen = () => ws.send(JSON.stringify({ type: 'run', language: 'python', code }));
      let sent = false;
      ws.onmessage = (e) => {
        const msg = JSON.parse(e.data as string) as { type: string; data?: string; code?: number };
        if (msg.type === 'stdout' && msg.data?.includes('ready') && !sent) {
          sent = true;
          const data = `${'x'.repeat(120 * 1024 - 1)}\n`;
          for (let i = 0; i < 8; i++) ws.send(JSON.stringify({ type: 'stdin', data }));
        }
        if (msg.type === 'exit') resolve(msg.code ?? -1);
      };
      ws.onerror = () => reject(new Error('run socket failed'));
      ws.onclose = () => reject(new Error('the run ended without an exit'));
    });
    // 2 KB on the presence socket, whose limit is 1 KB
    const oversizedClose = await new Promise<number>((resolve) => {
      const ws = new WebSocket(`${base}/ws/presence`);
      ws.onopen = () => ws.send('z'.repeat(2048));
      ws.onclose = (e) => resolve(e.code);
    });
    return [unreadExit, oversizedClose];
  });
  expect(unreadExit).toBe(0);
  expect(oversizedClose).toBe(1009);

  // The server still runs code
  const editor = page.locator('.cm-content').last();
  await editor.click();
  await page.keyboard.press('ControlOrMeta+A');
  await page.keyboard.type(PYTHON_INPUT_CODE);
  await page.getByRole('button', { name: '▶ Run' }).last().click();
  const outputArea = page.getByTestId('code-output').last();
  await expect(outputArea).toContainText('Name?', { timeout: 30_000 });
  const stdinInput = outputArea.getByTestId('stdin-input');
  await stdinInput.fill('World');
  await stdinInput.press('Enter');
  await expect(outputArea).toContainText('Hi World', { timeout: 15_000 });
});

test('WebSocket stdin: Python input() receives user input', async ({ authedPage: page }) => {
  await page.goto('/lesson/python/print');

  const editor = page.locator('.cm-content').last();
  await editor.click();
  await page.keyboard.press('ControlOrMeta+A');
  await page.keyboard.type(PYTHON_INPUT_CODE);

  await page.getByRole('button', { name: '▶ Run' }).last().click();

  const outputArea = page.getByTestId('code-output').last();
  await expect(outputArea).toContainText('Name?', { timeout: 30_000 });

  const stdinInput = outputArea.getByTestId('stdin-input');
  await stdinInput.fill('World');
  await stdinInput.press('Enter');

  await expect(outputArea).toContainText('Hi World', { timeout: 15_000 });
});

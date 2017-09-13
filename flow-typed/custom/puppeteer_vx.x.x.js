declare module 'puppeteer' {
  declare type LaunchOptions = {
    ignoreHTTPSErrors?: boolean,
    headless?: boolean,
    executablePath?: string,
    slowMo?: number,
    args?: string[],
    dumpio?: boolean,
  };

  declare class Browser {
    close: void,
    newPage(): Promise<Page>,
    version(): Promise<string>,
    wsEndpoint(): string,
  }

  declare class Page {
    on(event: 'console', callback: (...args: string[]) => any): void,
    on(event: 'dialog', callback: (dialog: Dialog) => any): void,
    on(event: 'error', callback: (err: Error) => any): void,
    on(event: 'frameattached', callback: (frame: Frame) => any): void,
    on(event: 'framedetached', callback: (frame: Frame) => any): void,
    on(event: 'framenavigated', callback: (frame: Frame) => any): void,
    on(event: 'load', callback: () => any): void,
    on(event: 'pageerror', callback: (msg: string) => any): void,
    on(event: 'request', callback: (request: Request) => any): void,
    on(event: 'requestfailed', callback: (request: Request) => any): void,
    on(event: 'requestfinished', callback: (request: Request) => any): void,
    on(event: 'response', callback: (request: Response) => any): void,
    $(selector: string): Promise<ElementHandler>,
    addScriptTag(url: string): Promise<void>,
    click(
      selector: string,
      options?: {
        button?: 'left' | 'right' | 'middle',
        clickCount?: number,
        delay?: number,
      },
    ): Promise<void>,
    close(): Promise<void>,
    emulate(options: {
      viewport: ViewPort,
      userAgent: string,
    }): Promise<void>,
    evaluate<T>(pageFunction: ((...args: any[]) => T) | string, ...args: any[]): Promise<T>,
    evaluateOnNewDocument<T>(
      pageFunction: ((...args: any[]) => T) | string,
      ...args: any[]
    ): Promise<T>,
    exposeFunction(name: string, puppeteerFunction: Function): void,
    focus(selector: string): Promise<void>,
    frames(): Promise<Frame[]>,
    goBack(options?: GoBackOptions): Promise<Response>,
    goForward(options?: GoForwardOptions): Promise<Response>,
    goto(url: string, options?: GotoOptions): Promise<Response>,
    hover(selector: string): Promise<void>,
    injectFile(filePath: string): Promise<void>,
    keyboard: Keyboard,
    mainFrame(): Frame,
    mouse: Mouse,
    pdf(options?: PDFOptions): Promise<Buffer>,
    plainText(): Promise<string>,
    press(
      key: string,
      options?: {
        text?: string,
        delay?: number,
      },
    ): Promise<void>,
    reload(options: ReloadOptions): Promise<Response>,
    screenshot(options?: ScreenShotOptions): Promise<Buffer>,
    setContent(html: string): Promise<void>,
    setExtraHTTPHeaders(headers: any): Promise<void>,
    setRequestInterceptionEnabled(enabled: boolean): Promise<void>,
    setUserAgent(userAgent: string): Promise<void>,
    setViewport(viewPort: ViewPort): Promise<void>,
    title(): Promise<string>,
    tracing: Tracing,
    type(
      text: string,
      options?: {
        delay: number,
      },
    ): Promise<void>,
    uploadFile(selector: string, ...filePaths: string[]): Promise<void>,
    url(): string,
    waitFor(
      selectorOrFunctionOrTimeout: string,
      options?: {
        visible?: boolean,
        timeout?: number,
      },
    ): Promise<void>,
    waitFor(
      selectorOrFunctionOrTimeout: Function,
      options?: {
        polling?: 'raf' | 'mutation' | number,
        timeout?: number,
      },
    ): Promise<void>,
    waitFor(selectorOrFunctionOrTimeout: number): Promise<void>,
    waitForFunction(
      func: string | Function,
      options?: {
        polling?: 'raf' | 'mutation' | number,
        timeout?: number,
      },
      ...args: any[]
    ): Promise<void>,
    waitForNavigation(options: {
      timeout?: number,
      waitUntil?: 'load' | 'networkidle',
      networkIdleInflight?: number,
      networkIdleTimeout?: number,
    }): Promise<Response>,
    waitForSelector(
      selector: string,
      options?: {
        visible?: boolean,
        timeout?: number,
      },
    ): Promise<void>,
  }

  declare function launch(options: LaunchOptions): Promise<Browser>;
}

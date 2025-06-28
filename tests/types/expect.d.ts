declare global {
  namespace PlaywrightTest {
    interface Matchers<R, T> {
      toHavePath(expectedPath: string): Promise<R>;
    }
  }
}

export {};

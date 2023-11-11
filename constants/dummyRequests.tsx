

export const dummyPostRequest = (): Promise<{ status: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const statuses: string[] = ['failed', 'success', 'wrong-code'];
        const randomStatus: string = statuses[Math.floor(Math.random() * statuses.length)];
        resolve({ status: randomStatus });
      }, 1000); 
    });
  }
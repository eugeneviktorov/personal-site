declare global {
  interface Window {
    ym?: IYandexMetrika;
  }
}

type IYandexMetrika = (
  counterId: number,
  method: string,
  url?: string,
  params?: { params?: Record<string, string> }
) => void;

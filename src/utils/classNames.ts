/**
 * Объединяет несколько стилей в одну строку
 * @param mainCName основной стиль компонента
 * @param rest дополнительные стили (необязат.)
 */
export function classNames(mainCName: string, ...rest: string[]) {
  return [mainCName, ...rest].filter((x) => !!x).join(" ");
}

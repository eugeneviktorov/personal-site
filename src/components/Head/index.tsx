
import { FC, useEffect, useState } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { useTheme } from "@app/hooks/useTheme";

export const Head: FC = () => {
  const isDark = useTheme();
  const [themeColor, setThemeColor] = useState("var(--color-white)");

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", isDark ? "dark" : "light");
    const bg = getComputedStyle(root).getPropertyValue("--container-secondary").trim();
    if (bg) setThemeColor(bg);
  }, [isDark]);

  return (
    <Helmet>
      {/* Основные данные */}
      <title>Viktorov</title>
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="description" content="Разработка продуманных визуальных решений" />
      {/* <meta name="keywords" content="разработка" /> */}

      {/* Стилизация сайта */}
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />

      {/* Иконки сайта */}
      <link rel="apple-touch-icon" href="/favicons/favicon-180-180.png" />
      <link rel="icon" type="image/png" sizes="32x32" href={isDark ? "/favicons/dark/favicon-32-32.png" : "/favicons/light/favicon-32-32.png"} />
      <link rel="icon" type="image/png" sizes="16x16" href={isDark ? "/favicons/dark/favicon-16-16.png" : "/favicons/light/favicon-16-16.png"} />

      {/* Данные при отправке ссылки на сайт */}
      <meta property="og:url" content="/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Viktorov" />
      <meta property="og:description" content="Разработка продуманных визуальных решений" />
      <meta property="og:image" content="/favicons/favicon-512-512.png" />
    </Helmet>
  );
};

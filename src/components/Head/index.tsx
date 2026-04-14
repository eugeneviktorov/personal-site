import { Helmet } from "@dr.pogodin/react-helmet";
import { FC } from "react";

export const Head: FC = () => {
  return (
    <Helmet>
      {/* Основные данные */}
      <title>Viktorov</title>
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="description" content="Universal IT Specialist" />

      {/* Стилизация сайта */}
      <meta name="theme-color" content="var(--color-white)" />
      <meta name="msapplication-TileColor" content="var(--color-white)" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />

      {/* Иконки сайта */}
      <link rel="apple-touch-icon" href="/favicons/favicon-180-180.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32-32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16-16.png" />

      {/* Данные при отправке ссылки на сайт */}
      <meta property="og:url" content="/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Viktorov" />
      <meta property="og:description" content="Universal IT Specialist" />
      <meta property="og:image" content="/favicons/favicon-512-512.png" />
    </Helmet>
  );
};

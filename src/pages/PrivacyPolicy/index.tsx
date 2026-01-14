import { PageWrapper } from "@app/components/PageWrapper";
import { useEffect, useState, type FC } from "react";
import { DocumentationStyle } from "@app/components/DocumentationStyle";

export const PrivacyPolicy: FC = () => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    fetch("/documentation/privacy-policy.txt")
      .then((res) => res.text())
      .then(setText)
      .catch(() => setText("Ошибка загрузки текста"));
  }, []);

  return (
    <PageWrapper title="Политика конфиденциальности" headerMain>
      <DocumentationStyle>{text}</DocumentationStyle>
    </PageWrapper>
  );
};

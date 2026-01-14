import { DocumentationStyle } from "@app/components/DocumentationStyle";
import { PageWrapper } from "@app/components/PageWrapper";
import { useEffect, useState, type FC } from "react";

export const TermsOfUse: FC = () => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    fetch("/documentation/terms-of-use.txt")
      .then((res) => res.text())
      .then(setText)
      .catch(() => setText("Ошибка загрузки текста"));
  }, []);

  return (
    <PageWrapper title="Пользовательское соглашение" headerMain>
      <DocumentationStyle>{text}</DocumentationStyle>
    </PageWrapper>
  );
};

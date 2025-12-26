import { FC, FormEvent, useState } from "react";
import styles from "./FeedbackForm.module.css";
import { Input } from "@app/ui/Input";
import { InputMode } from "@app/ui/Input/Input.types";
import { classNames } from "@app/utils/classNames";
import { Button } from "@app/ui/Button";
import { ButtonKind } from "@app/ui/Button/Button.types";
import { useSendFeedbackMutation } from "@app/api/feedbackApi";
import { IconButton } from "@app/ui/IconButton";
import { XmarkIcon } from "@app/ui/icons";
import { Link } from "react-router";
import { IFeedbackForm } from "./FeedbackForm.types";

export const FeedbackForm: FC<IFeedbackForm> = ({ disabled }) => {
  const [sendFeedback, { isLoading }] = useSendFeedbackMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState(disabled ? "Временно не принимаются заявки" : "Отправить");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateName = (name: string) => /^[А-ЯЁа-яёA-Za-z\s]{2,40}$/.test(name);
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(phone);
  const validateMessage = (message: string) => /^.{10,2000}$/.test(message);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!validateName(name)) newErrors.name = "Имя должно содержать от 2 букв";
    if (!validateEmail(email)) newErrors.email = "Введите адрес электронной почты";
    if (phone && !validatePhone(phone)) newErrors.phone = "Телефон должен содержать 11 цифр";
    if (!validateMessage(message)) newErrors.message = "Введите текст сообщения от 10 символов";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      await sendFeedback({ name, email, source: { phone, message } }).unwrap();
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setButtonText("Заявка отправлена!");
      setButtonDisabled(true);
    } catch {
      setErrors({ form: "Ошибка отправки! Повторите попытку позже." });
    }
  };

  return (
    <div className={styles.container}>
      <Input
        placeholder="Имя *"
        value={name}
        onChange={setName}
        inputMode={InputMode.TEXT}
        className={classNames(errors.name && styles.isNotValid)}
        disabled={disabled}
      />
      <Input
        placeholder="example@email.com *"
        value={email}
        onChange={setEmail}
        inputMode={InputMode.EMAIL}
        className={classNames(errors.email && styles.isNotValid)}
        disabled={disabled}
      />
      <Input
        placeholder="+7 (___) ___-__-__"
        value={phone}
        onChange={setPhone}
        inputMode={InputMode.TEL}
        className={classNames(errors.phone && styles.isNotValid)}
        mask="+7 (___) ___-__-__"
        replacement={{ _: /\d/ }}
        disabled={disabled}
      />
      <textarea
        placeholder="Сообщение (описание проекта, идеи или т.п.) *"
        inputMode={InputMode.TEXT}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={classNames(styles.textarea, errors.message && styles.isNotValid, disabled ? styles.disabled : "")}
        disabled={disabled}
      />
      <div className={styles.clue}>* обязательное поле</div>
      {Object.keys(errors).length > 0 && (
        <div className={styles.errorForm}>
          <div className={styles.headerError}>
            <div className={styles.titleError}>Некорректное заполнение формы</div>
            <IconButton icon={<XmarkIcon />} onClick={() => setErrors({})} />
          </div>
          <div className={styles.contentError}>
            {errors.name && <li>{errors.name}</li>}
            {errors.email && <li>{errors.email}</li>}
            {errors.phone && <li>{errors.phone}</li>}
            {errors.message && <li>{errors.message}</li>}
            {errors.form && <li>{errors.form}</li>}
          </div>
        </div>
      )}
      <Button
        kind={disabled ? ButtonKind.SECONDARY : ButtonKind.PRIMARY}
        onClick={handleSubmit}
        disabled={disabled || isLoading || buttonDisabled}
      >
        {isLoading ? "Отравляем..." : buttonText}
      </Button>
      <div className={styles.privacy}>
        Нажимая «Отправить», вы подтверждаете{" "}
        <Link to="/privacy-policy" className={styles.link}>
          политику конфиденциальности
        </Link>{" "}
        и даёте согласие на обработку персональных данных
      </div>
    </div>
  );
};

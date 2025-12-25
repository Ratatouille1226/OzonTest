import { type FieldError, type UseFormRegister } from "react-hook-form";
import styles from "../../ExpenseForm.module.css";
import type { FormValues } from "../../../../types/formValues";

interface Props {
  register: UseFormRegister<FormValues>;
  error?: FieldError;
}

export const DateField = ({ register, error }: Props) => (
  <div className={styles.field}>
    <label>Дата</label>
    <input
      type="date"
      className={error ? styles.fieldError : ""}
      {...register("date", {
        required: "Выберите дату",
        validate: (value) =>
          new Date(value) <= new Date() || "Дата не может быть в будущем",
      })}
    />
    {error && <span className={styles.error}>{error.message}</span>}
  </div>
);

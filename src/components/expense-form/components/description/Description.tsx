import { type FieldError, type UseFormRegister } from "react-hook-form";
import styles from "../../ExpenseForm.module.css";
import type { FormValues } from "../../../../types/formValues";

interface Props {
  register: UseFormRegister<FormValues>;
  error?: FieldError;
}

export const Description = ({ register, error }: Props) => (
  <div className={styles.field}>
    <label>Описание</label>
    <input
      type="text"
      className={error ? styles.fieldError : ""}
      placeholder="На что потратили?"
      {...register("description", {
        required: "Введите описание",
        minLength: { value: 3, message: "Минимум 3 символа" },
      })}
    />
    {error && <span className={styles.error}>{error.message}</span>}
  </div>
);

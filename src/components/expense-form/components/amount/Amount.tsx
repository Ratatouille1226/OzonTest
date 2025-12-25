import { type FieldError, type UseFormRegister } from "react-hook-form";
import styles from "../../ExpenseForm.module.css";
import { type FormValues } from "../../../../types/formValues";

interface Props {
  register: UseFormRegister<FormValues>;
  error?: FieldError;
}

export const Amount = ({ register, error }: Props) => (
  <div className={styles.field}>
    <label>Сумма</label>
    <input
      id="amount-input"
      type="number"
      placeholder="Введите сумму"
      className={error ? styles.fieldError : ""}
      {...register("amount", {
        required: "Введите сумму",
        min: { value: 1, message: "Сумма должна быть больше 0" },
      })}
    />
    {error && <span className={styles.error}>{error.message}</span>}
  </div>
);

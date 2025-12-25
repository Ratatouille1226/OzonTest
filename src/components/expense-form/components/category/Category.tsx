import { type FieldError, type UseFormRegister } from "react-hook-form";
import styles from "../../ExpenseForm.module.css";

import { CATEGORIES } from "../../../../constants/categories";
import type { FormValues } from "../../../../types/formValues";

interface Props {
  register: UseFormRegister<FormValues>;
  error?: FieldError;
}

export const Category = ({ register, error }: Props) => (
  <div className={styles.field}>
    <label>Категория</label>
    <select
      className={error ? styles.fieldError : ""}
      {...register("category", {
        required: "Выберите категорию",
      })}
    >
      <option value="">Выберите категорию</option>
      {CATEGORIES.map((c) => (
        <option key={c.id} value={c.id}>
          {c.name}
        </option>
      ))}
    </select>
    {error && <span className={styles.error}>{error.message}</span>}
  </div>
);

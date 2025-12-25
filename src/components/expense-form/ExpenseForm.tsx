import { useForm } from "react-hook-form";
import { CATEGORIES, type CategoryId } from "../../constants/categories";
import { type FormValues } from "../../types/formValues";
import styles from "./ExpenseForm.module.css";
import { Amount } from "./components";

interface ExpenseFormProps {
  onAdd: (payload: FormValues) => void;
}

export const ExpenseForm = ({ onAdd }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      amount: undefined,
      category: "" as CategoryId,
      description: "",
      date: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    onAdd(data);
    reset();

    const firstInput = document.getElementById("amount-input");
    firstInput?.focus();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Amount register={register} error={errors.amount} />

      <div className={styles.field}>
        <label>Категория</label>
        <select
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
        {errors.category && (
          <span className={styles.error}>{errors.category.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label>Описание</label>
        <input
          type="text"
          placeholder="На что потратили?"
          {...register("description", {
            required: "Введите описание",
            minLength: { value: 3, message: "Минимум 3 символа" },
          })}
        />
        {errors.description && (
          <span className={styles.error}>{errors.description.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label>Дата</label>
        <input
          type="date"
          {...register("date", {
            required: "Выберите дату",
            validate: (value) =>
              new Date(value) <= new Date() || "Дата не может быть в будущем",
          })}
        />
        {errors.date && (
          <span className={styles.error}>{errors.date.message}</span>
        )}
      </div>

      <button type="submit" disabled={!isValid} className={styles.submitBtn}>
        Добавить
      </button>
    </form>
  );
};

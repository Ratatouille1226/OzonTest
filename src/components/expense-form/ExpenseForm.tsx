import { useForm } from "react-hook-form";
import { type CategoryId } from "../../constants/categories";
import { type FormValues } from "../../types/formValues";
import styles from "./ExpenseForm.module.css";
import { Amount, Category, DateField, Description } from "./components";

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
    onAdd({
      ...data,
      amount: Number(data.amount),
    });
    reset();

    const firstInput = document.getElementById("amount-input");
    firstInput?.focus();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Amount register={register} error={errors.amount} />
      <Category register={register} error={errors.category} />
      <Description register={register} error={errors.description} />
      <DateField register={register} error={errors.date} />

      <button type="submit" disabled={!isValid} className={styles.submitBtn}>
        Добавить
      </button>
    </form>
  );
};

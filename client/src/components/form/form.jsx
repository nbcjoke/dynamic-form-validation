import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";

import styles from "./style.module.css";
import { Select } from "./select/select";
import { Error } from "./error/error";

export const Form = () => {
  const schema = yup.object().shape({
    nameOfCompany: yup.string().required("Name of company is required"),
    adress: yup.string().max(50),
    phone: yup.string(),
    country: yup.string().required("Country is required"),
    typeOfCompany: yup.string().required("Type of company is required"),
    products: yup.array().of(
      yup.object().shape({
        name: yup.string(),
      })
    ),
    choise: yup.string().required("This field is required"),
    description: yup
      .string()
      .required("Select another variant or fill this field"),
    amountOfMoney: yup.string().required("Amount of money is required"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      nameOfCompany: "",
      adress: "",
      phone: "",
      country: "",
      typeOfCompany: "",
      products: [{ name: "" }],
      //   choise: "",
      description: "",
      amountOfMoney: "",
    },
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "products",
    control,
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };

  const choiseType = watch("choise");

  const countries = [
    {
      value: "BY",
      label: "Belarus",
    },
    {
      value: "RU",
      label: "Russia",
    },
    {
      value: "BE",
      label: "Belgium",
    },
  ];

  const amountOfMoney = ["1000-10000$", "10000-100000$", ">100000$"];

  const typesOfCompany = ["outsourcing", "grocery"];

  const status = ["in developing", "completed"];

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="name of company"
          {...register("nameOfCompany")}
        />
        <Error errors={errors.nameOfCompany} />
      </div>
      <input
        className={styles.input}
        type="text"
        placeholder="adress"
        {...register("adress")}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="phone"
        {...register("phone")}
      />
      <div className={styles.select_container}>
        <label>Choose a country:</label>
        <Select options={countries} control={register("country")} />
        <Error errors={errors.country} />
      </div>
      <div className={styles.select_container}>
        <label>Choose a type of company:</label>
        <Select options={typesOfCompany} control={register("typeOfCompany")} />
        <Error errors={errors.typeOfCompany} />
      </div>
      <div>
        <p>Do you need smth?</p>
        <div className={styles.radio_container}>
          <p>Yes</p>
          <input type="radio" value="yes" {...register("choise")} />
          <p>No</p>
          <input type="radio" value="no" {...register("choise")} />
        </div>
      </div>
      {choiseType === "yes" && (
        <div>
          <input
            className={styles.input}
            placeholder="description"
            type="text"
            {...register("description")}
          />
          <Error errors={errors.description} />
          <label>Choose an amount of money:</label>
          <Select options={amountOfMoney} control={register("amountOfMoney")} />
          <Error errors={errors.amountOfMoney} />
        </div>
      )}
      <div>
        <p>List of products</p>
        <div>
          {fields.map((field, index) => {
            return (
              <div key={field.id} className={styles.dynamic_field}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="product name"
                  {...register(`products.${index}.name`)}
                />
                <Select
                  options={status}
                  control={register("statusOfProject")}
                />
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remove product
                  </button>
                )}
              </div>
            );
          })}
          <button
            className={styles.add_button}
            type="button"
            onClick={() => append({ name: "" })}
          >
            Add product
          </button>
        </div>
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

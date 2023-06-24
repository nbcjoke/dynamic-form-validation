import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import { omit, union, keys, filter, isEqual } from "lodash";

import { EntityService } from "../../services/entityService";
import { Select } from "./select/select";
import { Error } from "./error/error";

import styles from "./style.module.css";
import { useEffect } from "react";

export const Form = ({ entity }) => {
  const schema = yup.object().shape({
    nameOfCompany: yup.string().required("Name of company is required"),
    adress: yup.string().max(50),
    phone: yup.string(),
    country: yup.string().required("Country is required"),
    typeOfCompany: yup.string().required("Type of company is required"),
    products: yup.array().of(
      yup.object().shape({
        name: yup.string().required("Product name is required"),
        statusOfProject: yup.string(),
      })
    ),
    choise: yup.string().required("This field is required"),
    description: yup.string(),
    amountOfMoney: yup.string(),
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      nameOfCompany: "",
      adress: "",
      phone: "",
      country: "",
      typeOfCompany: "",
      products: [{ name: "first", statusOfProject: "" }],
      choise: "no",
      description: "",
      amountOfMoney: "",
    },
    resolver: yupResolver(schema),
  });

  const choiseType = watch("choise");

  useEffect(() => {
    if (entity) {
      reset({
        ...entity,
        choise: entity.description || entity.amountOfMoney ? "yes" : "no",
      });
    }
  }, [entity]);

  useEffect(() => {
    if (choiseType === "no") {
      setValue("description", "");
      setValue("amountOfMoney", "");
    }
  }, [choiseType]);

  const { fields, append, remove } = useFieldArray({
    name: "products",
    control,
  });

  const onSubmit = (data) => {
    const cleared = clearEmpties(omit(data, "choise"));
    if (entity) {
      const changed = filter(union(keys(entity), keys(cleared)), (key) => {
        return !isEqual(entity[key], cleared[key]);
      });
      if (changed.length) {
        const request = changed.reduce((result, key) => {
          return { ...result, [key]: cleared[key] };
        }, {});
        EntityService.changeEntity(entity.id, request);
      }
    } else {
      EntityService.createEntity(cleared);
    }
  };

  const clearEmpties = (obj) => {
    for (var propName in obj) {
      if (typeof obj[propName] == "object") clearEmpties(obj[propName]);
      if (
        obj[propName] === null ||
        obj[propName] === undefined ||
        obj[propName] === ""
      )
        delete obj[propName];
    }

    return obj;
  };

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
        <p>Do you want to share information about your company?</p>
        <div className={styles.radio_container}>
          <p>Yes</p>
          <input type="radio" value="yes" {...register("choise")} />
          <p>No</p>
          <input type="radio" value="no" {...register("choise")} />
        </div>
        <Error errors={errors.choise} />
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
                <Error errors={errors.products?.[index]?.name} />
                <Select
                  options={status}
                  control={register(`products.${index}.statusOfProject`)}
                />
                {index > 0 && (
                  <button
                    style={{ marginTop: "10px" }}
                    type="button"
                    onClick={() => remove(index)}
                  >
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
      {entity ? (
        <button type="submit">Change</button>
      ) : (
        <button type="submit">Create</button>
      )}
    </form>
  );
};

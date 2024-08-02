import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import EMInput from "../../controls/EMInput";
import { useParams } from "react-router-dom";
import { axiosPost } from "../../utils/AxiosHelper";
import { addCategory } from "../../utils/api";

interface FormValues {
  name: string;
  description: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export default function AddCategory() {
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const { id } = useParams();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    axiosPost(addCategory, data).then((res:any) => {
      console.log("res.data", res.data);
    });
  };
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <EMInput
          label="Name"
          type="text"
          placeholder="Enter category name"
          name="name"
          required={true}
        />
        <EMInput
          label="Description"
          type="text"
          placeholder="Enter description"
          name="description"
          required={true}
          minLength={10}
          maxLength={100}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </FormProvider>
  );
}

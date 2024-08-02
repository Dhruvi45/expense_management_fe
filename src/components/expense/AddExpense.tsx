import React, { useState } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import EMInput from '../../controls/EMInput';
import { useParams } from 'react-router-dom';

interface FormValues {
  user_id?: string;
  amount: number;
  description: string;
  category: string;
  date: Date;
}
export default function AddExpense() {
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const { id } = useParams();


  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };


  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <EMInput
          label="Amount"
          type="number"
          placeholder="Enter amount"
          name="amount"
          required={true}
          min={0}
          max={10000}
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
        <EMInput
          label="Category"
          type="text"
          placeholder="Enter category"
          name="category"
          required={true}
        />
        <EMInput
          label="date"
          type="date"
          placeholder="Select Date"
          name="date"
          required={true}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </FormProvider>
  );
}

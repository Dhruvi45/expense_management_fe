import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

interface EMInputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export default function EMInput(props: EMInputProps) {
  const { label, type, placeholder, name, required, minLength, maxLength, min, max } = props;
  const { register, formState: { errors } } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <Form.Group className="mb-3" controlId={`control-${name}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        step={type === 'number' ? '0.01' : undefined}
        isInvalid={!!errors[name]}
        {...register(name, {
          required: {
            value: required ?? false,
            message: `${placeholder} is required`,
          },
          minLength: {
            value: minLength ?? 0,
            message: `${placeholder} must contain ${minLength} characters or more`,
          },
          maxLength: {
            value: maxLength ?? 100,
            message: `${placeholder} should contain no more than ${maxLength} characters`,
          },
          min: {
            value: min ?? 0,
            message: `Please enter a ${placeholder} between ${min ?? 0} and ${max ?? 100}.`,
          },
          max: {
            value: max ?? 100,
            message: `Please enter a ${placeholder} between ${min ?? 0} and ${max ?? 100}.`,
          },
        })}
      />
      {errorMessage && <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>}
    </Form.Group>
  );
}

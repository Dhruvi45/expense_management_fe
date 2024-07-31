import { Form } from 'react-bootstrap';

interface EMInputProps {
    label: string,
    type: string,
    placeholder: string,
}

export default function EMInput(props: EMInputProps) {
    const { label,
        type,
        placeholder } = props
    return (
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} />
        </Form.Group>
    )
}

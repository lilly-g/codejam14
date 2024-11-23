export async function submitForm(prevState, formData) {

    const inputs = {
        a: formData.get('group-code'),
        b: formData.get('name'),
        c: formData.get('pass'),
    }

    const response = await fetch('http://localhost:8080/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });

    const result = await response.json();
    const message = result.message;

    return message;
}
'use server'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
const BACKEND_PORT = 8080;
const FRONTEND_PORT = 3000;

// submit new outing form
export async function submitFormNew(prevState, formData) {
    // get form fields in json format
    const inputs = {
        "newGroupName": formData.get('new-group-name'),
        "newAdminName": formData.get('new-admin-name'),
        "newAdminPass": formData.get('new-admin-pass'),
    }
    
    // send request to appropriate backend endpoint
    const response = await fetch(`http://localhost:${BACKEND_PORT}/api/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });

    // get join code if successfull
    if (response.ok) {
        // get the response in json format
        const result = await response.json();
        // set cookie with join code
        const cookieStore = await cookies();
        cookieStore.set('joinCode', result.joinCode);

        redirect('/dashboard');
    }

    else {
        return "Error";
    }
}

// submit join form
export async function submitFormJoin(prevState, formData) {
    // get form fields in json format
    const inputs = {
        "joinCode": formData.get('join-code'),
        "newUserName": formData.get('new-user-name'),
        "newUserPass": formData.get('new-user-pass'),
    }

    // send request to appropriate backend endpoint
    const response = await fetch(`http://localhost:${BACKEND_PORT}/api/join`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });

    // get the response in json format
    const result = await response.json();
    // get message from response
    const message = result.message;

    // be able to display on page
    return message;

    
}

// submit login form
export async function submitFormLogin(prevState, formData) {
    // get form fields in json format    
    const inputs = {
        "groupCode": formData.get('group-code'),
        "name": formData.get('name'),
        "pass": formData.get('pass'),
    }

    // send request to appropriate backend endpoint
    const response = await fetch(`http://localhost:${BACKEND_PORT}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });

    // get the response in json format
    const result = await response.json();
    // get message from response
    const message = result.message;

    // be able to display on page
    return message;
}

export async function submitFormLocation(prevState, formData) {
    // get all checked boxes as json
    const types = formData.getAll('types');
    
    // ???
    const cookieStore = await cookies();
    const joinCode = cookieStore.get('joinCode');

    // get form fields in json format    
    const inputs = {
        "postalCode": formData.get('postal-code'),
        "radius": formData.get('distance'),
        "amenities": types,
        "joinCode": joinCode,
    }
    
    // send request to appropriate backend endpoint
    const response = await fetch(`http://localhost:${BACKEND_PORT}/api/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });


    // get join code if successfull
    if (response.ok) {
        // get the response in json format
        const result = await response.json();

        // set cookie with join code
        const cookieStore = await cookies();
        cookieStore.set('joinCode', result.joinCode);

        // redirect to selection screen
        redirect('/slider');
    }

    else {
        return "Error";
    }
}
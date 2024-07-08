import { test, expect } from '@playwright/test';


// Testing POST
test('API POST request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "nicolas",
            "job": "qa"
        }
    });
    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain('nicolas');
    console.log(await response.json());

});

// Testing PUT
test('API PUT request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "nicolas rica",
            "job": "dev"
        }
    });
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('nicolas rica');
    expect(text).toContain('dev');
    expect(text).toContain('updatedAt');
    console.log(await response.json());

});

// Testing DELETE
test('API DELETE request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
});

// Testing GET
test('API GET request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Janet');
    console.log(await response.json());
});
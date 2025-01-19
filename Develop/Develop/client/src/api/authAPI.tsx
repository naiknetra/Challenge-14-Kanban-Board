import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    // Assuming the response contains a token
    localStorage.setItem('id_token', data.token);
    return data; // Return user data or token as needed
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}

export { login };
//Explanation:
//POST Request: The fetch function is used to send a POST request to the /api/login endpoint.
//Headers: The Content-Type header is set to application/json to indicate that the request body contains JSON data.
//Body: The userInfo object is converted to a JSON string and sent as the request body.
//Response Handling: If the response is not OK (status code not in the range 200-299), an error is thrown. If the login is successful, the token is stored in ///localStorage.
//Error Handling: Errors are caught and logged, and then re-thrown for further handling in the calling function.
//Make sure to adjust the endpoint (/api/login) according to your server's actual login route.





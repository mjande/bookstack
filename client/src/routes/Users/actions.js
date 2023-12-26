import { redirect } from "react-router-dom";

export async function userRegistrationAction({ request }) {
  const formData = await request.formData();
  const dataObject = Object.fromEntries(formData);

  const response = await fetch("http://localhost:3000/api/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataObject),
  });

  if (response.status == 201) {
    const data = await response.json();
    localStorage.setItem("accessToken", data.token);
    return redirect("/");
  }

  return null;
}

export async function userLoginAction({ request }) {
  const formData = Object.fromEntries(await request.formData());
  console.log(formData);

  const response = await fetch("http://localhost:3000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseData = await response.json();

  if (response.status == 200) {
    localStorage.setItem("accessToken", responseData);
    return redirect("/");
  }

  console.log(responseData.message || "Something went wrong");
  return null;
}

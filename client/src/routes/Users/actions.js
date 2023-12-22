import { redirect } from "react-router-dom";

export async function userRegistrationAction({ request }) {
  console.log(request);

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
    return redirect("/");
  } else {
    console.log("didn't work");
  }

  return null;
}

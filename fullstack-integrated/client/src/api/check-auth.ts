export async function CheckAuth() {
  try {
    const res = await fetch("/api/check-auth", {
      method: "POST",
      headers: { "Content-type": "appication/json" },
    });

    const username = await res.text();
    return username;
  } catch (error) {
    console.error(error);
    return null;
  }
}

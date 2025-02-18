export async function login({
  username,
  email,
}: {
  username: string;
  email: string;
}) {
  try {
    await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, email }),
      headers: { "Content-Type": "application/json" },
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

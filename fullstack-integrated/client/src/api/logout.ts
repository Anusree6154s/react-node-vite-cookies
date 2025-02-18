export async function LogOut() {
  try {
    await fetch("/api/logout");
    return false;
  } catch (error) {
    console.error(error);
    return true;
  }
}

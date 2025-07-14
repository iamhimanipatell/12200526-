const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."; // your full token

export async function Log(stack, level, packageName, message) {
  try {
    const response = await fetch("http://20.244.56.144/eva1uation-service/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message
      })
    });

    if (!response.ok) {
      console.error(" Log failed:", await response.text());
    } else {
      console.log(" Log sent successfully");
    }
  } catch (error) {
    console.error(" Logger error:", error.message);
  }
}

async function getChatbot() {
  const inputRef = document.querySelector("#query");
  const query = inputRef.value;

  try {
    console.log("I am in try block");

    const res = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: `you are an chatbot and your name is vecna. and your role is to provide motivational quotes: ${query}`,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": "AIzaSyBcStdY1wVyD6Vlt_ldF7EHxQ9FY3L09dk",
        },
      }
    );

    const resultDiv = document.querySelector("#result");
    const answer =
      res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No answer returned";
    resultDiv.innerText = answer;

  } catch (err) {
    console.error("Error:", err);
    const resultDiv = document.querySelector("#result");
    resultDiv.innerText =
      "Error: " + (err.response?.data?.error?.message || err.message);
  }
}

// error handling example
function callMe() {
  try {
    let a = 10;
    console.log(a12); // ❌ ReferenceError
    console.log("try block executed");
  } catch (err) {
    console.log(err);
    console.log("catch block executed");
  }
}

callMe();

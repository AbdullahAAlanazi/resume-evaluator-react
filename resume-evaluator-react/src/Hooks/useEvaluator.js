import { useState } from "react"

function useEvaluator() {
  const [jobDescription, setJobDescription] = useState("")
  const [prompt, setPrompt] = useState("")
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [result, setResult] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (jobDescription === "") {
      setStatus("error")
      setErrorMessage("Please enter a job description.")
      return
    }

    if (file === null) {
      setStatus("error")
      setErrorMessage("Please upload a PDF resume.")
      return
    }

    setStatus("loading")
    setErrorMessage("")
    setResult("")

    setTimeout(function () {
      setStatus("success")
      setResult(
        "Evaluating " +
          file.name +
          "... ChatGPT integration coming in Stage 5."
      )
    }, 1500)
  }

  return {
    jobDescription,
    setJobDescription,
    prompt,
    setPrompt,
    file,
    setFile,
    status,
    errorMessage,
    result,
    handleSubmit,
  }
}

export default useEvaluator
import { useState } from "react"
import client from "../api/client"

function useEvaluator() {
  const [jobDescription, setJobDescription] = useState("")
  const [prompt, setPrompt] = useState("")
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [result, setResult] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    if (jobDescription === "") {
      setStatus("error")
      setErrorMessage("Please enter a job description.")
      return
    }

    setStatus("loading")
    setErrorMessage("")
    setResult("")

    try {
      const response = await client.post("/evaluate", {
        job_description: jobDescription,
        prompt: prompt,
      })

      setStatus("success")
      setResult(response.data.result)
    } catch (err) {
      setStatus("error")
      setErrorMessage("Evaluation failed")
    }
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
import { useState } from "react"

function EvaluatorPage() {
  const [jobDescription, setJobDescription] = useState("")
  const [prompt, setPrompt] = useState("")
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState("idle")

  function handleSubmit(e) {
    e.preventDefault()

    if (jobDescription === "") {
      setStatus("error")
      return
    }

    if (file === null) {
      setStatus("error")
      return
    }

    setStatus("loading")
  }

  return (
    <main>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="job-description">Job Description</label>
          <textarea
            id="job-description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          ></textarea>

          <label htmlFor="prompt">Custom Prompt</label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>

          <label htmlFor="resume">Upload Resume (PDF)</label>
          <input
            type="file"
            id="resume"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0] || null)}
          />

          <button type="submit">Evaluate</button>
        </form>
      </section>

      <section>
        <div id="results">
          Status: {status}
        </div>
      </section>
    </main>
  )
}

export default EvaluatorPage

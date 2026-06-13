import useEvaluator from "../hooks/useEvaluator"

function EvaluatorPage() {
  const {
    jobDescription,
    setJobDescription,
    prompt,
    setPrompt,
    setFile,
    status,
    errorMessage,
    result,
    handleSubmit,
  } = useEvaluator()

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

          <button type="submit" disabled={status === "loading"}>
            Evaluate
          </button>
        </form>
      </section>

      <section>
        <div id="results">
          {status === "idle" && <p>Results will appear here.</p>}
          {status === "loading" && <p>Evaluating...</p>}
          {status === "error" && <p style={{ color: "red" }}>{errorMessage}</p>}
          {status === "success" && <p>{result}</p>}
        </div>
      </section>
    </main>
  )
}

export default EvaluatorPage

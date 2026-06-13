function EvaluatorPage() {
  return (
    <main>
      <section>
        <form>
          <label htmlFor="job-description">Job Description</label>
          <textarea id="job-description"></textarea>

          <label htmlFor="prompt">Custom Prompt</label>
          <textarea id="prompt"></textarea>

          <label htmlFor="resume">Upload Resume (PDF)</label>
          <input type="file" id="resume" accept=".pdf" />

          <button type="submit">Evaluate</button>
        </form>
      </section>

      <section>
        <div id="results">
          Results will appear here.
        </div>
      </section>
    </main>
  )
}

export default EvaluatorPage
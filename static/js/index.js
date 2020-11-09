/* eslint-env jquery */

const flash = (task, error) => {
  const msgbar = $('#msgbar')
  const stat = error || 'succeeded'
  const cls = error ? 'error' : 'message'
  msgbar.html(`<div class="msgitem ${cls}">&lt${task}&gt; ${stat}</div>`)
}

const report = task => (jqXHR, stat, error) => {
  if (task != null) {
    Console.error(stat, { error })
    flash(task, stat)
  }
}

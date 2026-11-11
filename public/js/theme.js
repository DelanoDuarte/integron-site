// Sets the `dark` class before first paint (load in <head>, not deferred) and
// wires any [data-theme-toggle] button. Falls back to the OS preference.
(() => {
  const root = document.documentElement;
  let stored = null;
  try { stored = localStorage.getItem('theme'); } catch (_) {}
  const dark = stored ? stored === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  root.classList.toggle('dark', dark);
  document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-theme-toggle]')) return;
    const next = !root.classList.contains('dark');
    root.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (_) {}
  });
})();

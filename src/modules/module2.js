export function initModule2() {
  const box = document.querySelector("#module-2");
  // VOLUNTEER 1 EDIT TARGET: Change "Pending..." to Volunteer 1's name during the demo
  box.innerHTML = `
    <h2 class="text-lg font-bold mb-2">Module 2: Assignment Tracker (Owner: Pending...)</h2>
    <p class="text-sm text-slate-600">Track upcoming course submissions and deadlines here.</p>
  `;
}
export function initModule3() {
  const box = document.querySelector("#module-3");
  const savedGoal = localStorage.getItem("cse2340_goal") || "Complete module integration";

  // VOLUNTEER 2 EDIT TARGET: Change "Pending..." to Volunteer 2's name during the demo
  box.innerHTML = `
    <h2 class="text-lg font-bold mb-2">Module 3: Study Goal Persistence (Owner: Pending...)</h2>
    <div class="flex gap-2">
      <input id="goal-input" value="${savedGoal}" class="border p-2 rounded flex-1 text-sm" />
      <button id="save-goal" class="bg-emerald-600 text-white px-3 py-2 rounded text-sm">Save Goal</button>
    </div>
  `;

  box.querySelector("#save-goal").addEventListener("click", () => {
    localStorage.setItem("cse2340_goal", box.querySelector("#goal-input").value);
    alert("Saved to browser localStorage!");
  });
}
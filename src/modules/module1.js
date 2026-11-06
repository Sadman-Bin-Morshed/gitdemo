export function initModule1() {
  const box = document.querySelector("#module-1");
  box.innerHTML = `
    <h2 class="text-lg font-bold mb-2">Module 1: Course Management (Owner: Member 1)</h2>
    <form id="course-form" class="flex gap-2 mb-3">
      <input id="course-input" required placeholder="New course..." class="border p-2 rounded flex-1" />
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
    </form>
    <ul id="course-list" class="list-disc pl-5 text-sm space-y-1">
      <li>CSE-2340: Software Development 1</li>
    </ul>
  `;

  box.querySelector("#course-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = box.querySelector("#course-input");
    const li = document.createElement("li");
    li.textContent = input.value;
    box.querySelector("#course-list").appendChild(li);
    input.value = "";
  });
}
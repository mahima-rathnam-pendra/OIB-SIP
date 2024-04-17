function addTask() {
            var input = document.getElementById("taskInput").value;
            if (input.trim() === "") {
                alert("Please enter a task!");
                return;
            }
            var listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${input}</span>
                <div>
                    <button onclick="toggleCompleted(this)">Mark Completed</button>
                    <button class="delete-button" onclick="deleteTask(this)">Delete</button>
                </div>
            `;
            document.getElementById("taskList").appendChild(listItem);
            document.getElementById("taskInput").value = "";
        }

        // Function to toggle completed/pending status
        function toggleCompleted(button) {
            var taskSpan = button.parentNode.previousElementSibling;
            taskSpan.classList.toggle("completed");
            if (button.textContent === "Mark Completed") {
                button.textContent = "Mark Pending";
            } else {
                button.textContent = "Mark Completed";
            }
        }

        // Function to delete a task
        function deleteTask(button) {
            var listItem = button.parentNode.parentNode;
            listItem.remove();
        }

//get elements
const usernameInput = document.getElementById("username");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const displayName = document.getElementById("display-name");

//Load save name
document.addEventListener("DOMContentLoaded", () => 
    {
        const savedName = localStorage.getItem("name");
        if(savedName)
            {
                displayName.textContent = `Saved Name: ${savedName}`;
            }
    })

//Save name to local storage
saveBtn.addEventListener("click", () => 
    {
        const name = usernameInput.value.trim();
        if(name)
        {
            localStorage.setItem("name", name);
            displayName.textContent = `Saved Name: ${name}`;
            usernameInput.value = "";
        }
    })

// Clear name from localStorage
clearBtn.addEventListener("click", () => 
    {
        console.log("Clear button clicked!");
        localStorage.removeItem("name");
        displayName.textContent = "";
    });
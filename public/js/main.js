document.addEventListener("DOMContentLoaded", () => {
    // Fetch Config
    const fetchForm = document.getElementById("fetchForm");
    if (fetchForm) {
      fetchForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const configId = e.target.configId.value;
  
        const res = await fetch(`/api/configurations/${configId}`);
        const data = await res.json();
  
        document.getElementById("result").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      });
    }
  
    // Update Remark
    const updateForm = document.getElementById("updateForm");
    if (updateForm) {
      updateForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const configId = e.target.configId.value;
        const remark = e.target.remark.value;
  
        const res = await fetch(`/api/configurations/${configId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ remark })
        });
        const data = await res.json();
  
        document.getElementById("updateResult").innerText = data.message || "Error";
      });
    }
  });
  
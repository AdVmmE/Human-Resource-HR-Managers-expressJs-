
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
      let isValid = true;
      let errorMessage = "Please fill in the following fields:\n";
      
      const fields = [
        { id: "inputfirstName4", name: "firstName" },
        { id: "inputlastName4", name: "lastName" },
        { id: "inputemail4", name: "email" },
        { id: "inputtele4", name: "mobileNumber" },
        { id: "inputage4", name: "age" },
        { id: "inputCountry", name: "country" },
        { id: "inputGender", name: "gender" }
      ];

      fields.forEach(field => {
        let input = document.getElementById(field.id);
        if (!input.value.trim() || input.value === "Choose here ...") {
          isValid = false;
          errorMessage += `- ${field.name}\n`;
        }
      });

      if (!isValid) {
        alert(errorMessage);
        event.preventDefault(); // Stop form submission
      }
    });
  });


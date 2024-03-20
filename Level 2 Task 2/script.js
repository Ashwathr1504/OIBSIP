document.addEventListener('DOMContentLoaded', function () {
  // Object containing tribute information
  const tributeData = {
    name: "Someone Special",
    birthDate: "January 1, 1900",
    deathDate: "December 31, 2000",
    bio: "This is a brief description or tribute to Someone Special. You can add more details here.",
    // Add more fields as needed
  };

  // Function to display tribute information
  function displayTributeInfo() {
    const tributeInfo = document.getElementById('tribute-info');

    // Create elements to display tribute information
    const heading = document.createElement('h2');
    heading.textContent = tributeData.name;

    const lifespan = document.createElement('p');
    lifespan.textContent = `(${tributeData.birthDate} - ${tributeData.deathDate})`;

    const bio = document.createElement('p');
    bio.textContent = tributeData.bio;

    // Append elements to the tribute info container
    tributeInfo.appendChild(heading);
    tributeInfo.appendChild(lifespan);
    tributeInfo.appendChild(bio);
  }

  // Display the tribute information when the DOM is loaded
  displayTributeInfo();
});

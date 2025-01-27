// Put your code in here to make each of the tests described in the HTML file
// pass.

// your-code.js

// Problem 1: No bubbling
document.getElementById('bubble-trouble').addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
  });
  
  // Problem 2: Count by one
  const updateCounterDisplay = () => {
    document.getElementById('counter-value').innerHTML = counterValue;
  };
  
  document.getElementById('increment').addEventListener('click', () => {
    counterValue += 1; // Increment counter
    updateCounterDisplay(); // Update the display
  });
  
  document.getElementById('decrement').addEventListener('click', () => {
    counterValue -= 1; // Decrement counter
    updateCounterDisplay(); // Update the display
  });
  
  document.getElementById('zero-out').addEventListener('click', () => {
    counterValue = 0; // Reset counter
    updateCounterDisplay(); // Update the display
  });
  
  // Problem 3: Storage and key presses
  const nameInput = document.getElementById('my-name-is');
  
  // Set initial value from localStorage (if available)
  const storedName = localStorage.getItem('my-name-is');
  if (storedName) {
    nameInput.value = storedName;
  }
  
  // Update localStorage on keyup
  nameInput.addEventListener('keyup', () => {
    localStorage.setItem('my-name-is', nameInput.value);
  });
  
  // Problem 4: Don't go there!
  document.getElementById('navigates-elsewhere').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link navigation
  });
  
  // Problem 5: Go Fetch!
  document.getElementById('go-fetch').addEventListener('click', () => {
    const subBreedList = document.getElementById('sub-breed-ol');
    subBreedList.innerHTML = ''; // Clear the list before fetching
  
    fetch('https://dog.ceo/api/breed/terrier/list')
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          data.message.forEach((subBreed) => {
            const li = document.createElement('li');
            li.textContent = subBreed;
  
            // Add mouseover effect
            li.addEventListener('mouseover', () => {
              li.style.color = 'red'; // Change text color to red
            });
  
            subBreedList.appendChild(li);
          });
        } else {
          console.error('Failed to fetch sub-breeds');
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  });

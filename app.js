// --------------------TASK-1------------------------------

async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const userData = await response.json();
    return userData;
  }
  
  async function displayUserData() {
    try {
      const userData = await fetchUserData();
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  }
  
  displayUserData();

//   ------------------------Task-2---------------------------

function wait(duration) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }
  wait(1000)
    .then(() => {
      console.log("One");
      return wait(500);
    })
    .then(() => {
      console.log("Two");
      return wait(2000);
    })
    .then(() => {
      console.log("Three");
      return wait(100);
    })
    .then(() => {
      console.log("Four");
    });

    // -------------------------Task-2---------------------------

    class Person {
        constructor(name, age) {
          this.fullName = name;
          this.age = age;
        }
        greet() {
          console.log(`Hello, my name is ${this.fullName} and I'm ${this.age} years old.`);
        }
      }
      const person = new Person("Tanzeela", 25);
      person.greet();
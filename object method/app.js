var product = {
    id: 1,
    title: "Fjallraven Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://www.fjallraven.com/4959f6/globalassets/catalogs/fjallraven/f2/f242/f24210/f560/7392158958184_ss18_a_foldsack_no1_21.jpg?width=680&height=680&rmode=BoxPad&bgcolor=fff&quality=100",
    rating: [2, 4, 1, 0, 5, 3],
    calculateRating: function() {
      if (this.rating.length === 0) return 0;
      let sum = this.rating.reduce((acc, val) => acc + val, 0);
      return sum / this.rating.length;
    }
  };

  var employee = {
    id: 101,
    name: "John Doe",
    position: "Software Engineer",
    department: "IT",
    daysOff: ["Monday", "Friday"],
    isTodayOff: function() {
      let today = new Date().toLocaleString('en-US', { weekday: 'long' });
      return this.daysOff.includes(today);
    }
  };

  var employee2 = {
    id: 102,
    name: "Jane Smith",
    position: "Project Manager",
    department: "Management",
    experience: 5, // years of experience
    performance: 4.5, // performance rating out of 5
    isIncrementEligible: function() {
      return this.experience >= 3 && this.performance >= 4;
    }
  };

  function showProductRating() {
    var rating = product.calculateRating();
    document.getElementById('product-rating').innerText = 'Average Rating: ' + rating.toFixed(2);
  }

  function checkEmployeeDayOff() {
    var isDayOff = employee.isTodayOff();
    document.getElementById('employee-day-off').innerText = isDayOff ? 'Today is a day off.' : 'Today is not a day off.';
  }

  function checkEmployeeIncrement() {
    var isEligible = employee2.isIncrementEligible();
    document.getElementById('employee-increment').innerText = isEligible ? 'Eligible for increment.' : 'Not eligible for increment.';
  }
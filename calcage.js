
// const b1 = new Bike("Hero", "Red", 60000, 50);

 const d1 = {
      model: 'Honda', 
      color: 'Blue', 
      Price: 450000, 
      mileage: 40,
      buyingyear: 2018, 
      age: function() {
       return 2023 - this.buyingyear }
  };
console.log(d1.age());
console.log(new Date().getDay()); // Sunday to Saturday takes as 0 - 6 (0 is Sunday,1 is Monday ...)

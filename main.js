let prompt = require("prompt-sync")({sigint: true});
 let cost_product = prompt("Cost product: ");
 let location = prompt("For US press 5$  for Europe 7$ for Canada 3$ for other places 9$");

 cost_product = parseFloat(cost_product);
 location= parseFloat(location);

 if (location==5){
     location=5;
    let total = cost_product + location;
    console.log(`You have to pay  ${total}$, ${cost_product}$ for the product   ${location}$ for shipping cost `);
 }
  else if (location==7){
      location=7;
      let total = cost_product + location;
      console.log(`You have to pay  ${total}$, ${cost_product}$ for the product   ${location}$ for shipping cost`);
  }
 else if (location==3){
     location==3;
     let total = cost_product + location;
     console.log(`You have to pay  ${total}$, ${cost_product}$ for the product   ${location}$ for shipping cost`);
 }
 else if (location==9){
     location==9;
     let total = cost_product + location;
     console.log(`You have to pay  ${total}$, ${cost_product}$ for the product   ${location}$ for shipping cost`);
 }




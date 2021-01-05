let prompt = require("prompt-sync")({sigint: true});
 let costProduct = prompt("Cost product: ");
 let location = prompt("For US press 5$  for Europe 7$ for Canada 3$ for other places 9$  ");

 costProduct = parseFloat(costProduct);
 location= parseFloat(location);

 if (location==5){
     location=5;
    let total = costProduct + location;
    console.log(`You have to pay  ${total}$, ${costProduct}$ for the product   ${location}$ for shipping cost`);
 }
  else if (location==7){
      location=7;
      let total = costProduct + location;
      console.log(`You have to pay  ${total}$, ${costProduct}$ for the product   ${location}$ for shipping cost`);
  }
 else if (location==3){
     location==3;
     let total = costProduct + location;
     console.log(`You have to pay  ${total}$, ${costProduct}$ for the product   ${location}$ for shipping cost`);
 }
 else if (location==9){
     location==9;
     let total = costProduct + location;
     console.log(`You have to pay  ${total}$, ${costProduct}$ for the product  ${location}$ for shipping cost`);
 }


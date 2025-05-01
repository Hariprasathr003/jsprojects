const users1 =[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]

// {
//   1: { id: 1, name: "Alice" },
//   2: { id: 2, name: "Bob" }
// }

const ans11=users1.reduce((acc,cv)=>{
    acc[cv.id]=cv
    return acc;
},{})
console.log(ans11)

const users2 = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 27 },
  { id: 4, name: "David", age: 22 }
];

//  Get all users older than 25 and return only their names

const ans=users2.filter(val=>val.age>25).map(val1=>val1.name)
console.log(ans)

//  Add a role: "user" property to all users

const ans22=users2.map((val)=>({...val,role:"user"}))
console.log(ans22)

// Find the user whose name is "Charlie" and update age to 29

const ans33=users2.map((val)=>val.name==="Charlie"?{...val,age:29}:val)
console.log(ans33)

// Create a new array with only the id and name fields (no age)

const ans44=users2.map(val => ({ id: val.id, name: val.name }));
console.log(ans44)

// Calculate the average age of users

const ans55=users2.reduce((acc,cv)=>(acc + cv.age),0)/users2.length
console.log(ans55)


const users3 = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 24 },
  { id: 4, name: "David", age: 22 }
];

//  Delete a user with a specific id (e.g., id = 2)

const ans6=users3.filter((val)=> {
    if(val.id === 2)
     val.delete
     else if(val){
         return val
     }
  } )
console.log(ans6)

// const ans6 = users3.filter(val => val.id !== 2);
// console.log(ans6);



const users4 = [
  { id: 1, name: "A", age: 25 },
  { id: 2, name: "B", age: 30 },
  { id: 3, name: "C", age: 25 },
  { id: 4, name: "E", age: 30 },
  { id: 5, name: "D", age: 28 }
];

//  Group users by age (ex: all users with same age together)

const ans7=users4.reduce((acc,cv)=>{
    acc[cv.age]=acc[cv.age]||[]
    acc[cv.age].push(cv)
    return acc
}
,{})
console.log(ans7)

// Check if all users are older than 18

const ans8=users4.every(val=>val.age>18)
console.log(ans8)

// Check if there is any user younger than 21

const ans9=users4.some(val=>val.age<21)
console.log(ans9)

// Get all user names sorted alphabetically
const ans10=users4.map((val)=>val.name).sort((a,b)=>a.toUpperCase().localeCompare(b.toUpperCase()))
console.log(ans10)



const cart = [
    {
      id: 1,
      user: "Alice",
      items: [
        { name: "Shoes", price: 1200 },
        { name: "T-shirt", price: 800 }
      ]
    },
    {
      id: 2,
      user: "Bob",
      items: [
        { name: "Watch", price: 2500 },
        { name: "Cap", price: 400 }
      ]
    }
  ];
  
  // Extract all product names from a cart
  
  
  const ans1=cart.flatMap(val=>val.items.map(val=>val.name))
  console.log(ans1)
  
  //  Calculate total amount of all items in cart
  
  
  const ans2=cart.reduce((acc,val)=>{
      const total=val.items.reduce((sum,val)=>sum + val.price,0)
      return acc +total
  },0
  )
  console.log(ans2)
  
  
  //   Add a totalAmount field inside each cart user
  
  const ans3=cart.map(val=>{
      const total=val.items.reduce((acc,cv)=>acc+cv.price,0)
      return {...val,total}
  })
  console.log(ans3)
  
  //   Return all users who bought something above ₹2000 total
  
  const ans4=cart.filter(val=>{
      const total=val.items.reduce((acc,cv)=>acc+cv.price,0)
      return total>2000
  }).map(val=>val.user)
  console.log(ans4)


  const aboveans=cart.flatMap(val=>val.items.filter(val=>val.price>1000))
  console.log(aboveans)
  
  
  const answer=cart.flatMap(val=>val.items).reduce((acc,cv)=>{
      if(cv.price<800)
      acc.cheap.push(cv)
      else if(cv.price<1200)
      acc.medium.push(cv)
      else
      acc.high.push(cv)
      return acc
  },{cheap:[],medium:[],high:[]})
  
  console.log(answer)
  
  
  
  
  
    
  
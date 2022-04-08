const {produce} = require("immer")

const test1 = ["a", "b", "c", "d"];

const final = ["a", "7", "d"];

// const test2 = test1.splice(1,2,'7')

const test3 = [ ...test1.slice(0,1), '7' , ...test1.slice(3)]


const test4 = produce(test1, item => {
    item.splice(1,2,'7')
})

const todolist=[
    {
        title:"test1_title",
        done:true
    },
    {
        title:"test2_title",
        done:false
    }
]

const finallist=[
    {
        title:"test1_title",
        done:true
    },
    {
        title:"test2_title",
        done:true
    },
    {
        title:"test3_title",
        done:false
    }
]

const test6 = produce(todolist, item => {
    item.splice(1,1,{
        title:"test2_title",
        done:true
    })
    item.splice(2,0,{
        title:"test3_title",
        done:false
    })
})

const test7 = produce(todolist, item => {
    item[1].done=true;
    item.push(
        {title:"test3_title",
        done:false}
    );
})

const test5 = [
    ...todolist.map((todo,index)=>{

        return index===0 ? todo : {...todo, done:true};
        // if(index===0) {
        //     return todo
        // }else if(index===1) {
        //     return{
        //         ...todo,
        //         done:true
        //     }
        // }
    }),
    {
        title:"test3_title",
        done:false
    }
]

console.log(test1)
// console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)
console.log(test6)
console.log(test7)
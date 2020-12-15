let salaries = [10000,20000,40000,70000,80000,100000];

let high_salary = salaries.filter( new_sal =>{
    if(new_sal>40000) return true;
    return false;
});

console.log(high_salary);
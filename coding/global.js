function foo() {
  //x is global to the function foo, which means it is accessible
  //from anywhere within the function but not outside of the function
  x = 2
  {
    x = 4
  }
  console.log(x)
}

foo()

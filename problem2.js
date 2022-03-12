var limit = 50;

for(var i=2; i<=limit; i++)
  {
    var count = 0;
    for(var j=1; j<=i; j++)
      {
       if(i%j==0)
        {
          count++;
        } 
      }
    if(count == 2)
    {
      console.log(i, "is prime")
    }
    
  }

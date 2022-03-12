for(var month=1 ; month<=12; month++)
  {
    var n_days = 31;
    if(month == 2)
    {
      n_days = 28;
    }
    else if(month == 4 || month == 6 || month == 9 || month == 11)
    {
      n_days = 30;
    }
    for(var j=1; j<=n_days; j++)
      {
        console.log(j+"-"+month);
      }
  }
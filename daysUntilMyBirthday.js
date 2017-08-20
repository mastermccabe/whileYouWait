function daysUntilMyBirthday(daysUntilMyBirthday){


    if (daysUntilMyBirthday >= 30){
      console.log(daysUntilMyBirthday +" days until my birthday. Such a long time... :(");
    }
    else if (daysUntilMyBirthday < 30 && daysUntilMyBirthday >= 5){
      console.log(daysUntilMyBirthday +" Days until my birthday!");
    }
    else if (daysUntilMyBirthday < 5 && daysUntilMyBirthday >= 1){
      console.log(daysUntilMyBirthday +" DAYS UNTIL MY BIRTHDSAY!");
    }
    else if (daysUntilMyBirthday ==0){
      console.log("Its your birthday - Party!");
    }

}
